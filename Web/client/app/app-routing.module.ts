import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterComponent } from './roster/roster.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './grade/grade.component';
import { StudentComponent } from './student/student.component';
import { NotFoundComponent } from './shared/components/not-found.component';

const routes: Routes = [
	{ path: 'rosters', component: RosterComponent },
	{ path: 'rosters/:type/:id', component: RosterComponent },
	{ path: 'courses', component: CourseComponent },
	{ path: 'grades', component: GradeComponent },
	{ path: 'students', component: StudentComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '', redirectTo: 'rosters', pathMatch: 'full' },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
