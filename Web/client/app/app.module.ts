import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { RosterListComponent } from './roster/roster-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { GradeComponent } from './grade/grade.component';
import { GradeListComponent } from './grade/grade-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { TopNavigationComponent } from './shared/nav/top-navigation.component';
import { SideNavigationComponent } from './shared/nav/side-navigation.component';
import { NotFoundComponent } from './shared/components/not-found.component';
import { DeleteModalComponent } from './shared/components/delete-modal.component';

import { SelectRowDirective } from './shared/directives/select-row.directive';

import { DataService } from './shared/services/data.service';
import { RedirectService } from './shared/services/redirect.service';
import { SideNavigationService } from './shared/services/side-navigation.service';
import { NavigationResolver } from './shared/services/resolver.service';
import { RosterService } from './roster/roster.service';
import { CourseService } from './course/course.service';
import { GradeService } from './grade/grade.service';
import { StudentService } from './student/student.service';

@NgModule({
	declarations: [
		AppComponent,
		RosterComponent,
		RosterListComponent,
		CourseComponent,
		CourseListComponent,
		GradeComponent,
		GradeListComponent,
		StudentComponent,
		StudentListComponent,
		TopNavigationComponent,
		SideNavigationComponent,
		NotFoundComponent,
		DeleteModalComponent,
		SelectRowDirective
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
		SideNavigationService,
		NavigationResolver,
		RosterService,
		CourseService,
		GradeService,
		StudentService
	],
	entryComponents: [DeleteModalComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
