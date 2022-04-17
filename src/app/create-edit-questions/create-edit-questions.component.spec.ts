import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditQuestionsComponent } from './create-edit-questions.component';

describe('CreateEditQuestionsComponent', () => {
  let component: CreateEditQuestionsComponent;
  let fixture: ComponentFixture<CreateEditQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
