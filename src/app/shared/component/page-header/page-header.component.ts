import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  showLogout() {

    if (localStorage.getItem('isLoggedin')) {

      return true;

    } else {

      return false;

    }
  }

  goLogout() {

    localStorage.clear();

    this._router.navigate(['']);

  }
}
