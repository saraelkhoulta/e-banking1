import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoCommunication {
  private newTodo = new Subject<string>();
  private updateTodo = new Subject<User>();

  newTodoStream = this.newTodo.asObservable();
  updateTodoStream = this.updateTodo.asObservable();

  private baseUrl = 'http://localhost:9999/Comptes/allComptes';
  private baseUrl1 = 'http://localhost:9999/Comptes/DebitCredit';
  private baseUrl2 = 'http://localhost:9999/Cartes/all';
  private baseUrl3 = 'http://localhost:9999/Cartes/update';

  constructor(private HttpClient: HttpClient) {}

  newTodoCom() {
    this.newTodo.next('ok');
  }

  updateTodoCom(user) {
    this.updateTodo.next(user);
  }
  public getComptes(id: string) {
    return this.HttpClient.get(`${this.baseUrl}/${id}`);
  }

  public updatecar(id: string, value: any): Observable<Object> {
    return this.HttpClient.put(`${this.baseUrl3}/${id}`, value);
  }

  public getoper(id: string) {
    return this.HttpClient.get(`${this.baseUrl1}/${id}`);
  }

  public getCarte(id: string) {
    return this.HttpClient.get(`${this.baseUrl2}/${id}`);
  }
}
