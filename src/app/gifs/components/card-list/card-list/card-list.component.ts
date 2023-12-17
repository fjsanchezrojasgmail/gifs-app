import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'home-page-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input()
  public gifs: Gif[] = [];
  public genericText ="No Title";

  constructor() { }

  ngOnInit() {
  }

}
