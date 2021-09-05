import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signUpForm: FormGroup;


  ngOnInit() {


    //controls are key value pairs
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl("ashwin@hauskey.com", [Validators.required, Validators.email]),
      'gender': new FormControl('male')

    });



  }

  onSubmit() {
    console.log(this.signUpForm);
  }






}
