import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { StudentService } from './student.service';
import { IStudent } from '../shared/models/student.model';

@Component({
    selector: 'uoj-student',
    templateUrl: './student.component.html',
    styles: []
})
export class StudentComponent implements OnInit {

    public students: IStudent[];
    public subscription: Subscription;

    constructor(private service: StudentService) { }

    ngOnInit() {
        this.getStudents();
    }

    getStudents() {
        this.service.getStudents().subscribe(students => {
            this.students = students;
        })
    }
}
