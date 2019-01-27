import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterOnePage } from '../chapter-one/chapter-one'
import { ChapterTwoPage } from '../chapter-two/chapter-two'
import { ChapterThreePage } from '../chapter-three/chapter-three'
import { HomePage } from '../home/home';

/**
 * Generated class for the TableOfContentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-of-contents',
  templateUrl: 'table-of-contents.html',
})
export class TableOfContentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

  launchChapterOne() {
    this.navCtrl.push(ChapterOnePage);
  }

  launchChapterTwo() {
    this.navCtrl.push(ChapterTwoPage);
  }

  launchChapterThree() {
    this.navCtrl.push(ChapterThreePage);
  }
  // -------------"next button" not a new page--------
  launchStart() {
    this.navCtrl.push(ChapterOnePage);
  }
  // ---------------"Back to home"---------
  launchCover() {
    this.navCtrl.push(HomePage);
  }
}
