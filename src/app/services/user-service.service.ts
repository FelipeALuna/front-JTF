import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = 'https://dev57782.service-now.com/api/now/table/x_736858_jtfstore_produtos'
  headers:any = {headers:{Authorization: 'Basic '+btoa('Integracao_JTF'+':'+'91070997C@ssia') }}
  constructor(private HttpClient: HttpClient) {

  }
  registerUser() {
    return this.HttpClient.post(this.url,{},this.headers);

  }
}
