import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackUpdateComponent } from './feedback-update.component';

describe('FeedbackUpdateComponent', () => {
  let component: FeedbackUpdateComponent;
  let fixture: ComponentFixture<FeedbackUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
