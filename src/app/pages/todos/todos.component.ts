import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;
  search: string;
  modalRef: BsModalRef;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getTodoData();
  }

  createNewTodo(): void {
    const initialState = {
      modalHeader: 'New Todo',
      save: this.addNewTodo.bind(this),
    };
    this.openModal(initialState);
    // this.modalRef = this.modalService.show(
    //   NewTodoComponent,
    //   Object.assign(
    //     {},
    //     {
    //       ignoreBackdropClick: true,
    //       initialState: {
    //         modalHeader: 'New Todo',
    //         save: this.addNewTodo.bind(this),
    //       },
    //     }
    //   )
    // );
  }

  editTodo(todo: Todo): void {
    const initialState = {
      todo,
      modalHeader: 'Edit Todo',
      save: this.updateTodo.bind(this),
    };

    this.openModal(initialState);
  }

  private getTodoData(): void {
    this.todoService.todoData.subscribe((data) => {
      this.todoList = data;
    });
  }

  private addNewTodo(newTodo: Todo): void {
    this.todoService.addTodo(newTodo);
  }

  private updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo.id, todo);
  }

  private openModal(initialState: Partial<any>): void {
    this.modalRef = this.modalService.show(
      NewTodoComponent,
      Object.assign(
        {},
        {
          initialState,
          ignoreBackdropClick: true,
        }
      )
    );
  }
}
