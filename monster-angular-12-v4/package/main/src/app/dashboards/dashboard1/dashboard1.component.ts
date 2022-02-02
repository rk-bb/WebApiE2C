import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';



@Component({
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {

    public config: PerfectScrollbarConfigInterface = {};

    subtitle: string;
    constructor() {
        this.subtitle = 'This is some text within a card block.';   
    }



    ngAfterViewInit() { }
}
