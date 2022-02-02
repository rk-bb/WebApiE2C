import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MotsclesService } from 'src/app/servies/motscles.service';
import { Motscles } from 'src/app/models/motscles.model';

@Component({
  selector: 'app-mots-cles',
  templateUrl: './mots-cles.component.html',
  styleUrls: ['./mots-cles.component.scss']
})
export class MotsClesComponent implements OnInit {

 Motscles 
  : Motscles = {
    id: 0,
    nom: '',
   
  };
  submitted = false;
  constructor(private service:MotsclesService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  saveMotsCles(): void {
    const data = {
      title: this.Motscles.id,
      description: this.Motscles.nom
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMotsCles(): void {
    this.submitted = false;
    this.Motscles = {
      id: 0,
      nom: '',
      
    };
  }
}
