webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Data = (function () {
    function Data(storage, events) {
        this.storage = storage;
        this.events = events;
        this.tasks = [];
        this.sport_task_easy = ["Go for a walk", "Do 10 push-ups", "5 minutes of yoga", "Watch a football match", "Make a healthy milkshake", "Run 500m"];
        this.sport_task_medium = ["Improve swimming skills at the pool", "Complete a yoga course", "Go to the gym", "Play football", "Cook yourself a healthy dish", "Run 2km"];
        this.sport_task_hard = ["Hike on a mountain", "Try wall climbing", "Ride 15km on a bike", "Try riding a horse", "Hit the gym for a week", "Run 5km"];
        this.knowledge_task_easy = ["Watch a video about universe", "Satisfy your curiosity about something", "Solve a riddle"];
        this.knowledge_task_medium = ["Watch a documentary movie", "Do a science experiment", "Learn how to encypher", "Read a book"];
        this.knowledge_task_hard = ["Observe stars with a telescope", "Learn a new programming language", "Create a riddle", "Understand how the brain works"];
        this.friends_task_easy = ["Play a card game", "Make some lemonade", "Order a pizza", "Wacth a movie", "Play Heads-Up"];
        this.friends_task_medium = ["Host a sleepover", "Play bowling together", "Sing a karaoke duet", "Host a BBQ Party", "Do a movie marathon"];
        this.friends_task_hard = ["Play minigolf", "Open a stand and sell something", "Go camping", "Buy tickets for a concert"];
        this.indoor_task_easy = ["Play a video game", "Try a new mobile app", "Order a pizza", "Watch a movie", "Clean the junk on the phone/laptop"];
        this.indoor_task_medium = ["Cook a new recipe", "Play an instrument", "Make a puzzle", "Read a book", "Find about your family archive", "Compose/update your CV", "Plan your next vacantion", "Learn a magic trick"];
        this.indoor_task_hard = ["Redecorate your room", "Sort the old clothes and donate them", "Read 3 books"];
        this.badge_level_points = [1, 5, 10, 25];
        this.badge_level = ["Bronze", "Silver", "Gold", "Legendary"];
    }
    Data.prototype.IncreaseBadge = function (badgeNames) {
        var _this = this;
        var index = 0;
        this.storage.get('myBadges').then(function (myBadges) {
            for (var j = 0; j < badgeNames.length; j++) {
                if (badgeNames[j] == "NeverBored")
                    index = 0;
                else if (badgeNames[j] == "ChallengeAccepted")
                    index = 1;
                else if (badgeNames[j] == "SportsAddict")
                    index = 2;
                else if (badgeNames[j] == "SquadLeader")
                    index = 3;
                myBadges[index].points++;
                console.log(myBadges[index].points);
                for (var i = 0; i < _this.badge_level_points.length; i++)
                    if (myBadges[index].points == _this.badge_level_points[i]) {
                        myBadges[index].rank = _this.badge_level[i];
                        myBadges[index].src = "assets/img/" + myBadges[index].rank + ".png";
                    }
            }
            _this.storage.set('myBadges', myBadges).then(function () {
                _this.events.publish('data:badges', myBadges);
            });
        });
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], Data);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ideas_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__to_do_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__to_do_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__ideas_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__progress_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Ionic\neverbored\src\pages\tabs\tabs.html"*/'<ion-tabs> \n  <ion-tab [root]="tab1Root" tabTitle="To Do" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Ideas" tabIcon="bulb" swipeBackEnabled="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Progress" tabIcon="trophy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\Ionic\neverbored\src\pages\tabs\tabs.html"*/
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl, statusBar, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.statusBar = statusBar;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.tabs = [{ 'color': 'nice_red', 'hex': '#e74c3c', 'titlu': 'All topics', 'clasa': 'f', icon: 'ios-bulb-outline' },
            { 'color': 'nice_orange', 'hex': '#ea8828', 'titlu': 'Entertainment', 'clasa': 'e', icon: 'ios-game-controller-b-outline' },
            { 'color': 'nice_yellow', 'hex': '#f1c40f', 'titlu': 'Sport', 'clasa': 'd', icon: 'ios-basketball-outline' },
            { 'color': 'nice_green', 'hex': '#2ecc71', 'titlu': 'Indoor', 'clasa': 'c', icon: 'ios-home-outline' },
            { 'color': 'nice_blue', 'hex': '#3498db', 'titlu': 'w/ Friends', 'clasa': 'b', icon: 'ios-chatbubbles-outline' },
            { 'color': 'nice_purple', 'hex': '#9b59b6', 'titlu': 'Knowledge', 'clasa': 'a', icon: 'ios-flask-outline' }, { 'color': 'nice_red', 'hex': '#e74c3c', 'titlu': 'Couple', 'clasa': 'g', icon: 'ios-heart-outline' }];
        if (this.viewCtrl.name == 'AboutPage')
            this.statusBar.styleLightContent();
        else
            this.statusBar.styleDefault;
    }
    AboutPage.prototype.navigate = function (tab) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__navigation__["a" /* NavigationPage */], { page: tab, titlu: tab.titlu });
    };
    AboutPage.prototype.f = function () {
        var confirm = this.alertCtrl.create({
            title: "This isn't available",
            message: "Not yet...",
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"E:\Ionic\neverbored\src\pages\ideas\about.html"*/'<ion-header no-border>\n    <ion-navbar color="dark">\n        <ion-buttons end style="position: absolute; width: 95%;">\n            <button ion-button icon-only (click)="f()">\n        <ion-icon name="settings" [ngStyle]="{\'color\': \'#888\'}"></ion-icon>\n      </button>\n        </ion-buttons>\n        <ion-title>\n            <img src="assets/img/logo.png" class="titlu">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #222;">\n    <div *ngFor="let tab of tabs">\n    <div class="tab">\n        <div class="grupa {{tab.clasa}}" (click)="navigate(tab)">\n        <i><h3>{{tab.titlu}}</h3></i>\n            <ion-icon class="icon-tabs" name="{{tab.icon}}"></ion-icon>\n        </div>\n    </div>\n        </div>\n   <!-- <div class="tab">\n        <div class="grupa e"></div>\n    </div>\n    <div class="tab">\n        <div class="grupa d"></div>\n    </div>\n    <div class="tab">\n        <div class="grupa c"></div>\n    </div>\n    <div class="tab">\n        <div class="grupa b"></div>\n    </div>\n    <div class="tab">\n        <div class="grupa a"></div>\n    </div>   -->\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\neverbored\src\pages\ideas\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__to_do_data__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationPage = (function () {
    function NavigationPage(navCtrl, viewCtrl, params, alertCtrl, storage, dataService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.dataService = dataService;
        this.events = events;
        this.energy = 5;
        this.easy_tasks = ["Clear junk on your phone", "Go for a walk", "Watch a movie", "Do a barrel roll", "Read some news", "Learn a joke", "Order a pizza", "Play a game"];
        this.medium_tasks = ["Make a puzzle", "Play/learn guitar", "Read a book", "Hang out with a friend", "Shoot some cool pics", "Try skateboarding", "Learn a magic trick", "Do some exercises", "Learn to cook a new recipe"];
        this.hard_tasks = ["Ask your crush for a date", "Go on a trip with friends", "Travel to another city", "Party all night in a club", "Invite friends at your place", "Explore the unknown", "Go to gym", "Redecorate your entire room"];
        this.page = this.params.data.page;
        this.titlu = this.params.get('titlu');
        if (this.titlu == 'Sport') {
            this.easy_tasks = dataService.sport_task_easy;
            this.medium_tasks = dataService.sport_task_medium;
            this.hard_tasks = dataService.sport_task_hard;
        }
        else if (this.titlu == 'w/ Friends') {
            this.easy_tasks = dataService.friends_task_easy;
            this.medium_tasks = dataService.friends_task_medium;
            this.hard_tasks = dataService.friends_task_hard;
        }
        else if (this.titlu == 'Knowledge') {
            this.easy_tasks = dataService.knowledge_task_easy;
            this.medium_tasks = dataService.knowledge_task_medium;
            this.hard_tasks = dataService.knowledge_task_hard;
        }
        else if (this.titlu == 'Indoor') {
            this.easy_tasks = dataService.indoor_task_easy;
            this.medium_tasks = dataService.indoor_task_medium;
            this.hard_tasks = dataService.indoor_task_hard;
        }
        else {
            this.easy_tasks = dataService.friends_task_easy.concat(dataService.indoor_task_easy, dataService.knowledge_task_easy, dataService.sport_task_easy);
            this.medium_tasks = dataService.friends_task_medium.concat(dataService.indoor_task_medium, dataService.knowledge_task_medium, dataService.sport_task_medium);
            this.hard_tasks = dataService.friends_task_hard.concat(dataService.indoor_task_hard, dataService.knowledge_task_hard, dataService.sport_task_hard);
        }
        this.storage.get('myEnergy').then(function (energie) {
            if (!energie) {
                var time = new Date();
                var obj = { day: time.getDate(), month: time.getMonth(), number: 5 };
                storage.set('myEnergy', obj);
            }
            else
                _this.energy = energie.number;
        });
    }
    NavigationPage.prototype.get_random = function (lista, taskuri) {
        var sw = 1, elem;
        // console.log(lista);
        while (sw) {
            sw = 0;
            elem = taskuri[Math.floor(Math.random() * taskuri.length)];
            for (var i = 0; i < lista.length && !sw; i++)
                if (lista[i].name == elem) {
                    console.log(lista[i]);
                    sw = 1;
                }
        }
        return elem;
    };
    NavigationPage.prototype.decreaseEnergy = function () {
        var _this = this;
        this.energy--;
        this.events.publish('data:energy', this.energy); // EVENT energie
        this.storage.get('myEnergy').then(function (energie) {
            energie.number--;
            _this.storage.set('myEnergy', energie);
        });
    };
    NavigationPage.prototype.showLimitReached = function () {
        var alert = this.alertCtrl.create({
            title: 'Task limit reached',
            subTitle: 'You have already 10 tasks waiting for you',
            buttons: ['Okay']
        });
        alert.present();
    };
    NavigationPage.prototype.showConfirm = function (nr_points) {
        var _this = this;
        var titlu_task, task, text_confirm = 'Accept', text_cancel = 'Not today', just_decreased = 0;
        this.storage.get('myTasks').then(function (lista) {
            console.log("number of tasks:", lista.length);
            if (lista.length >= 10)
                _this.showLimitReached(); // daca sunte deja 10 activitati
            else {
                if (nr_points == 5) {
                    titlu_task = "Easy task";
                    task = _this.get_random(lista, _this.easy_tasks);
                }
                else if (nr_points == 15) {
                    titlu_task = "Medium task";
                    task = _this.get_random(lista, _this.medium_tasks);
                }
                else {
                    titlu_task = "Hard task";
                    task = _this.get_random(lista, _this.hard_tasks);
                }
                if (_this.energy <= 0) {
                    titlu_task = "No more energy!";
                    task = "You can come back tomorrow, when your energy will be refilled or you can get an extra energy point right now watching a short ad.";
                    text_cancel = "I'll wait";
                    text_confirm = "Watch an Ad";
                }
                else {
                    _this.decreaseEnergy();
                    just_decreased = 1;
                }
                var confirm_1 = _this.alertCtrl.create({
                    title: titlu_task,
                    message: task,
                    buttons: [
                        {
                            text: text_cancel,
                            handler: function () {
                            }
                        },
                        {
                            text: text_confirm,
                            handler: function () {
                                if (_this.energy >= 0 && just_decreased) {
                                    var obj = { name: task, points: nr_points, color: _this.page.hex, icon: _this.page.icon, dificulty: titlu_task };
                                    _this.events.publish('data:task', obj); // EVENT task                     
                                    lista.push(obj);
                                    _this.storage.set('myTasks', lista);
                                    var badgeIncreaseList = ["ChallengeAccepted"]; // challenge badge
                                    if (_this.titlu == "Sport") {
                                        badgeIncreaseList.push("SportsAddict"); // sports addict badge
                                    }
                                    else if (_this.titlu == "w/ Friends")
                                        badgeIncreaseList.push("SquadLeader"); // squad badge
                                    _this.dataService.IncreaseBadge(badgeIncreaseList);
                                    _this.navCtrl.pop();
                                }
                                else {
                                    console.log("Watch an ad!");
                                    _this.energy++;
                                    _this.storage.get('myEnergy').then(function (energie) {
                                        energie.number = _this.energy;
                                        _this.storage.set('myEnergy', energie);
                                    });
                                }
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        });
    };
    return NavigationPage;
}());
NavigationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"E:\Ionic\neverbored\src\pages\ideas\navigation.html"*/'<ion-header no-border>\n\n    <ion-toolbar color="{{page.color}}">\n\n        <ion-buttons start style="position: absolute; width: 95%;">\n\n            <button ion-button icon-only navPop>\n\n        <ion-icon name="arrow-back" color="dark"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            <img src="assets/img/logo-dark.png" class="titlu">\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]="{\'background-color\': page.hex}" padding>\n\n\n\n    <div class="nav_page">\n\n     <!-- <div class="buton" [ngStyle]="{\'background-color\': page.hex}"></div>  -->\n\n        <div *ngIf="titlu==\'All topics\'" class="poster topics"></div>\n\n        <div *ngIf="titlu==\'Entertainment\'" class="poster entertainment"></div>\n\n        <div *ngIf="titlu==\'Sport\'" class="poster sport"></div>\n\n        <div *ngIf="titlu==\'Indoor\'" class="poster indoor"></div>\n\n        <div *ngIf="titlu==\'w/ Friends\'" class="poster friends"></div>\n\n        <div *ngIf="titlu==\'Knowledge\'" class="poster knowledge"></div>\n\n        \n\n        <h1 style="width: 100%; text-align: center; color: #333; margin-bottom: 2em;">{{titlu}}</h1>\n\n        <button class="buton_mic" ion-button large color="{{page.color}}" (click)="showConfirm(5)">Easy</button>\n\n        <button class="buton_mic" ion-button large (click)="showConfirm(15)">Medium</button>\n\n        <button class="buton_mic" ion-button large (click)="showConfirm(40)">Hard</button>\n\n<!--        <h4>Energie: {{energy}}</h4>-->\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\neverbored\src\pages\ideas\navigation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__to_do_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], NavigationPage);

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, statusBar, events, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.events = events;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.userName = "";
        this.obiect = { 'progres': '0%', 'color': '#488aff' };
        this.total_puncte = 0;
        this.current_level = 1;
        this.max_points = 6;
        this.levels = [{ nr: 1, xp: 20 }, { nr: 2, xp: 40 }, { nr: 3, xp: 80 }, { nr: 4, xp: 140 }];
        this.badge_level = ["neutral", "Bronze", "Silver", "Gold", "Legendary"];
        this.badge_level_points = [1, 5, 10, 25];
        this.badges = [{ src: "assets/img/neutral.png", title: "Never bored", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Challenge accepted!", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Sports addict", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Squad Leader", rank: "neutral", points: 0 }];
        this.statusBar.styleDefault();
        events.subscribe('data:points', function (puncte) {
            _this.total_puncte += puncte; //
            if (_this.total_puncte >= _this.max_points)
                _this.level_up();
            _this.procentBara();
        }); // 
        storage.get('myProfile').then(function (profil) {
            if (profil) {
                _this.current_level = profil.level;
                _this.max_points = _this.getMaxPoints(profil.level);
                _this.userName = profil.firstName + " " + profil.secondName;
            }
        });
        storage.get('myPoints').then(function (puncte) {
            if (puncte >= _this.max_points) {
                _this.total_puncte = puncte;
                _this.level_up();
            }
            else
                _this.total_puncte = puncte;
            _this.procentBara();
        });
        storage.get('myBadges').then(function (myBadges) {
            for (var i = 0; i < myBadges.length; i++) {
                _this.badges[i].src = "assets/img/" + myBadges[i].rank + ".png";
                _this.badges[i].rank = myBadges[i].rank;
                _this.badges[i].points = myBadges[i].points;
            }
        });
        events.subscribe('data:badges', function (badges) {
            _this.badges = badges; //
        }); // 
    }
    ContactPage.prototype.level_up = function () {
        this.events.publish('data:levelup', 1); // EVENT TAB 1
        this.total_puncte %= this.max_points;
        console.log(this.total_puncte);
        this.current_level++;
        this.storage.set('level', this.current_level);
        this.storage.set('myPoints', this.total_puncte);
        this.max_points = this.getMaxPoints(this.current_level);
    };
    ContactPage.prototype.procentBara = function () {
        var procent = (this.total_puncte * 100 / this.max_points);
        this.obiect.progres = procent.toFixed(2) + '%';
        console.log(this.obiect.progres);
    };
    ContactPage.prototype.getMaxPoints = function (level) {
        return this.levels[this.current_level - 1].xp;
    };
    ContactPage.prototype.add = function (i) {
        this.total_puncte += i;
        // this.obiect.progres = '20%';
        console.log(this.total_puncte);
        this.procentBara();
    };
    ContactPage.prototype.reset = function () {
        this.storage.remove('myProfile');
        this.storage.remove('myPoints');
        this.storage.remove('myBadges');
        this.storage.remove('myEnergy');
        this.storage.remove('myTasks');
        this.storage.remove('FirstTime');
    };
    ContactPage.prototype.update = function () {
        var _this = this;
        this.storage.get('myPoints').then(function (puncte) {
            _this.total_puncte = puncte;
            _this.procentBara();
        });
    };
    ContactPage.prototype.viewBadge = function (badge) {
        var max_points;
        for (var i = 0; i < this.badge_level.length; i++)
            if (this.badge_level[i] == badge.rank)
                max_points = this.badge_level_points[i];
        var confirm = this.alertCtrl.create({
            title: badge.title,
            message: badge.rank + " <br> " + badge.points + "/" + max_points,
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    ContactPage.prototype.f = function () {
        var confirm = this.alertCtrl.create({
            title: "This isn't available",
            message: "Not yet...",
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"E:\Ionic\neverbored\src\pages\progress\contact.html"*/'<ion-header>\n  <ion-navbar color="golden">\n      <ion-buttons end style="position: absolute; width: 95%;">\n      <button ion-button icon-only (click)="f()">\n        <ion-icon name="settings" [ngStyle]="{\'color\': \'#d77330\'}"></ion-icon>\n      </button>\n          </ion-buttons>\n  <ion-title><img class="titlu" src="assets/img/logo-dark.png"></ion-title>\n  </ion-navbar>\n     <ion-item>\n      <ion-avatar item-start>\n      <img src="assets/img/vlad.png">\n    </ion-avatar>\n    <h2><b>{{userName}}<br></b></h2>\n<!--         <h2><b> </b></h2>-->\n    <p style="width: 5em; float: left;">level {{current_level}}</p>\n    <div style="width: 70%; height: 1.3em; float: left; position: relative;">\n         \n        <div style="height: 0.5em; width: 100%; border-radius: 5px; background-color: #ddd; margin-top: 0.2em;"></div>  <!--progress bar -->\n   <div [ngStyle]="{\'width\': obiect.progres, \'background-color\': obiect.color}" class="progress_bar"></div> \n        \n          </div>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n    \n  <ion-list>\n      \n   <ion-item *ngFor="let badge of badges">\n      <ion-thumbnail item-start>\n      <img src="{{badge.src}}">\n    </ion-thumbnail>\n    <h2>{{badge.title}}</h2>\n    <p>{{badge.rank}}</p>\n    <button ion-button clear item-end (click)="viewBadge(badge)">View</button>\n    </ion-item>\n      \n      \n\n<!--      <button ion-button (click)="show_sport_badge()">Aflare puncte</button>-->\n  <!--    <button ion-button (click)="show_level()">Aflare level</button>\n      <h2>puncte: {{puncte_afisare}} din {{max_points}}</h2> -->\n<!--\n      <h2>rank: {{level_afisare}}</h2>\n      <h2>puncte: {{sport_afisare}}</h2>\n-->\n\n  </ion-list>\n    <button ion-button (click)="reset()">Reset</button>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\neverbored\src\pages\progress\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, statusBar, storage, dataService, events, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.storage = storage;
        this.dataService = dataService;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.energy = 5;
        this.time = new Date();
        this.level_up = 0;
        this.user = { firstName: "", secondName: "" };
        this.stil_tab = [{ 'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false },
            { 'margin': '1em', width: '40%', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false },
            { 'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false }];
        this.statusBar.styleDefault();
        events.subscribe('data:task', function (task) {
            _this.items.push(task); //
        }); //
        events.subscribe('data:energy', function (energie) {
            _this.energy = energie; //
        });
        events.subscribe('data:levelup', function (level_up_sw) {
            _this.level_up = level_up_sw;
        });
        storage.get('myEnergy').then(function (energie) {
            if (energie && energie.month == _this.time.getMonth() && energie.day == _this.time.getDate())
                _this.energy = energie.number;
            else {
                var aux = { day: _this.time.getDate(), month: _this.time.getMonth(), number: 5 };
                storage.set('myEnergy', aux);
            }
        });
        storage.get('myTasks').then(function (tasks) {
            if (tasks)
                _this.items = tasks;
        });
        storage.get('myProfile').then(function (profile) {
            if (profile)
                _this.user = profile;
        });
    } // constructor ends
    HomePage.prototype.refill = function () {
        this.energy = 5;
        this.storage.set('myEnergy', this.energy);
    };
    HomePage.prototype.presentToast = function (task) {
        var toast = this.toastCtrl.create({
            message: "Congrats! You've reached " + task.points + " points!",
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HomePage.prototype.resize = function (n) {
        if (this.stil_tab[n].opened == false) {
            if (this.stil_tab[0].opened)
                this.resize(0);
            if (this.stil_tab[1].opened)
                this.resize(1);
            if (this.stil_tab[2].opened)
                this.resize(2);
            this.stil_tab[n] = { 'margin': '0', 'border-radius': '0', 'box-shadow': '0', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '20%', 'opened': true };
        }
        else
            this.stil_tab[n] = { 'margin': '1em', 'border-radius': '15px 15px 10px 10px', 'box-shadow': '0px 0px 15px rgba(0, 0, 0, 0.15)', 'transition': 'all 1s ease', 'background-color': 'white', 'padding-bottom': '0', 'opened': false };
    };
    HomePage.prototype.removeTaskFromList = function (task) {
        for (var i = 0; i < this.items.length; i++)
            if (this.items[i].name == task.name)
                this.items.splice(i, 1);
        this.storage.set('myTasks', this.items);
    };
    HomePage.prototype.checkTask = function (task) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: task.name,
            message: task.dificulty,
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    cssClass: 'alertButton',
                    handler: function () { }
                },
                {
                    text: "I did it!",
                    handler: function () {
                        _this.presentToast(task);
                        _this.storage.get('myPoints').then(function (puncte) {
                            puncte += task.points;
                            _this.storage.set('myPoints', puncte).then(function () {
                                _this.events.publish('data:points', task.points); // EVENT
                                if (_this.level_up) {
                                    //  this.level_up_alert();
                                    _this.level_up = 0;
                                    var that_1 = _this;
                                    window.setTimeout(function () { that_1.level_up_alert(); }, 500); // delay 1sec
                                }
                            });
                        });
                        _this.removeTaskFromList(task);
                        _this.dataService.IncreaseBadge(["NeverBored"]); // increase NeverBored badge progress
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.optionsTask = function (task) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: task.name,
            message: task.dificulty,
            buttons: [
                {
                    text: "Remove",
                    cssClass: 'deleteButton',
                    handler: function () {
                        _this.removeTaskFromList(task);
                    }
                },
                {
                    text: "Highlight",
                    handler: function () {
                        _this.highlightTask(task);
                    }
                },
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.level_up_alert = function () {
        var confirm = this.alertCtrl.create({
            title: "Congratulation!",
            message: "You've just leveled up",
            buttons: [
                {
                    text: "Thanks",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.to_ideas = function () {
        this.navCtrl.parent.select(1);
    };
    HomePage.prototype.to_progress = function () {
        this.navCtrl.parent.select(2);
    };
    HomePage.prototype.f = function () {
        var confirm = this.alertCtrl.create({
            title: "This isn't available",
            message: "Not yet...",
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function () { }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.setName = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
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
                    handler: function (response) {
                        _this.user.firstName = response.firstName;
                        _this.user.secondName = response.secondName;
                        _this.storage.get('myProfile').then(function (profile) {
                            profile.firstName = _this.user.firstName;
                            profile.secondName = _this.user.secondName;
                            _this.storage.set('myProfile', profile);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.highlightTask = function (task) {
        for (var i = 0; i < this.items.length; i++)
            if (this.items[i].name == task.name) {
                if (!task.highlight) {
                    this.items[i].icon = this.items[i].icon.slice(0, -8);
                    this.items[i].highlight = 1;
                }
                else {
                    this.items[i].icon += "-outline";
                    this.items[i].highlight = 0;
                }
                console.log(this.items[i].icon);
            }
        this.storage.set('myTasks', this.items);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\neverbored\src\pages\to_do\home.html"*/'<ion-header no-border>\n    <ion-navbar color="gradient1">\n<!--    <ion-navbar color="golden">-->\n        <ion-buttons end style="position: absolute; width: 95%;">\n            <button ion-button icon-only (click)="f()">\n                <ion-icon name="settings" [ngStyle]="{\'color\': \'#d77330\'}"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title><img src="assets/img/logo-dark.png" class="titlu"></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<!--<ion-content style="background-color: #fdbc30;">-->\n<ion-content>\n\n    <div [ngStyle]="stil_tab[0]">\n        <!-- INCOMING ACTIVITIES -->\n        <div class="grupa">\n            <!-- (click)="resize(0)" -->\n            <img src="assets/img/text.png" style="width: 100%; margin-top: 0.8em;">\n        </div>\n        <div class="lista_taskuri">\n            <div class="empty_text" *ngIf="!items[0]" (click)="to_ideas()">\n                <!-- Empty task list -->\n                <p>Click here to get ideas</p>\n\n            </div>\n\n            <ion-list no-lines inset>\n\n                <button class="task_item" *ngFor="let task of items" ion-item detail-none (click)="checkTask(task)" (press)="optionsTask(task)">                \n                    <div style="float: left; width: 90%; white-space: normal;">{{task.name}}</div>\n                    <ion-icon class="task_icon" name="{{task.icon}}" [ngStyle]="{color: task.color}"></ion-icon></button>\n            </ion-list>\n        </div>\n    </div>\n\n\n    <!--    <button ion-button (click)="refill()">Refill energy</button>-->\n\n    <div class="tab">\n        <div *ngIf="energy" class="grupa-patrat" (click)="to_ideas()">\n            <h5 *ngIf="energy==1" class="tab_text" style="color: #fff;">You can get <br> {{energy}} idea</h5>\n            <h5 *ngIf="energy!=1" class="tab_text" style="color: #fff;">You can get <br> {{energy}} ideas</h5>\n            <ion-icon  class="icon-big" name="ios-bulb" color="light"></ion-icon>\n        </div>\n        \n        <div *ngIf="!energy" class="grupa-patrat dark">\n            <h6 class="tab_text">No more energy</h6>\n            <p class="tab_subtext">Come back tomorrow</p>\n            <ion-icon class="icon-big" name="ios-bulb-outline" color="gray"></ion-icon>\n        </div>\n        \n        <div *ngIf="user.firstName" class="grupa-patrat tab_profil" (click)="to_progress()">\n            <h5 class="tab_text" style="color: #fff;">Hi there, {{user.firstName}}!</h5>\n            <p class="tab_subtext" style="color: #1e427b">See your progress</p>\n            <ion-icon  class="icon-big" name="trophy" color="light"></ion-icon>\n        </div>\n        \n        <div *ngIf="!user.firstName" class="grupa-patrat tab_profil" (click)="setName()">\n            <h5 class="tab_text" style="color: #fff;">Hi there!</h5>\n            <p class="tab_subtext" style="color: #1e427b">Let\'s meet each other</p>\n            <ion-icon  class="icon-big" name="ios-happy-outline" color="light"></ion-icon>\n        </div>\n    </div>\n\n    <!--\n    <div class="tab">    \n  <div class="grupa-patrat">   \n        <img src="../../assets/img/done.png" style="width: 100%; margin-top: 0em;">\n        </div>\n  <div class="lista_taskuri">\n        <ion-list inset>\n           <button ion-item disabled><ion-icon name="checkmark-circle-outline" item-start></ion-icon>Watch a movie</button>\n         </ion-list>\n        </div>\n    </div>    \n    \n-->\n    <!--   <div [ngStyle]="stil_tab[2]" >   <!-- NOT COOL -->\n    <!-- <div class="grupa"> <!-- (click)="resize(2)" -->\n    <!--          <img src="../../assets/img/sad.png" style="width: 100%; margin-top: 0.5em;">\n         </div>\n  <div class="lista_taskuri">\n         <ion-list inset>\n           <button ion-item disabled><ion-icon name="close" item-start></ion-icon><del>Get a girlfriend</del></button>\n             <button ion-item disabled><ion-icon name="close" item-start></ion-icon><del>Get a friend</del></button>\n             <button ion-item disabled><ion-icon name="close" item-start></ion-icon><del>Get a  life</del></button>\n         </ion-list>\n      </div>\n    </div>   -->\n\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\neverbored\src\pages\to_do\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ideas_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ideas_navigation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_progress_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_to_do_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_to_do_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_ideas_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ideas_navigation__["a" /* NavigationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_progress_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_to_do_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_ideas_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ideas_navigation__["a" /* NavigationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_progress_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_to_do_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__pages_to_do_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            Storage,
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { HomePage } from '../pages/to_do/home';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, screenOrientation, storage) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        splashScreen.show();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //     screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
            storage.get('FirstTime').then(function (firstTime) {
                if (!firstTime) {
                    initializeStorage();
                    storage.set('FirstTime', true);
                }
            });
        });
        function initializeStorage() {
            var time = new Date();
            var obj = { day: time.getDate(), month: time.getMonth(), number: 5 };
            var profile = { firstName: "", secondName: "", level: 1 };
            var badges = [{ src: "assets/img/neutral.png", title: "Never bored", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Challenge accepted!", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Sports addict", rank: "neutral", points: 0 }, { src: "assets/img/neutral.png", title: "Squad Leader", rank: "neutral", points: 0 }];
            storage.set('myEnergy', obj).then(function () { console.log("Energy: created"); });
            storage.set('myTasks', []).then(function () { console.log("Tasks: created"); });
            storage.set('myProfile', profile).then(function () { console.log("Profile: created"); });
            storage.set('myPoints', 0).then(function () { console.log("Points: created"); });
            storage.set('myBadges', badges).then(function () { console.log("Badges: created"); });
        }
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Ionic\neverbored\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Ionic\neverbored\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map