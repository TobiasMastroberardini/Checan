import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteButtonComponent } from "../delete-product-button/delete-product-button.component";
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [HttpClientModule, DeleteButtonComponent, ProductCardComponent, CommonModule]
})
export class CartComponent {
  cartList!: Observable<Product[]>;
  isOpen = false;

  constructor(private cart: ProductCartService) {
    this.cartList = cart.cartList.asObservable();
  }

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
