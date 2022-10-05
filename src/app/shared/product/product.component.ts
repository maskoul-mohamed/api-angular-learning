import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!:Product
  constructor() { }

  ngOnInit(): void {
  }

  roundNumber(nomberOfStars: number){
    return Math.round(nomberOfStars)
  }

  roundNumberArray(nomberOfStars: number){
    let stars = []
    let roundNumberOfStars = Math.round(nomberOfStars);
    for(let i = 0; i < roundNumberOfStars; i++){
      stars.push("1")
    }
    return stars;
  }
}
