import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterOnePage } from './chapter-one';

@NgModule({
  declarations: [
    ChapterOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ChapterOnePage),
  ],
})
export class ChapterOnePageModule {}
