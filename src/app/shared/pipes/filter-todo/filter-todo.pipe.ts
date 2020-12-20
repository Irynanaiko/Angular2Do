import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(value: Array<Todo>, search: string): Array<Todo> {
    if (!search) {
      return value;
    }
    return value.filter((el: Todo) => {
      return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }
}
