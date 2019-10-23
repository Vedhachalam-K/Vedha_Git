import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../service/quiz.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  quizes:Quiz[];
  questionsArray:Quiz[];

  constructor(private _qzService:QuizService, private _router:Router) {
    this.quizes = new Array<Quiz>();
  }

  ngOnInit() {
    this._qzService.getQuestions().subscribe(quizesServiceObject => {
        //this.quizes = quizesServiceObject;
        quizesServiceObject.forEach(q => this.quizes.push(q));
      }
    );
  }

  getQuestionArray():Quiz[]{
    return this.questionsArray;
  }

  getQuiz():Quiz[]{
    return this.quizes;
  }

  submitAnswers(form:NgForm){
    
    let tempQuiz:Quiz;
    for(var n:number=0;n<this.getQuiz().length;n++){
      tempQuiz = this.getQuiz().find(qz => qz.id === n+"");
      console.log("tempQuiz = "+JSON.stringify(tempQuiz));

      let tempString:string = "question"+n;
      let selectedAnswer = form.controls[tempString].value;
      
      if(selectedAnswer === ""){
        tempQuiz.selectedAnswer = "NO ANSWER SELECTED!!";
      }else{
        tempQuiz.selectedAnswer = selectedAnswer;
      }

      console.log("Update object is: "+JSON.stringify(tempQuiz));

      this._qzService.updateAnswers(tempQuiz).subscribe(statusCode => {
        console.log("The response is: "+statusCode);
      });

      console.log("-----------------------------------------------");
    }

    this._router.navigateByUrl('reviewQuiz');
  }

}
