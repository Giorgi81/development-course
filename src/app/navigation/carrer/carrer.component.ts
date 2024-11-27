import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-carrer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './carrer.component.html',
  styleUrl: './carrer.component.scss'
})
export class CarrerComponent {

  title : any[] = [

    {position : 'Junior Front-End Developer'},
    {position:    'Middle Devops Enginner'},
    {position:    'Junior Python Developer'},
    {position : 'Senior Java Developer'},
    {position : 'Senior JavaScript Developer'} ,
    {position : 'Junior Front-End Developer'},
    {position : 'Middle Front-End Developer'},


  ]

}
