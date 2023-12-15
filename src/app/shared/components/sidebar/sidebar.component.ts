import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public tagHistory: string[] = [];

  constructor(private gifService: GifsService) { }

  ngOnInit() {

    this.updateTagHistory();

  }

  updateTagHistory(){
    this.tagHistory = this.gifService.tagsHistory;
  }

  get tags(){
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string) {


    this.gifService.searchTag(tag);


  }


}
