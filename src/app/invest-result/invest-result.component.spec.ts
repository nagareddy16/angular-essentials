import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestResultComponent } from './invest-result.component';

describe('InvestResultComponent', () => {
  let component: InvestResultComponent;
  let fixture: ComponentFixture<InvestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
