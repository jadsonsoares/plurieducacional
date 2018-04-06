import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {

  private _url = 'http://hom.plurieducacional.com.br/hom.semchamada.plurieducacional.com.br/back/public/aulas';
  private _headers: Headers;

  constructor(private _http: Http) {

    this._headers = new Headers();
    this._headers.append('Authorization', localStorage.getItem('isLoggedin'));

  }

  getLessons() {
    return this._http
      .get(this._url, { headers: this._headers })
      .map(dados => dados.json());
  }

}
