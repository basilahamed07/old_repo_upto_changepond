import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimelineMax, TweenMax } from 'gsap';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-corasal',
  standalone: true,
  imports: [],
  templateUrl: './corasal.component.html',
  styleUrl: './corasal.component.scss'
})
export class CorasalComponent implements AfterViewInit, OnDestroy {

  state = {
    animations: ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
    view: 'slide'
  };

  private animationMap: { [key: string]: any } = {};

  constructor() {
    // Initialize animationMap
    this.animationMap = {
      fade: {
        enter: (el: HTMLElement, done: () => void) => {
          TweenMax.fromTo(el, 1, {
            autoAlpha: 0,
            scale: 1.5
          }, {
            autoAlpha: 1,
            scale: 1,
            transformOrigin: '50% 50%',
            ease: Power4.easeOut,
            onComplete: done
          });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.fromTo(el, 1, {
            autoAlpha: 1,
            scale: 1
          }, {
            autoAlpha: 0,
            scale: 0.8,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      },
      slide: {
        enter: (el: HTMLElement, done: () => void) => {
          const tl = new TimelineMax({ onComplete: done });
          tl.set(el, {
            x: window.innerWidth * 1.5,
            scale: 0.8,
            transformOrigin: '50% 50%'
          })
          .to(el, 0.5, { x: 0, ease: Power4.easeOut })
          .to(el, 1, { scale: 1, ease: Power4.easeOut });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.fromTo(el, 1, {
            autoAlpha: 1
          }, {
            autoAlpha: 0,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      },
      slideUp: {
        enter: (el: HTMLElement, done: () => void) => {
          const tl = new TimelineMax({ onComplete: done });
          tl.set(el, {
            y: window.innerHeight * 1.5,
            scale: 0.8,
            transformOrigin: '50% 50%'
          })
          .to(el, 0.5, { y: 0, ease: Power4.easeOut })
          .to(el, 1, { scale: 1, ease: Power4.easeOut });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.to(el, 1, {
            y: window.innerHeight * -1.5,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      },
      zoom: {
        enter: (el: HTMLElement, done: () => void) => {
          const tl = new TimelineMax({ onComplete: done });
          tl.set(el, {
            autoAlpha: 0,
            scale: 2,
            transformOrigin: '50% 50%'
          })
          .to(el, 1, { autoAlpha: 1, scale: 1, ease: Power4.easeOut });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.to(el, 1, {
            scale: 0,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      },
      flipX: {
        enter: (el: HTMLElement, done: () => void) => {
          const tl = new TimelineMax({ onComplete: done });
          tl.set(el, {
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50%'
          })
          .to(el, 1, { autoAlpha: 1, rotationX: 0, ease: Power4.easeOut });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.to(el, 1, {
            scale: 0,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      },
      flipY: {
        enter: (el: HTMLElement, done: () => void) => {
          const tl = new TimelineMax({ onComplete: done });
          tl.set(el, {
            autoAlpha: 0,
            rotationY: 90,
            transformOrigin: '50% 50%'
          })
          .to(el, 1, { autoAlpha: 1, rotationY: 0, ease: Power4.easeOut });
        },
        leave: (el: HTMLElement, done: () => void) => {
          TweenMax.to(el, 1, {
            scale: 0,
            ease: Power4.easeOut,
            onComplete: done
          });
        }
      }
    };
  }

  ngAfterViewInit(): void {
    // Example usage of the animations
    const el = document.querySelector('.some-element') as HTMLElement;
    if (el) {
      this.animationMap[this.state.view].enter(el, () => console.log('Animation complete!'));
    }
  }

  ngOnDestroy(): void {
    // Cleanup logic if needed
  }

  setView(animation: string): void {
    this.state.view = animation;
  }
}
