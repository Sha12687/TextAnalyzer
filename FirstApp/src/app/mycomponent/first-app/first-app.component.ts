import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
   todos:Todo[];
   localItem?:string
  constructor() {
  this.localItem!= localStorage.getItem("todos");
  if(this.localItem==null)
    this.todos=[ ]
    else{
      this.todos=JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  DeleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
console.log(todo);
}
addTodo(todo:Todo){
  this.todos.push();
  localStorage.setItem("todos",JSON.stringify(this.todos));
console.log(todo);
}
}