import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterOnePage } from '../chapter-one/chapter-one';
import { ChapterThreePage } from '../chapter-three/chapter-three';
import { TableOfContentsPage } from '../table-of-contents/table-of-contents'; 

/**
 * Generated class for the Chapter3page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter3page2',
  templateUrl: 'chapter3page2.html',
})
export class Chapter3page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3page2Page');
  }
  launchPrevious() {
    this.navCtrl.push(ChapterThreePage);
  }

  launchChapterOne() {
    this.navCtrl.push(ChapterOnePage);
  }
  launchBack() {
    this.navCtrl.push(TableOfContentsPage);
  }
}
