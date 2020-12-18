import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoData: Array<Todo> = TODO_DATA;

  constructor() { }

  // getTodoData(): Array<Todo> {
  //   return this.todoData;
  // } 

  getTodoData(): Observable<Array<Todo>> {
    return new Observable((observer) => {
      observer.next(this.todoData);
      observer.complete();
    });
  } 
}

const TODO_DATA = 
[{
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
