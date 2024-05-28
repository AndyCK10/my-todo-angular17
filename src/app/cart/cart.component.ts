import { Component } from '@angular/core';
import {NgIf, NgFor, CurrencyPipe} from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  form = new FormGroup({
    name: new FormControl('Nancy', Validators.minLength(2)),
    address: new FormControl('Drew'),
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  get first(): any {
    return this.form.get('name');
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
