import { Component } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';

import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductAlertsComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
