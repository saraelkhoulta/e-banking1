import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { AuthentificationService } from '../login/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  //public uri:string="http://localhost:9000/contrat-service"
  public uri: string = 'http://localhost:8800';
  constructor(private http: HttpClient, private authService: AuthentificationService) {}
  getAllOffres() {
    return this.http.get(this.uri + '/Abonnes/');
  }
  getRessource(url) {
    return this.http.get(url);
  }

  // deleteRessource(url){
  //   let header=new HttpHeaders({'authorization':this.authService.jwt});
  //   return this.http.delete(url,{headers:header});
  // }
  PostRessource(url, data) {
    let header = new HttpHeaders({ authorization: this.authService.jwt });
    return this.http.post(url, data, { headers: header });
  }
}
