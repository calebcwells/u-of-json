import { Component, HostBinding, OnInit } from '@angular/core';

import { GradeService } from './grade.service';
import { IGrade } from '../shared/models/grade.model';
import { routeAnimation } from '../shared/animations/routing.animation';

@Component({
	selector: 'uoj-grades',
	templateUrl: './grades.component.html',
    animations: [routeAnimation]
})
export class GradesComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;

	public grades: IGrade[];

	constructor(private service: GradeService) { }

	ngOnInit() {
		this.getGrades();
	}

	getGrades() {
		this.service.getGrades().subscribe(grades => {
			this.grades = grades;
		});
	}
}
