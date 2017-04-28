import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { RosterService } from './roster.service';
import { IRoster } from '../shared/models/roster.model';

@Component({
    selector: 'uoj-roster',
    templateUrl: './roster.component.html',
    styles: []
})
export class RosterComponent implements OnInit {

    public rosters: IRoster;
    public subscription: Subscription;

    constructor(private service: RosterService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.getRosterData();
    }

    getRosterData() {
        if (this.route.snapshot.params['type'] !== undefined) {
            this.getRostersById(
                this.route.snapshot.params['type'],
                +this.route.snapshot.params['id']
            );
        } else {
            this.getRosters();
        }
    }

    getRosters() {
        this.service.getRosters().subscribe(rosters => {
            this.rosters = rosters;
        })
    }

    getRostersById(path: string, id: number) {
        this.service.getRostersById(path, id).subscribe(rosters => {
            this.verifyRosterExists(rosters);
            this.rosters = rosters;
        })
    }

    verifyRosterExists(rosters: IRoster) {
        if (rosters[0] === undefined) {
            this.router.navigate(['/rosters'])
        }
    }

}
