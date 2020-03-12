import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DrugReportComponent } from "./drug-report.component";

describe("DrugReportComponent", () => {
  let component: DrugReportComponent;
  let fixture: ComponentFixture<DrugReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrugReportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
