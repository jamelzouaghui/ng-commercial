import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMagasinsComponent } from './add-magasins.component';

describe('AddMagasinsComponent', () => {
  let component: AddMagasinsComponent;
  let fixture: ComponentFixture<AddMagasinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMagasinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
