import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TableOfContentsPage } from '../table-of-contents/table-of-contents';

//added TableOfContents(page) to imports above
//and added a button on the home html to take us to the next page

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public onButtonClicked(): void {
    let modal = this.modalCtrl.create(TableOfContentsPage);
    modal.present();
  }

}
