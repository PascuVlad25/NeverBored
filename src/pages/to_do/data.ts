import { Storage} from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';


@Injectable()
export class Data {
    tasks: any[] = [];
    sport_task_easy = ["Go for a walk", "Do 10 push-ups", "5 minutes of yoga", "Watch a football match", "Make a healthy milkshake", "Run 500m"];
    sport_task_medium = ["Improve swimming skills at the pool", "Complete a yoga course", "Go to the gym", "Play football", "Cook yourself a healthy dish", "Run 2km"];
    sport_task_hard = ["Hike on a mountain", "Try wall climbing", "Ride 15km on a bike", "Try riding a horse", "Hit the gym for a week", "Run 5km"];
    
    knowledge_task_easy = ["Watch a video about universe", "Satisfy your curiosity about something", "Solve a riddle"];
    knowledge_task_medium = ["Watch a documentary movie", "Do a science experiment", "Learn how to encypher", "Read a book"];
    knowledge_task_hard = ["Observe stars with a telescope", "Learn a new programming language", "Create a riddle", "Understand how the brain works"];
    
    friends_task_easy = ["Play a card game", "Make some lemonade", "Order a pizza", "Wacth a movie", "Play Heads-Up"];
    friends_task_medium = ["Host a sleepover", "Play bowling together", "Sing a karaoke duet", "Host a BBQ Party", "Do a movie marathon"];
    friends_task_hard = ["Play minigolf", "Open a stand and sell something", "Go camping", "Buy tickets for a concert"];
    
    indoor_task_easy = ["Play a video game", "Try a new mobile app", "Order a pizza", "Watch a movie", "Clean the junk on the phone/laptop"];
    indoor_task_medium = ["Cook a new recipe", "Play an instrument", "Make a puzzle", "Read a book", "Find about your family archive", "Compose/update your CV", "Plan your next vacantion", "Learn a magic trick"];
    indoor_task_hard = ["Redecorate your room", "Sort the old clothes and donate them", "Read 3 books"];
    
    badge_level_points = [1, 5, 10, 25];
    badge_level = ["Bronze", "Silver", "Gold", "Legendary"];
    constructor(public storage: Storage, public events: Events){}
    
    IncreaseBadge(badgeNames){
        let index = 0;
        this.storage.get('myBadges').then((myBadges) => {   // storage open
            for(let j=0; j<badgeNames.length; j++){
                
                if(badgeNames[j] == "NeverBored")
                    index = 0;
                else if(badgeNames[j] == "ChallengeAccepted")
                    index = 1;
                else if(badgeNames[j] == "SportsAddict")
                    index = 2;
                else if(badgeNames[j] == "SquadLeader")
                    index = 3;
        
            myBadges[index].points++;
            console.log(myBadges[index].points);
            for(let i=0; i<this.badge_level_points.length; i++)
                
                if(myBadges[index].points == this.badge_level_points[i]){
                    myBadges[index].rank = this.badge_level[i];
                    myBadges[index].src = "assets/img/" + myBadges[index].rank + ".png";  
                }
            }
            
            this.storage.set('myBadges', myBadges).then(()=>{
                this.events.publish('data:badges', myBadges);
            });
        });
    }

}