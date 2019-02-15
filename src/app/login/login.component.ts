import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  	this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('.+@.+\..+')])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  });
  	

  }

  onLogin() {
  	localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value));
  }


}
