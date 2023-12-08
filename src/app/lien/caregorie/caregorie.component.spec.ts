import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregorieComponent } from './caregorie.component';

describe('CaregorieComponent', () => {
  let component: CaregorieComponent;
  let fixture: ComponentFixture<CaregorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaregorieComponent]
    });
    fixture = TestBed.createComponent(CaregorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
