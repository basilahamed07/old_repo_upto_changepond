import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-anemaction',
  templateUrl: './anemaction.component.html',
  styleUrl: './anemaction.component.css'
})
export class AnemactionComponent implements AfterViewInit{
  ngAfterViewInit() {
    this.animateElement();
  }
  animateElement() {
    gsap.to('.box', { opacity: 0, duration: 3, delay: 2 });
  }
}
