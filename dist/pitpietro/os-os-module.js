(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["os-os-module"],{

/***/ "./src/app/os/os-post/os-post.component.ts":
/*!*************************************************!*\
  !*** ./src/app/os/os-post/os-post.component.ts ***!
  \*************************************************/
/*! exports provided: OsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsPostComponent", function() { return OsPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");



class OsPostComponent {
    constructor() { }
    ngOnInit() {
    }
}
OsPostComponent.ɵfac = function OsPostComponent_Factory(t) { return new (t || OsPostComponent)(); };
OsPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OsPostComponent, selectors: [["app-os-post"]], decls: 1, vars: 0, template: function OsPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "scully-content");
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29zL29zLXBvc3Qvb3MtcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-os-post',
                templateUrl: './os-post.component.html',
                styleUrls: ['./os-post.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/os/os-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/os/os-routing.module.ts ***!
  \*****************************************/
/*! exports provided: OsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsRoutingModule", function() { return OsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _os_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./os.component */ "./src/app/os/os.component.ts");
/* harmony import */ var _os_post_os_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./os-post/os-post.component */ "./src/app/os/os-post/os-post.component.ts");






const routes = [
    {
        path: ':id',
        component: _os_post_os_post_component__WEBPACK_IMPORTED_MODULE_3__["OsPostComponent"],
    },
    {
        path: '',
        component: _os_component__WEBPACK_IMPORTED_MODULE_2__["OsComponent"],
    }
];
class OsRoutingModule {
}
OsRoutingModule.ɵfac = function OsRoutingModule_Factory(t) { return new (t || OsRoutingModule)(); };
OsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OsRoutingModule });
OsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/os/os.component.ts":
/*!************************************!*\
  !*** ./src/app/os/os.component.ts ***!
  \************************************/
/*! exports provided: OsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsComponent", function() { return OsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function OsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", post_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.title, " ");
} }
class OsComponent {
    constructor(scully) {
        this.scully = scully;
        this.links$ = this.scully.available$;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.links$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(routes => routes.filter(route => { var _a; return route.route.startsWith('/os/') && ((_a = route.sourceFile) === null || _a === void 0 ? void 0 : _a.endsWith('.md')); })))
            .subscribe({
            next: data => {
                this.osPosts = data;
                console.log(`|OsComponent| links$ ~ next `, data);
                console.log(`|OsComponent| links$ ~ 1st post tags: `, this.osPosts[0].tags);
            },
            error: err => {
                console.log(`|OsComponent| links$ ~ error: `, err);
            },
            complete: () => {
                console.log(`|OsComponent| links$ ~ complete `);
            }
        });
    }
    ngOnDestroy() {
        console.log(`|OsComponent| ngOnDestroy()`);
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        console.log(`|OsComponent| ngOnDestroy() ~ unsubscribed all`);
    }
}
OsComponent.ɵfac = function OsComponent_Factory(t) { return new (t || OsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"])); };
OsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OsComponent, selectors: [["app-os"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function OsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OS posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OsComponent_li_3_Template, 3, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.osPosts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWV0cm9wb2x1enppL1dlYnN0b3JtUHJvamVjdHMvcGl0cGlldHJvLmdpdGh1Yi5pby9zcmMvYXBwL29zL29zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcy9vcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvb3Mvb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOnJnYig1MSwgNiwgMzcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyMTEsIDIzNik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4iLCJoMSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-os',
                templateUrl: './os.component.html',
                styleUrls: ['./os.component.scss'],
            }]
    }], function () { return [{ type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/os/os.module.ts":
/*!*********************************!*\
  !*** ./src/app/os/os.module.ts ***!
  \*********************************/
/*! exports provided: OsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsModule", function() { return OsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _os_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./os-routing.module */ "./src/app/os/os-routing.module.ts");
/* harmony import */ var _os_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./os.component */ "./src/app/os/os.component.ts");
/* harmony import */ var _os_post_os_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./os-post/os-post.component */ "./src/app/os/os-post/os-post.component.ts");







class OsModule {
}
OsModule.ɵfac = function OsModule_Factory(t) { return new (t || OsModule)(); };
OsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OsModule });
OsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _os_routing_module__WEBPACK_IMPORTED_MODULE_3__["OsRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OsModule, { declarations: [_os_component__WEBPACK_IMPORTED_MODULE_4__["OsComponent"],
        _os_post_os_post_component__WEBPACK_IMPORTED_MODULE_5__["OsPostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _os_routing_module__WEBPACK_IMPORTED_MODULE_3__["OsRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _os_component__WEBPACK_IMPORTED_MODULE_4__["OsComponent"],
                    _os_post_os_post_component__WEBPACK_IMPORTED_MODULE_5__["OsPostComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _os_routing_module__WEBPACK_IMPORTED_MODULE_3__["OsRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=os-os-module.js.map