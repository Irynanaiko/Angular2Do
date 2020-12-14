import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // @Input() item: any;
  @Input() todoList: Array<Todo>;
  constructor() { }

  ngOnInit(): void {
  }

}
