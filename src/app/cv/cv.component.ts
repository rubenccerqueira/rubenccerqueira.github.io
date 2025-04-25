import { Component, OnInit } from '@angular/core';
import * as cvData from './../data/cvData.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  standalone: false,
})
export class CvComponent implements OnInit {
  imgPath = './../assets/photo.jpeg';
  cvData = cvData;

  constructor() {}

  ngOnInit(): void {
  }
}
