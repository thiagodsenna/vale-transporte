import { Component } from '@angular/core';
import { Colaborador } from '../colaborador.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {
  
  colaboradores!: Colaborador[]
  colaboradoresDefault!: Colaborador[]
  displayedColumns = ['id', 'nome', 'cargo', 'departamento', 'detalhes'];
  pesquisa!: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.readColaboradores().subscribe(colaboradores => {
      this.colaboradores = colaboradores;
      this.colaboradoresDefault = colaboradores;
    });
  }

  public pesquisaColaborador() {
    this.colaboradores = this.colaboradoresDefault.filter(c => { 
      return c.nome.toUpperCase().includes(this.pesquisa.toUpperCase()) || c.id.toString() == this.pesquisa;
    });
  }

}
