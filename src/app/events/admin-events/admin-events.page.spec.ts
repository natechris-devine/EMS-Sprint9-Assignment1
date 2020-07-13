import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminEventsPage } from './admin-events.page';

describe('AdminEventsPage', () => {
  let component: AdminEventsPage;
  let fixture: ComponentFixture<AdminEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
