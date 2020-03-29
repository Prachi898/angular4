import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-demo',
  templateUrl: './loginpage.html',
  styleUrls: ['./app.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newForm = new FormGroup({
      Name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      Password: new FormControl('',[Validators.required]),
      OtpText : new FormControl('',[Validators.required])
  }  )
  dispName=true;
  dispPsw=true;
  dispOtp=true;
  dispBtn=true;

  display1(){
      this.dispName=false;
      this.dispBtn=false;
  }
  display2(){
      this.dispName=false;
      this.dispPsw=false;
      this.dispBtn=false;
  }
  display3(){
    this.dispName=false;
    this.dispOtp=false;
    this.dispPsw=true;
    this.dispBtn=false;
  }

  validateForm = new FormGroup({
      FirstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
      LastName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  })

}