import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  newTodoForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  todo: Todo;
  constructor(private fb: FormBuilder, private bsmodalRef: BsModalRef) {}

  ngOnInit(): void {
    this.createNewTodoForm();
  }

  get titleControl(): any {
    return this.newTodoForm.get('title') as FormControl;
  }

  get priorityControl(): any {
    return this.newTodoForm.get('priority') as FormControl;
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.newTodoForm.invalid) {
      return;
    }

    this.isSubmit = false;

    this.save(this.newTodoForm.value);
    this.modalHide();
    // this.newTodoForm.reset();
    // this.setDefaultValues();
  }

  modalHide(): void {
    this.bsmodalRef.hide();
  }

  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [
        this.todo?.title || null,
        [Validators.required, Validators.minLength(3)],
      ],
      description: [this.todo?.description || null],
      isDone: [this.todo?.isDone || false],
      priority: ['low'],
      id: [this.todo?.id || null],
    });
  }

  private save(newTodo: Todo): void {}

  // private setDefaultValues(): void {
  //   this.newTodoForm.value.isDone = false;
  //   this.newTodoForm.controls['priority'].setValue('low');
  // }
  // private resetTodoForm(): void {
  //   this.newTodoForm.get('title').reset();
  //   this.newTodoForm.get('description').reset();

  // }
}
