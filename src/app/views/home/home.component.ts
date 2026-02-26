import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [MatGridListModule, RouterLink]
})
export class HomeComponent implements OnInit, AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const cards = this.el.nativeElement.querySelectorAll('section > div');

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.el.nativeElement.querySelector('section'),
          start: 'top 85%',
        }
      });
    }
  }

}
