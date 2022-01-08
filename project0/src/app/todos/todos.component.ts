import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo.model'
import { TodoDataService } from '../todo-data.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosObject: TodoModel = new TodoModel()
  todosObjects !:any;
  constructor(private api: TodoDataService) {
  }

  ngOnInit(): void {
    this.getAllTodos()
  }
  getAllTodos() {
    this.api.getTodos().subscribe(res => {
      this.todosObjects = res;
    })
  }
}
