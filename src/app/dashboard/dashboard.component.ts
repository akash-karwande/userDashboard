import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DashboardComponent implements OnInit {
	private modalRef;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private router:Router) {
  	config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  open(content) {
    this.modalRef = this.modalService.open(content);
    setTimeout(() => {
    	let counter = 120;
    	counter --;
    	if(counter ===0) {
    		this.modalRef.close();
    		this.router.navigate(['']);
    	}
    	

    }, 2 * 60 * 1000);
    
  }


}
