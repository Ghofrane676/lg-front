import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionComponent } from './disposition.component';

describe('DispositionComponent', () => {
  let component: DispositionComponent;
  let fixture: ComponentFixture<DispositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispositionComponent]
    });
    fixture = TestBed.createComponent(DispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
