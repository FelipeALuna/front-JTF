import { ProductServiceService } from './services/product-service.service';
import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JTF-Store';
  constructor(private productService: ProductServiceService){

  }

  teste = ()=>{

   this.productService.getAllProducts().subscribe((resp)=>{
    console.log(resp);
   })
}

}
