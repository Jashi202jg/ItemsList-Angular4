import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemsList = ['Volvo','Honda','Toyota'];
  
  newItem = "";
  add(){
    if(this.newItem != ""){
      this.itemsList.push(this.newItem);
      this.newItem = "";
    }
  }

  del(index){
    this.itemsList.splice(index, 1);
  }
}
