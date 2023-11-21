import { Component } from '@angular/core';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.css']
})
export class HomeTeamComponent {
    team:any=[
      {id:1, name:"Ellyse Perry", designation:"Science Teacher", img:"../../../assets/img/team-1.jpg"},
      {id:2, name:"John Seena", designation:"Mathmatics Teacher", img:"../../../assets/img/team-2.jpg"},
      {id:3, name:"Jess Jonassen", designation:"Computer Teacher", img:"../../../assets/img/team-3.jpg"},
    ]
}
