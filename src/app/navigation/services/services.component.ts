import {Component, OnInit} from '@angular/core';
import {Course} from "../../interfaces/course";
import {NgForOf, NgStyle} from "@angular/common";
import {getDocs} from "@angular/fire/firestore";
import {DataService} from "../../service/data.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";

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

  buttonText : string = ''


  constructor(private dataService: DataService,
              private route : ActivatedRoute,
              private authService : AuthService,) {
  }

  ngOnInit() {

    this.course = this.route.snapshot.data['serviceCourse'] || []


    this.buttonText = this.authService.loggedIn ? 'Watch Now' : 'Try Now'







  }
}
