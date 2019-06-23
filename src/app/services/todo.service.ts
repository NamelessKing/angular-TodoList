import { Injectable } from '@angular/core';
import { Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      {
        id: 1,
        title: 'Todo 1',
        completed: true
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: true
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false
      },
    ];
  }

}
