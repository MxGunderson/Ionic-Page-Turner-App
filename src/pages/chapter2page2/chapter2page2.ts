import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterThreePage } from '../chapter-three/chapter-three';
import { ChapterTwoPage } from '../chapter-two/chapter-two';

/**
 * Generated class for the Chapter2page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter2page2',
  templateUrl: 'chapter2page2.html',
})
export class Chapter2page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2page2Page');
  }
  launchContinue() {
    this.navCtrl.push(ChapterThreePage);
  }
  launchBack() {
    this.navCtrl.push(ChapterTwoPage);
  }
}
