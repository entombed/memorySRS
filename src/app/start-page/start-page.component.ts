import { Component, OnInit, ViewChild } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  providers: [GetRandomItemService]
})
export class StartPageComponent implements OnInit {

  @ViewChild(DialogWindowComponent) private dialogWindowComponent: DialogWindowComponent;
  constructor(private _getRandomItem : GetRandomItemService) { }

  ngOnInit() {
    this.getQuestion();
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

  getQuestion(id?) {
    let item = this._getRandomItem.getItem(0, this.questionsArray.length);
    if (id === item) {
      this.getQuestion(this._getRandomItem.getItem(0, this.questionsArray.length))
    } else {
      this.question = this.questionsArray[item];
      this.question.id = item;
    }
  }

  showDialog(){
    this.dialogWindowComponent.show();
  }
}
