import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideNavigationService {

	private rowSelectedSubject = new Subject<number>();

	rowSelected$ = this.rowSelectedSubject.asObservable();

	assignItemId(itemId: number) {
		this.rowSelectedSubject.next(itemId);
	}

}