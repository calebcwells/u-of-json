import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { IRoster } from '../shared/models/roster.model';

@Injectable()
export class RosterService {

	constructor(private service: DataService) { }

	getRosters(): Observable<IRoster> {
		return this.service.get('./api/Rosters').map((response: Response) => {
			return response.json();
		});
	}

	getRostersById(type: string, id: number): Observable<IRoster> {
		return this.service.get(`./api/RostersBy${type}/${id}`).map((response: Response) => {
			return response.json();
		});
	}

}
