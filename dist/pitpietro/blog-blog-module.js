(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");





const routes = [
    {
        path: ':slug',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    },
    {
        path: '**',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"],
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵfac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); };
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");




class BlogComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 13, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ScullyIo content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "End of content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: #330625;\n  background-color: #f8d3ec;\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waWV0cm9wb2x1enppL1dlYnN0b3JtUHJvamVjdHMvcGl0cGlldHJvLmdpdGh1Yi5pby9zcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOnJnYig1MSwgNiwgMzcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyMTEsIDIzNik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4iLCJoMSB7XG4gIGNvbG9yOiAjMzMwNjI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkM2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufSJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.component */ "./src/app/blog/blog.component.ts");






class BlogModule {
}
BlogModule.ɵfac = function BlogModule_Factory(t) { return new (t || BlogModule)(); };
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map