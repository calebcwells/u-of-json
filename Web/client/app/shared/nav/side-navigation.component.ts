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
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
