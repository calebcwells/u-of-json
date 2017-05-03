import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';
import { ICourse } from '../shared/models/course.model';
import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-course',
	templateUrl: './course.component.html',
	animations: [slideOutAnimation]
})
export class CourseComponent implements OnInit {

	@HostBinding('@slideOutAnimation') slideOutAnimation = true;

	public course: ICourse;

	constructor(private service: CourseService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.getCourseById(+this.route.snapshot.params['id']);
	}

	getCourseById(id: number) {
		this.service.getCourseById(id).subscribe(course => {
			this.course = course;
		});
	}
}
