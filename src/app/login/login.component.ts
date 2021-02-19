import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private fb:FormBuilder,private router:Router, private toastr:ToastrService,private spinner: NgxSpinnerService) { }
loginForm :any;
forgetPassForm:any;
forgetUserForm:any;
inputType=true;
inputTypePass = true
login:boolean = true;
isForgetPass:boolean = false;
isForgetUser:boolean = false;
inputTypeForgetPass:boolean =true
display:string ="none"
  ngOnInit(): void {

    this.initializeForm();
  }


  initializeForm(){
    this.loginForm =  this.fb.group({
      email : [null, [Validators.required,Validators.email]],
      password : [null, Validators.required],
    })
  }
  onForgetPass(){
    this.forgetPassForm = this.fb.group({
      email : [null,[Validators.required,Validators.email]]
    })
  }

  onForgetUser(){
    this.forgetUserForm = this.fb.group({
      email : [null, [Validators.required,Validators.email]]
    })
  }
  showUser(){
    this.inputType=!this.inputType;
  }

  showPassword(){
    this.inputTypePass=!this.inputTypePass;
  }
  // For Forget pass
  showForgetPassword(){
 this.inputTypeForgetPass=!this.inputTypeForgetPass;
  }
  onForgetPassword(){
    this.onForgetPass()
    this.isForgetUser = false;
    this.login = false;
    this.isForgetPass = true;

  }
onForgetUserName(){
  this.onForgetUser();
  this.isForgetUser = true;
  this.login = false;
  this.isForgetPass = false;
}
  onSubmit(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    if(this.loginForm.invalid){
      this.toastr.error("Please input email and password")
    }else{
      this.router.navigate(['/dashboard'])
    }
    console.log(this.loginForm.value);
  }
  onSubmitForgetPass(){
    if(this.forgetPassForm.invalid){
       this.toastr.error('Please input email')
    }
  }
  onSubmitForgetUser(){
    if(this.forgetUserForm.invalid){
      this.toastr.error('Please input email')
   }
  }
}
