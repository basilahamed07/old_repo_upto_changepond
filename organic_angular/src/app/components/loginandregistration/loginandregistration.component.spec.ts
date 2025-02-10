import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginandregistrationComponent } from './loginandregistration.component';

describe('LoginandregistrationComponent', () => {
  let component: LoginandregistrationComponent;
  let fixture: ComponentFixture<LoginandregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginandregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginandregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
