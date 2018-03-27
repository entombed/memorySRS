import { Component, OnInit } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [GetRandomItemService]
})
export class StartPageComponent implements OnInit {

  constructor(private _getRandomItem : GetRandomItemService) { }

  ngOnInit() {
    this.getNext();
  }

  question: any;
  questionsArray = [
    {
      question: 'вопрос первый?',
      answer: 'повернуть на лево',
    },
    {
      question: 'вопрос второй?',
      answer: 'взглянуть вверх',
    },
    {
      question: 'вопрос третий?',
      answer: 'переступить порог',
    },
    {
      question: 'вопрос четвертый?',
      answer: 'подняться по ступеньке',
    },
    {
      question: 'вопрос пятый?',
      answer:`
подпрыгнуть
sasas asasa
  getAnswer(){
    console.log("qqqq")
  }
`
    },
  ]

  getNext() {
    let item = this._getRandomItem.getItem(0, this.questionsArray.length);
    this.question = this.questionsArray[item];
  }
}
