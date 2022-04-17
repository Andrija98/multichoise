import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditQuestionsComponent } from './create-edit-questions/create-edit-questions.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  { path: '', component: CreateEditQuestionsComponent},
  { path: 'view', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
