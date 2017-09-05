webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage.prototype.approved = function (event) {
        console.log("Approved", event);
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/kevinbrown/git/Instantmortgage/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Results\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Choose your mortgage offer</ion-list-header>\n<ion-list>\n  <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/halifax.png">\n    </ion-thumbnail>\n      <h2>Halifax 3 year Fixed Rate at 2.5%</h2>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n\n    <ion-item-sliding>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/nationwide.png">\n    </ion-thumbnail>\n    <h2>Nationwide 3 year Fixed Rate at 2%</h2>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n          <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n        </ion-item-sliding>\n\n      <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/nationwide.png">\n    </ion-thumbnail>\n    <h2>Nationwide 3 year Variable Rate at 1.8%</h2>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n                  <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n\n      <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/santander.png">\n    </ion-thumbnail>\n    <h2>Santander 3 year Variable Rate at 2.0%</h2>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n                  <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item-sliding>\n      <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/hsbc.png">\n    </ion-thumbnail>\n    <h2>HSBC 2 year Fixed Rate at 3.0%</h2>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n              <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinbrown/git/Instantmortgage/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MortgageDetailsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MortgageDetailsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MortgageDetailsProvider = (function () {
    function MortgageDetailsProvider(http) {
        this.http = http;
        console.log('Hello MortgageDetailsProvider Provider');
    }
    MortgageDetailsProvider.prototype.getTerm = function () {
        console.log("Getting term", this.term);
        return this.term;
    };
    MortgageDetailsProvider.prototype.setTerm = function (t) {
        this.term = t;
        console.log("Setting term", this.term);
    };
    MortgageDetailsProvider.prototype.getLoanAmount = function () {
        return this.loan_amount;
    };
    MortgageDetailsProvider.prototype.setLoanAmount = function (amt) {
        this.loan_amount = amt;
    };
    return MortgageDetailsProvider;
}());
MortgageDetailsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MortgageDetailsProvider);

//# sourceMappingURL=mortgage-details.js.map

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

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kevinbrown/git/Instantmortgage/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="About You" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Live Application" tabIcon="code-working"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Results" tabIcon="done-all"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kevinbrown/git/Instantmortgage/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mortgage_details_mortgage_details__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ContactPage } from '../contact/contact';


var HomePage = (function () {
    function HomePage(navCtrl, md) {
        this.navCtrl = navCtrl;
        this.md = md;
    }
    HomePage.prototype.nextButton = function (evt) {
        console.log(evt, this.term, this.loan_amount);
        this.md.setTerm(this.term);
        this.md.setLoanAmount(this.loan_amount);
        console.log(this.navCtrl);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
        console.log(this.md.getTerm());
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kevinbrown/git/Instantmortgage/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Instant Mortgage</h2>\n<ion-list>\n\n  <ion-item>\n  <ion-label>9, Cotham Lawn House, <BR>  Cotham Lawn Road <BR> Cotham <BR> Bristol, <BR> BS6 6DU\n  </ion-label>\n  </ion-item>\n    <ion-item>\n  <ion-label> Cost: £505,000<BR><BR></ion-label>\n  <!--ion-label> UPRN: 79984</label-->\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>How much do you want to borrow?</ion-label>\n    <ion-input type="text" [(ngModel)]="loan_amount"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>How many years would you like to borrow for?</ion-label>\n    <ion-input type="text" [(ngModel)]="term"></ion-input>\n  </ion-item>\n</ion-list>\n\n  <button ion-button full (click)="nextButton($event)">Next</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinbrown/git/Instantmortgage/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_mortgage_details_mortgage_details__ = __webpack_require__(101);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kevinbrown/git/Instantmortgage/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kevinbrown/git/Instantmortgage/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mortgage_details_mortgage_details__ = __webpack_require__(101);
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
    function AboutPage(navCtrl, http, md) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.md = md;
        this.checkResults = { propertyCheck: '', identityCheck: '', affordabilityCheck: '', creditCheck: '', earningsCheck: '' };
        this.startChecks();
    }
    AboutPage.prototype.startChecks = function () {
        var stop = false;
        this.makePostRequest("https://instant-mortgage-historiographic-psychoanalysis.eu-gb.mybluemix.net/checks/property", { "uprn": "79984" }, function (data, context) {
            if (data.passed != true) {
                context.stop = true;
            }
            context.checkResults.propertyCheck = "Passed: " + data.passed;
        });
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://instant-mortgage-historiographic-psychoanalysis.eu-gb.mybluemix.net/checks/identity", { "": "" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.identityCheck = "Passed: " + data.passed;
            });
        }, 1000, this);
        console.log("TERM : ", this.md.getTerm());
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://instant-mortgage-historiographic-psychoanalysis.eu-gb.mybluemix.net/checks/affordability", { "uprn": "79984",
                "person_id": 100000013,
                "term": stthis.md.getTerm(),
                "loan_amount": stthis.md.getLoanAmount() }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.affordabilityCheck = "Passed: " + data.passed;
            });
        }, 2000, this);
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://instant-mortgage-historiographic-psychoanalysis.eu-gb.mybluemix.net/checks/credit", { "person_id": "100000013" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.creditCheck = "Passed: " + data.passed;
            });
        }, 3000, this);
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://instant-mortgage-historiographic-psychoanalysis.eu-gb.mybluemix.net/checks/earnings", { "person_id": "100000013" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.earningsCheck = "Passed: " + data.passed;
            });
        }, 4000, this);
        setTimeout(function (stthis) {
            if (!stthis.stop) {
                stthis.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
            }
        }, 5000, this);
    };
    AboutPage.prototype.makePostRequest = function (url, param, callback) {
        var _this = this;
        this.http.post(url, param)
            .subscribe(function (data) {
            callback(data.json(), _this);
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/kevinbrown/git/Instantmortgage/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n  <ion-item>\n    <ion-icon name="clock" item-start></ion-icon>\n    <h2>Property Check</h2>\n    <h3>{{checkResults.propertyCheck}}</h3>\n  </ion-item>\n      <ion-item>\n    <ion-icon name="clock" item-start></ion-icon>\n      Identity Check\n        <h3>{{checkResults.identityCheck}}</h3>\n  </ion-item>\n      <ion-item>\n    <ion-icon name="clock" item-start></ion-icon>\n      Affordability\n        <h3>{{checkResults.affordabilityCheck}}</h3>\n  </ion-item>\n      <ion-item>\n    <ion-icon name="clock" item-start></ion-icon>\n      Credit Check\n        <h3>{{checkResults.creditCheck}}</h3>\n  </ion-item>\n      <ion-item>\n    <ion-icon name="clock" item-start></ion-icon>\n      Earnings Check\n        <h3>{{checkResults.earningsCheck}}</h3>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kevinbrown/git/Instantmortgage/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map
