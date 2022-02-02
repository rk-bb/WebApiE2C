import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-recent-message',
  templateUrl: './recent-message.component.html'
})
export class RecentmessageComponent {
  public config: PerfectScrollbarConfigInterface = {};
  constructor() { }

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:00 AM'
    },
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:00 AM'
    },
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      time: '9:30 AM'
    }
  ];
}