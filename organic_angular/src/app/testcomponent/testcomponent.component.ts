import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.css'
})
export class TestcomponentComponent implements AfterViewInit {

  private MenuTimeline = gsap.timeline({ paused: true });

  ngAfterViewInit(): void {
    // Define GSAP animations
    this.MenuTimeline
      .to('.splash', {
        duration: 0.2,
        width: '80%',
        top: '50px',
        left: '10px',
        borderRadius: '5px'
      })
      .staggerFrom('.nav-item', 0.5, {
        opacity: 0,
        x: '50px',
        y: '10px',
        stagger: {
          from: 'start',
          each: 0.1
        }
      });
    
    // Add click event listener to the menu button
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        if (this.MenuTimeline.reversed()) {
          this.MenuTimeline.play();
        } else {
          this.MenuTimeline.reverse();
        }
      });
    }
  }
}