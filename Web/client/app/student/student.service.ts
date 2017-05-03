import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { IStudent } from '../shared/models/student.model';

@Injectable()
export class StudentService {

	constructor(private service: DataService) { }

	getStudents(): Observable<IStudent> {
		return this.service.get('/api/Students').map((response: Response) => {
			return response.json();
		});
	}
}
