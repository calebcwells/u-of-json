import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideNavigationService {

	private rowSelectedSubject = new Subject<number>();
	private activateNavButtonsSubject = new Subject<boolean>();
	private resetNavButtonsSubject = new Subject<boolean>();

	rowSelected$ = this.rowSelectedSubject.asObservable();
	activateNavButtons$ = this.activateNavButtonsSubject.asObservable();
	resetNavButtons$ = this.resetNavButtonsSubject.asObservable();

	assignItemId(itemId: number) {
		this.rowSelectedSubject.next(itemId);
	}

	activateSideNav() {
		this.activateNavButtonsSubject.next(true);
	}

	resetSideNav() {
		this.resetNavButtonsSubject.next(true);
	}

}