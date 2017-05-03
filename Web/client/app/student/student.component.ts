import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-student',
	templateUrl: './student.component.html',
	animations: [slideOutAnimation]
})
export class StudentComponent implements OnInit {

	@HostBinding('@slideOutAnimation') slideOutAnimation = true;

	constructor() { }

	ngOnInit() { }

}
