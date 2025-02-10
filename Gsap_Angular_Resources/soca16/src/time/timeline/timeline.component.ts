import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements AfterViewInit, OnDestroy {

  private smoother: ScrollSmoother | undefined;

  ngAfterViewInit(): void {
    // Initialize ScrollSmoother and GSAP animations
    this.initializeAnimations();
  }

  ngOnDestroy(): void {
    // Cleanup if necessary
    if (this.smoother) {
      this.smoother.kill();
    }
  }

  private initializeAnimations(): void {
    // Initialize ScrollSmoother
    this.smoother = ScrollSmoother.create({
      smooth: 2,
      speed: 2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1
    });

    // Parallax Section Animation
    gsap.from(".parallax-section", {
      scale: 1 / 3,
      scrollTrigger: {
        trigger: ".parallax-section",
        scrub: 1
      }
    });

    // NavBars Animation
    const navTop = gsap.to(".navbar", {
      y: "-=100",
      duration: 0.3,
      ease: "power2.in",
      paused: true
    });

    ScrollTrigger.create({
      trigger: ".navbar",
      start: "10px top",
      onEnter: () => navTop.play(),
      onLeaveBack: () => navTop.reverse(),
      markers: false
    });

    gsap.set(".bottombar", {
      yPercent: 100,
      autoAlpha: 1
    });

    const navBottom = gsap.to(".bottombar", {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.in",
      paused: true
    });

    ScrollTrigger.create({
      trigger: ".navbar",
      start: "bottom top",
      onEnter: () => navBottom.play(),
      onLeaveBack: () => navBottom.reverse(),
      markers: true
    });
  }
}