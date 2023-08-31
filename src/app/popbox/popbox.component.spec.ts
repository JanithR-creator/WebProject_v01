import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopboxComponent } from './popbox.component';

describe('PopboxComponent', () => {
  let component: PopboxComponent;
  let fixture: ComponentFixture<PopboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
