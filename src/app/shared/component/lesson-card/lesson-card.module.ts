import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonCardComponent } from './lesson-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LessonCardComponent],
  exports: [LessonCardComponent]
})
export class LessonCardModule { }
