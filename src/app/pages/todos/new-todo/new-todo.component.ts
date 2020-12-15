import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @ViewChild('newTodoForm') newTodoForm: FormGroup;
 
  title: string; 
  description: string;
  isSubmit = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmit = true;
    if (this.newTodoForm.invalid) {
      return;
    }
    
    this.isSubmit = false;
    console.log(this.newTodoForm.value);

    this.newTodoForm.reset();
  }

}
