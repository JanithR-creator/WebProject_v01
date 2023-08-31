import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouruselComponent } from './courusel.component';

describe('CouruselComponent', () => {
  let component: CouruselComponent;
  let fixture: ComponentFixture<CouruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
