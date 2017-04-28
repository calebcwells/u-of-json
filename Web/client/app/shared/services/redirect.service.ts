import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectService {

	constructor(private router: Router) { }

	navigateTo(path: any[]) {
		this.router.navigate(path);
	}

}
