import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from './authentification.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  Erreurmessage: string = null;
  Message: string = null;

  ngOnInit() {}

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let confirmationToken = params['token'];
      if (confirmationToken != null) {
        console.log(confirmationToken); // Print the parameter to the console.
        this.authService.ConfirmRegister(confirmationToken).subscribe(resp => {
          console.log('Resp ' + JSON.stringify(resp));
          console.log('body ' + resp['body']);
          var resultat = resp['body'];
          if (resultat) this.Message = ' Votre compte a été activé';
          else if (!resultat) this.Message = ' Erreur lors de validation de votre compte';
        });
      }
    });
  }

  change(): void {
    this.router.navigateByUrl('register');
  }

  onLogin(f: NgForm) {
    var Data = f.value;
    console.log(' dataa ' + JSON.stringify(Data));
    this.authService.login(Data).subscribe(
      resp => {
        console.log(' resp ' + JSON.stringify(resp));
        let jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        console.log(resp);
        f.resetForm();

        //   this.router.navigateByUrl("/test");
      },
      err => {
        console.error('err ' + JSON.stringify(err.status));
        if (err.status === 403) this.Erreurmessage = ' Assurez vous de vos identifiants de connexion!';
        else if (err.status === 0) this.Erreurmessage = ' Veuillez réessayer plus tard!';
      }
    );
    f.resetForm();
  }
}
