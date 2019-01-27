import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TableOfContentsPage } from '../pages/table-of-contents/table-of-contents'
import { ChapterOnePage } from '../pages/chapter-one/chapter-one';
import { Chapter1page2Page } from '../pages/chapter1page2/chapter1page2';

import { ChapterTwoPage } from '../pages/chapter-two/chapter-two';
import { Chapter2page2Page } from '../pages/chapter2page2/chapter2page2'

import { ChapterThreePage } from '../pages/chapter-three/chapter-three';
import { Chapter3page2Page } from '../pages/chapter3page2/chapter3page2';

//import new pages above, add new pages in declarations (under)
//and under in entryComponents
//i.e TableOfContentsPage

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TableOfContentsPage,

    ChapterOnePage,
    Chapter1page2Page,

    ChapterTwoPage,
    Chapter2page2Page,

    ChapterThreePage,
    Chapter3page2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TableOfContentsPage,
    
    ChapterOnePage,
    Chapter1page2Page,

    ChapterTwoPage,
    Chapter2page2Page,

    ChapterThreePage,
    Chapter3page2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
