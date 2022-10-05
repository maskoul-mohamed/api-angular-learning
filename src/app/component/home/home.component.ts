import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }
  productsList : Product[] = [];
  productSubscription : Subscription | undefined;

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts(5).subscribe(
      (data : Product[]) => this.productsList = data
    );
  }


  ngOnDestroy(): void {
      this.productSubscription?.unsubscribe();
  }

}
