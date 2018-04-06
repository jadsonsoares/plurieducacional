import { LessonService } from './../../shared/service/lesson/lesson.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Lesson } from './../../shared/service/lesson/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson_list: Array<Lesson> = [];
  p: Number = 1;

  filtro: String = '';
  isEmpty: Boolean = false;

  constructor(private _http: Http, private _service: LessonService) { }

  ngOnInit() {

    this._service.getLessons()
          .subscribe( (rtn) => {
            console.log('asd');
            console.log(rtn);

            this.lesson_list = rtn.data;
          });
  }


}
