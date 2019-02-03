import { Component } from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent {
  button1 = "Home";
  button2 = "About";
  button3 = "Contact";
  button4 = "Quit";
}