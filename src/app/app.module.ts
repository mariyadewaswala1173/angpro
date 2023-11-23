import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './header/spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeFacilitiesComponent } from './home/home-facilities/home-facilities.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeCtaComponent } from './home/home-cta/home-cta.component';
import { HomeCoursesComponent } from './home/home-courses/home-courses.component';
import { HomeAppointComponent } from './home/home-appoint/home-appoint.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { HomeTestiComponent } from './home/home-testi/home-testi.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesCoursesComponent } from './courses/courses-courses/courses-courses.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { CourseService } from './service/courses.service';
// import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './auth/firebaseAuth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    HomeComponent,
    HeroComponent,
    HomeFacilitiesComponent,
    HomeAboutComponent,
    HomeCtaComponent,
    HomeCoursesComponent,
    HomeAppointComponent,
    HomeTeamComponent,
    HomeTestiComponent,
    AboutComponent,
    CoursesComponent,
    CoursesCoursesComponent,
    ContactComponent,
    CourseDetailsComponent,
    BlogsComponent,
    SingleBlogComponent,
    Page404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
