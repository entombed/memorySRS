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
        style({transform: 'translateX(-100%)', opacity:0}), animate('200ms'),
        ]),
      ]),
    ]
  })
export class DialogWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() inQuestion;
  @Output() outGetNext = new EventEmitter<any>();

  display: boolean = true;
  displayAnswer: boolean = false;

  show(){
    this.display = true;
  }

  next(){
    this.displayAnswer = false;
    this.outGetNext.emit();
  }

}
