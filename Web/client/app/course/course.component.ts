import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CourseService } from './course.service';
import { ICourse } from '../shared/models/course.model';

@Component({
	selector: 'uoj-course',
	templateUrl: './course.component.html',
	styles: []
})
export class CourseComponent implements OnInit {

	public courses: ICourse[];
	public subscription: Subscription;

	constructor(private service: CourseService) { }

	ngOnInit() {
		this.getCourses();
	}

	getCourses() {
		this.service.getCourses().subscribe(courses => {
			this.courses = courses;
		}; )
	}
}
