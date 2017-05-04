import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IRoster } from '../shared/models/roster.model';
import { ICourse } from '../shared/models/course.model';
import { IGrade } from '../shared/models/grade.model';
import { IStudent } from '../shared/models/student.model';
import { RosterService } from './roster.service';
import { CourseService } from '../course/course.service';
import { GradeService } from '../grade/grade.service';
import { StudentService } from '../student/student.service';
import { SideNavigationService } from '../shared/services/side-navigation.service';
import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-roster',
	templateUrl: './roster.component.html',
	animations: [slideOutAnimation]
})
export class RosterComponent implements OnInit {

	@HostBinding('@slideOutAnimation') slideOutAnimation = true;

	public title: string;
	public rosterForm: FormGroup;
	public studentSelectList: IStudent;
	public courseSelectList: ICourse;
	public gradeSelectList: IGrade;

	constructor(
		private rosterService: RosterService,
		private courseService: CourseService,
		private gradeService: GradeService,
		private studentService: StudentService,
		private navService: SideNavigationService,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.title = this.route.snapshot.data['title'];

		this.courseService.getCourses().subscribe(courses => {
			this.courseSelectList = courses;
		});

		this.studentService.getStudents().subscribe(students => {
			this.studentSelectList = students;
		});

		this.gradeService.getGrades().subscribe(grades => {
			this.gradeSelectList = grades;
		});

		this.rosterForm = this.formBuilder.group({
			student: '',
			course: '',
			grade: ''
		});

	}

	cancelForm() {
		if (this.title === 'Add Roster') {
			this.navService.resetSideNav();
		} else {
			this.navService.activateSideNav();
		}
	}

}
