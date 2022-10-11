import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  image:string ='';
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
    this.image = "background-image:url('https://dev57782.service-now.com/api/now/v1/attachment/"+this.product.imagem+ "/file');background-size: contain;"
    if(this.product.imagem=='')
    this.image="background-image:url('https://www.tcasaatacado.com.br/Content/desktop/images/produto-sem-imagem-1000x1000.jpg');background-size: contain;"
  }

}
