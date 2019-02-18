import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
	dashboardForm:FormGroup;

  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit() {

  	this.dashboardForm = this.fb.group({
            protocol: ['', Validators.compose([Validators.required])],
            sourceIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
            destinationIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
            accessType: ['', Validators.compose([Validators.required])],
            id: ['', Validators.compose([Validators.required])]
  });
  }

  goBack() {

  	this.router.navigate(['dashboard']);

  }

}
