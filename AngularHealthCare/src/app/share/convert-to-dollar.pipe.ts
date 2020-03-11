import { Pipe, PipeTransform } from "@angular/core";
import { format } from "util";

@Pipe({
  name: "ConverToDollar"
})
export class ConvertToDollars implements PipeTransform {
  transform(value: number, charcter: string) {
    var format = new Intl.NumberFormat("en-INR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    format.format(value);
  }
}
