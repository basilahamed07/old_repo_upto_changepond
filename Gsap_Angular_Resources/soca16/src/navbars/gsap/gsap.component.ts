import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-gsap',
  standalone: true,
  imports: [],
  templateUrl: './gsap.component.html',
  styleUrl: './gsap.component.scss'
})
export class GsapComponent implements AfterViewInit {

  ngAfterViewInit() {
    const open = document.querySelector('.container');
    const close = document.querySelector('.close');
    
    // Create GSAP timeline
    var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });

    // Set up event listeners
    if (open && close) {
      open.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.to('nav', { right: 0 })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('nav h2', { opacity: 1 }, '-=1');
        }
      });

      close.addEventListener('click', () => {
        tl.reverse();
      });
    }
  }
}
