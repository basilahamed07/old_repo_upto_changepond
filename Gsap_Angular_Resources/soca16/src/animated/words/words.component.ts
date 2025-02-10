import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-words',
  standalone: true,
  imports: [],
  templateUrl: './words.component.html',
  styleUrl: './words.component.scss'
})
export class WordsComponent implements AfterViewInit, OnDestroy {

  constructor() { }

  ngAfterViewInit(): void {
    // Check if CSS animations are supported and user prefers reduced motion
    if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      this.setupAnimations();
    }
  }

  ngOnDestroy(): void {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private setupAnimations(): void {
    const scrub = 0.5;
    const trigger = 'main';

    // Set initial state for 'p > span'
    gsap.set('p > span', {
      '--progress': 0,
      backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
      color: 'transparent'
    });

    // Create animations with ScrollTrigger
    gsap.to('p > span', {
      '--progress': 1,
      scrollTrigger: {
        trigger,
        scrub,
        start: 'top top',
        end: 'top top-=75%'
      }
    });

    gsap.to('p > span', {
      color: 'white',
      scrollTrigger: {
        trigger,
        scrub,
        start: 'top top-=75%',
        end: 'bottom bottom'
      }
    });
  }
}
