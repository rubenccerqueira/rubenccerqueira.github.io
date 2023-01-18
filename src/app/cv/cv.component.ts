import { Component, OnInit } from '@angular/core';
import * as contactData from './../data/contacts.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  public imgPath = './../assets/photo.jpeg';
  public headerDescription =
    'Student focused on enriching its knowledge about the different areas that software engineering has to offer';

  public contactData = contactData;

  constructor() {}

  ngOnInit(): void {}
}
