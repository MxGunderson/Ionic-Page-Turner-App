import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterTwoPage } from '../chapter-two/chapter-two';
import { ChapterOnePage } from '../chapter-one/chapter-one';

/**
 * Generated class for the Chapter1page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter1page2',
  templateUrl: 'chapter1page2.html',
})
export class Chapter1page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1page2Page');
  }
  launchContinue() {
    this.navCtrl.push(ChapterTwoPage);
  }
  launchBack() {
    this.navCtrl.push(ChapterOnePage);
  }
}
