import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SidebarComponent,HomePageComponent,SearchBoxComponent,CardListComponent
  ],
  imports: [
    BrowserModule,CommonModule
  ],
  exports: [
    SidebarComponent,HomePageComponent
  ]
})
export class GifsModule { }
