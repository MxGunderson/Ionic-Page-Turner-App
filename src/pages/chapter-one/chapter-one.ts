import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter1page2Page } from '../chapter1page2/chapter1page2'
import { TableOfContentsPage } from '../table-of-contents/table-of-contents';
/**
 * Generated class for the ChapterOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-one',
  templateUrl: 'chapter-one.html',
})
export class ChapterOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterOnePage');
  }
  launchContinue() {
    this.navCtrl.push(Chapter1page2Page);
  }
  launchBack() {
    this.navCtrl.push(TableOfContentsPage);
  }
}
