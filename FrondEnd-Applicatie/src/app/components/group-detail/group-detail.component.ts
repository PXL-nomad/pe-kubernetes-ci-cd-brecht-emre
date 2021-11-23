import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  groupName: string;
  students$: Observable<Student[]>;
  constructor( private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.groupName = this.route.snapshot.paramMap.get('group');
    this.students$ = this.studentService.getGroupInfo(this.groupName);
  }


}
