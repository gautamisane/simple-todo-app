import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:any[]=[];
  title = 'angular-tut';
  dynamic = 'Hello';
  getVal() {
    return "code step by step";
  }
  num = 100;
  addTask(item: string)
   {
    this.list.push({id:this.list.length,name:item}); //object passed in push
    console.warn(this.list);

  }

  removeTask(id: number)
  {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);

  }






}
