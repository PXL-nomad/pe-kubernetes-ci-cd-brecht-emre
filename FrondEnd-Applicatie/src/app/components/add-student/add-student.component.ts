import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  onSubmit(): void{
    const newStudent: Student = new Student(this.addForm.value['name'], this.addForm.value['age'], this.addForm.value['group']);
    this.studentService.addStudent(newStudent).subscribe(() => this.router.navigate(['/']));
  }
}
