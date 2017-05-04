import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Reference } from '../models/reference.model';

@Injectable()
export class SideNavigationService {

	private rowSelectedSubject = new Subject<Reference>();
	private activateNavButtonsSubject = new Subject<boolean>();
	private resetNavButtonsSubject = new Subject<boolean>();

	rowSelected$ = this.rowSelectedSubject.asObservable();
	activateNavButtons$ = this.activateNavButtonsSubject.asObservable();
	resetNavButtons$ = this.resetNavButtonsSubject.asObservable();

	assignItem(item: Reference) {
		this.rowSelectedSubject.next(item);
	}

	activateSideNav() {
		this.activateNavButtonsSubject.next(true);
	}

	resetSideNav() {
		this.resetNavButtonsSubject.next(true);
	}

}
