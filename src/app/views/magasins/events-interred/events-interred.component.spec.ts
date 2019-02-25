import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInterredComponent } from './events-interred.component';

describe('EventsInterredComponent', () => {
  let component: EventsInterredComponent;
  let fixture: ComponentFixture<EventsInterredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsInterredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsInterredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
