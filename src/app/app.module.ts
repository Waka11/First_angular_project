import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeadComponent } from "./head/head.component";
import { MainComponent } from "./main/main.component";
import { ListComponent } from "./main/list/list.component";
import { FootComponent } from "./foot/foot.component";

@NgModule({
  declarations: [AppComponent, HeadComponent, MainComponent, ListComponent, FootComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
