import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SupportService } from './support.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent  {
  form: FormGroup;
  progress: number = 0;

   

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private fileUploadService: SupportService,
    config: NgbProgressbarConfig
  ) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
   }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }
  submitUser() {
    this.fileUploadService.addUser(
      this.form.value.name,
      this.form.value.avatar
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, 1500);
 
      }
    })
  }

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
    $event.preventDefault();
  
    }
    
    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
    $event.preventDefault();
    
    }
    }
  

}
