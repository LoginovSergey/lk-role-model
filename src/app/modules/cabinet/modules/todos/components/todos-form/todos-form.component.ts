import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoState } from '../../state/state/todos.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../../models/todos-list.model';
import { Select, Store } from '@ngxs/store';
import { AddTodo, SetSelectedTodo, UpdateTodo } from '../../state/actions/todos.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosFormComponent implements OnInit, OnDestroy {
  @Select(TodoState.getSelectedTodo) selectedTodo!: Observable<Todo>;
  todoForm!: FormGroup;
  editTodo = false;
  private formSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
              private store: Store,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.formSubscription.add(
      this.selectedTodo.subscribe(todo => {
        if (todo) {
          this.todoForm.patchValue({
            id: todo.id,
            userId: todo.userId,
            title: todo.title,
          });
          this.editTodo = true;
        } else {
          this.editTodo = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.editTodo) {
      this.formSubscription.add(
        this.store.dispatch(new UpdateTodo(this.todoForm.value, this.todoForm.value.id)).subscribe(() => {
          this.clearForm();
        })
      );
    } else {
      this.formSubscription.add(
        this.store.dispatch(new AddTodo(this.todoForm.value)).subscribe(() => {
          this.clearForm();
        })
      );
    }
  }

  clearForm(): void {
    this.todoForm.reset();
    this.store.dispatch(new SetSelectedTodo(null));
  }
}
