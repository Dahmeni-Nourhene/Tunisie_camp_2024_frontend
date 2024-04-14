import { Component } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../services/feedback';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent {
  feedback: Feedback = {
    commentaire: '',
    date: new Date(), // Initialisez la propriété date avec une nouvelle instance de Date
    note: 0
  };

  constructor(private feedbackService: FeedbackService) { }

  onSubmit(): void {
    this.feedbackService.create(this.feedback).subscribe(() => {
      console.log('Feedback created successfully');
      // Réinitialiser le formulaire ou rediriger vers une autre page
    }, error => {
      console.error('Error creating feedback:', error);
    });
  }
}
