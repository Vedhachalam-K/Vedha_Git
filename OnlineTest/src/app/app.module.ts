import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from './app.component';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { ReviewQuizComponent } from './review-quiz/review-quiz.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { AppRouterModule } from "./approuter.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { MemDbService } from './service/mem-db.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowQuizComponent,
    ReviewQuizComponent,
    ShowResultComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRouterModule, HttpClientModule, InMemoryWebApiModule.forRoot(MemDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
