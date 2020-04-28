import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailogFilterContentTypeComponent } from './dailog-filter-content-type.component';

describe('DailogFilterContentTypeComponent', () => {
  let component: DailogFilterContentTypeComponent;
  let fixture: ComponentFixture<DailogFilterContentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogFilterContentTypeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailogFilterContentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
