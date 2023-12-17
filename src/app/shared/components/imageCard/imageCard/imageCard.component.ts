import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-imageCard',
  templateUrl: './imageCard.component.html',
  styleUrls: ['./imageCard.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  public genericText ="No Title";

  constructor() { }

  ngOnInit(): void {

    if(!this.gif ) throw new Error('Gif property is required');

  }

}
