import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



@Component({
  selector: 'app-paralel',
  standalone: true,
  imports: [],
  templateUrl: './paralel.component.html',
  styleUrl: './paralel.component.scss'
})
export class ParalelComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeGsapAnimations();
  }

  private initializeGsapAnimations(): void {
    // Ensure elements are available before applying animations
    gsap.to(".pContent", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        scrub: true
      }
    });

    gsap.to(".pImage", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        scrub: true
      }
    });
  }
}
