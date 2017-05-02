import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { ICourse } from '../shared/models/course.model';

@Injectable()
export class CourseService {

	constructor(private service: DataService) { }

	getCourses(): Observable<ICourse> {
		return this.service.get('/api/Courses').map((response: Response) => {
			return response.json();
		});
    }

    getCourseById(id: number): Observable<ICourse> {
        return this.service.get(`/api/Course/${id}`).map((response: Response) => {
            return response.json();
        });
    }

}
