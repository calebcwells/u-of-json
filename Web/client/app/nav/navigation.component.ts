import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'uoj-navigation',
	templateUrl: './navigation.component.html',
	styles: []
})
export class NavigationComponent implements OnInit {

	public isCollapsed = true;

	constructor() { }

	ngOnInit() {
	}

}
