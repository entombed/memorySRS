import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
        trigger,
        state,
        style,
        animate,
        transition
      } from '@angular/animations';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css'],
  animations: [ 
    trigger ('animateAnswer', [
      transition('void => *', [
         style({opacity:0}), animate('300ms'),
      ]),
    ]),
  ]
})

export class DialogWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() inQuestion;
  @Output() outGetQuestion = new EventEmitter<any>();

  displayDialog: boolean = false;
  displayAnswer: boolean = false;

  show(){
    this.outGetQuestion.emit();
    this.displayDialog = true;
  }

  next(){
    this.displayAnswer = false;
    this.outGetQuestion.emit(this.inQuestion.id);
  }

}
