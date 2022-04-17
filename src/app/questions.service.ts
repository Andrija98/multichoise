import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions = []

  getQuestions(quest, answers, id){

    this.questions.push({
      "question": quest,
      "answers": answers,
      "id": id
    })

  }


  constructor() { }
}
