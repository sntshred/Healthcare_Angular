import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DrugReportComponent } from "./drug-report/drug-report.component";
import { ConvertToDollars } from "./share/convert-to-dollar.pipe";
import { StarComponent } from "./share/star.component";
import { WelcomeComponentComponent } from "./welcome-component/welcome-component.component";
import { DrugDetailComponentComponent } from "./drug-detail-component/product-detail-component.component";

@NgModule({
  declarations: [
    AppComponent,
    DrugReportComponent,
    ConvertToDollars,
    StarComponent,
    WelcomeComponentComponent,
    DrugDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: "drugs", component: DrugReportComponent },
      { path: "drugs:id", component: DrugDetailComponentComponent },
      { path: "welcome", component: WelcomeComponentComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
