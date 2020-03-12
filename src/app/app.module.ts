import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DrugReportComponent } from "./drug-report/drug-report.component";
import { ConvertToDollars } from "./share/convert-to-dollar.pipe";
import { StarComponent } from "./share/star.component";

@NgModule({
  declarations: [
    AppComponent,
    DrugReportComponent,
    ConvertToDollars,
    StarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
