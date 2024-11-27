import {Component, OnInit} from '@angular/core';
import {Course} from "../../interfaces/course";
import {DataService} from "../../service/data.service";
import {getDocs} from "@angular/fire/firestore";
import {NgForOf, NgStyle} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

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
export class HomeComponent implements OnInit{

  course : Course[] = []

  buttonText : string = ''

  constructor(private dataService: DataService,
              private route : ActivatedRoute,
              private router : Router,
              private authService : AuthService) {}

  ngOnInit() {
    this.course = this.route.snapshot.data['homeCourse'] || []
    this.buttonText = this.authService.loggedIn ? 'Watch Now' : 'Try Now'
  }



  goToLogin () {

    this.router.navigate(['/login'])

  }



}
