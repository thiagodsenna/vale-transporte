import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Colaborador } from './colaborador.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'
  baseUrlColaboradores = 'http://localhost:3001/colaboradores'
  
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  readColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.baseUrlColaboradores).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readColaboradorById(id: number): Observable<Colaborador> {
    const url = `${this.baseUrlColaboradores}/${id}`
    return this.http.get<Colaborador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

}
