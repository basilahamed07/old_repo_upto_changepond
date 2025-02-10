import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactpatchComponent } from './prodactpatch.component';

describe('ProdactpatchComponent', () => {
  let component: ProdactpatchComponent;
  let fixture: ComponentFixture<ProdactpatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdactpatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactpatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
