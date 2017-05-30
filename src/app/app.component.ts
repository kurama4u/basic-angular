import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Angular", "Javascript", "Typescript"];
  newitem = "";
  pushitem = function(){
    if(this.newitem != ""){
      this.items.push(this.newitem);
      this.newitem = "";
    }
  }
  removeItem = function(index){
    this.items.splice(this.items.indexOf(index), 1);
  }

  // title = 'Server is now Running';
//   obj = {
//     id: '1',
//     name: 'Common Heroes List'
//   }

//   heroes = ['Lina', 'Mirana', 'Slark', 'Juggernaut', 'Tiny'];
//   heyTrue = true;
//   myHero = 'furion';
// 
}
