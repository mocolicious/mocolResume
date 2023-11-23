import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [MatGridListModule],
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
