import { Component, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})

/*@NgModule({
  declarations: [
    MotsclesComponent
  ],  

  exports: [
    MotsclesComponent
  ]
  
})*/
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Salut Admin';
  }

  ngAfterViewInit() {}
}
