import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/to_do/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, screenOrientation: ScreenOrientation, storage: Storage) {
    splashScreen.show();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        
       splashScreen.hide();
//     screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
        
        storage.get('FirstTime').then((firstTime) => {
            if(!firstTime){
                initializeStorage();
                storage.set('FirstTime', true);
            }
                
        })
    });
      
    function initializeStorage(){
            let time = new Date();
            let obj = {day:time.getDate(), month:time.getMonth(), number:5};
            let profile = {firstName: "", secondName: "", level: 1};
            let badges = [{src:"assets/img/neutral.png", title: "Never bored", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Challenge accepted!", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Sports addict", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Squad Leader", rank: "neutral", points: 0}];
        
              storage.set('myEnergy', obj).then(()=>{ console.log("Energy: created");});
              storage.set('myTasks', []).then(()=>{ console.log("Tasks: created");});
              storage.set('myProfile', profile).then(()=>{ console.log("Profile: created");});
              storage.set('myPoints', 0).then(()=>{ console.log("Points: created");});
              storage.set('myBadges', badges).then(()=>{ console.log("Badges: created");});
    }
      
  }
    
}
