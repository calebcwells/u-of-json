import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-grade',
	templateUrl: './grade.component.html',
    animations: [ slideOutAnimation ]
})
export class GradeComponent implements OnInit {

    @HostBinding('@slideOutAnimation') slideOutAnimation = true;

    constructor() { }

    ngOnInit() { }

}
