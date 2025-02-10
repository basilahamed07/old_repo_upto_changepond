import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirevtiveComponent } from './direvtive.component';

describe('DirevtiveComponent', () => {
  let component: DirevtiveComponent;
  let fixture: ComponentFixture<DirevtiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirevtiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirevtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
