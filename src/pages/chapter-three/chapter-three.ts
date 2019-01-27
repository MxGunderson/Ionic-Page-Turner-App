import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter3page2Page } from '../chapter3page2/chapter3page2';
import { Chapter2page2Page } from '../chapter2page2/chapter2page2';

/**
 * Generated class for the ChapterThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-three',
  templateUrl: 'chapter-three.html',
})
export class ChapterThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterThreePage');
  }
  launchContinue() {
    this.navCtrl.push(Chapter3page2Page);
  }
  launchBack() {
    this.navCtrl.push(Chapter2page2Page);
  }
}
