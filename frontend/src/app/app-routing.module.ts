import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},{
  path: "home",
  component: HomeComponent
},{
  path: "colaboradores",
  component: ProductCrudComponent
},{
  path: "colaboradores/detalhes/:id",
  component: ProductUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
