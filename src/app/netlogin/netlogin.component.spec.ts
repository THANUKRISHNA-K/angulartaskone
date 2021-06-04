import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetloginComponent } from './netlogin.component';

describe('NetloginComponent', () => {
  let component: NetloginComponent;
  let fixture: ComponentFixture<NetloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
