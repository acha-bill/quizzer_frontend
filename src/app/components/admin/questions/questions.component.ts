import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [
    {
      id: '1',
      label: 'What is the name of the first man in the bible?',
      answerId: '1',
      answers: [
        {
          id: '0',
          label: 'Mathew'
        },
        {
          id: '1',
          label: 'J.F.K'
        },
        {
          id: '2',
          label: 'Adam'
        },
        {
          id: '3',
          label: 'Jude'
        },
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
