import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/service/courses';
import { CourseService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses-courses',
  templateUrl: './courses-courses.component.html',
  styleUrls: ['./courses-courses.component.css']
})
export class CoursesCoursesComponent implements OnInit{
  constructor(private courses:CourseService){}
  mycourses:Course[]=[];
  ngOnInit(){
    this.mycourses = this.courses.course;
  }
}
