﻿import { Component, HostBinding, OnInit } from '@angular/core';

import { CourseService } from './course.service';
import { ICourse } from '../shared/models/course.model';
import { routeAnimation } from '../shared/animations/routing.animation';

@Component({
	selector: 'uoj-course-list',
	templateUrl: './course-list.component.html',
	animations: [routeAnimation]
})
export class CourseListComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;

	public courses: ICourse;

	constructor(private service: CourseService) { }

	ngOnInit() {
		this.getCourses();
	}

	getCourses() {
		this.service.getCourses().subscribe(courses => {
			this.courses = courses;
		});
	}

}
