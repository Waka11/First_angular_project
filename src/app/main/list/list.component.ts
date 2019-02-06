import { Component } from "@angular/core";

@Component({
  selector: "main-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  name = null;
  surname = null;
  age = null;

  savedName = null;
  savedSurname = null;
  savedAge = null;

  time = null;

  colorChange() {
    let date = new Date();
    this.time = date.getHours();
    return this.time < "13" ? "aqua" : "darkorange";
  }

  nightColor() {}

  saveInfo() {
    this.savedName = this.name;
    this.savedSurname = this.surname;
    this.savedAge = this.age;
    console.log();
  }
}
