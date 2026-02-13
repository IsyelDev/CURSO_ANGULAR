import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesDetails } from './employes-details';

describe('EmployesDetails', () => {
  let component: EmployesDetails;
  let fixture: ComponentFixture<EmployesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
