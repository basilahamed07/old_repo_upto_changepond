import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnemactionComponent } from './anemaction.component';

describe('AnemactionComponent', () => {
  let component: AnemactionComponent;
  let fixture: ComponentFixture<AnemactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnemactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnemactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
