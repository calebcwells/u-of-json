import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/mergeMap';

import { SideNavigationService } from '../shared/services/side-navigation.service';
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

	public title: string;
	public course: ICourse;

	constructor(
		private service: CourseService,
		private navService: SideNavigationService,
		private titleService: Title,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.title = this.route.snapshot.data['title'];
		// this.titleService.setTitle(`${this.title} Course`);

		if (this.route.snapshot.params['id'] !== undefined) {
			this.getCourseById(+this.route.snapshot.params['id']);
		}
	}

	getCourseById(id: number) {
		this.service.getCourseById(id).subscribe(course => {
			this.course = course;
		});
	}

	cancelForm() {
		if (this.title === 'Add') {
			this.navService.resetSideNav();
		} else {
			this.navService.activateSideNav();
		}
	}
}
