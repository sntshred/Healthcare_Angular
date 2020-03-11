import { Component } from "@angular/core";

@Component({
  selector: "ah-root",
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <drug-report> </drug-report>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Angular Health Care";
}
