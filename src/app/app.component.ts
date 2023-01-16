import { Component } from '@angular/core';
import { FRUITLIST } from './constants';
import { FruitData } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fruit_store';

  fruitList : FruitData[] = []
  

  increase(fruitName : string){
    const fruit = FRUITLIST.filter(v => fruitName == v.name)

    if (this.fruitList.includes(fruit[0])){
      var index = this.fruitList.indexOf(fruit[0])
      var count = this.fruitList[index].count || 0
      this.fruitList[index].count = count + 1
      console.info("includes")

    } else {
      fruit[0].count=1
      this.fruitList.push(fruit[0])
    }

  }

  decrease(fruitName : string){
    const fruit = FRUITLIST.filter(v => fruitName == v.name)

    if (this.fruitList.includes(fruit[0])){
      var index = this.fruitList.indexOf(fruit[0])
      var count = this.fruitList[index].count || 0
      this.fruitList[index].count = count - 1
      console.info(count)
      if ( count-1 <= 0 || undefined) {
        console.info("less than 1")
        delete this.fruitList[index]
      }
      console.info("includes")
    }


  }

}
