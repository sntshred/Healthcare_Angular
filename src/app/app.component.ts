import { Component } from "@angular/core";

@Component({
  selector: "ah-root",
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <ul>
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/drugs']">Drug</a></li>
      </ul>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Angular Health Care";
}
