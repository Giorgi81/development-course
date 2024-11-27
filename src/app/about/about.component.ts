import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  images : string[] = [
    'assets/img1.avif',
  ]


  ngOnInit() {
    console.log(this.images[0])
  }


  img : string = "../images.jpeg"


}
