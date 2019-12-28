import { Component, OnInit } from '@angular/core';
import { TodoCommunication } from '../../collections/TodoCommunication';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from '../../collections/Abonne';
import { Compte } from '../../collections/Compte';
import { Carte } from '../../collections/Carte';
import { Operation } from '../../collections/operation';
import { from } from 'rxjs';

@Component({
  selector: 'app-releve-abonne',
  templateUrl: './releve-abonne.component.html',
  styleUrls: ['./releve-abonne.component.css']
})
export class ReleveAbonneComponent implements OnInit {
  id: string;
  ab: Compte;
  op: Operation[];

  constructor(private route: ActivatedRoute, private router: Router, private benService: TodoCommunication) {}

  ngOnInit() {
    this.ab = new Compte();
    this.id = this.route.snapshot.params['id'];

    this.benService.getoper(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.op = data;
      },
      error => console.log(error)
    );
  }
}
