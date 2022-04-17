import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-create-edit-questions',
  templateUrl: './create-edit-questions.component.html',
  styleUrls: ['./create-edit-questions.component.css']
})
export class CreateEditQuestionsComponent implements OnInit {

  editorstyle = {
    height: '50px',
    margin: '5px',
    width: '100%'
  }

  questionForm: FormGroup;
  
  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['image', 'link']
    ]
  }
  config2 ={
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['image']
    ]
  }
  

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      'question': new FormControl('What is .subscribe?'),
      'answers': new FormArray([new FormControl('<p>Streams data asynchronously</p>'),new FormControl('<p>Streams data synchronously</p>')])
    })
  }
  onSubmit(){
    let quest = this.questionForm.get('question').value;
    let answ = this.questionForm.get('answers').value;
    let id = Math.random();
    this.questionService.getQuestions(quest, answ, id);

  }
  onAddAnswer(){
    const control = new FormControl(null);
    (<FormArray>this.questionForm.get('answers')).push(control);
  }

}
