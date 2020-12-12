import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;
  constructor() { }

  ngOnInit(): void {
      this.todoList = TODO_DATA;
  }

}

const TODO_DATA = [{
  id: 1,
  title: 'Learn JS',
  description: '',
  isDone: true
}, {
  id: 2,
  title: 'Learn Angular',
  description: 'Test description text',
  isDone: false
}
];