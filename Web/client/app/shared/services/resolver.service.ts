import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { SideNavigationService } from '../services/side-navigation.service';

@Injectable()
export class NavigationResolver implements Resolve<any> {

	constructor(private service: SideNavigationService) { }

	resolve() {
		this.service.resetSideNav();
	}

}
