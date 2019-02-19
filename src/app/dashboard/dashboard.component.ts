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
  public local:any;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private router:Router,private fb:FormBuilder) {}

  ngOnInit() {
    this.local = localStorage.getItem('data');
    console.log(this.local);

  	this.dashboardForm = this.fb.group({
            protocol: ['', Validators.compose([Validators.required])],
            sourceIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
            destinationIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
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
