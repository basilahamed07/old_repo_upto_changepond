import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagglesimageComponent } from './tagglesimage.component';

describe('TagglesimageComponent', () => {
  let component: TagglesimageComponent;
  let fixture: ComponentFixture<TagglesimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagglesimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagglesimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
