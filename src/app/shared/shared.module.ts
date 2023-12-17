import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/imageCard/imageCard/imageCard.component';
import { LazyImageComponent } from './components/lazyImage/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    ImageCardComponent,LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCardComponent,LazyImageComponent
  ]
})
export class SharedModule { }
