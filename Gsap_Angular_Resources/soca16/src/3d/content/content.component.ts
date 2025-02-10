import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // You can perform initialization logic here
  }

  ngAfterViewInit(): void {
    // Set up GSAP animations after the view has initialized
    gsap.set(".banner3d-1", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-2", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-3", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-4", { perspectiveOrigin: "left -100vh" });

    gsap.to(".banner3d-1", {
      scrollTrigger: {
        trigger: ".banner3d-1",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      },
      perspectiveOrigin: "center 100vh", 
      ease: "none"
    });

    gsap.to(".banner3d-2", {
      scrollTrigger: {
        trigger: ".banner3d-2",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      },
      perspectiveOrigin: "center 100vh", 
      ease: "none"
    });

    gsap.to(".banner3d-3", {
      scrollTrigger: {
        trigger: ".banner3d-3",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      },
      perspectiveOrigin: "center 100vh", 
      ease: "none"
    });

    gsap.to(".banner3d-4", {
      scrollTrigger: {
        trigger: ".banner3d-4",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      },
      perspectiveOrigin: "left 100vh", 
      ease: "none"
    });
  }
}