import { Component } from '@angular/core';
import {Course} from "../interfaces/course";
import {DataService} from "../service/data.service";
import {getDocs} from "@angular/fire/firestore";
import {NgForOf, NgStyle} from "@angular/common";

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



  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    getDocs(this.dataService.collect)
      .then(response => {
        response.docs.forEach(doc => {
          this.course.push({
            backColor: "",
            price: 0,
            sc1: "",
            sc2: "",
            sc3: "",
            sc4: "", btnBackColor: "", btnTextColor: "", textColor: "",
            sc5: "",
            title: "", ...doc.data(), id : doc.id})
        })
      })



  }



}
