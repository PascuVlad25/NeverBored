import { Component } from '@angular/core';
import { NavController, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    userName = "";
  obiect = { 'progres': '0%', 'color': '#488aff'};
  total_puncte = 0;
    current_level = 1;
    max_points = 6;
   levels = [{nr: 1, xp: 20}, {nr: 2, xp: 40}, {nr: 3, xp: 80}, {nr: 4, xp: 140}];
    badge_level = ["neutral", "Bronze", "Silver", "Gold", "Legendary"];
    badge_level_points = [1, 5, 10, 25];
    
    badges = [{src:"assets/img/neutral.png", title: "Never bored", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Challenge accepted!", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Sports addict", rank: "neutral", points: 0}, {src:"assets/img/neutral.png", title: "Squad Leader", rank: "neutral", points: 0}];
    
  constructor(public navCtrl: NavController, private statusBar: StatusBar, public events: Events, public storage: Storage, public alertCtrl: AlertController) {
      this.statusBar.styleDefault();
      
      events.subscribe('data:points', (puncte) => {   // SHARE DATA WITH TAB 1
      this.total_puncte += puncte;                    //
      if(this.total_puncte >= this.max_points)
          this.level_up();   

    this.procentBara();
          
    });                                              // 
      
      storage.get('myProfile').then((profil) => {
          if(profil){
              this.current_level = profil.level;
              this.max_points = this.getMaxPoints(profil.level);
              this.userName = profil.firstName + " " + profil.secondName;
          }
          
      });
      
      storage.get('myPoints').then((puncte) => {
          
              if(puncte>=this.max_points){
                    this.total_puncte = puncte;
                    this.level_up();
                    }
                  else
                    this.total_puncte = puncte;
          
          this.procentBara();
      });
      
      storage.get('myBadges').then((myBadges) => {
          
              for(let i=0; i<myBadges.length; i++){
                  this.badges[i].src = "assets/img/" + myBadges[i].rank + ".png";
                  this.badges[i].rank = myBadges[i].rank;
                  this.badges[i].points = myBadges[i].points;
              }
          
      });
      
      events.subscribe('data:badges', (badges) => {   // SHARE DATA WITH Data.ts
          this.badges = badges;                       //
      });                                             // 
      
  }
    
    level_up(){
        this.events.publish('data:levelup', 1);  // EVENT TAB 1
        
        this.total_puncte %= this.max_points;
        console.log(this.total_puncte);
          this.current_level++;
          this.storage.set('level', this.current_level);
          this.storage.set('myPoints', this.total_puncte);
          this.max_points = this.getMaxPoints(this.current_level);
    }
    
    procentBara(){
        let procent = (this.total_puncte * 100 / this.max_points);  
        this.obiect.progres = procent.toFixed(2) + '%';
        console.log(this.obiect.progres);
    }
    
    getMaxPoints(level){
        return this.levels[this.current_level-1].xp;
    }
    
    add(i){
        this.total_puncte += i;
       // this.obiect.progres = '20%';
        console.log(this.total_puncte);
        this.procentBara();
    }
    
    reset(){
        this.storage.remove('myProfile');
        this.storage.remove('myPoints');
        this.storage.remove('myBadges');
        this.storage.remove('myEnergy');
        this.storage.remove('myTasks');
        this.storage.remove('FirstTime');
    }
    
    update(){
        this.storage.get('myPoints').then((puncte) => {
            this.total_puncte = puncte;
            this.procentBara();
        });
    }
    
    viewBadge(badge){
        let max_points;
        for(let i=0; i<this.badge_level.length; i++)
            if(this.badge_level[i] == badge.rank)
                max_points = this.badge_level_points[i];
        
        const confirm = this.alertCtrl.create({
          title: badge.title,
          message: badge.rank + " <br> " + badge.points + "/" + max_points,

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
