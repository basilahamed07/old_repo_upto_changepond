import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> a21b3a3a23108ac3abda5728b236ff742aada292
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
=======
      imports: [AppComponent],
>>>>>>> a21b3a3a23108ac3abda5728b236ff742aada292
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'Organic_Website'`, () => {
=======
  it(`should have the 'Organic_Website' title`, () => {
>>>>>>> a21b3a3a23108ac3abda5728b236ff742aada292
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Organic_Website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Organic_Website');
  });
});
