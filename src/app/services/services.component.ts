import {Component, OnInit} from '@angular/core';
import {Course} from "../interfaces/course";
import {NgForOf, NgStyle} from "@angular/common";
import {getDocs} from "@angular/fire/firestore";
import {DataService} from "../service/data.service";
import {ActivatedRoute} from "@angular/router";

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





  constructor(private dataService: DataService, private route : ActivatedRoute) {
  }

  ngOnInit() {

    this.course = this.route.snapshot.data['serviceCourse'] || []





  }
}
