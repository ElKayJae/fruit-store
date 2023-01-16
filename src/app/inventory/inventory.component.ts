import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FRUITLIST } from '../constants'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  // used as event triggers for app component
  @Output()
  onIncrement = new Subject<string>()

  @Output()
  onDecrement = new Subject<string>()

  fruitList = FRUITLIST

  //triggers the Output() events
  increaseCount(token: string){
    this.onIncrement.next(token)
    console.info(token)
  }
  
  decreaseCount(token: string){
    this.onDecrement.next(token)
    console.info(token)
  }

  


}
