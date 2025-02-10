import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorasalComponent } from './corasal.component';

describe('CorasalComponent', () => {
  let component: CorasalComponent;
  let fixture: ComponentFixture<CorasalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorasalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
