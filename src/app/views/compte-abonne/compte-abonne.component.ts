import { Component, OnInit } from '@angular/core';
import { TodoCommunication } from '../../collections/TodoCommunication';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from '../../collections/Abonne';
import { Compte } from '../../collections/Compte';
import { Carte } from '../../collections/Carte';

@Component({
  selector: 'app-compte-abonne',
  templateUrl: './compte-abonne.component.html',
  styleUrls: ['./compte-abonne.component.css']
})
export class CompteAbonneComponent implements OnInit {
  ab: Abonne;
  comptes: Compte[];
  id: string;

  constructor(private route: ActivatedRoute, private compService: TodoCommunication, private router: Router) {}

  ngOnInit() {
    this.ab = new Abonne();
    //this.id = this.ab.idAbonne;
    this.id = 'ab';

    this.compService.getComptes(this.id).subscribe(
      (data: Compte[]) => {
        console.log(data);
        this.comptes = data;
      },
      error => console.log(error)
    );
  }

  releveComp(id: string) {
    this.router.navigate(['releve', id]);
  }

  affCarte(id: string) {
    this.router.navigate(['carte', id]);
  }
}
