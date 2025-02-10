import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupondComponent } from './coupond.component';

describe('CoupondComponent', () => {
  let component: CoupondComponent;
  let fixture: ComponentFixture<CoupondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoupondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
