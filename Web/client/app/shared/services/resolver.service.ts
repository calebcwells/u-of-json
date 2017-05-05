import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

import { GradeService } from '../../grade/grade.service';
import { SideNavigationService } from '../services/side-navigation.service';

@Injectable()
export class NavigationResolver implements Resolve<any> {

	constructor(private service: SideNavigationService, private gradeService: GradeService, private router: Router) { }

	resolve() {
		if (this.router.routerState.snapshot.url === '/grades') {
			return this.gradeService.getGrades();
		}
		this.service.resetSideNav();
	}

}
