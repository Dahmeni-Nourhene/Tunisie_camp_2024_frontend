import { Component, OnInit } from '@angular/core';
import { Feedback } from '../services/feedback';
import { FeedbackService } from '../services/feedback.service';



@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks!: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService.getAll()
      .subscribe(feedbacks => this.feedbacks = feedbacks);
  }
}
