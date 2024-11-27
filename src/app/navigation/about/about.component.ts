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
export class AboutComponent {
  images : string[] = [
    "assets/images/img2.avif",
    "assets/images/img6.avif",
    "assets/images/img4.avif",
    "assets/images/img5.avif",
    "assets/images/img9.jpg",
    "assets/images/img8.avif"

  ]







}
