import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RosterService } from './roster.service';
import { RedirectService } from '../shared/services/redirect.service';
import { IRoster } from '../shared/models/roster.model';
import { routeAnimation } from '../shared/animations/routing.animation';

@Component({
	selector: 'uoj-roster',
	templateUrl: './roster.component.html',
	animations: [ routeAnimation ]
})
export class RosterComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;

	public rosters: IRoster;

	constructor(private service: RosterService, private route: ActivatedRoute, private redirect: RedirectService) { }

	ngOnInit() {
		this.getRosterData();
	}

	getRosterData() {
		const params = this.route.snapshot.params;

		if (params['type'] !== undefined) {
			this.getRostersById(params['type'], +params['id']);
		} else {
			this.getRosters();
		}
	}

	getRosters() {
		this.service.getRosters().subscribe(rosters => {
			this.rosters = rosters;
		});
	}

	getRostersById(type: string, id: number) {
		this.service.getRostersById(type, id).subscribe(rosters => {
			if (rosters[0] === undefined) {
				this.redirect.navigateTo(['/rosters']);
			}
			this.rosters = rosters;
		});
	}

}
