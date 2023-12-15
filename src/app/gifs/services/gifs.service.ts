import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchResponse, DownsizedSmall, Gif } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'Bi8Lk3rPMuBpE7R7VWIx72eBCkaytVqC';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  public gifList: Gif[] = [];

  private _tagshistory: string[] = [];
  private apiKey: string = 'Bi8Lk3rPMuBpE7R7VWIx72eBCkaytVqC';
  private url: string="https://api.giphy.com/v1/gifs/search?api_key=Bi8Lk3rPMuBpE7R7VWIx72eBCkaytVqC&q=valorant&limit=10"
  private reduceUrl:string ='api.giphy.com/v1/gifs/search?api_key=Bi8Lk3rPMuBpE7R7VWIx72eBCkaytVqC&q=valorant&limit=10';
  private serviceUrl:string = "https://api.giphy.com/v1/gifs";

constructor(private http: HttpClient) { }

get tagsHistory() {
  return [...this._tagshistory];
  //return this._tagshistory;
}

private organizeHistory(tag: string){
  tag = tag.toLowerCase();

  if(this._tagshistory.includes(tag)){
    this._tagshistory = this._tagshistory.filter((oldTag) => oldTag !== tag);
  }

  this._tagshistory.unshift(tag);

  this._tagshistory = this._tagshistory.splice(0,10);

}
//promise
//async searchTag( tag: string ): Promise<void>{

searchTag( tag: string ): void{

  if (tag.length === 0) return;
  this.organizeHistory(tag);


  // fetch(this.url)
  // .then(resp => resp.json())
  // .then(data => console.log(data));

  // const resp = await fetch(this.url);
  // const data = await resp.json();
  // console.log(data);

  const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit','10')
    .set('q',tag);



this.http.get<SearchResponse>(`${ this.serviceUrl }/search`,{ params: params})
  .subscribe(result=>{
    this.gifList = result.data;
    console.log({gifs: this.gifList});
})


}



}
