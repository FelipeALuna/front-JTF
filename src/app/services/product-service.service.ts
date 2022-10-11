import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private url: string = 'https://dev57782.service-now.com/api/now/table/x_736858_jtfstore_produtos'
  private headers:any = {headers:{Authorization: 'Basic '+btoa('Integracao_JTF'+':'+'91070997C@ssia') }}
  constructor(private HttpClient: HttpClient) {

  }
  registerProduct() {
    return this.HttpClient.post(this.url,{},this.headers);
  }
  getAllProducts(){
    return this.HttpClient.get(this.url,this.headers);
  }
}
