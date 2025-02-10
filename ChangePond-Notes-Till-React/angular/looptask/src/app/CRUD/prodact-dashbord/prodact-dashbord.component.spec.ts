import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactDashbordComponent } from './prodact-dashbord.component';

describe('ProdactDashbordComponent', () => {
  let component: ProdactDashbordComponent;
  let fixture: ComponentFixture<ProdactDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdactDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
