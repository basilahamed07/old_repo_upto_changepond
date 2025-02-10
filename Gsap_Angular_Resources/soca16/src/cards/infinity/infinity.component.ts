import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-infinity',
  standalone: true,
  imports: [],
  templateUrl: './infinity.component.html',
  styleUrl: './infinity.component.css'
})
export class InfinityComponent implements AfterViewInit, OnDestroy {

  private tl!: gsap.core.Timeline;

  ngAfterViewInit(): void {
    // Set up GSAP animations
    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => window.innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
    .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
    .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
    .from(".gridLayer", {
      scale: 3.3333,
      ease: "none"
    });

    // Set background images for grid blocks
    const size = Math.max(window.innerWidth, window.innerHeight);
    gsap.set('.gridBlock', { backgroundImage: (i) => `url(https://picsum.photos/${size}/${size}?random=${i})` });

    // Load and show the center piece image
    const bigImg = new Image();
    bigImg.addEventListener("load", () => {
      gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
    });
    bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  }

  ngOnDestroy(): void {
    // Clean up ScrollTrigger instances to prevent memory leaks
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}