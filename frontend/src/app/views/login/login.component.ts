import { Component } from '@angular/core';
import { HeaderData } from 'src/app/components/template/header/header-data.model';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';
import { ProductService } from '../../components/product/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  headerData: HeaderData = {
    title: 'Login',
    icon: 'login',
    routeUrl: ''
  }

  public usuario?: string;
  public senha?: string;

  constructor(
    private headerService: HeaderService, 
    private router: Router,
    private productService: ProductService) {
    this.headerService.headerData = this.headerData
  }

  public login(): void {
    if (!this.usuario || !this.senha) {
      this.productService.showMessage('Usuário ou senha inválidos!', true);
    }
    else {
      this.router.navigate(['/home']);
    }
  }
}
