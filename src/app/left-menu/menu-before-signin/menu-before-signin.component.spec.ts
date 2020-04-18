import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuBeforeSigninComponent } from './menu-before-signin.component';

describe('MenuBeforeSigninComponent', () => {
  let component: MenuBeforeSigninComponent;
  let fixture: ComponentFixture<MenuBeforeSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBeforeSigninComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBeforeSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
