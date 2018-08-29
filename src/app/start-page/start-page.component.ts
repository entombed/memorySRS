import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ShuffleService } from '../services/shuffle.service';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { CreateQuestionsService } from '../services/create-questions.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ShuffleService,
    CreateQuestionsService
  ]
})
export class StartPageComponent implements OnInit {

  @ViewChild(DialogWindowComponent) private dialogWindowComponent: DialogWindowComponent;
  constructor(
    private _shuffleService: ShuffleService,
    private _createQuestionsService: CreateQuestionsService
  ) { }
  questionsArray = [];
  selectedCategories = [];
  randomMode: boolean = true;

  ngOnInit() {
    this._createQuestionsService.craeteAllArray();
  }

  question: any;

  getQuestion(id?) {
    if (id === undefined) {
      this.question = this.questionsArray[0];
      this.question.id = 0;
    } else if (id + 1 < this.questionsArray.length) {
      this.question = this.questionsArray[id + 1];
      this.question.id = id + 1;
    } else if (id + 1 == this.questionsArray.length) {
      this.theEnd();
    }
  }

  showDialog() {
    this.questionsArray = this._createQuestionsService.createQuestionsArray(this.selectedCategories, this.randomMode);
    if (this.questionsArray.length > 0) {
      this.getQuestion();
      this.dialogWindowComponent.show();
    }
  }

  theEnd() {
    this.question = {
      question: "Вопросы закончились",
      id: -1
    }
    if (this.randomMode) {
      this.questionsArray = this._shuffleService.mixIt(this.questionsArray);
    }
  }
}
