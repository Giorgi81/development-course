import {Component, OnInit} from '@angular/core';
import {Course} from "../interfaces/course";
import {NgForOf, NgStyle} from "@angular/common";
import {getDocs} from "@angular/fire/firestore";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,


  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  course : Course[] = []



  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    getDocs(this.dataService.collection)
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
