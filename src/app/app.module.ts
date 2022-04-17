import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { CreateEditQuestionsComponent } from './create-edit-questions/create-edit-questions.component';
import { AnswerAreaComponent } from './answer-area/answer-area.component';
import { QuillModule } from 'ngx-quill';
import { PreviewComponent } from './preview/preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewSwitcherComponent,
    CreateEditQuestionsComponent,
    AnswerAreaComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
