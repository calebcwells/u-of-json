import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { SideNavigationService } from '../services/side-navigation.service';

@Component({
	selector: 'uoj-side-navigation',
	templateUrl: './side-navigation.component.html',
	styles: []
})
export class SideNavigationComponent implements OnInit, OnDestroy {

	currentPath = '/';
	itemId = 0;
	isDisabled = true;
	addIsDisabled = false;
	subscription: Subscription;

	constructor(private service: SideNavigationService, private router: Router) {
		router.events.filter(e => e instanceof NavigationEnd).subscribe(() => {
			this.currentPath = router.url;
		});

		this.subscription = service.rowSelected$.subscribe(
			selectedItemId => {
				this.itemId = selectedItemId;
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

	updateButtonState() {
		this.isDisabled = true;
		this.addIsDisabled = true;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
