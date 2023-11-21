import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/service/courses';
import { CourseService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  constructor(private course:CourseService, private router:ActivatedRoute){}
  courses:any = [];
  activateID:number = 0;

  ngOnInit(): void {
    this.router.params.subscribe((data)=>{
      this.activateID = data['id'];
      this.courses = this.course.course.find(val=>val.id == this.activateID);
    });
    // this.activateID = this.course.course.find((v)=>{v.id === this.activateID});
  }
}
