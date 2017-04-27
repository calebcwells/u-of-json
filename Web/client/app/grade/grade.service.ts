import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { IGrade } from '../shared/models/grade.model';

@Injectable()
export class GradeService {

    constructor(private service: DataService) { }

    getGrades(): Observable<IGrade[]> {
        return this.service.get('/api/Grades').map((response: Response) => {
            return response.json();
        });
    }
}
