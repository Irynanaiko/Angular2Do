import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  isDescriptionShow = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleDescription(): void {
    this.isDescriptionShow = !this.isDescriptionShow;
  }

  delTodo(todoId: number): void {
    this.todoService.delTodo(todoId);
  }
}
