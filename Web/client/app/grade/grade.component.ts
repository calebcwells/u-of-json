import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGrade } from '../shared/models/grade.model';
import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-grade',
	templateUrl: './grade.component.html',
	animations: [slideOutAnimation]
})
export class GradeComponent implements OnInit {

	@Input() grade: IGrade;

	@HostBinding('@slideOutAnimation') slideOutAnimation = true;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let grades = this.route.snapshot.data['grades'];

		for (let grade of grades) {
			if (grade.id == this.route.snapshot.url[1].path) {
				this.grade = grade;
			};
		}
	}

}
