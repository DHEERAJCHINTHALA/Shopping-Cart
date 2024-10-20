import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartdata: any = [];
  finalarr: any = [];
  resultcount: any;
  constructor(private cartservice: CartService) {
    this.count.subscribe((res) => {
      this.resultcount = res;
    });
  }
  cart: any;
  ngOnInit(): void {
    this.cartservice.GETALLITEMS().subscribe((res) => {
      this.cart = res;
    });
  }

  count = new BehaviorSubject(0);
  add(ID: any) {
    let quantity = 1;
    this.cartservice.GETSINGLE(ID).subscribe((res: any) => {
      res.map((res: any) => {
        let FinalData = {
          Id: res.Id,
          Name: res.Name,
          Price: res.Price,
          Image: res.Image,
          Quantity: quantity,
          ItemId: res.Id,
        };
        this.cartdata.push(FinalData);
        this.cartservice.INSERTDATA(FinalData).subscribe();
      });
    });
  }
  inc(ID: any) {
    console.log(ID);
    //Here We Neet to get The Cart Single Record
    this.cartservice.GETSINGLE(ID).subscribe((res: any) => {
      let Data = +res.Quantity;
      //Here We need To Update The Quantity
      console.log(res);
    });
  }
  dec(ID: any) {
    console.log(ID);
  }
}
