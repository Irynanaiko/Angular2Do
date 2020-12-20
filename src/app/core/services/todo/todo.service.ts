import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoData = new BehaviorSubject<Array<Todo>>(null);

  private url = environment.url + '/todos';

  constructor(private http: HttpClient) {
    this.getTodoData();
  }

  private getTodoData(): void {
    this.http.get<Array<Todo>>(this.url).subscribe((data) => {
      this.todoData.next(data);
    });
  }

  delTodo(todoId: number): void {
    this.http.delete(`${this.url}/${todoId}`).subscribe(() => {
      this.getTodoData();
    });
  }

  addTodo(newTodo: Todo): void {
    this.http.post(this.url, newTodo).subscribe(() => this.getTodoData());
  }

  updateTodo(todoId: number, newTodo: Todo): void {
    this.http
      .put(`${this.url}/${todoId}`, newTodo)
      .subscribe(() => this.getTodoData());
  }
}
