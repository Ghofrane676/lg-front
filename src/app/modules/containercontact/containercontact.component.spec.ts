import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercontactComponent } from './containercontact.component';

describe('ContainercontactComponent', () => {
  let component: ContainercontactComponent;
  let fixture: ComponentFixture<ContainercontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainercontactComponent]
    });
    fixture = TestBed.createComponent(ContainercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
