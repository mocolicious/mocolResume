import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    imports: [MatGridListModule]
})
export class ResumeComponent implements OnInit, AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = this.el.nativeElement.querySelectorAll('section');

      gsap.from(sections, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%',
        }
      });
    }
  }

}
