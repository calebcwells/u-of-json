import { ICourse } from './course.model';
import { IGrade } from './grade.model';
import { IStudent } from './student.model';

export interface IRoster {
	id: number;
	studentId: number;
	courseId: number;
	gradeId: number;
	student: IStudent;
	course: ICourse;
	grade: IGrade;
}
