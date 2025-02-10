import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosalGsapComponent } from './corosal-gsap.component';

describe('CorosalGsapComponent', () => {
  let component: CorosalGsapComponent;
  let fixture: ComponentFixture<CorosalGsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorosalGsapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorosalGsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
