import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl = 'http://localhost:8800/Comptes/allComptes';
  private baseUrl1 = 'Localhost:8800/Comptes/DebitCredit';
  private baseUrl2 = 'http://localhost:8080/carte';

  constructor(private HttpClient: HttpClient) {}

  public getComptes(id: string) {
    return this.HttpClient.get(`${this.baseUrl}/${id}`);
  }

  public updatecar(id: string, value: any): Observable<Object> {
    return this.HttpClient.put(`${this.baseUrl}/${id}`, value);
  }

  public getoper(id: string) {
    return this.HttpClient.get(`${this.baseUrl1}/${id}`);
  }

  public getCarte(id: string) {
    return this.HttpClient.get(`${this.baseUrl2}/${id}`);
  }
}
