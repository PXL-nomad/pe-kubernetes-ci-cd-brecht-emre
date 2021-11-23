import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentComponent } from 'src/app/components/add-student/add-student.component';
import { GroupDetailComponent } from 'src/app/components/group-detail/group-detail.component';
import { StudentListComponent } from 'src/app/components/student-list/student-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: StudentListComponent  },
  { path: 'groups/:group', component: GroupDetailComponent},
  { path: 'add', component: AddStudentComponent},
  { path: '**', component: StudentListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
