import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartLineComponent } from './my-chart-line.component';

describe('MyChartLineComponent', () => {
  let component: MyChartLineComponent;
  let fixture: ComponentFixture<MyChartLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChartLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
