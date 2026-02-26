import { Component, OnInit, AfterViewInit, PLATFORM_ID, inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit, AfterViewInit {

  faGithub = faGithub;

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const navLinks = this.el.nativeElement.querySelectorAll('nav a, .header-right a');

      gsap.from(navLinks, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });
    }
  }

}
