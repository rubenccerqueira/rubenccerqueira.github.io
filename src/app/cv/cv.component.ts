import { Component, OnInit } from '@angular/core';
import * as cvData from './../data/cvData.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  imgPath = './../assets/photo.jpeg';
  cvData = cvData;
  experiencePage1: any[] = []
  experiencePage2: any[] = []

  constructor() {}

  ngOnInit(): void {
    let experience = this.cvData.professionalExperience;
    this.experiencePage1 = experience.slice(0, 2);
    this.experiencePage2 = experience.slice(2);
  }
}
