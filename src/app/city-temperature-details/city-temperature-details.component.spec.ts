import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTemperatureDetailsComponent } from './city-temperature-details.component';

describe('CityTemperatureDetailsComponent', () => {
  let component: CityTemperatureDetailsComponent;
  let fixture: ComponentFixture<CityTemperatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTemperatureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTemperatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
