import { Component, OnInit } from '@angular/core'; 
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatGridListModule],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
