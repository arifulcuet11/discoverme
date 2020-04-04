import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopStoryComponent } from './top-story.component';

describe('TopStoryComponent', () => {
  let component: TopStoryComponent;
  let fixture: ComponentFixture<TopStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
