import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { SearchResponse, DownsizedSmall, Gif } from '../interfaces/gifs.interfaces';
import { LocalStorageService } from './localStorage.service';

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

constructor(private http: HttpClient
  //,private localStorage: LocalStorageService
  ) {
    //actualizamos historial
    this.loadLocalStorage();

    //mostramos elementos de la ultima busqueda
    this.searchTag(this._tagshistory[0]);


  }

get tagsHistory() {
  return [...this._tagshistory];
  //return this._tagshistory;
}

private organizeHistory(tag: string){
  tag = tag.toLowerCase();

  if(this._tagshistory.includes(tag)){
    this._tagshistory = this._tagshistory.filter((oldTag) => oldTag !== tag);
  }

  // //si está almacenado en el localStorage lo recuperamos
  // if(this.localStorage.get("tagsHistory")){
  //   console.log("Recuperado de localStorage: ", this.localStorage.get("tagsHistory"));
  //   this._tagshistory = this.localStorage.get("tagsHistory");
  // }

  this._tagshistory.unshift(tag);

  //almacenamos en localStorage
  // this.localStorage.set("tagsHistory",this._tagshistory);


  this._tagshistory = this._tagshistory.splice(0,10);
  this.saveLocalStorage(this._tagshistory);

}

private saveLocalStorage(data:string[]):void{
  localStorage.setItem('history',JSON.stringify(data));
}

private loadLocalStorage():void{

  if(!localStorage.getItem('history'))return;

  this._tagshistory = JSON.parse(localStorage.getItem('history')!);

  if (this._tagshistory.length === 0)return;
  this.searchTag(this._tagshistory[0]);

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
