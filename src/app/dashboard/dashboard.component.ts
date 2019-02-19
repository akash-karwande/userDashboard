import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
  public local = [
                   {id:"1",protocol:"IP",sourceIP:"2.2.2.2",destinationIP:'3.3.5.5',accessType:'Permit'},
                   {id:"2",protocol:"TCP",sourceIP:"2.2.3.3",destinationIP:'3.3.5.6',accessType:'Denied'},
                   {id:"3",protocol:"HTTP",sourceIP:"2.2.4.4",destinationIP:'3.3.7.8',accessType:'All'},
               ];
  constructor(config: NgbModalConfig, private modalService: NgbModal,private router:Router,private fb:FormBuilder) {}

  ngOnInit() {

    localStorage.getItem('data');
    localStorage.setItem('data', JSON.stringify(this.local));
    console.log(this.local);

  	this.dashboardForm = this.fb.group({
            id: ['', Validators.compose([Validators.required])],
            protocol: ['', Validators.compose([Validators.required])],
            sourceIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
            destinationIP: ['', Validators.compose([Validators.required, Validators.pattern('^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$')])],
            accessType: ['', Validators.compose([Validators.required])]
           
  });

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
