import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactAddComponent } from './prodact-add.component';

describe('ProdactAddComponent', () => {
  let component: ProdactAddComponent;
  let fixture: ComponentFixture<ProdactAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdactAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
