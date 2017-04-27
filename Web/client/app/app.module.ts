import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation.component';
import { RosterComponent } from './roster/roster.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './grade/grade.component';
import { StudentComponent } from './student/student.component';

import { DataService } from './shared/services/data.service';
import { RosterService } from './roster/roster.service';
import { CourseService } from './course/course.service';
import { GradeService } from './grade/grade.service';
import { StudentService } from './student/student.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        RosterComponent,
        CourseComponent,
        GradeComponent,
		StudentComponent
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
		DataService,
        RosterService,
        CourseService,
        GradeService,
		StudentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
