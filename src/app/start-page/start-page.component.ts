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
  question: "Какое булево значение вернется если: 1,2,3, Infinity, -Infinity, 'string'",
  answer: "Ответ: True"
},
{
  question: "Какое булево значение вернется если: 0, -0, null, NaN, Undefined",
  answer: "Ответ: False"
},
{
  question: `
Написать инструкцию switch
let a = 10;
let b = 20;`,
  answer: `
  switch (a) {
    case 10:
    console.log('10');
    break;

    case 20:
    console.log('20');
    break;

    default:
    console.log('default');
    break;
  }
  //10`,
},
{
  question: `
  Что выведет в консоли:

  let c = 1;
  for (let i = 0; i < 10; i++) {
    c = c*2;
    if (i === 5) {
      break;
    }
    console.log('Шаг ' + i + '- '+ c);
  }`,
  answer: `
  Шаг 0- 2
  Шаг 1- 4
  Шаг 2- 8
  Шаг 3- 16
  Шаг 4- 32`,
},
{
  question: `
  Что выведет в консоли:

  let c = 1;
  for (let i = 0; i < 7; i++) {
    c = c*2;
    if (i === 5) {
      continue;
    }
    console.log('Шаг ' + i + '- '+ c);
  }`,
  answer:`
  Шаг 0- 2
  Шаг 1- 4
  Шаг 2- 8
  Шаг 3- 16
  Шаг 4- 32
  Шаг 6- 128`
},
{
  question: `
  Написать инструкцию do while
  let a = 10;
  b = 20;
  c = 0;
  a = a*2;
  c < 5;`,
  answer:`
  do {
    a = a*2;
    console.log(a);
    c++;
  }
  while (c < 5);`
},
{
  question: `
  Написать инструкцию while

  let a = 2;
  let i = 0;
  a = a + 1`,
  answer:`
  while (i < 10) {
    a = a + 1;
    console.log('Шаг - ' + i + ' Ответ - ' + a);
    i++;
  }`
},
// {
//   question: ``,
//   answer:``
// },
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
