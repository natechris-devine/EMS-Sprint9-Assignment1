import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toRegister() {
    window.location.href = 'register';
  }

  toLogin() {
    window.location.href = 'user-events';
  }

}
