import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { NavigationPage } from './navigation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    
    tabs = [{'color': 'nice_red', 'hex' : '#e74c3c', 'titlu': 'All topics', 'clasa': 'f', icon: 'ios-bulb-outline'}, 
            {'color': 'nice_orange', 'hex': '#ea8828', 'titlu': 'Entertainment', 'clasa': 'e', icon: 'ios-game-controller-b-outline'},
           {'color': 'nice_yellow', 'hex': '#f1c40f', 'titlu': 'Sport', 'clasa': 'd', icon: 'ios-basketball-outline'},
           {'color': 'nice_green', 'hex': '#2ecc71', 'titlu': 'Indoor', 'clasa': 'c', icon: 'ios-home-outline'},
           {'color': 'nice_blue', 'hex': '#3498db', 'titlu': 'w/ Friends', 'clasa': 'b', icon: 'ios-chatbubbles-outline'},
           {'color': 'nice_purple', 'hex': '#9b59b6', 'titlu': 'Knowledge', 'clasa': 'a', icon: 'ios-flask-outline'},{'color': 'nice_red', 'hex' : '#e74c3c', 'titlu': 'Couple', 'clasa': 'g', icon: 'ios-heart-outline'}];
    
  constructor(public navCtrl: NavController, public viewCtrl: ViewController ,private statusBar: StatusBar, public navParams: NavParams, public alertCtrl: AlertController) {
         
       if(this.viewCtrl.name == 'AboutPage')
           this.statusBar.styleLightContent();
      else
          this.statusBar.styleDefault;
  }
    
    navigate(tab){
        this.navCtrl.push(NavigationPage, { page : tab, titlu : tab.titlu });
    }
    
    f(){
        const confirm = this.alertCtrl.create({
          title: "This isn't available",
          message: "Not yet...",

          buttons: [
              {
              text: "Cancel",
              role: 'cancel',
              handler: () => {}
            }
          ]
    });
        confirm.present();
    }
  
}
