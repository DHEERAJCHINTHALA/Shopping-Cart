import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = 'http://localhost:52356/api/Cart';
  constructor(private httpclient: HttpClient) {}

  GETALLITEMS() {
    return this.httpclient.get(this.cart);
  }
  GETSINGLE(ID: any) {
    return this.httpclient.get(this.cart + '/' + ID);
  }
  INSERTDATA(DATA: any) {
    return this.httpclient.post(this.cart, DATA);
  }
}
