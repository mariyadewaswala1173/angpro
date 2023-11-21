import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", component : HomeComponent },
  { path : "about", component : AboutComponent },
  { path : "courses", component : CoursesComponent },
  { path : "courses/:cateogry", component : CoursesComponent },
  { path : "courses/course_details/:id", component : CourseDetailsComponent },
  { path : "blogs", component : BlogsComponent },
  { path : "blogs/single_blog", component : SingleBlogComponent },
  { path : "contact", component : ContactComponent },
  { path : "**", component : Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
