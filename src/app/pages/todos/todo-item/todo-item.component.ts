import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() isEdit = new EventEmitter<Todo>();

  isDescriptionShow = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleDescription(): void {
    this.isDescriptionShow = !this.isDescriptionShow;
  }

  delTodo(todoId: number): void {
    this.todoService.delTodo(todoId);
  }

  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.todoService.updateTodo(this.todo.id, this.todo);
  }

  editTodo(): void {
    this.isEdit.emit(this.todo);
  }
}
