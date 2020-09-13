import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chooseAnswer(event) {
    // TODO: remove hard coded example.
    if (event.target.innerText === 'Yaounde') {
      event.target.classList.add('animate__animated', 'animate__pulse', 'right-answer');
    } else {
      event.target.classList.add('animate__animated', 'animate__shakeX',  'wrong-answer');
    }
    // Answer question and move to next round
  }

}
