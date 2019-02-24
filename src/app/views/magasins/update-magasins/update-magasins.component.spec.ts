import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMagasinsComponent } from './update-magasins.component';

describe('UpdateMagasinsComponent', () => {
  let component: UpdateMagasinsComponent;
  let fixture: ComponentFixture<UpdateMagasinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMagasinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMagasinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
