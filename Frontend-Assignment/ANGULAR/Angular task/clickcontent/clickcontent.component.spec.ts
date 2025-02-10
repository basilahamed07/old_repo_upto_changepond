import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcontentComponent } from './clickcontent.component';

describe('ClickcontentComponent', () => {
  let component: ClickcontentComponent;
  let fixture: ComponentFixture<ClickcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
