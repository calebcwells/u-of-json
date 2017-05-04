import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs/Subscription';

import { Reference } from '../models/reference.model';
import { DeleteModalComponent } from '../components/delete-modal.component';
import { SideNavigationService } from '../services/side-navigation.service';

@Component({
	selector: 'uoj-side-navigation',
	templateUrl: './side-navigation.component.html',
	styles: []
})
export class SideNavigationComponent implements OnInit, OnDestroy {

	currentPath = '/';
	item: Reference;
	isDisabled = true;
	addIsDisabled = false;
	subscription: Subscription;

	constructor(private service: SideNavigationService, private modalService: NgbModal, private router: Router) {
		router.events.filter(e => e instanceof NavigationEnd).subscribe(() => {
			this.currentPath = router.url;
		});

		this.subscription = service.rowSelected$
			.map(selectedItem => {
				this.item = selectedItem;
			})
			.subscribe(() => {
				this.isDisabled = false;
			});

		this.subscription = service.activateNavButtons$.subscribe(() => {
			this.isDisabled = false;
			this.addIsDisabled = false;
		});

		this.subscription = service.resetNavButtons$.subscribe(() => {
			this.isDisabled = true;
			this.addIsDisabled = false;
		});

	}

	ngOnInit() { }

	disableButtons() {
		this.isDisabled = true;
		this.addIsDisabled = true;
	}

	openDeleteModal() {
		const deleteModal = this.modalService.open(DeleteModalComponent);
		deleteModal.componentInstance.title = `Delete ${this.item.type}`;
		if (this.item.type === 'roster') {
			deleteModal.componentInstance.content = `Are you sure you want to delete the ${this.item.type} assigned to ${this.item.name}`;
		} else {
			deleteModal.componentInstance.content = `Are you sure you want to delete ${this.item.type} ${this.item.name}`;
		}
		deleteModal.componentInstance.item = this.item;
		this.disableButtons();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
