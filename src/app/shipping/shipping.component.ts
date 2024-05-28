import { Component, OnInit } from '@angular/core';
import {NgIf, NgFor, CurrencyPipe, AsyncPipe} from '@angular/common';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, AsyncPipe],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.shippingCosts =  this.cartService.getShippingPrices();
  }
}
