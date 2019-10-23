import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quiz } from "../model/quiz.model";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  getQuestions():Observable<Quiz[]>{
    return this._http.get<Quiz[]>("http://mybackend.com/api/quizes");
  }

  updateAnswers(q:Quiz):Observable<number>{
    let hh = new HttpHeaders({
      "content-type":"application/json"
    });

    return this._http.put("http://mybackend.com/api/quizes/"+q.id, q, {
      headers:hh,
      observe:"response"
    }).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }

  private handleError(error:any){
    console.log(error);
    return throwError(error);
  }

}
