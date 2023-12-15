import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/imageCard/imageCard/imageCard.component';



@NgModule({
  declarations: [
    ImageCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCardComponent
  ]
})
export class SharedModule { }
