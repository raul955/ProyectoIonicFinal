import { Component, OnInit } from '@angular/core';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

variable = "admin@getAttrsForDirectiveMatching.com";

  constructor() { }

  ngOnInit() {
  }

}
