
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { ProductComponent } from './components/product/product.component';
import {CommonModule} from '@angular/common';
import {} from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
