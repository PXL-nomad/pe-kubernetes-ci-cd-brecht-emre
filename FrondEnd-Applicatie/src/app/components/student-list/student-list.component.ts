import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }

}
