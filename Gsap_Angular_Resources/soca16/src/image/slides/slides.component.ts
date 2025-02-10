import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [],
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'] // Fixed typo from styleUrl to styleUrls
})
export class SlidesComponent implements AfterViewInit, OnDestroy {
  private images: NodeListOf<HTMLImageElement> | null = null;
  private loader: HTMLElement | null = null;

  constructor() { }

  ngAfterViewInit(): void {
    // Select images and loader
    this.images = document.querySelectorAll('img');
    this.loader = document.querySelector('.loader--text');

    if (this.images && this.loader) {
      // Initialize imagesLoaded and set up progress and demo functions
      const instance = imagesLoaded(this.images);
      instance.on('progress', this.updateProgress.bind(this));
      instance.on('always', this.showDemo.bind(this));
    } else {
      console.error('Images or loader not found');
    }
  }

  ngOnDestroy(): void {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private updateProgress(instance: any): void {
    if (this.loader && this.images) {
      this.loader.textContent = `${Math.round(instance.progressedCount * 100 / this.images.length)}%`;
    }
  }

  private showDemo(): void {
    if (this.loader) {
      document.body.style.overflow = 'auto';
      document.scrollingElement?.scrollTo(0, 0);
      gsap.to('.loader', { autoAlpha: 0 });

      const sections = gsap.utils.toArray('section') as HTMLElement[];
      sections.forEach((section, index) => {
        const wrapper = section.querySelector('.wrapper') as HTMLElement;
        if (wrapper) {
          const [x, xEnd] = (index % 2) 
            ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1] 
            : [wrapper.scrollWidth * -1, 0];

          gsap.fromTo(wrapper, { x }, {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5
            }
          });
        } else {
          console.error(`Wrapper not found in section ${index}`);
        }
      });
    } else {
      console.error('Loader not found');
    }
  }
}
