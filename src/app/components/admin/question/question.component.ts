import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  editing: Boolean = false;
  expanded: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get answerLabel() {
    return this.question && this.question.answerId? this.question.answers.find(({id}) => id === this.question.answerId).label: '';
  }

}
