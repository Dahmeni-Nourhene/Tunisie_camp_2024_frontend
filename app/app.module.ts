import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule ici

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackCreateComponent } from './feedback-create/feedback-create.component';
import { FeedbackUpdateComponent } from './feedback-update/feedback-update.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageFeedbackComponent } from './page-feedback/page-feedback.component';
import { FormsModule } from '@angular/forms'; // Importez FormsModule


@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    FeedbackDetailsComponent,
    FeedbackCreateComponent,
    FeedbackUpdateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,// Ajoutez HttpClientModule à la liste des imports
    FormsModule // Ajoutez FormsModule aux imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
