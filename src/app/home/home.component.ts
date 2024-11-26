import { Component } from '@angular/core';
import {Course} from "../interfaces/course";
import {DataService} from "../service/data.service";
import {getDocs} from "@angular/fire/firestore";
import {NgForOf, NgStyle} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  course : Course[] = []



  constructor(private dataService: DataService, private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.course = this.route.snapshot.data['homeCourse'] || []





  }



}
