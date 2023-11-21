import { Component } from '@angular/core';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.css']
})
export class HomeCoursesComponent {

  courses:any= [
    { id:1, title:"Art & Drawing", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-1.jpg", TeacherImg:"../../../assets/img/user.jpg"},
    { id:2, title:"Color Management", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-2.jpg", TeacherImg:"../../../assets/img/user.jpg"},
    { id:3, title:"Athletic & Dance", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-3.jpg", TeacherImg:"../../../assets/img/user.jpg"},
    { id:4, title:"Language & Speaking", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-4.jpg", TeacherImg:"../../../assets/img/user.jpg"},
    { id:5, title:"Religion & History", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-5.jpg", TeacherImg:"../../../assets/img/user.jpg"},
    { id:6, title:"General Knowledge", name:"Jhon Doe", job:"Teacher", price:"$99", age:"3-5 Years", time:"9:10 AM", capacity:"30 Kids", bodyImg:"../../../assets/img/classes-6.jpg", TeacherImg:"../../../assets/img/user.jpg"},
  ]
}
