import { Component } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MotsclesService } from 'src/app/servies/motscles.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-mots-cles-list',
  templateUrl: './mots-cles-list.component.html',
  styleUrls: ['./mots-cles-list.component.scss']
})
export class MotsClesListComponent {
  constructor( private service : MotsclesService, private modalservice:NgbModal)
  {
    
  }
  closeResult: string = '';
disabled = false;

beforeChange($event: NgbPanelChangeEvent) {
  if ($event.panelId === 'preventchange-2') {
  $event.preventDefault();

  }
  
  if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
  $event.preventDefault();
  this.service.refreshList();
  }
  }

  open(content:any) {
    this.modalservice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}

