import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailogEidtContactComponent } from './dailog-eidt-contact.component';

describe('DailogEidtContactComponent', () => {
  let component: DailogEidtContactComponent;
  let fixture: ComponentFixture<DailogEidtContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogEidtContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailogEidtContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
