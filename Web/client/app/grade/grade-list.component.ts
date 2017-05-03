import { Component, HostBinding, OnInit } from '@angular/core';

import { GradeService } from './grade.service';
import { IGrade } from '../shared/models/grade.model';
import { routeAnimation } from '../shared/animations/routing.animation';

@Component({
	selector: 'uoj-grade-list',
	templateUrl: './grade-list.component.html',
	animations: [routeAnimation]
})
export class GradeListComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;

	public grades: IGrade;
	public currentItem: IGrade;

	constructor(private service: GradeService) { }

	ngOnInit() {
		this.getGrades();
	}

	getGrades() {
		this.service.getGrades().subscribe(grades => {
			this.grades = grades;
		});
	}

	highlightRow(grade: IGrade) {
		this.currentItem = grade;
	}

}
