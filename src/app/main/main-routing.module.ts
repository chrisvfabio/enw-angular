import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/main/home/home.component';
import { AboutComponent } from 'app/main/about/about.component';
import { ServicesComponent } from 'app/main/services/services.component';
import { ProductsComponent } from 'app/main/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'login', component: ProductsComponent },
  { path: 'logout', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
