webpackJsonp([1],{

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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from '../login/login';
var TabsPage = (function () {
    function TabsPage() {
        // tab0Root = LoginPage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!-- <ion-tab [root]="tab0Root" tabTitle="Login" tabIcon="home"></ion-tab> -->\n  <ion-tab [root]="tab1Root" tabTitle="About You" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Live Application" tabIcon="code-working"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Results" tabIcon="done-all"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
        selector: 'page-contact',template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/contact/contact.html"*/'<ds-header></ds-header>\n\n<ion-content padding-horizontal style="margin-top: 80px;">\n  <ion-list>\n    <ion-list-header>Based on the outcome of our checks, we\'ve found you <strong>3</strong> suitable mortgages for this property.</ion-list-header>\n<ion-list>\n  <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/winter bank.png">\n    </ion-thumbnail>\n      <h2>Winter Bank</h2>\n      <h3><strong>3</strong> year fixed at <strong>2.5%</strong></h3>\n      <a href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button ion-button clear item-end style="text-transform: none;">Make offer on property</button></a>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n\n    <ion-item-sliding>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/piggy bank.png">\n    </ion-thumbnail>\n    <h2>Piggy Bank</h2>\n    <h3><strong>3</strong> year fixed at <strong>2%</strong></h3>\n    <a  href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button ion-button clear item-end style="text-transform: none;">Make offer on property</button></a>\n  </ion-item>\n          <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n        </ion-item-sliding>\n\n      <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/rose bank.png">\n    </ion-thumbnail>\n    <h2>Rose Bank</h2>\n    <h3><strong>3</strong> year variable at <strong>1.8%</strong></h3>\n    <a  href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button ion-button clear item-end style="text-transform: none;">Make offer on property</button></a>\n  </ion-item>\n                  <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <!-- <ion-item-sliding>\n    <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/thames bank.png">\n    </ion-thumbnail>\n    <h2>Thames Bank 3 year Variable Rate at 2.0%</h2>\n    <a  href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button ion-button clear item-end style="text-transform: none;">Make offer on property</button></a>\n  </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding> -->\n  <!-- <ion-item-sliding>\n      <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/bankicon/oak bank.png">\n    </ion-thumbnail>\n    <h2>Oak Bank 2 year Fixed Rate at 3.0%</h2>\n    <a  href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button ion-button clear item-end style="text-transform: none;">Make offer on property</button></a>\n  </ion-item>\n              <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="mail" (click)="approved($event)"></ion-icon>\n        Approve\n      </button>\n    </ion-item-options>\n  </ion-item-sliding> -->\n</ion-list>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.success = 'f';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        var data = {
            type: "Buyer",
            id: "100000008",
            user: "admin"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(data);
        console.log(body);
        this.http.post('https://hmlr-ds-transactionapi.eu-gb.mybluemix.net/api/get/participant', body, options).subscribe(function (res) {
            _this.responsedata = res.json();
            console.log(_this.responsedata);
            console.log(_this.responsedata.saleParticipantFirstName);
            console.log(_this.responsedata.saleParticipantLastName);
            _this.firstname = _this.responsedata.saleParticipantFirstName,
                _this.lastname = _this.responsedata.saleParticipantLastName;
        });
    };
    LoginPage.prototype.next = function (evt) {
        this.success = 't';
    };
    LoginPage.prototype.nexteve = function (eve) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header><a href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/"><button class = "buttonhome"><ion-icon ios="ios-home" md="md-home">Demo Landing Page</ion-icon></button></a>\n\n  <ion-navbar>\n    <ion-title>Confirm Buyer Identity-\n      {{firstname}} {{lastname}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n          <div class="details">\n            <h4>User your touch ID to confirm you identity and authorize access to personal information</h4>\n      \n            <button *ngIf="success==\'f\'" class = "button" (click)="next($event)">\n                <ion-icon ios="ios-finger-print" md="md-finger-print" class="fp"></ion-icon>\n              <!-- <i class="material-icons md-200" v-bind:class="{ success: isSuccess }">fingerprint</i> -->\n            </button>\n            <button *ngIf="success==\'t\'" class = "button1" (click)="nexteve($event)">\n                <ion-icon ios="ios-finger-print" md="md-finger-print" class="fp"></ion-icon><br>{{firstname}}{{lastname}}\n              <!-- <i class="material-icons md-200" v-bind:class="{ success: isSuccess }">fingerprint</i> -->\n            </button>\n            <p>You have now authorised access to personal information to check your mortgage eligibility</p>\n          </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_mortgage_details_mortgage_details__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ds_header_ds_header__ = __webpack_require__(268);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__components_ds_header_ds_header__["a" /* DsHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    //rootPage:any = LoginPage;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/app/app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DsHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DsHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DsHeaderComponent = (function () {
    function DsHeaderComponent() {
        console.log('Hello DsHeaderComponent Component');
        this.text = 'Hello World';
    }
    return DsHeaderComponent;
}());
DsHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ds-header',template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/components/ds-header/ds-header.html"*/'<ion-header>\n    <!-- <div class="header">   -->\n    <!-- <ion-navbar style="padding: 0px 100px;">     -->\n    \n  <div>  \n    <div class="title">\n      <div class="title-sub-section">\n        <a class="title-sub" href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/LandingIM">Digital Street\n        <br>\n        <p class="subtitle">Instant mortgage</p></a>\n      </div>\n    </div>\n    <div class="logo">\n      <img src="../../assets/icon/hmlr_logo.png" width="175" alt="HM Land Registry Logo">\n    </div>\n  </div>\n  <!-- <ion-navbar>    \n    <ion-title>\n        <a href="#">Digital Street</a>\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-title>\n      Instant mortgage\n    </ion-title>\n  </ion-toolbar>\n  <div class="logo">\n    <img src="../../assets/icon/hmlr_logo.png" width="175" alt="HM Land Registry Logo">\n  </div> -->\n\n</ion-header>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/components/ds-header/ds-header.html"*/
    }),
    __metadata("design:paramtypes", [])
], DsHeaderComponent);

