import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SideNavigationService } from '../services/side-navigation.service';

@Component({
	selector: 'uoj-delete-modal',
	template: `
		<div class="modal-header">
		  <h4 class="modal-title">{{ title }}</h4>
		  <button type="button" class="close" (click)="activeModal.dismiss()">
			<span>&times;</span>
		  </button>
		</div>
		<div class="modal-body">
			{{ content }}
		</div>
		 <div class="modal-footer">
		  <button type="button" class="btn btn-danger" (click)="updateNav()">Yes</button>
		  <button type="button" class="btn btn-secondary" (click)="updateNav()">No</button>
		</div>
	`
})
export class DeleteModalComponent {

	@Input() title;
	@Input() content;
	@Input() item;

	constructor(public navService: SideNavigationService, public activeModal: NgbActiveModal) { }

	updateNav() {
		this.navService.activateSideNav();
		this.activeModal.close();
	}

}
