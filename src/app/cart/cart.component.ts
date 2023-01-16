import { Component, Input } from '@angular/core';
import { FruitData } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  // to be overriden from app component
  fruits : FruitData[] = []


}