//# sourceMappingURL=ds-header.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mortgage_details_mortgage_details__ = __webpack_require__(79);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/home/home.html"*/'<!-- <ion-header> <a href="http://hmlr-ds-landingscreen.eu-gb.mybluemix.net/#/LandingIM"><button class = "buttonhome"><ion-icon ios="ios-home" md="md-home">Restart Demo</ion-icon></button></a>\n  <ion-navbar>\n    <ion-title>Home </ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ds-header></ds-header>\n\n<ion-content padding-horizontal style="margin-top: 100px;">\n  <ion-list>\n    <ion-item>\n      <ion-label>I can see you are interested in:<BR><BR>1 Digital Street, <BR> England, <BR> HM1 2LR\n    </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label> Cost: £180,000<BR><BR></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>How much money do you want to borrow?</ion-label>\n      <ion-input class="money-input" type="text" [(ngModel)]="loan_amount">£</ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>How long would you like to borrow for?</ion-label>\n      <ion-input maxlength="2" class="years-input" type="text" [(ngModel)]="term"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="nextButton($event)">Continue</button>\n</ion-content>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mortgage_details_mortgage_details__ = __webpack_require__(79);
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
        this.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/property", { "uprn": "79984" }, function (data, context) {
            // this.makePostRequest("http://localhost:4000/checks/property",{"uprn":"79984"},function (data, context) {
            if (data.passed != true) {
                context.stop = true;
            }
            context.checkResults.propertyCheck = "Pass";
            context.content.resize();
        });
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/identity", 
            // stthis.makePostRequest("http://localhost:4000/checks/identity",
            { "": "" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.identityCheck = "Pass";
                context.content.resize();
            });
        }, 1000, this);
        console.log("TERM : ", this.md.getTerm());
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/affordability", 
            //    stthis.makePostRequest("http://localhost:4000/checks/affordability",
            { "uprn": "79984",
                "person_id": 100000013,
                "term": stthis.md.getTerm(),
                "loan_amount": stthis.md.getLoanAmount() }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.affordabilityCheck = "Pass";
                context.content.resize();
            });
        }, 2000, this);
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/credit", 
            //    stthis.makePostRequest("http://localhost:4000/checks/credit",
            { "person_id": "100000013" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.creditCheck = "Pass";
                context.content.resize();
            });
        }, 3000, this);
        setTimeout(function (stthis) {
            stthis.makePostRequest("https://hmlr-ds-instantmortgageapi.eu-gb.mybluemix.net/checks/earnings", 
            // stthis.makePostRequest("http://localhost:4000/checks/earnings",
            { "person_id": "100000013" }, function (data, context) {
                if (data.passed != true) {
                    context.stop = true;
                }
                context.checkResults.earningsCheck = "Pass";
                context.content.resize();
            });
        }, 4000, this);
        // setTimeout(function(stthis) {
        //     if (!stthis.stop) {
        //     stthis.navCtrl.push(ContactPage);
        //     }
        // },5000,this);
    };
    AboutPage.prototype.loadNextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage.prototype.resizeContent = function () {
        this.content.resize();
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], AboutPage.prototype, "content", void 0);
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/about/about.html"*/'<ds-header></ds-header>\n\n<ion-content has-header padding-horizontal style="margin-top: 90px;">\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../../assets/bankicon/_property check_.png">\n      </ion-thumbnail>\n      <h2>Property Check</h2>\n      <h3 class="info">We\'ll look for any: <br>\n        &nbsp;&#8226; flood risks <br>\n        &nbsp;&#8226; coal mining in the area <br>\n        &nbsp;&#8226; local land charges on the property <br>\n        &nbsp;&#8226; other risks <br>\n      </h3>\n      <p item-end class="result">{{checkResults.propertyCheck}}</p>\n    </ion-item>\n    <ion-item class="small-block">\n      <ion-thumbnail item-start>\n        <img src="../../assets/bankicon/_identity_ check.png">\n      </ion-thumbnail>\n      <h2>Identity Check</h2>\n      <h3 class="info">We\'ll use your identity documents to confirm your identity.</h3>\n      <p item-end class="result">{{checkResults.identityCheck}}</p>\n    </ion-item>\n    <ion-item class="small-block">\n      <ion-thumbnail item-start>\n        <img src="../../assets/bankicon/_affordability_ icon.png">\n      </ion-thumbnail>\n        <h2>Affordability</h2>\n        <h3 class="info">We’ll check your bank account information to confirm that you can afford <br> the mortgage repayments.</h3>\n        <p item-end class="result">{{checkResults.affordabilityCheck}}</p>\n    </ion-item>\n    <ion-item class="small-block">\n      <ion-thumbnail item-start>\n        <img style="padding-top: 10px;" src="../../assets/bankicon/_credit_ check.png">\n      </ion-thumbnail>\n      <h2>Credit Check</h2>\n      <h3 class="info">We’ll use Experian, or another third party, to check your\n        current credit rating.\n      </h3>\n      <p item-end class="result">{{checkResults.creditCheck}}</p>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-thumbnail item-start>\n        <img src="../../assets/bankicon/_earnings_ icon.png">\n        <br>\n        <p class="result">{{checkResults.earningsCheck}}</p>\n      </ion-thumbnail>\n      <h2>Earnings Check</h2>\n      <h3 class="info">We\'ll perform a check with HMRC on earnings against your P60 <br>\n        including tax and the amount you’ve earned in the year.</h3>\n    </ion-item> -->\n  </ion-list>\n  <div class="info1" *ngIf = "checkResults.affordabilityCheck == \'Fail\'">\n    <h1>The mortgage request failed due to affordability check</h1>\n  </div>\n\n  <button ion-button (click)="loadNextPage()">Continue</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/CS040MG/Projects/digital-street/PoCs/instant_mortgage_ui/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_mortgage_details_mortgage_details__["a" /* MortgageDetailsProvider */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MortgageDetailsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(241);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MortgageDetailsProvider);

//# sourceMappingURL=mortgage-details.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map