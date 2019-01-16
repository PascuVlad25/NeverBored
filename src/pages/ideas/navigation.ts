import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Data } from '../to_do/data';

@Component({
    selector: 'page-about',
    templateUrl: 'navigation.html'
})

export class NavigationPage {
    page;
    titlu;
    energy = 5;
    easy_tasks = ["Clear junk on your phone", "Go for a walk", "Watch a movie", "Do a barrel roll", "Read some news", "Learn a joke", "Order a pizza", "Play a game"];
    medium_tasks = ["Make a puzzle", "Play/learn guitar", "Read a book", "Hang out with a friend", "Shoot some cool pics", "Try skateboarding", "Learn a magic trick", "Do some exercises", "Learn to cook a new recipe"];
    hard_tasks = ["Ask your crush for a date", "Go on a trip with friends", "Travel to another city", "Party all night in a club", "Invite friends at your place", "Explore the unknown", "Go to gym", "Redecorate your entire room"];
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams, public alertCtrl: AlertController, public storage: Storage, public dataService: Data, public events: Events){
        this.page = this.params.data.page;
        this.titlu = this.params.get('titlu');
        
        if(this.titlu == 'Sport'){
            this.easy_tasks = dataService.sport_task_easy;
            this.medium_tasks = dataService.sport_task_medium;
            this.hard_tasks = dataService.sport_task_hard;
        }
        else if(this.titlu == 'w/ Friends'){
            this.easy_tasks = dataService.friends_task_easy;
            this.medium_tasks = dataService.friends_task_medium;
            this.hard_tasks = dataService.friends_task_hard;
        }
        else if(this.titlu == 'Knowledge'){
            this.easy_tasks = dataService.knowledge_task_easy;
            this.medium_tasks = dataService.knowledge_task_medium;
            this.hard_tasks = dataService.knowledge_task_hard;
        }
        else if(this.titlu == 'Indoor'){
            this.easy_tasks = dataService.indoor_task_easy;
            this.medium_tasks = dataService.indoor_task_medium;
            this.hard_tasks = dataService.indoor_task_hard;
        }
        else{
            this.easy_tasks = dataService.friends_task_easy.concat(dataService.indoor_task_easy, dataService.knowledge_task_easy, dataService.sport_task_easy) ;
            this.medium_tasks = dataService.friends_task_medium.concat(dataService.indoor_task_medium, dataService.knowledge_task_medium, dataService.sport_task_medium) ;
            this.hard_tasks = dataService.friends_task_hard.concat(dataService.indoor_task_hard, dataService.knowledge_task_hard, dataService.sport_task_hard) ;

        }
        
        this.storage.get('myEnergy').then((energie) => {
            if(!energie){
              let time = new Date();
              var obj = {day:time.getDate(), month:time.getMonth(), number:5};
              storage.set('myEnergy', obj);
            }
            else
                this.energy = energie.number;
        });
    }
    
    get_random(lista, taskuri){
        var sw = 1, elem;
       // console.log(lista);
            while(sw){
            sw=0;
            elem = taskuri[Math.floor(Math.random()*taskuri.length)];
                for(var i=0; i<lista.length && !sw; i++)
                    if(lista[i].name==elem){
                        console.log(lista[i]);
                        sw=1;
                    }
            }
            return elem;    
    }
    
    decreaseEnergy(){
        this.energy--;
        this.events.publish('data:energy', this.energy);  // EVENT energie
        this.storage.get('myEnergy').then((energie) =>{
                            energie.number--;
                            this.storage.set('myEnergy', energie);
                        });
    }
    
    showLimitReached(){
        let alert = this.alertCtrl.create({
    title: 'Task limit reached',
    subTitle: 'You have already 10 tasks waiting for you',
    buttons: ['Okay']
  });
  alert.present();
    }
    
    showConfirm(nr_points) {
        let titlu_task, task, text_confirm = 'Accept', text_cancel = 'Not today', just_decreased=0;

        
       
        this.storage.get('myTasks').then((lista)=>{ 
            console.log("number of tasks:", lista.length);
                      if(lista.length >= 10)
                          this.showLimitReached();   // daca sunte deja 10 activitati
                      else{
                          if(nr_points==5){
                            titlu_task = "Easy task";
                            task = this.get_random(lista, this.easy_tasks);
                            }
                          else if(nr_points==15){
                            titlu_task = "Medium task";
                            task = this.get_random(lista, this.medium_tasks);
                            }
                          else{
                            titlu_task = "Hard task";
                            task = this.get_random(lista, this.hard_tasks);
                            }
            
            if(this.energy<=0){                  // ENERGIE = 0
            titlu_task = "No more energy!";
            task = "You can come back tomorrow, when your energy will be refilled or you can get an extra energy point right now watching a short ad.";
            text_cancel = "I'll wait";
            text_confirm = "Watch an Ad";
           }
            else{
                this.decreaseEnergy();
                just_decreased = 1;
            }
                                                    
        const confirm = this.alertCtrl.create({
          title: titlu_task,
          message: task,
          buttons: [
            {
              text: text_cancel,
              handler: () => {


              }
            },
            {
              text: text_confirm,
              handler: () => {
                  if(this.energy>=0 && just_decreased){            
                      let obj = {name: task, points: nr_points, color: this.page.hex, icon: this.page.icon, dificulty: titlu_task}                   
                      this.events.publish('data:task', obj);  // EVENT task                     
                        
                      lista.push(obj);
                      this.storage.set('myTasks', lista);
                      
                      let badgeIncreaseList = ["ChallengeAccepted"];  // challenge badge
                      
                      if(this.titlu == "Sport"){
                          badgeIncreaseList.push("SportsAddict");   // sports addict badge
                      }
                      else if(this.titlu == "w/ Friends")
                          badgeIncreaseList.push("SquadLeader");    // squad badge
                    
                      
                      this.dataService.IncreaseBadge(badgeIncreaseList);
                      
                                             
                        this.navCtrl.pop();
                  }
                  else{            // cazul in care s-a vazut o reclama
                     console.log("Watch an ad!");
                      this.energy++;
                      this.storage.get('myEnergy').then((energie) => {
                          energie.number = this.energy;
                          this.storage.set('myEnergy', energie);
                      });

                  }
              }
            }
          ]
        });
        confirm.present();
        } 
      });
  }
}