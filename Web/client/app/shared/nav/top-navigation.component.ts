import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'uoj-top-navigation',
	templateUrl: './top-navigation.component.html',
	styles: []
})
export class TopNavigationComponent implements OnInit {

	public isCollapsed = true;

	constructor() { }

	ngOnInit() {
	}

}
