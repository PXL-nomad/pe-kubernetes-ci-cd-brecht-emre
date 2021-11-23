import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'devops-api-frontend';

  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
  }

}
