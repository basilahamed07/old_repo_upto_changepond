import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtfComponent } from './utf.component';

describe('UtfComponent', () => {
  let component: UtfComponent;
  let fixture: ComponentFixture<UtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
