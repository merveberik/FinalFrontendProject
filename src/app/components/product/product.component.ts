import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService:ProductService) {} //bir servisi kullanamak içn nesne oluşturmak için dependence enjuction
  //sadece bu clientte kullanmak için privet yaptık
 
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded = true;
    })
  }
}
