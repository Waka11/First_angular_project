import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  name: string = "FOOTER";
  online: number = 48;
  siteName: string = "Angular";

  button = false;
  className = "btn btn-dark";

  rocketState = "READY";
  rocketName = null;
  rocketNoName = null;
  rocketStatus = Math.random() > 0.5 ? "Successful" : "Failed";

  model = "...";
  savedModel = null;

  persons = ['Jack', 'Bill', 'Sam', 'John Ceeena!!!'];

  start() {
    this.rocketState = "LAUNCHED";
    this.button = false;
    this.className = "btn btn-dark";
    setTimeout(() => {
      this.button = true;
      this.className = "btn btn-primary";
      this.rocketState = "READY";
    }, 2000);
    this.rocketStatus = Math.random() > 0.5 ? "Successful" : "Failed";
  }

  getColor(){
    return this.rocketStatus === 'Successful' ? 'aqua' : 'darkorange';
  }

  restart(event: Event) {
    this.rocketName = (<HTMLInputElement>event.target).value;
  }

  saveValue() {
    this.rocketNoName = this.rocketName;
  }

  saveModel() {
    this.savedModel = this.model;
  }

  getSiteName() {
    return this.siteName;
  }

  constructor() {
    setTimeout(() => {
      this.button = true;
      this.className = "btn btn-primary";
    }, 3000);
  }

  ngOnInit() {}
}
