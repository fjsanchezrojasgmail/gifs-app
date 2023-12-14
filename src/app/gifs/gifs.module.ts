import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home/home-page.component';



@NgModule({
  declarations: [
    SidebarComponent,HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,HomePageComponent
  ]
})
export class GifsModule { }
