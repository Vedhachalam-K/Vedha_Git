import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReviewQuizComponent } from "./review-quiz/review-quiz.component";
import { ShowQuizComponent } from "./show-quiz/show-quiz.component";
import { ShowResultComponent } from "./show-result/show-result.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes:Routes = [
    {path:'', component: WelcomeComponent},
    {path:'reviewQuiz', component:ReviewQuizComponent},
    {path:'attendQuiz', component:ShowQuizComponent},
    {path:'showResult', component:ShowResultComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{

}