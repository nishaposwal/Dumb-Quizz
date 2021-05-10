import { ThrowStmt } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions;
  questionIndex = 0;
  currentQuestion;
  quizFinished = false;
  optionIndex = 0;
  score = 0;
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.get('../../assets/questions.json').subscribe((res) => {
      this.questions = res;
      this.questions = this.questions.questions;
      console.log(this.questions.questions);
      this.currentQuestion = this.questions[this.questionIndex];
      console.log(this.currentQuestion);
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'Enter' :
      this.submitAnswer();
        break;
      case "ArrowDown" : 
      this.down();
      break;
      case "ArrowUp"  :
        this.up();
        break;
    }
  }

  submitAnswer(){
    if(this.currentQuestion.options[this.optionIndex] == this.currentQuestion.answer){
      this.score = this.score + 100;
    }
    this.optionIndex = 0;
    this.questionIndex++;
    if(this.questionIndex < this.questions.length){
      this.currentQuestion = this.questions[this.questionIndex];
    } else{
      this.quizFinished = true;
    }
  }

  down(){
    this.optionIndex++;
    if(this.optionIndex > 3){
      this.optionIndex = 0
    }
  }

  up(){
    this.optionIndex--;
    if(this.optionIndex < 0){
      this.optionIndex = 3
    }
  }

}
