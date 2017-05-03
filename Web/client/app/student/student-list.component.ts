import { Component, HostBinding, OnInit } from '@angular/core';

import { StudentService } from './student.service';
import { IStudent } from '../shared/models/student.model';
import { routeAnimation } from '../shared/animations/routing.animation';

@Component({
	selector: 'uoj-student-list',
	templateUrl: './student-list.component.html',
	animations: [routeAnimation]
})
export class StudentListComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;

	public students: IStudent;
	public currentItem: IStudent;

	constructor(private service: StudentService) { }

	ngOnInit() {
		this.getStudents();
	}

	getStudents() {
		this.service.getStudents().subscribe(students => {
			this.students = students;
		});
	}

	highlightRow(student: IStudent) {
		this.currentItem = student;
	}

}
