import { Component, OnInit } from '@angular/core';
import { TodoCommunication } from '../../collections/TodoCommunication';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from '../../collections/Abonne';
import { Compte } from '../../collections/Compte';
import { Carte } from '../../collections/Carte';

@Component({
  selector: 'app-modifier-carte-abonne',
  templateUrl: './modifier-carte-abonne.component.html',
  styleUrls: ['./modifier-carte-abonne.component.css']
})
export class ModifierCarteAbonneComponent implements OnInit {
  id: string;

  cartes: Carte;

  constructor(private route: ActivatedRoute, private router: Router, private comService: TodoCommunication) {}

  ngOnInit() {
    this.cartes = new Carte();

    this.id = this.route.snapshot.params.idCarte;

    this.comService.getCarte(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.cartes = data;
      },
      error => console.log(error)
    );
  }

  updatecarte() {
    this.comService.updatecar(this.id, this.cartes).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.cartes = new Carte();
    this.gotoList();
  }

  onSubmit() {
    this.updatecarte();
  }

  gotoList() {
    this.router.navigate(['/carte']);
  }
}
