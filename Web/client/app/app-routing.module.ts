import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterComponent } from './roster/roster.component';
import { RosterListComponent } from './roster/roster-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { GradeComponent } from './grade/grade.component';
import { GradeListComponent } from './grade/grade-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { NotFoundComponent } from './shared/components/not-found.component';

const routes: Routes = [
	{ path: 'rosters/:type/:id', component: RosterListComponent },
	{
		path: 'rosters',
		component: RosterListComponent,
		children: [
			{ path: 'add', component: RosterComponent },
			{ path: 'edit/:id', component: RosterComponent }
		]
	},
	{
		path: 'courses',
		component: CourseListComponent,
		children: [
			{ path: 'add', component: CourseComponent },
			{ path: 'edit/:id', component: CourseComponent }
		]
	},
	{
		path: 'grades',
		component: GradeListComponent,
		children: [
			{ path: 'add', component: GradeComponent },
			{ path: 'edit/:id', component: GradeComponent }
		]
	},
	{
		path: 'students',
		component: StudentListComponent,
		children: [
			{ path: 'add', component: StudentComponent },
			{ path: 'edit/:id', component: StudentComponent }
		]
	},
	{ path: 'students', component: StudentListComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '', redirectTo: 'rosters', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
