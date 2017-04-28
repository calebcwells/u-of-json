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
        let rosterPath = '';

        if (this.route.snapshot.url[1] !== undefined) {
            rosterPath = this.route.snapshot.url[1].path;
        }

        switch (rosterPath) {
            case 'student': {
                let id = this.getRostersParams();
                this.getRostersByStudent(id);
                break;
            }
            case 'grade': {
                let id = this.getRostersParams();
                this.getRostersByGrade(id);
                break;
            }
            case 'course': {
                let id = this.getRostersParams();
                this.getRostersByCourse(id);
                break;
            }
            default: {
                this.getRosters();
            }
        }
    }

    getRosters() {
        this.service.getRosters().subscribe(rosters => {
            this.rosters = rosters;
        })
    }

    getRostersByStudent(id: number) {
        this.service.getRostersByStudent(id).subscribe(rosters => {
            this.verifyRosterExists(rosters);
            this.rosters = rosters;
        })
    }

    getRostersByGrade(id: number) {
        this.service.getRostersByGrade(id).subscribe(rosters => {
            this.verifyRosterExists(rosters);
            this.rosters = rosters;
        })
    }

    getRostersByCourse(id: number) {
        this.service.getRostersByCourse(id).subscribe(rosters => {
            this.verifyRosterExists(rosters);
            this.rosters = rosters;
        })
    }

    getRostersParams() {
        return +this.route.snapshot.params['id'];
    }

    verifyRosterExists(rosters: IRoster) {
        if (rosters[0] === undefined) {
            this.router.navigate(['/rosters'])
        }
    }

}
