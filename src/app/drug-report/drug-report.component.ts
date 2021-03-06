import { Component, OnInit, Input } from "@angular/core";
import { IDruginfo } from "./Druginfo";
import { ConstantPool } from "@angular/compiler";
import { DrugService } from "./drug.service";

@Component({
  templateUrl: "./drug-report.component.html",
  styleUrls: ["./drug-report.component.css"]
})
export class DrugReportComponent implements OnInit {
  constructor(private drugService: DrugService) {}

  filterDrugs: IDruginfo[];
  DrugInfo: IDruginfo[];
  _listFilter: string;

  pageTitle: string = "Drug List: ";

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    console.log(`Filter values ${value}`);
    this._listFilter = value;

    this.filterDrugs = this.listFilter
      ? this.performfilterDrugs(this.listFilter)
      : this.DrugInfo;
  }

  //Good place to retrive the data
  ngOnInit(): void {
    this.drugService.getDrugInfo().subscribe({
      next: drugs => {
        this.DrugInfo = drugs;
        this.filterDrugs = this.DrugInfo;
      }
    });
  }

  performfilterDrugs(fiterBy: string): IDruginfo[] {
    return this.DrugInfo.filter(
      (drug: IDruginfo) => drug.month_dispensed === fiterBy
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Drug List" + message;
  }
}
