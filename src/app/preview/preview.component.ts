import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  questions

  constructor( private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.questions;

  }

}
