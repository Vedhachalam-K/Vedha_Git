import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Quiz } from '../model/quiz.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  quizes:Quiz[];
  mark:number = 0;

  constructor(private _qService:QuizService, private _router:Router) {
    this.quizes = new Array<Quiz>();
    this.getAnsweredQuiz();
  }

  ngOnInit() {
    
  }

  getAnsweredQuiz(){
    this._qService.getQuestions().subscribe(qo => {
      qo.forEach(q => this.quizes.push(q));
    });
  }

  getQuizes():Quiz[]{
    return this.quizes;
  }

  getTotalQuestions():number{
    return this.quizes.length;
  }

  getResult():number{

    this.mark = 0;

    for(var n:number=0;n<this.getQuizes().length;n++){
      let tempQuiz = this.getQuizes().find(q => q.id == n+"");

      console.log("tempQuiz = "+JSON.stringify(tempQuiz));
      console.log("tempQuiz.answer = " + tempQuiz.answer);
      console.log("tempQuiz.selectedAnswer = " + tempQuiz.selectedAnswer);
      
      let answer:String = tempQuiz.answer;
      let selectedAnswer:String = tempQuiz.selectedAnswer;

      if(answer === selectedAnswer){
        this.mark++;
      }

      console.log("--------------------------------")
    }

    console.log("The result is: "+this.mark);

    return this.mark;
  }

  retry(){
    for(var n:number=0;n<this.getQuizes().length;n++){
      let tempQuiz = this.getQuizes().find(q => q.id == n+"");
      tempQuiz.selectedAnswer = "";
      this._qService.updateAnswers(tempQuiz).subscribe(statusCode => {
        console.log("The status code is: "+statusCode);
      })
    }

    this._router.navigateByUrl('attendQuiz');
  }

}
