import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public firstName;
  public lastName;
  public email;

  processForm() {
    event.preventDefault();
    console.log(`User ${this.firstName} created`);
    window.location.href = 'welcome';
  }
  
  handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

  handleLastNameValue(event) {
    this.lastName = event.target.value;
  }

  handleEmailValue(event) {
    this.email = event.target.value;
  }

}
