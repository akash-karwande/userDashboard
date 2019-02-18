import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 loginForm: FormGroup;
   public user:any;
   public password:any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

  	this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('.+@.+\..+')])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  });

    this.user= localStorage.setItem('email', 'ak@gmail.com');
    this.password= localStorage.setItem('password','qwerty');


  	

  }

  onLogin() {
    if((localStorage.getItem('email') == this.loginForm.value.email) && (localStorage.getItem('password') == this.loginForm.value.password)){
      this.router.navigate(['dashboard']);
    } 
  }


}
