import { Component, OnInit } from '@angular/core';
import * as bodyData from './../../data/cvBody.json';

@Component({
  selector: 'app-cv-body',
  templateUrl: './cv-body.component.html',
  styleUrls: ['./cv-body.component.scss']
})
export class CvBodyComponent implements OnInit {
  public bodyData = bodyData;

  constructor() {}

  ngOnInit(): void {}
}
