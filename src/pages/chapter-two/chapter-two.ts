import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter2page2Page } from '../chapter2page2/chapter2page2';
import { Chapter1page2Page } from '../chapter1page2/chapter1page2';
/**
 * Generated class for the ChapterTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-two',
  templateUrl: 'chapter-two.html',
})
export class ChapterTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterTwoPage');
  }
  launchContinue() {
    this.navCtrl.push(Chapter2page2Page);
  }
  launchBack() {
    this.navCtrl.push(Chapter1page2Page);
  }
}
