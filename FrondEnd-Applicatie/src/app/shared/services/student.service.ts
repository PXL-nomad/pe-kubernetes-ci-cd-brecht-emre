import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

const APIURL = "http://api.dubbadub.be/api/";
const APIKEY = "2TINDEVOPS";

@Injectable()
export class StudentService {

    headers = new HttpHeaders();

    constructor(private httpClient: HttpClient) {
        this.headers = this.headers.set('key', APIKEY);
    }

    getStudents(): Observable<any>{
        return this.httpClient.get<Student[]>(APIURL + 'students', {headers: this.headers});
    }

    getGroupInfo(group: string): Observable<Student[]>{
        return this.httpClient.get<Student[]>(APIURL + 'groups/'+group, {headers: this.headers});
    }

    addStudent(student: Student): Observable<any>{
      return this.httpClient.post(APIURL + 'students', student, {headers: this.headers});
    }

}
