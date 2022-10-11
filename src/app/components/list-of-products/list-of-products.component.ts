import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {
  products:any = []
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((resp:any)=>{
        this.products = resp.result
    })
  }
}
