import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'gif-shared-imageCard',
  templateUrl: './imageCard.component.html',
  styleUrls: ['./imageCard.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input()
  public gifs: Gif[] = [];
  public genericText ="Titulo de gif";

  constructor() { }

  ngOnInit() {
  }

}
