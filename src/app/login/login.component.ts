import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private fb:FormBuilder,private router:Router) { }
loginForm :any;
inputType=true;
inputTypePass=true

  ngOnInit(): void {

    this.initializeForm()
  }

  initializeForm(){
    this.loginForm =  this.fb.group({
      email : [null, Validators.required],
      password : [null, Validators.required],
    })
  }

  showUser(){
    this.inputType=!this.inputType;
  }

  showPassword(){
    this.inputTypePass=!this.inputTypePass;
  }
  onSubmit(){
    this.router.navigate(['/dashboard'])
    console.log(this.loginForm.value);

  }
}
