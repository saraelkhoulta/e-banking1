import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoCommunication } from '../../collections/TodoCommunication';
import { User } from '../../collections/User';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
  private url = 'http://localhost:2403/user';

  public user: User = { nom: '', prenom: '', id: 0 };
  users = [];
  status: { isOpen: boolean } = { isOpen: false };
  ngOnDestroy() {
    this.status.isOpen = false;
  }
  change(value: boolean): void {
    this.status.isOpen = value;
  }
  constructor(private http: Http, private todoCom: TodoCommunication) {}

  ngOnInit() {
    this.todoCom.updateTodoStream.subscribe((user: User) => {
      this.user.id = user.id;
      this.user.nom = user.nom;
      this.user.prenom = user.prenom;
    });
    this.loadTodos();
    this.todoCom.newTodoStream.subscribe(p => this.loadTodos());
  }

  doSubmit(user: User) {
    console.log(user);
    if (user.id == 0) this.http.post(this.url, user).subscribe(response => this.todoCom.newTodoCom());
    else this.http.put(this.url + '/' + user.id, user).subscribe(response => this.todoCom.newTodoCom());
  }
  doDelete(user) {
    this.http.delete(this.url + '/' + user.id).subscribe(response => this.loadTodos());
  }

  doUpdate(user) {
    this.todoCom.updateTodoCom(user);
  }

  private loadTodos() {
    this.http.get(this.url).subscribe(response => (this.user = response.json()));
  }
}
