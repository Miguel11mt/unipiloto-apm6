import { Injectable } from '@angular/core';
import {Teacher} from "../models/teacher";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherService {

  private teacherURI = 'http://localhost:3000/api/tecahers';

    constructor(private http: Http) { }

    getTeachers(): Promise<Teacher[]> {
        return this.http.get(this.teacherURI)
            .toPromise()
            .then(response => response.json().data as Teacher[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
