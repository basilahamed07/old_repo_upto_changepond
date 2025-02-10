import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalelComponent } from './paralel.component';

describe('ParalelComponent', () => {
  let component: ParalelComponent;
  let fixture: ComponentFixture<ParalelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParalelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParalelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
