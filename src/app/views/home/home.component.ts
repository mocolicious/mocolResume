import { Component, OnInit } from '@angular/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatGridListModule, RouterLink],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
