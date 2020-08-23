import { Answer } from './answer';

export interface Question {
  id: String;
  label: string;
  answerId: String;
  answers: Answer[];
}
