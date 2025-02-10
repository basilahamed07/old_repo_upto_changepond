import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GsapComponent } from '../navbars/gsap/gsap.component';



@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent  implements AfterViewInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  
    }
  
    ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger);


      if (isPlatformBrowser(this.platformId)) {  
        
        
        gsap.to(".gsaplogo", {
          x: "30vw",
          y: "10vh",
          scale: 2.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".gsaplogo",
            start: "bottom 20%",
            end: "top 80",
            scrub: 1,
          }
        });


        gsap.to(".gsaplogo1", {
          x: "40vw",
          y: "10vh",
          scale: 2.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".gsaplogo1",
            start: "bottom 20%",
            end: "top 80",
            scrub: 1,
          }
        });


        gsap.to(".gsaplogo2", {
          x: "30vw",
          y: "10vh",
          scale: 2.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".gsaplogo",
            start: "top 40%",
            end: "top 80",
            scrub: 1,
          }
        });


        gsap.to(".sublogo", {
          x: "-52vw",
          y: "15vh",
          scale: 2.5,
          rotate: 360,
          scrollTrigger: {
            trigger: ".sublogo",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        });
      }
    }
   
  }
  