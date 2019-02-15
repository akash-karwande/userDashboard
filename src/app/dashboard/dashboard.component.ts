import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DashboardComponent implements OnInit {
	private modalRef;
	dashboardForm:FormGroup;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private router:Router,private fb:FormBuilder) {}

  ngOnInit() {

  	this.dashboardForm = this.fb.group({
            protocol: ['', Validators.compose([Validators.required])],
            sourceIP: ['', Validators.compose([Validators.required, Validators.pattern('\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b')])],
            destinationIP: ['', Validators.compose([Validators.required, Validators.pattern('\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b')])],
            accessType: ['', Validators.compose([Validators.required])],
            id: ['', Validators.compose([Validators.required])]
  });
  	console.log(this.dashboardForm.value.destinationIP);

  }

  open(content) {
    this.modalRef = this.modalService.open(content);
    setTimeout(() => {
    		this.modalRef.close();
    		this.router.navigate(['logout']);
    		localStorage.clear();

    	},2*60*1000);
    
  
}

  getForm() {
  	localStorage.setItem('data',JSON.stringify(this.dashboardForm.value));
  		console.log(this.dashboardForm.value);
  	
  }

  onDelete() {
  	localStorage.removeItem('data');
  }

  onCancel() {
  	this.router.navigate(['dashboard'])
  }

  onLogout() {
  	this.modalRef.close();
  	this.router.navigate(['logout']);
  }


}
