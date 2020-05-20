import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemListComponent } from './mem-list.component';

describe('MemListComponent', () => {
  let component: MemListComponent;
  let fixture: ComponentFixture<MemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
