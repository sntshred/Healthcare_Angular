import { Component, OnChanges, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "ah-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starwidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starwidth = (this.rating * 75) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(` the rating ${this.rating} is clicked`);
  }
}
