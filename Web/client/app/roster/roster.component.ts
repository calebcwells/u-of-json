import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RosterService } from './roster.service';
import { IRoster } from '../shared/models/roster.model';
import { slideOutAnimation } from '../shared/animations/slide-out.animation';

@Component({
	selector: 'uoj-roster',
	templateUrl: './roster.component.html',
	animations: [slideOutAnimation]
})
export class RosterComponent implements OnInit {

	@HostBinding('@slideOutAnimation') slideOutAnimation = true;

	constructor() { }

	ngOnInit() { }

}
