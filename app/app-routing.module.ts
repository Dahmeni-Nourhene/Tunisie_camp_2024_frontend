import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackUpdateComponent } from './feedback-update/feedback-update.component';
import { HomeComponent } from './home/home.component';
import { PageFeedbackComponent } from './page-feedback/page-feedback.component';
const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'PageFeedback', component: PageFeedbackComponent },
  { path: 'feedbacks', component: FeedbackListComponent },
  { path: 'feedbacks/create', component: FeedbackCreateComponent },
  { path: 'feedbacks/:id', component: FeedbackDetailsComponent },
  { path: 'feedbacks/:id/update', component: FeedbackUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
