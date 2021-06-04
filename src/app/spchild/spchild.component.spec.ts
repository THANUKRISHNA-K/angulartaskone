import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpchildComponent } from './spchild.component';

describe('SpchildComponent', () => {
  let component: SpchildComponent;
  let fixture: ComponentFixture<SpchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
