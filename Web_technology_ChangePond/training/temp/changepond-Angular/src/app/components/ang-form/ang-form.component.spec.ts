import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngFormComponent } from './ang-form.component';

describe('AngFormComponent', () => {
  let component: AngFormComponent;
  let fixture: ComponentFixture<AngFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
