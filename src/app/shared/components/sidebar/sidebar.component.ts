import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { LocalStorageService } from 'src/app/gifs/services/localStorage.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public tagHistory: string[] = [];

  constructor(private gifService: GifsService, private localStorage: LocalStorageService) { }

  ngOnInit() {

    //this.updateTagHistory();

  }

  updateTagHistory(){
    if(this.localStorage.get("tagsHistory")){
      console.log("Recuperado de localStorage: ", this.localStorage.get("tagsHistory"));
      this.tagHistory = this.localStorage.get("tagsHistory");
    }
  }

  get tags(): string[]{
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string):void {


    this.gifService.searchTag(tag);


  }


}
