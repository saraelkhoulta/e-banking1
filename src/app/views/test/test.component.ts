import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../login/authentification.service';
import { TestService } from './test.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  categories;

  constructor(private authService: AuthentificationService, private testService: TestService, private router: Router) {}

  ngOnInit() {
    this.onGetAllOffres();
  }
  onGetAllOffres() {
    this.testService.getAllOffres().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  // OnDeleteOffr(cat){
  //   let c=confirm("Etes vous sure de vouloir supprimer ");
  //   if(!c) return;
  //   this.testService.deleteRessource(this.testService.uri+"/Offres/"+cat.idOffre)
  //   .subscribe(data=>{
  //     this.onGetAllOffres();
  //   },err=>{
  //     console.log(err);
  //   });
  // }
  onSaveOffr(data) {
    console.log('data ' + JSON.stringify(data));
    let url = this.testService.uri + '/Abonnes/Individu/';
    this.testService.PostRessource(url, data).subscribe(
      data => {
        this.onGetAllOffres();
      },
      err => {
        console.log(err);
      }
    );
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }
  isBO() {
    return this.authService.isBO();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  logOut() {
    return this.authService.logOut();
  }
}
