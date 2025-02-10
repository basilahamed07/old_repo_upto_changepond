import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactUpdateComponent } from './prodact-update.component';

describe('ProdactUpdateComponent', () => {
  let component: ProdactUpdateComponent;
  let fixture: ComponentFixture<ProdactUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdactUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
