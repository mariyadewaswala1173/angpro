import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  banner:any = [
    {id:1, title: "The Best Kindergarten School For Your Child", disc : "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", img:"../../../assets/img/carousel-1.jpg"},
    {id:2, title: "Make A Brighter Future For Your Child", disc : "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.", img:"../../../assets/img/carousel-2.jpg"},
  ]
}
