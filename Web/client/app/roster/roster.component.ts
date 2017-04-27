import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { RosterService } from './roster.service';
import { IRoster } from '../shared/models/roster.model';

@Component({
    selector: 'uoj-roster',
    templateUrl: './roster.component.html',
    styles: []
})
export class RosterComponent implements OnInit {

    public rosters: IRoster[];
    public subscription: Subscription;

    constructor(private service: RosterService) { }

    ngOnInit() {
        this.getRosters();
    }

    getRosters() {
        this.service.getRosters().subscribe(rosters => {
            this.rosters = rosters;
        })
    }
}
