import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
});


  it('should create the app', () => {
   
    expect(component).toBeTruthy();
  });

  describe('Search', () => {
    it('should create the app', () => {
      const spy = spyOn(component['randomArray'], 'filter').and.callThrough();
      component.search();
      expect(spy).toHaveBeenCalled();
    });
  });


});
