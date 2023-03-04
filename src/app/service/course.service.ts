import { Injectable } from '@angular/core';
import { Course, courses } from '../models/courses.models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public listCourse : Course[] = courses;
  constructor() { }

  getAll(){
    return this.listCourse;
  }
}
