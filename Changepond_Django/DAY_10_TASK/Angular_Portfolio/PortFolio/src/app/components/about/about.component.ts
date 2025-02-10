import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('cursor') cursor!: ElementRef;

  private mouseX: number = 0;
  private mouseY: number = 0;

  ngOnInit(): void {
    // Initial animation setup
    this.setupCursorAnimation();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.updateCursorPosition();
  }

  private setupCursorAnimation(): void {
    gsap.to(this.cursor.nativeElement, {
      duration: 0.2,
      x: 0,
      y: 0,
      ease: 'power2.out',
      // More GSAP options can be added here
    });
  }

  private updateCursorPosition(): void {
    gsap.to(this.cursor.nativeElement, {
      x: this.mouseX,
      y: this.mouseY
    });
  }
}
