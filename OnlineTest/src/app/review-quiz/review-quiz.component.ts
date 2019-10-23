import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { QuizService } from '../service/quiz.service';
import { Quiz } from '../model/quiz.model';

@Component({
  selector: 'app-review-quiz',
  templateUrl: './review-quiz.component.html',
  styleUrls: ['./review-quiz.component.css']
})
export class ReviewQuizComponent implements OnInit {

  quizes:Quiz[];

  constructor(private _qService:QuizService, private router:Router) { }

  ngOnInit() {
      this.getAnsweredQuiz();
  }

  getAnsweredQuiz(){
    this._qService.getQuestions().subscribe(qo => {
      this.quizes = qo;
    });
  }

  showQuizWithAnswers():Quiz[]{
    return this.quizes;
  }

  getResult(){
    this.router.navigateByUrl('showResult');
  }
}
