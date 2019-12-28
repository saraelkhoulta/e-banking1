import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../login/authentification.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  Erreurmessage: string = null;
  Succesmessage: string = null;

  ngOnInit() {}

  constructor(private authService: AuthentificationService, private router: Router) {}

  onRegister(f: NgForm) {
    var Data = f.value;
    console.log(' dataa ' + JSON.stringify(Data));
    this.authService.register(Data).subscribe(
      resp => {
        console.log(' resp ' + JSON.stringify(resp));
        this.Succesmessage = ' Un email de confirmation a été envoyé vers votre adresse email.';
        f.resetForm();
      },
      err => {
        console.error('type d erreur ' + JSON.stringify(err));
        if (err.status === 0) this.Erreurmessage = ' Veuillez réessayer plus tard !';
        // si serveur tombe en panne
        else this.Erreurmessage = err.error.message; // sinon on affiche l'erreur recu du microservice
      }
    );
  }
}
