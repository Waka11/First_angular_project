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

  takeName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  takeSurname(event: Event) {
    this.surname = (<HTMLInputElement>event.target).value;
  }

  takeAge(event: Event) {
    this.age = (<HTMLInputElement>event.target).value;
  }

  saveInfo() {
    this.savedName = this.name;
    this.savedSurname = this.surname;
    this.savedAge = this.age;
  }
}
