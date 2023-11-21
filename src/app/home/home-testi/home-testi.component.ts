import { Component } from '@angular/core';

@Component({
  selector: 'app-home-testi',
  templateUrl: './home-testi.component.html',
  styleUrls: ['./home-testi.component.css']
})
export class HomeTestiComponent {

  testi:any=[
    {id:1,name:"Meg Lanning",profession:"Profession", img:"../../../assets/img/testimonial-1.jpg",disc:"empor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"},
    {id:2,name:"Jos Buttler",profession:"Profession", img:"../../../assets/img/testimonial-2.jpg",disc:"empor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"},
    {id:3,name:"Steve Smith",profession:"Profession", img:"../../../assets/img/testimonial-3.jpg",disc:"empor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos"},
  ]
}
