// import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { gsap } from 'gsap';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements AfterViewInit{
//   @ViewChild("textElement") textElement!: ElementRef;
  
  
  
//   ngAfterViewInit() {
//     this.animateText();
//   }

//   private animateText() {
//     gsap.to(".myText", {duration: 5, x: 600, ease: "slow(0.5, 0.8)"});
//     gsap.fromTo(this.textElement.nativeElement,
//       {
//         opacity: 0,
//         y: 200
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 3,
//         ease: "rough({ template:none.out, strength: 1, points:20, taper:none, randomize:true, clamp:false })",
//       }
//     );
//   }

// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {

  @ViewChild('animatedText', { static: true }) animatedText!: ElementRef;

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    gsap.fromTo(this.animatedText.nativeElement, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' });
  }

  onMouseOver() {
    gsap.to('.text-container', { backgroundColor: '#ffcccb', duration: 0.5 });
    gsap.to(this.animatedText.nativeElement, { color: '#ff0000', duration: 0.3 });
  }

  onMouseLeave() {
    gsap.to('.text-container', { backgroundColor: '#f0f0f0', duration: 0.5 });
    gsap.to(this.animatedText.nativeElement, { color: '#333', duration: 0.3 });
  }
}