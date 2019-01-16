import { Component } from '@angular/core';
import { NavController, Events, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { Data } from './data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
    
    public items= [];
    energy = 5;
    time = new Date();
    level_up = 0;
    user = {firstName: "", secondName: ""};
    
    
    stil_tab =[{'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false}, 
               {'margin': '1em', width: '40%', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false}, 
               {'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false}];
    

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public storage: Storage, public dataService: Data, public events: Events, public alertCtrl: AlertController, public toastCtrl: ToastController) {
     this.statusBar.styleDefault();
      
      events.subscribe('data:task', (task) => {   // SHARE DATA WITH TAB 2
      this.items.push(task);                         //
    });                                              //
      events.subscribe('data:energy', (energie) => {   // SHARE DATA WITH TAB 2
      this.energy = energie;                         //
    }); 
      events.subscribe('data:levelup', (level_up_sw) => {    // SHARE DATA WITH TAB 3
          this.level_up = level_up_sw;
      });         
      
      storage.get('myEnergy').then((energie) => {
         if(energie && energie.month == this.time.getMonth() && energie.day == this.time.getDate())
              this.energy = energie.number;
          else{
              var aux = {day:this.time.getDate(), month:this.time.getMonth(), number:5};
              storage.set('myEnergy', aux);
          }
      });
      
      storage.get('myTasks').then((tasks) => {
          if(tasks)
              this.items = tasks;
      });
      
       storage.get('myProfile').then((profile) => {
          if(profile)
              this.user = profile;
      });
  }                                         // constructor ends

    
    refill(){
        this.energy = 5;
        this.storage.set('myEnergy', this.energy);
    }
    
    presentToast(task) {
    const toast = this.toastCtrl.create({
      message: "Congrats! You've reached " + task.points + " points!",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

    resize(n){
        if(this.stil_tab[n].opened == false){
            if(this.stil_tab[0].opened) this.resize(0);
            if(this.stil_tab[1].opened) this.resize(1);
            if(this.stil_tab[2].opened) this.resize(2);
            
            this.stil_tab[n] = {'margin': '0', 'border-radius': '0', 'box-shadow': '0', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '20%', 'opened': true};
            
        }
        else
            this.stil_tab[n] ={'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false};
    }
    
    removeTaskFromList(task){
        for(var i=0; i<this.items.length; i++)
                  if(this.items[i].name == task.name)
                      this.items.splice(i, 1);
              this.storage.set('myTasks', this.items);
    }
    
    checkTask(task) {
       
    const confirm = this.alertCtrl.create({
      title: task.name,
      message: task.dificulty,
        
      buttons: [
          {
          text: "Cancel",
          role: 'cancel',
          cssClass: 'alertButton',
          handler: () => {}
        },
        {
          text: "I did it!",
          handler: () => {
              this.presentToast(task);
                
              this.storage.get('myPoints').then((puncte) => {   // Save in storage PUNCTE
                  puncte += task.points;
                  this.storage.set('myPoints', puncte).then(() => {
                       this.events.publish('data:points', task.points); // EVENT
                      
                      if(this.level_up){         // POPUP LEVELUP
                    //  this.level_up_alert();
                      this.level_up = 0;
                      let that = this;
                      window.setTimeout(function(){ that.level_up_alert();}, 500); // delay 1sec
                      
                    }
                      
                  });
              });  
              this.removeTaskFromList(task);
              this.dataService.IncreaseBadge(["NeverBored"]);  // increase NeverBored badge progress
                    
          }
        }
      ]
    });
    confirm.present();
  }
    
    optionsTask(task){
        const confirm = this.alertCtrl.create({
      title: task.name,
      message: task.dificulty,
        
      buttons: [
             {
              text: "Remove",
              cssClass: 'deleteButton',
              handler: () => {                       // REMOVE TASK
                  this.removeTaskFromList(task);
                    }
             }, 
             {
                 text: "Highlight",
                 handler: () => {
                     this.highlightTask(task);
                 }
             },
             {
              text: "Cancel",
              role: 'cancel',
              handler: () => {}
            }
           ]
    });
    confirm.present();
    }
    
    level_up_alert(){
        const confirm = this.alertCtrl.create({
          title: "Congratulation!",
          message: "You've just leveled up",

          buttons: [
              {
              text: "Thanks",
              role: 'cancel',
              handler: () => {}
            }
          ]
    });
        confirm.present();
     
    }
    
    to_ideas(){
        this.navCtrl.parent.select(1);
    }
    
    to_progress(){
        this.navCtrl.parent.select(2);
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
    
    setName(){
        const confirm = this.alertCtrl.create({
          title: "Hi there!",
          message: "I'm NeverBored - your new app that won't let you get bored. I'm going to give you the best ideas to do in your spare time. But first, I would like to know your name.",
          inputs: [
                    {
                        name: 'firstName',
                        placeholder: 'First Name'
                    },
              {
                        name: 'secondName',
                        placeholder: 'Second Name'
                    }
                ],
          buttons: [
              {
              text: "Nice to meet you!",
              handler: (response) => {
                  this.user.firstName = response.firstName;
                  this.user.secondName = response.secondName;
                  this.storage.get('myProfile').then((profile) => {
                      profile.firstName = this.user.firstName;
                      profile.secondName = this.user.secondName;
                      this.storage.set('myProfile', profile);
                  });
              }
            }
          ]
    });
        confirm.present();
    }
    
    highlightTask(task){
        for(var i=0; i<this.items.length; i++)
                  if(this.items[i].name == task.name){
                      if(!task.highlight){
                          this.items[i].icon = this.items[i].icon.slice(0, -8);
                          this.items[i].highlight = 1;
                      }
                      else{
                          this.items[i].icon += "-outline"; 
                          this.items[i].highlight = 0;
                      }
                      console.log(this.items[i].icon);
                  }
              this.storage.set('myTasks', this.items);
    }
    
    
}
