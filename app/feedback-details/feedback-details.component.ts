import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Feedback } from '../services/feedback';
import { FeedbackService } from '../services/feedback.service';
@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  feedback!:Feedback;

  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = +idString;
      if (!isNaN(id)) {
        this.feedbackService.getById(id)
          .subscribe(feedback => this.feedback = feedback);
      }
    }
  }
  
  
  
}
