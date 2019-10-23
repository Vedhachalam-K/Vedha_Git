import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class MemDbService implements InMemoryDbService {

  createDb(){
    let quizes = [
      {
        "id":"0",
        "question":"What is the capital of America?",
        "option1":"Washington DC",
        "option2":"New Delhi",
        "default":"",
        "answer":"Washington DC",
        "selectedAnswer":""},
        
        {
        "id":"1",
        "question":"In which continent does America situated?",
        "option1":"North America",
        "option2":"Asia",
        "default":"",
        "answer":"North America",
        "selectedAnswer":""},
        
        {
        "id":"2",
        "question":"Who is the president of America?",
        "option1":"Donald Trump",
        "option2":"Narendra Modi",
        "default":"",
        "answer":"Donald Trump",
        "selectedAnswer":""},
        
        {
        "id":"3",
        "question":"What is the currency of America?",
        "option1":"Dollar",
        "option2":"Rupee",
        "default":"",
        "answer":"Dollar",
        "selectedAnswer":""},
        
        {
        "id":"4",
        "question":"How many states are there in America?",
        "option1":"50",
        "option2":"100",
        "default":"",
        "answer":"50",
        "selectedAnswer":""}
    ];

    return {
      quizes:quizes
    }
  }
  
}
