import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    event.preventDefault();
    console.log(`Event created`);
    window.location.href = 'user-events';
  }

}
