import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.scss']
})
export class LessonCardComponent implements OnInit {

  @Input() aulaDescricao;
  @Input() moduloDescricao;
  @Input() disciplinaDescricao;
  @Input() areaconhecimentoDescricao;

  cssClass: String = '';

  constructor() { }

  ngOnInit() {
    this.addClass();
  }

  addClass() {

    switch (this.areaconhecimentoDescricao) {
      case 'Ciências Humanas':
        this.cssClass = 'health-ciences';
        break;

      case 'Ciências da Natureza':
        this.cssClass = 'natural-ciences';
        break;
      case 'Linguagens e Códigos':
        this.cssClass = 'languages-and-codes';
        break;
      case 'Matemática':
        this.cssClass = 'math';
        break;
    }
  }
}
