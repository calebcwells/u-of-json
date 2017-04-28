import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { GradeService } from './grade.service';
import { IGrade } from '../shared/models/grade.model';

@Component({
	selector: 'uoj-grade',
	templateUrl: './grade.component.html',
	styles: []
})
export class GradeComponent implements OnInit {

	public grades: IGrade[];
	public subscription: Subscription;

	constructor(private service: GradeService) { }

	ngOnInit() {
		this.getGrades();
	}

	getGrades() {
		this.service.getGrades().subscribe(grades => {
			this.grades = grades;
		}; )
	}
}
