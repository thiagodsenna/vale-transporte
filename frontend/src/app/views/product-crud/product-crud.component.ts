import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from 'src/app/components/template/header/header-data.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  headerData: HeaderData = {
    title: 'Colaboradores',
    icon: 'person',
    routeUrl: '/colaboradores'
  }
  
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = this.headerData
  }

  ngOnInit(): void {}

}
