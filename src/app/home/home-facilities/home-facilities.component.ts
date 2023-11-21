import { Component } from '@angular/core';

@Component({
  selector: 'app-home-facilities',
  templateUrl: './home-facilities.component.html',
  styleUrls: ['./home-facilities.component.css']
})
export class HomeFacilitiesComponent {
  facilities:any = [
    {id:1, icon:"fa fa-bus-alt fa-3x text-primary", title:"School Bus", disc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit", bgcolor:"facility-icon bg-primary", spancolor:"bg-primary", bodybg:"facility-text bg-primary", titlecolor:"text-primary mb-3"},

    {id:2, icon:"fa fa-futbol fa-3x text-success", title:"Playground", disc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit", bgcolor:"facility-icon bg-success", spancolor:"bg-success", bodybg:"facility-text bg-success", titlecolor:"text-success mb-3"},

    {id:3, icon:"fa fa-home fa-3x text-warning", title:"Healthy Canteen", disc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit", bgcolor:"facility-icon bg-warning", spancolor:"bg-warning", bodybg:"facility-text bg-warning", titlecolor:"text-warning mb-3"},

    {id:4, icon:"fa fa-chalkboard-teacher fa-3x text-info", title:"Positive Learning", disc: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit", bgcolor:"facility-icon bg-info", spancolor:"bg-info", bodybg:"facility-text bg-info", titlecolor:"text-info mb-3"},
  ]
}
