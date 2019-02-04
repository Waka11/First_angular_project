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

  start(){
    this.rocketState = "LAUNCHED";
    this.button = false;
    this.className = "btn btn-dark";
    setTimeout(() => {
      this.button = true;
      this.className = "btn btn-primary";
      this.rocketState = "READY";
    }, 5000);
  }

  restart(event:Event){
    this.rocketName = (<HTMLInputElement>event.target).value;
  }

  getSiteName() {
    return this.siteName;
  }

  constructor() {
    setTimeout(()=>{
      this.button = true;
      this.className = "btn btn-primary";
    },3000);
  }

  ngOnInit() {}
}
