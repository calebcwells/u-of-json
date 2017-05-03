import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'uoj-side-navigation',
	templateUrl: './side-navigation.component.html',
	styles: []
})
export class SideNavigationComponent implements OnInit {

	currentPath = '/';

	constructor(private router: Router) {
		router.events.filter(e => e instanceof NavigationEnd).subscribe(() => {
			this.currentPath = router.url;
		});
	}

	ngOnInit() { }

}
