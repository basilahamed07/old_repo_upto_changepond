import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyangularMaterialComponent } from './myangular-material.component';

describe('MyangularMaterialComponent', () => {
  let component: MyangularMaterialComponent;
  let fixture: ComponentFixture<MyangularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyangularMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyangularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
