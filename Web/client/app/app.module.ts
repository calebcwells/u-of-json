import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './course/courses.component';
import { GradeComponent } from './grade/grade.component';
import { GradesComponent } from './grade/grades.component';
import { StudentComponent } from './student/student.component';
import { TopNavigationComponent } from './shared/nav/top-navigation.component';
import { SideNavigationComponent } from './shared/nav/side-navigation.component';
import { NotFoundComponent } from './shared/components/not-found.component';

import { DataService } from './shared/services/data.service';
import { RedirectService } from './shared/services/redirect.service';
import { RosterService } from './roster/roster.service';
import { CourseService } from './course/course.service';
import { GradeService } from './grade/grade.service';
import { StudentService } from './student/student.service';

@NgModule({
	declarations: [
		AppComponent,
		RosterComponent,
        CourseComponent,
        CoursesComponent,
		GradeComponent,
		GradesComponent,
		StudentComponent,
        TopNavigationComponent,
		SideNavigationComponent,
		NotFoundComponent
	],
	imports: [
		NgbModule.forRoot(),
        BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [
		DataService,
		RedirectService,
		RosterService,
		CourseService,
		GradeService,
		StudentService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
