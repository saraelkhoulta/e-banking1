import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../collections/compte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from '../../collections/Abonne';
import { Compte } from '../../collections/Compte';
import { Carte } from '../../collections/Carte';
import { TodoCommunication } from '../../collections/TodoCommunication';

@Component({
  selector: 'app-carte-abonne',
  templateUrl: './carte-abonne.component.html',
  styleUrls: ['./carte-abonne.component.css']
})
export class CarteAbonneComponent implements OnInit {
  id: string;
  comp: Compte;
  cartes: Carte[];

  constructor(private route: ActivatedRoute, private router: Router, private benService: TodoCommunication) {}

  ngOnInit() {
    this.comp = new Compte();

    this.id = this.route.snapshot.params.id;

    this.benService.getCarte(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.cartes = data;
      },
      error => console.log(error)
    );
  }

  updateCarte(id: string) {
    this.router.navigate(['/updateCarte', id]);
  }
}
