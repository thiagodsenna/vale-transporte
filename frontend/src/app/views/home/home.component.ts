import { Component } from '@angular/core';
import { HeaderData } from 'src/app/components/template/header/header-data.model';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  headerData: HeaderData = {
    title: 'Início',
    icon: 'home',
    routeUrl: '/home'
  }

  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {
    this.headerService.headerData = this.headerData
  }

  public redireciona(): void {
    this.router.navigate(['/products']);
  }
}
