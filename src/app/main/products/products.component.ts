import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enw-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  loading: boolean;
  products: Product[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.loading = true;
    this.http
      .get(`http://api.essentialnordicwalking.com.au/api/products`)
      .map(res => res.json())
      .subscribe(
      data => {
        this.products = data;
      },
      error => {
      }, () => this.loading = false);
  }

}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  price: number;
}
