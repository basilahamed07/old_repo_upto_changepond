import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggledimageComponent } from './taggledimage.component';

describe('TaggledimageComponent', () => {
  let component: TaggledimageComponent;
  let fixture: ComponentFixture<TaggledimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaggledimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaggledimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
