import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-competences-list',
  templateUrl: './competences-list.component.html',
  styleUrls: ['./competences-list.component.scss']
})
export class CompetencesListComponent  {

  constructor() { }
  disabled = false;

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
    $event.preventDefault();
  
    }
    
    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
    $event.preventDefault();
   
    }
    }
  
 



 

  
    

}
