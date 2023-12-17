import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";


import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';




@NgModule({
    declarations: [
        SidebarComponent, HomePageComponent, SearchBoxComponent, CardListComponent
    ],
    exports: [
        SidebarComponent, HomePageComponent
    ],
    imports: [
        BrowserModule, CommonModule,
        SharedModule
    ]
})
export class GifsModule { }
