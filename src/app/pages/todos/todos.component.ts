import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 
  todoList: Array<Todo>;

  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
     this.getTodoData();
  }

  private getTodoData(): void {
    this.todoService.getTodoData().subscribe((data: Array<Todo>)  => {
      this.todoList = data;
    });
  }

}
