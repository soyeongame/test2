(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+wy4":
/*!********************************!*\
  !*** ./src/app/model/sound.ts ***!
  \********************************/
/*! exports provided: SOUNDS, Sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUNDS", function() { return SOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
const SOUNDS = {
    NOPE: 'invalid',
    SELECT: 'select',
    MATCH: 'match',
    OVER: 'over'
};
class Sound {
    constructor() {
        this.enabled = true;
        this.audioplayers = {};
    }
    play(sound) {
        if (!this.enabled) {
            return;
        }
        if (!this.audioplayers[sound]) {
            const audio = new Audio();
            audio.src = `assets/sounds/${sound}.ogg`;
            audio.load();
            this.audioplayers[sound] = audio;
        }
        this.audioplayers[sound].play()
            .catch(e => {
            console.error(e);
        });
    }
    pause(sound) {
        if (this.audioplayers[sound]) {
            this.audioplayers[sound].pause();
        }
    }
}


/***/ }),

/***/ "/cIV":
/*!***************************************************!*\
  !*** ./src/app/components/tile/tile.component.ts ***!
  \***************************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-set-loader/image-set-loader.component */ "/vdE");


class TileComponent {
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], inputs: { imageSet: "imageSet", tile: "tile" }, decls: 4, vars: 3, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 75 100", "preserveAspectRatio", "xMidYMid meet"], ["app-image-set-loader", "", 3, "imageSet", "prefix"], ["x", "0", "y", "0", "width", "75", "height", "100", "rx", "10", "ry", "10", 1, "stone"], ["x", "6", "y", "6", "width", "63", "height", "88"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "defs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSet", ctx.imageSet)("prefix", "t_" + ctx.imageSet + "_");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", "#t_" + ctx.imageSet + "_" + ctx.tile, null, "xlink");
    } }, directives: [_image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_1__["ImageSetLoaderComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  max-width: 1.5em;\n}\n[_nghost-%COMP%]    > svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #FFF9E5;\n  border: 1px solid #4b4b4b;\n}\n[_nghost-%COMP%]    > svg[_ngcontent-%COMP%]   rect.stone[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREQ7QUFHQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQURGO0FBR0U7RUFDQyxVQUFBO0VBQ0EsWUFBQTtBQURIIiwiZmlsZSI6InRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGUvZ2xvYmFsc1wiO1xuXG46aG9zdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWF4LXdpZHRoOiAxLjVlbTtcblxuXHQ+IHN2ZyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkY5RTU7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzRiNGI0YjtcblxuXHRcdHJlY3Quc3RvbmUge1xuXHRcdFx0ZmlsbDogbm9uZTtcblx0XHRcdHN0cm9rZTogbm9uZTtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "/vdE":
/*!***************************************************************************!*\
  !*** ./src/app/components/image-set-loader/image-set-loader.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImageSetLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSetLoaderComponent", function() { return ImageSetLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_svgdef_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/svgdef.service */ "ITmp");




const _c0 = ["app-image-set-loader", ""];
class ImageSetLoaderComponent {
    constructor(elementRef, svgdef) {
        this.elementRef = elementRef;
        this.svgdef = svgdef;
    }
    ngOnChanges(changes) {
        this.getImageSet();
    }
    getImageSet() {
        if (!this.imageSet) {
            return;
        }
        this.svgdef.get(this.imageSet)
            .then(def => {
            let s = def.split('<defs>')[1].split('</defs>')[0];
            s = s.replace(/xlink:href="\./g, 'xlink:href="assets/svg')
                .replace(/ id="t_/g, ` id="${this.prefix}t_`);
            setTimeout(() => {
                while (this.elementRef.nativeElement.firstChild) {
                    this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.firstChild);
                }
                this.elementRef.nativeElement.innerHTML = s;
                if (!this.elementRef.nativeElement.firstChild) {
                    const doc = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${s}</svg>`, 'application/xml');
                    const node = this.elementRef.nativeElement.ownerDocument.importNode(doc.documentElement, true);
                    this.elementRef.nativeElement.appendChild(node);
                }
            }, 0);
        })
            .catch(e => {
            console.error(e);
        });
    }
}
ImageSetLoaderComponent.ɵfac = function ImageSetLoaderComponent_Factory(t) { return new (t || ImageSetLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_svgdef_service__WEBPACK_IMPORTED_MODULE_1__["SvgdefService"])); };
ImageSetLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSetLoaderComponent, selectors: [["", "app-image-set-loader", ""]], inputs: { imageSet: "imageSet", prefix: "prefix" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 1, vars: 0, template: function ImageSetLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "defs");
    } }, encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\mah-main\src\main.ts */"zUnb");


/***/ }),

/***/ "0ngG":
/*!*********************************************************!*\
  !*** ./src/app/modules/defer-load/defer-load.module.ts ***!
  \*********************************************************/
/*! exports provided: DeferLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadModule", function() { return DeferLoadModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _defer_load_scroll_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defer-load-scroll-host.directive */ "zY0Y");
/* harmony import */ var _defer_load_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defer-load.directive */ "9L4c");
/* harmony import */ var _defer_load_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defer-load.service */ "EMuv");






class DeferLoadModule {
    static forRoot() {
        return {
            ngModule: DeferLoadModule
        };
    }
}
DeferLoadModule.ɵfac = function DeferLoadModule_Factory(t) { return new (t || DeferLoadModule)(); };
DeferLoadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DeferLoadModule });
DeferLoadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_defer_load_service__WEBPACK_IMPORTED_MODULE_4__["DeferLoadService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeferLoadModule, { declarations: [_defer_load_directive__WEBPACK_IMPORTED_MODULE_3__["DeferLoadDirective"], _defer_load_scroll_host_directive__WEBPACK_IMPORTED_MODULE_2__["DeferLoadScrollHostDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_defer_load_directive__WEBPACK_IMPORTED_MODULE_3__["DeferLoadDirective"], _defer_load_scroll_host_directive__WEBPACK_IMPORTED_MODULE_2__["DeferLoadScrollHostDirective"]] }); })();


/***/ }),

/***/ "1GeQ":
/*!*********************************!*\
  !*** ./src/app/model/consts.ts ***!
  \*********************************/
/*! exports provided: Consts, STATES, Backgrounds, ImageSets, ImageSetDefault, TILES, TILES_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consts", function() { return Consts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backgrounds", function() { return Backgrounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSets", function() { return ImageSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSetDefault", function() { return ImageSetDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILES", function() { return TILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILES_INFO", function() { return TILES_INFO; });
const Consts = {
    mY: 18, mX: 38, mZ: 7,
    tileWidth: 75,
    tileHeight: 100
};
const STATES = {
    idle: 0,
    run: 1,
    pause: 2,
    freeze: 3
};
const Backgrounds = [
    { img: undefined, name: 'None' },
    { img: 'Jelly.jpg', name: 'Jelly' },
    { img: 'Idle song.jpg', name: 'Idle song' },
    { img: 'LATATA.jpg', name: 'LATATA' },
    { img: 'HANN.jpg', name: 'HANN' },
    { img: 'Wow Thing.jpg', name: 'Wow Thing' },
    { img: 'Senorita.jpg', name: 'Senorita' },
    { img: 'Uh-Oh.jpg', name: 'Uh-Oh' },
    { img: 'Oh my god.jpg', name: 'Oh my god' },
    { img: 'DUMDi DUMDi.jpg', name: 'DUMDi DUMDi' },
    { img: 'HWAA.jpg', name: 'HWAA' }
];
const ImageSets = [
    { id: 'riichi', type: 'SVG', name: 'Riichi', url: 'https://github.com/FluffyStuff/riichi-mahjong-tiles' },
    { id: 'uni', type: 'SVG', name: 'Uni', url: 'https://commons.wikimedia.org/wiki/Category:Unicode_1F000-1F02F_Mahjong_Tiles_(color)' },
    { id: 'bzhmaddog', type: 'SVG', name: 'Bzhmaddog', url: 'https://github.com/bzhmaddog/html5-mahjong-solitaire/tree/master/res/skins/default/tiles' },
    { id: 'cheshire137', type: 'SVG', name: 'Cheshire', url: 'https://github.com/cheshire137/Mahjong/tree/master/app/assets/images/tiles' },
    { id: 'recri2', type: 'SVG', name: 'Recri', url: 'https://github.com/recri/mahjong' },
    { id: 'unib', type: 'SVG', name: 'Black', url: 'https://commons.wikimedia.org/wiki/Category:Unicode_1F000-1F02F_Mahjong_Tiles' },
    { id: 'gleitz', type: 'PNG', name: 'Gleitz', url: 'https://github.com/gleitz/mahjong/tree/master/public/img/tiles' },
    { id: 'recri', type: 'PNG', name: 'Recri', url: 'https://github.com/recri/mahjong' },
    { id: 'open-fruits', type: 'PNG', name: 'Fruits', url: 'https://github.com/xunkar/open-mahjong/tree/master/resources/tiles/fruits' },
    { id: 'picasso', type: 'PNG', name: 'Picasso', url: 'http://star.physics.yale.edu/~ullrich/software/SolitaireMahjong/' },
    { id: 'modern', type: 'PNG', name: 'Modern', url: 'http://star.physics.yale.edu/~ullrich/software/SolitaireMahjong/' },
    { id: 'produce101', type: 'PNG', name: 'produce101' }
];
const ImageSetDefault = 'riichi';
const TILES = [
    ['t_do1', 't_do1', 't_do1', 't_do1'],
    ['t_do2', 't_do2', 't_do2', 't_do2'],
    ['t_do3', 't_do3', 't_do3', 't_do3'],
    ['t_do4', 't_do4', 't_do4', 't_do4'],
    ['t_do5', 't_do5', 't_do5', 't_do5'],
    ['t_do6', 't_do6', 't_do6', 't_do6'],
    ['t_do7', 't_do7', 't_do7', 't_do7'],
    ['t_do8', 't_do8', 't_do8', 't_do8'],
    ['t_do9', 't_do9', 't_do9', 't_do9'],
    ['t_ch1', 't_ch1', 't_ch1', 't_ch1'],
    ['t_ch2', 't_ch2', 't_ch2', 't_ch2'],
    ['t_ch3', 't_ch3', 't_ch3', 't_ch3'],
    ['t_ch4', 't_ch4', 't_ch4', 't_ch4'],
    ['t_ch5', 't_ch5', 't_ch5', 't_ch5'],
    ['t_ch6', 't_ch6', 't_ch6', 't_ch6'],
    ['t_ch7', 't_ch7', 't_ch7', 't_ch7'],
    ['t_ch8', 't_ch8', 't_ch8', 't_ch8'],
    ['t_ch9', 't_ch9', 't_ch9', 't_ch9'],
    ['t_ba1', 't_ba1', 't_ba1', 't_ba1'],
    ['t_ba2', 't_ba2', 't_ba2', 't_ba2'],
    ['t_ba3', 't_ba3', 't_ba3', 't_ba3'],
    ['t_ba4', 't_ba4', 't_ba4', 't_ba4'],
    ['t_ba5', 't_ba5', 't_ba5', 't_ba5'],
    ['t_ba6', 't_ba6', 't_ba6', 't_ba6'],
    ['t_ba7', 't_ba7', 't_ba7', 't_ba7'],
    ['t_ba8', 't_ba8', 't_ba8', 't_ba8'],
    ['t_ba9', 't_ba9', 't_ba9', 't_ba9'],
    ['t_se_spring', 't_se_summer', 't_se_fall', 't_se_winter'],
    ['t_wi_north', 't_wi_north', 't_wi_north', 't_wi_north'],
    ['t_wi_south', 't_wi_south', 't_wi_south', 't_wi_south'],
    ['t_wi_east', 't_wi_east', 't_wi_east', 't_wi_east'],
    ['t_wi_west', 't_wi_west', 't_wi_west', 't_wi_west'],
    ['t_fl_bamboo', 't_fl_chrysanthemum', 't_fl_orchid', 't_fl_plum'],
    ['t_dr_green', 't_dr_green', 't_dr_green', 't_dr_green'],
    ['t_dr_white', 't_dr_white', 't_dr_white', 't_dr_white'],
    ['t_dr_red', 't_dr_red', 't_dr_red', 't_dr_red']
];
const TILES_INFO = {
    suits: [
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_do1' },
                { name: '', char: '', img: 't_do2' },
                { name: '', char: '', img: 't_do3' },
                { name: '', char: '', img: 't_do4' },
                { name: '', char: '', img: 't_do5' },
                { name: '', char: '', img: 't_do6' },
                { name: '', char: '', img: 't_do7' },
                { name: '', char: '', img: 't_do8' },
                { name: '', char: '', img: 't_do9' }
            ]
        },
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_ba1' },
                { name: '', char: '', img: 't_ba2' },
                { name: '', char: '', img: 't_ba3' },
                { name: '', char: '', img: 't_ba4' },
                { name: '', char: '', img: 't_ba5' },
                { name: '', char: '', img: 't_ba6' },
                { name: '', char: '', img: 't_ba7' },
                { name: '', char: '', img: 't_ba8' },
                { name: '', char: '', img: 't_ba9' }
            ]
        },
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_ch1' },
                { name: '', char: '', img: 't_ch2' },
                { name: '', char: '', img: 't_ch3' },
                { name: '', char: '', img: 't_ch4' },
                { name: '', char: '', img: 't_ch5' },
                { name: '', char: '', img: 't_ch6' },
                { name: '', char: '', img: 't_ch7' },
                { name: '', char: '', img: 't_ch8' },
                { name: '', char: '', img: 't_ch9' }
            ]
        }
    ],
    bonus: [
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_se_spring' },
                { name: '', char: '', img: 't_se_summer' },
                { name: '', char: '', img: 't_se_fall' },
                { name: '', char: '', img: 't_se_winter' }
            ]
        },
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_fl_bamboo' },
                { name: '', char: '', img: 't_fl_orchid' },
                { name: '', char: '', img: 't_fl_plum' },
                { name: '', char: '', img: 't_fl_chrysanthemum' }
            ]
        }
    ],
    honors: [
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_wi_east' },
                { name: '', char: '', img: 't_wi_south' },
                { name: '', char: '', img: 't_wi_west' },
                { name: '', char: '', img: 't_wi_north' }
            ]
        },
        {
            name: '', tiles: [
                { name: '', char: '', img: 't_dr_red' },
                { name: '', char: '', img: 't_dr_green' },
                { name: '', char: '', img: 't_dr_white' }
            ]
        }
    ]
};


/***/ }),

/***/ "1U8w":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _model_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/consts */ "1GeQ");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/app.service */ "3mgE");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/layout.service */ "8LS9");
/* harmony import */ var _service_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/localstorage.service */ "pp5G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");













function SettingsComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsComponent_li_40_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.app.settings.tileset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageset_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "imageset", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", imageset_r2.id)("ngModel", ctx_r0.app.settings.tileset);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "imageset", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](imageset_r2.name);
} }
function SettingsComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsComponent_li_48_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.app.settings.background = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const back_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "back", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", back_r6.img)("ngModel", ctx_r1.app.settings.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "back", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](back_r6.name);
} }
class SettingsComponent {
    constructor(app, storage, layoutService, translate) {
        this.app = app;
        this.storage = storage;
        this.layoutService = layoutService;
        this.translate = translate;
        this.sets = _model_consts__WEBPACK_IMPORTED_MODULE_2__["ImageSets"];
        this.backs = _model_consts__WEBPACK_IMPORTED_MODULE_2__["Backgrounds"];
    }
    clearTimes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const layouts = yield this.layoutService.get();
            for (const layout of layouts.items) {
                this.storage.clearScore(layout.id);
            }
        });
    }
    clearTimesClick() {
        if (confirm(this.translate.instant('BEST_TIMES_CLEAR_SURE'))) {
            this.clearTimes().catch(e => {
                console.error(e);
            });
        }
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 49, vars: 32, consts: [[1, "settings-content"], [1, "settings"], [1, "buttons"], [1, "radio"], ["type", "radio", "name", "lang", "id", "lang0", "value", "auto", 3, "ngModel", "ngModelChange"], ["for", "lang0"], ["type", "radio", "name", "lang", "id", "lang1", "value", "en", 3, "ngModel", "ngModelChange"], ["for", "lang1"], ["type", "radio", "name", "lang", "id", "lang2", "value", "kr", 3, "ngModel", "ngModelChange"], ["for", "lang2"], [3, "click"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "imageset", 3, "id", "value", "ngModel", "ngModelChange"], [3, "for"], ["type", "radio", "name", "back", 3, "id", "value", "ngModel", "ngModelChange"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.app.settings.lang = $event; })("ngModelChange", function SettingsComponent_Template_input_ngModelChange_12_listener() { return ctx.app.setLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.app.settings.lang = $event; })("ngModelChange", function SettingsComponent_Template_input_ngModelChange_17_listener() { return ctx.app.setLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.app.settings.lang = $event; })("ngModelChange", function SettingsComponent_Template_input_ngModelChange_22_listener() { return ctx.app.setLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_30_listener() { return ctx.clearTimesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SettingsComponent_li_40_Template, 4, 5, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, SettingsComponent_li_48_Template, 4, 5, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\uD83E\uDD8A", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 14, "SETTINGS"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 16, "LANG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.app.settings.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, "LANG_AUTO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.app.settings.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 20, "LANG_EN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.app.settings.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 22, "LANG_KR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 24, "BEST_TIMES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 26, "BEST_TIMES_CLEAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 28, "TILESET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sets);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 30, "BACKGROUND"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.backs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000000;\n  margin-top: 0;\n  margin-bottom: 0.2em;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  font-weight: bold;\n  border-bottom: 1px solid #eedb90;\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-right: 10px;\n}\n@media only screen and (max-width: 500px) {\n  [_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n[_nghost-%COMP%]   .settings-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  max-width: 40%;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .radio[_ngcontent-%COMP%] {\n  text-align: left;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-left: 2px;\n}\n[_nghost-%COMP%]   .radio[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 3px;\n}\n[_nghost-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZVxcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGNDRlM7RURHVCxhQUFBO0VBQ0Esb0JBQUE7QUFESjtBRWtLRTtFRnJLQTtJQU1DLGdCQUFBO0VBQ0Q7QUFDRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNGLGdDQUFBO0FBQUY7QUFHQztFQUNDLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUFERjtBQUdFO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0FBREg7QUUySkU7RUY1SkE7SUFLRSxXQUFBO0VBQUY7QUFDRjtBQUNHO0VBQ0MsV0FBQTtBQUNKO0FBQUk7RUFDQyxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0FBRUw7QUFESztFQUNDLG1CQUFBO01BQUEsV0FBQTtVQUFBLE9BQUE7QUFHTjtBQURLO0VBQ0MsY0FBQTtBQUdOO0FBSUM7RUFDQyxnQkFBQTtBQUZGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDRixzQkFBQTtBQUhGO0FBSUU7RUFDQyxzQkFBQTtFQUNBLGdCQUFBO0FBRkg7QUFLRTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0FBTEoiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGUvZ2xvYmFsc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byh0aW55LWRvd24pIHtcblx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0fVxuXHR9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDAgNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRiYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG5cdH1cblxuXHQuc2V0dGluZ3MtY29udGVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblxuXHRcdD4gZGl2IHtcblx0XHRcdHdpZHRoOiAzMCU7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblx0XHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwtZG93bikge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdD4gZGl2IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdD4gZGl2IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0PiBkaXYge1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5hbWUge1xuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA0MCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YnV0dG9uIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG5cbiAgLnJhZGlvIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHRsYWJlbCB7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDJweDtcbiAgICB9XG5cblx0XHRhIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgfVxuICB9XG5cbiAgLmNsb3NlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4iLCIkYmFja2dyb3VuZC1jb2xvcjogI2ViZDQ3YTtcblxuJHBvcHVwLWJhY2tncm91bmQtY29sb3I6ICNmNWYxZTQ7XG4kcG9wdXAtYm9yZGVyLWNvbG9yOiM3MDcwNzA7XG5cbiR0ZXh0LWNvbG9yOiAjMDAwMDAwO1xuJHRleHQtZm9udDogJ2pvc2VmaW5fc2Fuc3JlZ3VsYXInLCAnVGFob21hJywgc2Fucy1zZXJpZjtcblxuLy8gRm9udC1TaXplXG4kYmFzZS1mb250LXNpemU6IDFlbTtcblxuLy8gTGluZS1IZWlnaHRcbiRiYXNlLWxpbmUtaGVpZ2h0OiAxLjU7XG4kaGVhZGVyLWxpbmUtaGVpZ2h0OiAxLjI1O1xuXG4vLyBCcmVha3BvaW50c1xuJGJwLXBpY286IDI4MHB4O1xuJGJwLXRpbnk6IDQwMHB4O1xuJGJwLXNtYWxsOiA1MDBweDtcbiRicC1tZWRpdW06IDcwMHB4O1xuJGJwLWxhcmdlOiAxMDAwcHg7XG4kYnAtaHVnZTogMTkwMHB4O1xuJGJwLWp1bWJvOiAyMjAwcHg7XG4kYnAtbHVkaWNyb3VzOiAzMDAwcHg7XG5cbiRtcS1yZXRpbmE6IFwiKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKVwiO1xuIiwiQG1peGluIGZvbnRkZWYoJE9wZW5TYW5zUGF0aCwgJE9wZW5TYW5zVmVyc2lvbiwgJEZvbnRUeXBlOlwiUmVndWxhclwiKSB7XG4gIHNyYzogdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0uZW90P3Y9I3skT3BlblNhbnNWZXJzaW9ufScpO1xuICBzcmM6IHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LmVvdD8jaWVmaXgmdj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS53b2ZmMj92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKSBmb3JtYXQoJ3dvZmYyJyksXG4gIHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LndvZmY/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd3b2ZmJyksXG4gIHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LnR0Zj92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gIHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LnN2Zz92PSN7JE9wZW5TYW5zVmVyc2lvbn0jI3skRm9udFR5cGV9JykgZm9ybWF0KCdzdmcnKTtcbn1cblxuQG1peGluIHNjYWxlKCRhbW91bnQpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBTYWZhcmkgYW5kIENocm9tZShFbmdpbmU6LVdlYmtpdClcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBNb3ppbGxhKEVuZ2luZTotR2Vja28pXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBJRShFbmdpbmU6LVRyaWRlbnQpXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJGFtb3VudCk7IC8vIE9wZXJhKEVuZ2luZTotUHJlc3RvKVxuICB0cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkdG9wLCAkbGVmdCwgJGJsdXIsICRjb2xvciwgJGluc2V0OiBmYWxzZSkge1xuICBAaWYgJGluc2V0IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH0gQGVsc2Uge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gcm91bmRlZCgkcmFkaXVzOiAwLjVlbSkge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbn1cblxuQG1peGluIG5vLXNlbGVjdCgpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJveCgkYm94KSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJGJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiAkYm94O1xuICBib3gtc2l6aW5nOiAkYm94O1xufVxuXG5AbWl4aW4gYmx1cigkYmx1cikge1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1vLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbkBtaXhpbiB0ZXh0c2hhZG93LWdyYWRpZW50KCR0ZXh0LWNvbG9yKSB7XG4gIHRleHQtc2hhZG93OiBkYXJrZW4oJHRleHQtY29sb3IsIDElKSAxcHggMCAwLCBkYXJrZW4oJHRleHQtY29sb3IsMTYlKSAtMXB4IDAgMCwgZGFya2VuKCR0ZXh0LWNvbG9yLCAzMiUpIDAgMXB4IDAsIGRhcmtlbigkdGV4dC1jb2xvciwgNTAlKSAwIC0xcHggMCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA3MCUpIDNweCAzcHggNXB4LCBkYXJrZW4oJHRleHQtY29sb3IsIDk5JSkgNXB4IDVweCAxNXB4O1xufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1saW5lYXItZ3JhZGllbnQoJGJhY2ssICRzdGFydDogIzAwMCwgJHN0b3A6ICNGRkYpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2s7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LCAkc3RvcCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydCwgJHN0b3ApO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSkge1xuICB0ZXh0LXNoYWRvdzogJHggJHkgJGJsdXIgJGNvbG9yO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3ctd2hpdGUtZ3JhZGllbnQoKSB7XG4gIHRleHQtc2hhZG93OiAjZWVlIDFweCAwIDAsICNlZWUgLTFweCAwIDAsICNlZWUgMCAxcHggMCwgI2VlZSAwIC0xcHggMCwgI2JiYiAzcHggM3B4IDVweCwgI2IxYWU5NyA1cHggNXB4IDE1cHg7XG59XG5cbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5KSB7XG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAkb3BhY2l0eS1pZTogJG9wYWNpdHkgKiAxMDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7IC8vSUU4XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1tb3otdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1tcy10cmFuc2l0aW9uOiAkYXJncztcbiAgLW8tdHJhbnNpdGlvbjogJGFyZ3M7XG4gIHRyYW5zaXRpb246ICRhcmdzO1xufVxuXG5cbkBtaXhpbiByZXNwb25kLXRvLWhlaWdodCgkbWVkaWEpIHtcblx0QGlmICRtZWRpYSA9PSBwaWNvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHBpY28tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXRpbnkpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gdGlueS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLXRpbnkpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbGFyZ2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFyZ2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsdWRpY3JvdXMtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG5cdEBpZiAkbWVkaWEgPT0gcGljby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHBpY28tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLXBpY28pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gdGlueS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLXRpbnkpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1tZWRpdW0pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFyZ2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbHVkaWNyb3VzLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWx1ZGljcm91cykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ "2F/8":
/*!*********************************!*\
  !*** ./src/app/model/import.ts ***!
  \*********************************/
/*! exports provided: sortMapping, convert3400Matrix, convert2805Matrix, convertKyodai, expandMapping, compactMapping, cleanImportLayout, expandMappingDeprecated, mappingToID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMapping", function() { return sortMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert3400Matrix", function() { return convert3400Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert2805Matrix", function() { return convert2805Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertKyodai", function() { return convertKyodai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandMapping", function() { return expandMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactMapping", function() { return compactMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanImportLayout", function() { return cleanImportLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandMappingDeprecated", function() { return expandMappingDeprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappingToID", function() { return mappingToID; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function sortMapping(mapping) {
    return mapping.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[2] < b[2]) {
            return -1;
        }
        if (a[2] > b[2]) {
            return 1;
        }
        return 0;
    });
}
function convertMatrix(matrixCount, rowCount, cellCount, name, board) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const matrixLength = rowCount * cellCount;
        const totalLength = matrixLength * matrixCount;
        if (board.length !== totalLength) {
            return Promise.reject(Error('Invalid Matrix Pattern length'));
        }
        const layout = { name, cat: 'Import', mapping: [] };
        for (let z = 0; z < matrixCount; z++) {
            const matrix = board.slice(z * matrixLength, (z + 1) * matrixLength);
            for (let y = 0; y < rowCount; y++) {
                const row = matrix.slice(y * cellCount, (y + 1) * cellCount);
                row.split('').forEach((cell, x) => {
                    if (cell === '1') {
                        layout.mapping.push([z, x, y]);
                    }
                });
            }
        }
        return layout;
    });
}
function convert3400Matrix(name, board) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return convertMatrix(5, 20, 34, name, board);
    });
}
function convert2805Matrix(name, board) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return convertMatrix(5, 17, 33, name, board);
    });
}
function convertKyodai(data) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // unify line endings
        const lines = data.replace(/\r\n/g, '\n').split('\n');
        const version = lines[0] || '';
        if (['Kyodai 3.0', 'Kyodai 6.0'].includes(version)) {
            const nameCat = (lines[1] || '').split('::');
            const name = nameCat[0] || '';
            const cat = nameCat[1];
            const board = lines[2] || '';
            const layout = yield convert3400Matrix(name, board);
            layout.cat = cat || layout.cat;
            return layout;
        }
        return Promise.reject(Error(`Unknown .lay format ${JSON.stringify((version || '').slice(0, 50))}`));
    });
}
/*
export function compactMappingDeprecated(mapping: Mapping): Mapping {
    let maplist: Mapping = [];
    mapping.forEach(o => {
        const place: Array<number> = [];
        for (let i = 0; i < 4; i++) {
            place.push(o[i]);
        }
        maplist.push(place);
    });
    maplist = sortMapping(maplist);
    const result: Mapping = [];
    for (let i = maplist.length - 1; i >= 1; i--) {
        const item = maplist[i];
        const before = maplist[i - 1];
        if (before && (item[0] === before[0]) && (item[2] === before[2]) && (item[1] - 2 === before[1])) {
            before[3] = (before[3] || 1) + (item[3] || 1);
        } else if ((item[3] || 1) === 1) {
            result.unshift([item[0], item[1], item[2]]);
        } else {
            result.unshift(item);
        }
    }
    const first = maplist[0];
    result.unshift([first[0], first[1], first[2]]);
    return result;
}
*/
function expandMapping(map) {
    const result = [];
    map.forEach(matrix => {
        const z = matrix[0];
        const rows = matrix[1];
        rows.forEach(row => {
            const y = row[0];
            const cells = row[1];
            if (!Array.isArray(cells)) {
                result.push([z, cells, y]);
            }
            else {
                cells.forEach(cell => {
                    if (Array.isArray(cell)) {
                        let x = cell[0];
                        const count = cell[1];
                        for (let i = 0; i < count; i++) {
                            result.push([z, x, y]);
                            x += 2;
                        }
                    }
                    else {
                        result.push([z, cell, y]);
                    }
                });
            }
        });
    });
    return result;
}
function compactMapping(mapping) {
    const board = {};
    sortMapping(mapping).forEach(m => {
        board[m[0]] = board[m[0]] || {};
        board[m[0]][m[2]] = board[m[0]][m[2]] || [];
        board[m[0]][m[2]].push(m[1]);
    });
    const result = [];
    for (const z of Object.keys(board)) {
        const rows = [];
        for (const y of Object.keys(board[z])) {
            const a = board[z][y];
            const entries = [];
            let entry = { start: -1, current: -1, count: 0 };
            a.forEach(x => {
                if (x !== entry.current) {
                    entry = { start: x, current: x + 2, count: 1 };
                    entries.push(entry);
                }
                else {
                    entry.current += 2;
                    entry.count++;
                }
            });
            const cells = entries.map(e => {
                if (e.count === 1) {
                    return e.start;
                }
                return [e.start, e.count];
            });
            if (cells.length === 1 && !Array.isArray(cells[0])) {
                rows.push([Number(y), cells[0]]);
            }
            else {
                rows.push([Number(y), cells]);
            }
        }
        result.push([Number(z), rows]);
    }
    return result;
}
function cleanImportLayout(layout) {
    layout.name = layout.name.trim();
    // split author
    const sl = layout.name.split(' by ');
    if (sl.length > 1) {
        layout.name = sl[0].trim();
        layout.by = sl[1].trim();
    }
    // Capitalize
    layout.name = layout.name.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');
    // move board to left/top/min z-index
    let minZ = layout.mapping[0][0];
    let minX = layout.mapping[0][1];
    let minY = layout.mapping[0][2];
    layout.mapping.forEach(p => {
        minZ = Math.min(p[0], minZ);
        minX = Math.min(p[1], minX);
        minY = Math.min(p[2], minY);
    });
    layout.mapping.forEach(p => {
        p[0] = p[0] - (minZ || 0);
        p[1] = p[1] - (minX || 0);
        p[2] = p[2] - (minY || 0);
    });
    return layout;
}
function expandMappingDeprecated(mapping) {
    const result = [];
    if (mapping) {
        mapping.forEach(m => {
            for (let i = 0; i < (m[3] || 1); i++) {
                result.push([m[0], m[1] + (i * 2), m[2]]);
            }
        });
    }
    return result;
}
function hashString(s) {
    let hash = 0;
    let i;
    let chr;
    if (s.length === 0) {
        return hash;
    }
    for (i = 0; i < s.length; i++) {
        chr = s.charCodeAt(i);
        // eslint-disable-next-line no-bitwise
        hash = ((hash << 5) - hash) + chr;
        // eslint-disable-next-line no-bitwise
        hash |= 0; // Convert to 32bit integer
    }
    return hash + 2147483647;
}
function mappingToID(mapping) {
    return hashString(JSON.stringify(mapping)).toString();
}


/***/ }),

/***/ "3mgE":
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _model_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game */ "nB5j");
/* harmony import */ var _model_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/i18n */ "Lddg");
/* harmony import */ var _model_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/settings */ "xHFQ");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localstorage.service */ "pp5G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppService {
    constructor(storage, translate) {
        this.storage = storage;
        this.translate = translate;
        this.name = 'Mah Jong';
        this.game = new _model_game__WEBPACK_IMPORTED_MODULE_1__["Game"](storage);
        this.settings = new _model_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"](storage);
        this.settings.load();
        this.setupTranslations();
        this.setLang();
        this.game.init();
    }
    setLang() {
        let userLang;
        if (!this.settings.lang || this.settings.lang === 'auto') {
            userLang = navigator.language.split('-')[0]; // use navigator lang if available
            userLang = /(kr|en)/gi.test(userLang) ? userLang : 'en';
        }
        else {
            userLang = this.settings.lang;
        }
        if (['kr', 'en'].indexOf(userLang) >= 0) {
            this.translate.use(userLang);
        }
    }
    toggleSound() {
        this.settings.sounds = !this.settings.sounds;
        this.game.sound.enabled = this.settings.sounds;
        this.settings.save();
    }
    setupTranslations() {
        this.translate.setTranslation('en', _model_i18n__WEBPACK_IMPORTED_MODULE_2__["LANG_EN"]);
        this.translate.setTranslation('kr', _model_i18n__WEBPACK_IMPORTED_MODULE_2__["LANG_KR"]);
        this.translate.setDefaultLang('en');
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


/***/ }),

/***/ "4sam":
/*!***************************************************!*\
  !*** ./src/app/directives/drop-zone.directive.ts ***!
  \***************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// Angular Drag and Drop File
//
// Add this directive to an element to turn it into a dropzone
// for drag and drop of files.
// Example:
//
// <div (appDropZone)="onDrop($event)"></div>
//
// Any files dropped onto the region are then
// returned as a Javascript array of file objects.
// Which in TypeScript is `Array<File>`
//
// https://gist.github.com/darrenmothersele/7afda13d858a156ce571510dd78b7624
class DropZoneDirective {
    constructor() {
        // The directive emits a `fileDrop` event
        // with the list of files dropped on the element
        // as an JS array of `File` objects.
        this.fileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Disable dropping on the body of the document.
        // This prevents the browser from loading the dropped files
        // using it's default behaviour if the user misses the drop zone.
        // Set this input to false if you want the browser default behaviour.
        this.preventBodyDrop = true;
        // The `drop-zone-active` class is applied to the host
        // element when a drag is currently over the target.
        this.active = false;
    }
    onDrop(event) {
        event.preventDefault();
        this.active = false;
        const { dataTransfer } = event;
        if (dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.items) {
            const files = [];
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (dataTransfer.items[i] && dataTransfer.items[i].kind === 'file') {
                    const file = dataTransfer.items[i].getAsFile();
                    // eslint-disable-next-line no-null/no-null
                    if (file !== undefined && file !== null) {
                        files.push(file);
                    }
                }
            }
            dataTransfer.items.clear();
            this.fileDrop.emit(files);
        }
        else if (dataTransfer) {
            const files = dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.files;
            dataTransfer.clearData();
            if (files) {
                this.fileDrop.emit(Array.from(files));
            }
        }
    }
    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        this.active = true;
    }
    onDragLeave(event) {
        this.active = false;
    }
    onBodyDragOver(event) {
        if (this.preventBodyDrop) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onBodyDrop(event) {
        if (this.preventBodyDrop) {
            event.preventDefault();
        }
    }
}
DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) { return new (t || DropZoneDirective)(); };
DropZoneDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropZoneDirective, selectors: [["", "appDropZone", ""]], hostVars: 2, hostBindings: function DropZoneDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) { return ctx.onBodyDragOver($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"])("drop", function DropZoneDirective_drop_HostBindingHandler($event) { return ctx.onBodyDrop($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveBody"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("drop-zone-active", ctx.active);
    } }, inputs: { preventBodyDrop: "preventBodyDrop" }, outputs: { fileDrop: "appDropZone" } });


/***/ }),

/***/ "8LS9":
/*!*******************************************!*\
  !*** ./src/app/service/layout.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _model_import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/import */ "2F/8");
/* harmony import */ var _model_layout_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/layout-svg */ "jxWM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








class LayoutService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.layouts) {
                return this.layouts;
            }
            const result = yield this.http.get('assets/data/boards.json').toPromise();
            const items = [];
            for (const o of result) {
                const name = o.name;
                const category = o.cat || 'Classic';
                let mapping = [];
                if (o.map) {
                    mapping = Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["expandMapping"])(o.map);
                }
                if (o.mapping) {
                    mapping = Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["expandMappingDeprecated"])(o.mapping);
                }
                if (mapping.length > 0) {
                    const layout = { id: o.id ? o.id : Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["mappingToID"])(mapping), name, category, mapping, previewSVG: this.sanitizer.bypassSecurityTrustUrl(Object(_model_layout_svg__WEBPACK_IMPORTED_MODULE_4__["generateStaticLayoutSVG"])(mapping)) };
                    items.push(layout);
                }
            }
            this.layouts = { items };
            return this.layouts;
        });
    }
    importFile(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const s = yield LayoutService.readFile(file);
            let layout = yield Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["convertKyodai"])(s);
            layout = Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["cleanImportLayout"])(layout);
            const previewSVG = this.sanitizer.bypassSecurityTrustUrl(Object(_model_layout_svg__WEBPACK_IMPORTED_MODULE_4__["generateStaticLayoutSVG"])(layout.mapping));
            return { id: Object(_model_import__WEBPACK_IMPORTED_MODULE_3__["mappingToID"])(layout.mapping), name: layout.name, mapping: layout.mapping, category: layout.cat || 'Import', previewSVG };
        });
    }
    static readFile(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
                reader.onload = () => {
                    resolve(reader.result);
                };
                reader.onerror = () => {
                    reject(Error(`Reading File failed: ${reader.error}`));
                };
                reader.readAsBinaryString(file);
            });
        });
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac });


/***/ }),

/***/ "9L4c":
/*!************************************************************!*\
  !*** ./src/app/modules/defer-load/defer-load.directive.ts ***!
  \************************************************************/
/*! exports provided: DeferLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadDirective", function() { return DeferLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _defer_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defer-load.service */ "EMuv");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rect */ "Dz9N");





class DeferLoadDirective {
    constructor(elementRef, deferLoadService) {
        this.elementRef = elementRef;
        this.deferLoadService = deferLoadService;
        this.preRender = false;
        this.appDeferLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeoutLoadMS = 20;
    }
    ngAfterViewInit() {
        if (this.deferLoadService.isBrowser) {
            if (this.deferLoadService.hasIntersectionObserver) {
                this.registerIntersectionObserver();
            }
            else {
                this.addScrollListeners();
            }
        }
        else if (this.preRender) {
            this.load();
        }
    }
    ngOnDestroy() {
        this.removeListeners();
    }
    static getScrollPosition() {
        // Getting screen size and scroll position for IE
        return (window.scrollY || window.pageYOffset)
            + (document.documentElement.clientHeight || document.body.clientHeight);
    }
    loadAndUnobserve() {
        this.load();
        this.unobserve();
        this.removeListeners();
    }
    cancelDelayLoad() {
        if (!this.timeoutId) {
            return; // do nothing if timeout doesn't exist
        }
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
    }
    delayLoad() {
        if (this.timeoutId) {
            return; // timeout was already set, do nothing
        }
        this.timeoutId = setTimeout(() => {
            this.loadAndUnobserve();
            this.cancelDelayLoad();
        }, this.timeoutLoadMS);
    }
    manageIntersection(entry) {
        if (this.checkIfIntersecting(entry)) {
            this.delayLoad();
        }
        else {
            this.cancelDelayLoad();
        }
    }
    registerIntersectionObserver() {
        if (!!this.intersectionObserver) {
            return;
        }
        this.intersectionObserver = this.deferLoadService.getObserver();
        if (this.intersectionObserver && this.elementRef.nativeElement) {
            this.intersectionObserver.observe(this.elementRef.nativeElement);
            this.onbserveSubscription = this.deferLoadService.observeNotify
                .subscribe((entries) => {
                this.checkForIntersection(entries);
            });
        }
    }
    checkForIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.target === this.elementRef.nativeElement) {
                this.manageIntersection(entry);
            }
        });
    }
    ;
    checkIfIntersecting(entry) {
        // For Samsung native browser, IO has been partially implemented where by the
        // callback fires, but entry object is empty. We will check manually.
        if (entry && entry.time) {
            return entry.isIntersecting;
        }
        return this.isVisible();
    }
    load() {
        this.removeListeners();
        this.appDeferLoad.emit();
    }
    loadFromScroll() {
        setTimeout(() => {
            this.load();
        });
    }
    addScrollListeners() {
        this.scrollSubscription = this.deferLoadService.scrollNotify
            .subscribe((event) => {
            if (this.checkInView(event.rect)) {
                this.loadFromScroll();
            }
        });
        setTimeout(() => {
            if (this.checkInView(this.deferLoadService.currentViewport)) {
                this.loadFromScroll();
            }
        });
    }
    unobserve() {
        if (this.intersectionObserver && this.elementRef.nativeElement) {
            this.intersectionObserver.unobserve(this.elementRef.nativeElement);
            this.intersectionObserver = undefined;
        }
    }
    removeListeners() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
            this.scrollSubscription = undefined;
        }
        this.unobserve();
        if (this.onbserveSubscription) {
            this.onbserveSubscription.unsubscribe();
            this.onbserveSubscription = undefined;
        }
    }
    checkInView(rect) {
        const elemRect = _rect__WEBPACK_IMPORTED_MODULE_2__["Rect"].fromElement(this.elementRef.nativeElement);
        return elemRect.intersectsWithY(rect);
    }
    isVisible() {
        const scrollPosition = DeferLoadDirective.getScrollPosition();
        const elementOffset = this.elementRef.nativeElement.offsetTop;
        return elementOffset <= scrollPosition;
    }
}
DeferLoadDirective.ɵfac = function DeferLoadDirective_Factory(t) { return new (t || DeferLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_defer_load_service__WEBPACK_IMPORTED_MODULE_1__["DeferLoadService"])); };
DeferLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeferLoadDirective, selectors: [["", "appDeferLoad", ""]], inputs: { preRender: "preRender" }, outputs: { appDeferLoad: "appDeferLoad" } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "octk");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false,
    version: _version__WEBPACK_IMPORTED_MODULE_0__["version"]
};


/***/ }),

/***/ "BikA":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/app.service */ "3mgE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class HelpComponent {
    constructor(app) {
        this.app = app;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].version;
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 86, vars: 38, consts: [[1, "help-content"], [1, "license"], [1, "license-list"], [1, "name"], [1, "info"], ["rel", "noopener", "target", "_blank", "href", "https://github.com/ffalt/mah/blob/main/README.md"], ["rel", "noopener", "href", "https://github.com/ffalt/mah/blob/main/src/assets/sounds/README.md"], ["rel", "noopener", "target", "_blank", "href", "https://github.com/ffalt/mah/blob/main/src/fonts/README.md"], [1, "keyboard"], [1, "keyboard-list"], [1, "key"], [1, "func"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "MIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "CC0/CC-BY3.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fonts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "SIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "U");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("\uD83E\uDD8A", ctx.app.name, " Solitaire v", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, "LICENSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 16, "SHORTCUTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 18, "HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 20, "HINT_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 22, "UNDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 24, "UNDO_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 26, "RESTART"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 28, "RESTART_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](71, 30, "PAUSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 32, "PAUSE_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 34, "INFO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](85, 36, "TILES_INFO"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000000;\n  margin-top: 0;\n  margin-bottom: 10px;\n  line-height: 1.3em;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 4px;\n  font-weight: bold;\n  border-bottom: 1px solid #eedb90;\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n@media only screen and (max-width: 500px) {\n  [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 10px;\n}\n@media only screen and (max-width: 700px) {\n  [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n[_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    min-width: inherit;\n    max-width: inherit;\n    padding-right: 0;\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .help-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-bottom: 4px;\n  }\n}\n[_nghost-%COMP%]   .license[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  min-width: 40%;\n  max-width: 40%;\n}\n[_nghost-%COMP%]   .keyboard[_ngcontent-%COMP%]   .keyboard-list[_ngcontent-%COMP%]   .func[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  display: block;\n}\n[_nghost-%COMP%]   .keyboard[_ngcontent-%COMP%]   .keyboard-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  min-width: 50px;\n  max-width: 50px;\n}\n[_nghost-%COMP%]   .keyboard[_ngcontent-%COMP%]   .keyboard-list[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 2px solid #f5f5f5;\n  border-radius: 6px;\n  min-width: 40px;\n  display: inline-block;\n  letter-spacing: 1px;\n  background: black;\n  color: #f5f5f5;\n  -webkit-box-shadow: 0 5px 0 0 black;\n          box-shadow: 0 5px 0 0 black;\n  text-align: center;\n  margin-right: 0.3em;\n  margin-bottom: 0.3em;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .keyboard[_ngcontent-%COMP%]   .keyboard-list[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n    min-width: 20px;\n    margin-bottom: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWxwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUREO0FBR0M7RUFDQyxrQkFBQTtFQUNBLGNDTFc7RURNWCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURGO0FFOEpFO0VGbEtEO0lBT0UsZ0JBQUE7RUFDRDtBQUNGO0FBRUM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFBRjtBQUdDO0VBQ0Msb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO01BQUEsdUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQURGO0FFMkpFO0VGN0pEO0lBS0UsNEJBQUE7SUFBQSw2QkFBQTtRQUFBLDBCQUFBO1lBQUEsc0JBQUE7RUFDRDtBQUNGO0FBQ0U7RUFDQyxtQkFBQTtNQUFBLFdBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUFDSDtBRTBKRTtFRjdKQTtJQUlFLFdBQUE7RUFHRjtBQUNGO0FBREc7RUFDQyxXQUFBO0FBR0o7QUFESTtFQUNDLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7QUFHTDtBQURLO0VBQ0MsbUJBQUE7TUFBQSxXQUFBO1VBQUEsT0FBQTtBQUdOO0FBQUs7RUFDQyxtQkFBQTtBQUVOO0FFb0hFO0VGL0hFO0lBYUUsNEJBQUE7SUFBQSw2QkFBQTtRQUFBLDBCQUFBO1lBQUEsc0JBQUE7RUFFSjtFQURJO0lBQ0Msa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQUdMO0VBREk7SUFDQyxnQkFBQTtJQUNBLG1CQUFBO0VBR0w7QUFDRjtBQUtFO0VBQ0MsY0FBQTtFQUNBLGNBQUE7QUFISDtBQVNHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBUEo7QUFTRztFQUNDLGVBQUE7RUFDQSxlQUFBO0FBUEo7QUFTRztFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVBKO0FFd0VFO0VGaEZDO0lBaUJFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUFMSDtBQUNGIiwiZmlsZSI6ImhlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGUvZ2xvYmFsc1wiO1xuXG46aG9zdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cblx0aDEge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogJHRleHQtY29sb3I7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjNlbTtcblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKHRpbnktZG93bikge1xuXHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHR9XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDEwcHggMCA0cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGJhY2tncm91bmQtY29sb3IsIDUlKTtcblx0fVxuXG5cdC5oZWxwLWNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbC1kb3duKSB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdH1cblxuXHRcdD4gZGl2IHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bS1kb3duKSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQ+IGRpdiB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdD4gZGl2IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cblx0XHRcdFx0XHQ+IGRpdiB7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5uYW1lLCAuaW5mbyB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8odGlueS1kb3duKSB7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0Lm5hbWUge1xuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IGluaGVyaXQ7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogaW5oZXJpdDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaW5mbyB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmxpY2Vuc2Uge1xuXHRcdC5uYW1lIHtcblx0XHRcdG1pbi13aWR0aDogNDAlO1xuXHRcdFx0bWF4LXdpZHRoOiA0MCU7XG5cdFx0fVxuXHR9XG5cblx0LmtleWJvYXJkIHtcblx0XHQua2V5Ym9hcmQtbGlzdCB7XG5cdFx0XHQuZnVuYyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdFx0Lm5hbWUge1xuXHRcdFx0XHRtaW4td2lkdGg6IDUwcHg7XG5cdFx0XHRcdG1heC13aWR0aDogNTBweDtcblx0XHRcdH1cblx0XHRcdC5rZXkge1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdG1pbi13aWR0aDogNDBweDtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0XHRcdFx0Y29sb3I6ICNmNWY1ZjU7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgNXB4IDAgMCByZ2JhKDAsIDAsIDAsIDEpO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMC4zZW07XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuM2VtO1xuXHRcdFx0XHRAaW5jbHVkZSByZXNwb25kLXRvKHRpbnktZG93bikge1xuXHRcdFx0XHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcblx0XHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cblxuIiwiJGJhY2tncm91bmQtY29sb3I6ICNlYmQ0N2E7XG5cbiRwb3B1cC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMWU0O1xuJHBvcHVwLWJvcmRlci1jb2xvcjojNzA3MDcwO1xuXG4kdGV4dC1jb2xvcjogIzAwMDAwMDtcbiR0ZXh0LWZvbnQ6ICdqb3NlZmluX3NhbnNyZWd1bGFyJywgJ1RhaG9tYScsIHNhbnMtc2VyaWY7XG5cbi8vIEZvbnQtU2l6ZVxuJGJhc2UtZm9udC1zaXplOiAxZW07XG5cbi8vIExpbmUtSGVpZ2h0XG4kYmFzZS1saW5lLWhlaWdodDogMS41O1xuJGhlYWRlci1saW5lLWhlaWdodDogMS4yNTtcblxuLy8gQnJlYWtwb2ludHNcbiRicC1waWNvOiAyODBweDtcbiRicC10aW55OiA0MDBweDtcbiRicC1zbWFsbDogNTAwcHg7XG4kYnAtbWVkaXVtOiA3MDBweDtcbiRicC1sYXJnZTogMTAwMHB4O1xuJGJwLWh1Z2U6IDE5MDBweDtcbiRicC1qdW1ibzogMjIwMHB4O1xuJGJwLWx1ZGljcm91czogMzAwMHB4O1xuXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjtcbiIsIkBtaXhpbiBmb250ZGVmKCRPcGVuU2Fuc1BhdGgsICRPcGVuU2Fuc1ZlcnNpb24sICRGb250VHlwZTpcIlJlZ3VsYXJcIikge1xuICBzcmM6IHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LmVvdD92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKTtcbiAgc3JjOiB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5lb3Q/I2llZml4JnY9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0ud29mZjI/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd3b2ZmMicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS53b2ZmP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnd29mZicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS50dGY/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd0cnVldHlwZScpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5zdmc/dj0jeyRPcGVuU2Fuc1ZlcnNpb259IyN7JEZvbnRUeXBlfScpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBtaXhpbiBzY2FsZSgkYW1vdW50KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gU2FmYXJpIGFuZCBDaHJvbWUoRW5naW5lOi1XZWJraXQpXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gTW96aWxsYShFbmdpbmU6LUdlY2tvKVxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gSUUoRW5naW5lOi1UcmlkZW50KVxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBPcGVyYShFbmdpbmU6LVByZXN0bylcbiAgdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHJvdW5kZWQoJHJhZGl1czogMC41ZW0pIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBib3goJGJveCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRib3g7XG4gIC1tb3otYm94LXNpemluZzogJGJveDtcbiAgYm94LXNpemluZzogJGJveDtcbn1cblxuQG1peGluIGJsdXIoJGJsdXIpIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtby1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG5AbWl4aW4gdGV4dHNoYWRvdy1ncmFkaWVudCgkdGV4dC1jb2xvcikge1xuICB0ZXh0LXNoYWRvdzogZGFya2VuKCR0ZXh0LWNvbG9yLCAxJSkgMXB4IDAgMCwgZGFya2VuKCR0ZXh0LWNvbG9yLDE2JSkgLTFweCAwIDAsIGRhcmtlbigkdGV4dC1jb2xvciwgMzIlKSAwIDFweCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDUwJSkgMCAtMXB4IDAsIGRhcmtlbigkdGV4dC1jb2xvciwgNzAlKSAzcHggM3B4IDVweCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA5OSUpIDVweCA1cHggMTVweDtcbn1cblxuQG1peGluIGJhY2tncm91bmQtbGluZWFyLWdyYWRpZW50KCRiYWNrLCAkc3RhcnQ6ICMwMDAsICRzdG9wOiAjRkZGKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydCwgJHN0b3ApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQsICRzdG9wKTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93LXdoaXRlLWdyYWRpZW50KCkge1xuICB0ZXh0LXNoYWRvdzogI2VlZSAxcHggMCAwLCAjZWVlIC0xcHggMCAwLCAjZWVlIDAgMXB4IDAsICNlZWUgMCAtMXB4IDAsICNiYmIgM3B4IDNweCA1cHgsICNiMWFlOTcgNXB4IDVweCAxNXB4O1xufVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpOyAvL0lFOFxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1vLXRyYW5zaXRpb246ICRhcmdzO1xuICB0cmFuc2l0aW9uOiAkYXJncztcbn1cblxuXG5AbWl4aW4gcmVzcG9uZC10by1oZWlnaHQoJG1lZGlhKSB7XG5cdEBpZiAkbWVkaWEgPT0gcGljby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbHVkaWNyb3VzLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuXHRAaWYgJG1lZGlhID09IHBpY28tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGx1ZGljcm91cy11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "DgVQ":
/*!********************************!*\
  !*** ./src/app/model/stone.ts ***!
  \********************************/
/*! exports provided: Stone, safeGetStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stone", function() { return Stone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeGetStone", function() { return safeGetStone; });
class Stone {
    constructor(z, x, y, v, groupnr) {
        this.picked = false;
        this.group = [];
        this.z = z;
        this.x = x;
        this.y = y;
        this.v = v;
        this.groupnr = groupnr;
    }
    isBlocked() {
        return Stone.hasStone(this.nodes.top) || (Stone.hasStone(this.nodes.left) && Stone.hasStone(this.nodes.right));
    }
    isLoose() {
        return !Stone.hasStone(this.nodes.left) && !Stone.hasStone(this.nodes.right) && !Stone.hasStone(this.nodes.bottom);
    }
    static hasStone(list) {
        for (const stone of list) {
            if (!stone.picked) {
                return true;
            }
        }
        return false;
    }
}
const safeGetStone = (stones, z, x, y) => {
    for (let i = 0, il = stones.length; i < il; i++) {
        if (stones[i].z === z && stones[i].x === x && stones[i].y === y) {
            return stones[i];
        }
    }
    return;
};


/***/ }),

/***/ "Dz9N":
/*!********************************************!*\
  !*** ./src/app/modules/defer-load/rect.ts ***!
  \********************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/***
 https://github.com/tjoskar/ng-lazyload-image/blob/master/src/rect.ts

 The MIT License (MIT)

 Copyright (c) 2016 Oskar Karlsson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        return new Rect(left, top, right, bottom);
    }
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    intersectsWith(rect) {
        return (rect.left < this.right) &&
            (this.left < rect.right) &&
            (rect.top < this.bottom) &&
            (this.top < rect.bottom);
    }
    intersectsWithY(rect) {
        return (rect.top < this.bottom) &&
            (this.top < rect.bottom);
    }
    getIntersectionWith(rect) {
        const left = Math.max(this.left, rect.left);
        const top = Math.max(this.top, rect.top);
        const right = Math.min(this.right, rect.right);
        const bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        return Rect.empty;
    }
}
Rect.empty = new Rect(0, 0, 0, 0);


/***/ }),

/***/ "EMuv":
/*!**********************************************************!*\
  !*** ./src/app/modules/defer-load/defer-load.service.ts ***!
  \**********************************************************/
/*! exports provided: DeferLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadService", function() { return DeferLoadService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rect */ "Dz9N");






class DeferLoadService {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(platformId) {
        this.platformId = platformId;
        this.scrollNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.observeNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentViewport = new _rect__WEBPACK_IMPORTED_MODULE_4__["Rect"](0, 0, 0, 0);
        this.scrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId);
        this.hasIntersectionObserver = DeferLoadService.checkIntersectionObserver();
        const observable = this.scrollSubject.asObservable();
        this.scrollObservable =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(300)), observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100)));
        this.scrollObservable
            .subscribe(x => {
            this.scrollNotify.emit(x);
        });
        this.currentViewport = _rect__WEBPACK_IMPORTED_MODULE_4__["Rect"].fromWindow(window);
    }
    getObserver() {
        if (this.intersectionObserver) {
            return this.intersectionObserver;
        }
        this.intersectionObserver = new IntersectionObserver(entries => {
            this.observeNotify.next(entries);
        }, { threshold: 0 });
        return this.intersectionObserver;
    }
    notifyScroll(event) {
        if (this.hasIntersectionObserver) {
            return;
        }
        const rect = event.element ? _rect__WEBPACK_IMPORTED_MODULE_4__["Rect"].fromElement(event.element) : _rect__WEBPACK_IMPORTED_MODULE_4__["Rect"].fromWindow(window);
        const height = (rect.bottom - rect.top);
        rect.bottom += height;
        rect.top -= height;
        this.currentViewport = rect;
        this.scrollSubject.next({ rect });
    }
    static checkIntersectionObserver() {
        const hasIntersectionObserver = 'IntersectionObserver' in window;
        const userAgent = window.navigator.userAgent;
        const matches = userAgent.match(/Edge\/(\d*)\./i);
        const isEdge = !!matches && matches.length > 1;
        const isEdgeVersion16OrBetter = isEdge && (!!matches && parseInt(matches[1], 10) > 15);
        return hasIntersectionObserver && (!isEdge || isEdgeVersion16OrBetter);
    }
}
DeferLoadService.ɵfac = function DeferLoadService_Factory(t) { return new (t || DeferLoadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
DeferLoadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeferLoadService, factory: DeferLoadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FB/+":
/*!********************************!*\
  !*** ./src/app/model/board.ts ***!
  \********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "xrI7");
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stone */ "DgVQ");


class Board {
    constructor() {
        this.builder = new _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"]();
        this.free = [];
        this.stones = [];
        this.count = 0;
        this.hints = { groups: [], current: undefined };
        this.selected = undefined;
    }
    clearSelection() {
        if (this.selected) {
            this.selected.selected = false;
        }
        this.selected = undefined;
    }
    setStoneSelected(stone) {
        this.clearSelection();
        if (stone) {
            stone.selected = true;
            this.selected = stone;
        }
    }
    clearHints() {
        if (this.hints.current) {
            this.hints.current.stones.forEach((stone) => {
                stone.hinted = false;
            });
        }
        this.hints = {
            groups: [],
            current: undefined
        };
    }
    hint() {
        if (this.hintNext()) {
            return;
        }
        this.clearHints();
        if (this.free.length === 0) {
            return;
        }
        const groups = this.collectHints();
        if (this.selected) {
            const prefer = this.selected.groupnr;
            groups.sort((a, b) => {
                if (a.group === prefer) {
                    return -1;
                }
                if (b.group === prefer) {
                    return 1;
                }
                return 0;
            });
        }
        const current = groups[0];
        this.hints = { groups, current };
        current.stones.forEach((stone) => {
            stone.hinted = true;
        });
    }
    reset() {
        this.clearSelection();
        this.clearHints();
        this.free = [];
        this.count = 0;
        this.stones = [];
    }
    update() {
        const canRemove = (stone) => stone.group.filter((_stone) => !_stone.picked && !_stone.isBlocked()).length > 0;
        const free = [];
        let count = 0;
        this.stones.forEach((stone) => {
            stone.state = {
                blocked: !stone.picked && stone.isBlocked(),
                removable: false
            };
            count += stone.picked ? 0 : 1;
        });
        this.stones.forEach(stone => {
            stone.state.removable = !stone.picked && !stone.state.blocked && canRemove(stone);
            if (stone.state.removable) {
                free.push(stone);
            }
        });
        this.free = free;
        this.count = count;
    }
    load(mapping, undos) {
        if (!mapping) {
            return;
        }
        const stones = this.builder.build('load', mapping);
        if (!stones) {
            return;
        }
        undos.forEach((undo) => {
            const stone = Object(_stone__WEBPACK_IMPORTED_MODULE_1__["safeGetStone"])(stones, undo[0], undo[1], undo[2]);
            if (stone) {
                stone.picked = true;
            }
        });
        this.stones = stones;
    }
    save() {
        return this.stones.map((stone) => [stone.z, stone.x, stone.y, stone.v]);
    }
    applyMapping(mapping, mode) {
        this.stones = this.builder.build(mode, mapping) || [];
    }
    hintNext() {
        if (!this.hints.current) {
            return false;
        }
        this.hints.current.stones.forEach((stone) => {
            stone.hinted = false;
        });
        let i = this.hints.groups.indexOf(this.hints.current);
        if (i >= 0) {
            i++;
            if (i >= this.hints.groups.length) {
                i = 0;
            }
            if (i < this.hints.groups.length) {
                this.hints.current = this.hints.groups[i];
                this.hints.current.stones.forEach(stone => {
                    stone.hinted = true;
                });
                return true;
            }
        }
        return false;
    }
    collectHints() {
        const hash = {};
        this.free.forEach((stone) => {
            const gn = stone.groupnr.toString();
            hash[gn] = hash[gn] || [];
            hash[gn].push(stone);
        });
        return Object.keys(hash).map((key) => ({ group: hash[key][0].groupnr, stones: hash[key] }));
    }
}


/***/ }),

/***/ "II96":
/*!********************************!*\
  !*** ./src/app/model/tiles.ts ***!
  \********************************/
/*! exports provided: Tiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tiles", function() { return Tiles; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "1GeQ");

class Tiles {
    constructor() {
        this.list = [];
        this.groups = [];
        let v = 0;
        const tilesMapping = _consts__WEBPACK_IMPORTED_MODULE_0__["TILES"].map(row => row.map(id => ({ id })));
        tilesMapping.forEach((group, groupnr) => {
            const g = { v: groupnr, tiles: [] };
            this.groups.push(g);
            group.forEach(img => {
                v++;
                const tile = { groupnr, v, img };
                g.tiles.push(tile);
                this.list[v] = tile;
            });
        });
    }
}


/***/ }),

/***/ "ITmp":
/*!*******************************************!*\
  !*** ./src/app/service/svgdef.service.ts ***!
  \*******************************************/
/*! exports provided: SvgdefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgdefService", function() { return SvgdefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SvgdefService {
    constructor(http) {
        this.http = http;
        this.cache = {};
    }
    get(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = this.cache[name];
            if (item) {
                if (item.data) {
                    return item.data;
                }
                if (item.request) {
                    return item.request;
                }
            }
            item = {};
            const request = new Promise((resolve, reject) => {
                this.http.get(`assets/svg/${name}.svg`, { responseType: 'text' })
                    .subscribe(res => {
                    item.data = res;
                    item.request = undefined;
                    resolve(res);
                }, err => {
                    reject(err);
                });
            });
            item.request = request;
            this.cache[name] = item;
            return request;
        });
    }
}
SvgdefService.ɵfac = function SvgdefService_Factory(t) { return new (t || SvgdefService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SvgdefService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SvgdefService, factory: SvgdefService.ɵfac });


/***/ }),

/***/ "Io0L":
/*!********************************!*\
  !*** ./src/app/model/types.ts ***!
  \********************************/
/*! exports provided: GameStateStore, SettingsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateStore", function() { return GameStateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsStore", function() { return SettingsStore; });
class GameStateStore {
}
class SettingsStore {
}


/***/ }),

/***/ "JjJJ":
/*!***********************************************************************!*\
  !*** ./src/app/components/layout-preview/layout-preview.component.ts ***!
  \***********************************************************************/
/*! exports provided: LayoutPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPreviewComponent", function() { return LayoutPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LayoutPreviewComponent {
    ngOnChanges(changes) {
        if (changes.layout) {
            this.updateLayout(changes.layout.currentValue);
        }
    }
    updateLayout(layout) {
        this.svg = layout.previewSVG;
    }
}
LayoutPreviewComponent.ɵfac = function LayoutPreviewComponent_Factory(t) { return new (t || LayoutPreviewComponent)(); };
LayoutPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutPreviewComponent, selectors: [["app-layout-preview"]], inputs: { layout: "layout" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "src"]], template: function LayoutPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.svg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUREO0FBR0M7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFERiIsImZpbGUiOiJsYXlvdXQtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZS9nbG9iYWxzXCI7XG5cbjpob3N0IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cblx0aW1nIHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0fVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "KEUs":
/*!*********************************************!*\
  !*** ./src/app/modules/defer-load/index.ts ***!
  \*********************************************/
/*! exports provided: DeferLoadService, DeferLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defer_load_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer-load.service */ "EMuv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferLoadService", function() { return _defer_load_service__WEBPACK_IMPORTED_MODULE_0__["DeferLoadService"]; });

/* harmony import */ var _defer_load_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defer-load.module */ "0ngG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeferLoadModule", function() { return _defer_load_module__WEBPACK_IMPORTED_MODULE_1__["DeferLoadModule"]; });





/***/ }),

/***/ "Lddg":
/*!*******************************!*\
  !*** ./src/app/model/i18n.ts ***!
  \*******************************/
/*! exports provided: LANG_EN, LANG_KR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_EN", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_KR", function() { return LANG_KR; });
const LANG_EN = {
    RESTART: 'New Game',
    UNDO: 'Undo',
    PAUSE: 'Pause',
    HINT: 'Hint',
    STONES: 'Stones',
    FREE: 'Free',
    FULLSCREEN: 'Fullscreen',
    HINT_LONG: 'Show possible moves',
    UNDO_LONG: 'Undo last move',
    RESTART_LONG: 'Start a new game',
    PAUSE_LONG: 'Continue/Pause game',
    MSG_CONTINUE_PAUSE: 'Continue Game…',
    MSG_CONTINUE_SAVE: 'Continue Saved Game…',
    MSG_START: 'Start Game',
    MSG_PLAY_AGAIN: 'Play again',
    MSG_BEST: 'Congratulations, new best time!',
    MSG_GOOD: 'Well done!',
    MSG_FAIL: 'No more matching tiles.',
    STATS_GAMES: 'Nr. of Games',
    STATS_BEST: 'Best Time',
    LICENSE: 'License',
    SHORTCUTS: 'Shortcuts',
    SETTINGS: 'Settings',
    STATS: 'Stats',
    MODE: 'Board Fill Algorithm',
    MODE_SOLVABLE: 'Solvable',
    MODE_LINEAR: 'Linear',
    MODE_RANDOM: 'Random',
    AUDIO: 'Audio',
    AUDIO_SOUNDS: 'Sounds on/off',
    AUDIO_MUSIC: 'Music',
    LANG: 'Language',
    LANG_EN: 'English',
    LANG_KR: 'Korean',
    LANG_AUTO: '[Default]',
    OPEN_SETTINGS: 'Click here to open the settings',
    OPEN_HELP: 'Click here to open the help dialog',
    READ_MORE_WIKIPEDIA: 'Read more on wikipedia',
    READ_MORE_WIKIPEDIA_URL: 'https://en.wikipedia.org/wiki/Mahjong_tiles',
    TILES_INFO: 'Tiles Information',
    TILES: 'Tiles',
    MODE_SOLVABLE_DESC: 'A random fill with at least one solving possibility',
    MODE_RANDOM_DESC: 'A total random fill, maybe unsolvable',
    MODE_LINEAR_DESC: 'A backwards fill, always solvable, maybe boring to experienced players',
    SELECT_BOARD: 'Select Board',
    BOARD_GENERATOR: 'Board Generator',
    START_SELECTED: 'Start Selected',
    START_RANDOM: 'Start Random',
    TILESET: 'Tileset Art',
    BACKGROUND: 'Background',
    INFO: 'Info',
    BEST_TIMES: 'Best Times',
    BEST_TIMES_CLEAR: 'Clear Best Times',
    BEST_TIMES_CLEAR_SURE: 'Clear All Best Times?\nThis cannot be undone.',
    BEST_TIME_CLEAR: 'Clear Best Time',
    BEST_TIME_CLEAR_SURE: 'Clear Best Time?\nThis cannot be undone.'
};
const LANG_KR = {
    RESTART: '새 게임',
    UNDO: '되돌리기',
    PAUSE: '일시정지',
    HINT: '힌트',
    STONES: '타일',
    FREE: '매치',
    FULLSCREEN: '풀스크린',
    SETTINGS: '설정',
    STATS: 'Stats',
    MODE: 'Board Fill Algorithm',
    MODE_SOLVABLE: 'Solvable',
    MODE_LINEAR: 'Linear',
    MODE_RANDOM: 'Random',
    AUDIO: '소리',
    AUDIO_SOUNDS: '소리 on/off',
    AUDIO_MUSIC: '음악',
    LANG: '언어',
    LANG_EN: '영어',
    LANG_KR: '한국어',
    LANG_AUTO: '[Default]',
    OPEN_SETTINGS: '설정을 열려면 여기를 클릭하십시오',
    OPEN_HELP: '도움말 상자를 열려면 여기를 클릭하십시오',
    READ_MORE_WIKIPEDIA: 'Read more on wikipedia',
    READ_MORE_WIKIPEDIA_URL: 'https://en.wikipedia.org/wiki/Mahjong_tiles',
    TILES_INFO: '타일 정보',
    TILES: '타일',
    MODE_SOLVABLE_DESC: '하나 이상의 해결 가능성이 있는 랜덤 채우기',
    MODE_RANDOM_DESC: '전체 랜덤 채우기, 해결할 수 없을 수 있음',
    MODE_LINEAR_DESC: '언제나 해결가능, 경험이 많은 선수들에게는 지루할 수도 있다',
    SELECT_BOARD: '보드 선택',
    BOARD_GENERATOR: '보드 생성기',
    START_SELECTED: '선택 시작',
    START_RANDOM: '랜덤 시작',
    TILESET: '타일 사진',
    BACKGROUND: '배경화면',
    INFO: '정보',
    BEST_TIMES: '최고 기록',
    BEST_TIMES_CLEAR: '최고 기록 초기화',
    BEST_TIMES_CLEAR_SURE: '최고 기록을 초기화 하시겠습니까?',
    BEST_TIME_CLEAR: '최고 기록 초기화',
    BEST_TIME_CLEAR_SURE: '최고 기록을 초기화 하시겠습니까?'
};


/***/ }),

/***/ "NVz8":
/*!*************************************************************!*\
  !*** ./src/app/components/game/game-component.component.ts ***!
  \*************************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/app.service */ "3mgE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/board.component */ "qtDB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../help/help.component */ "BikA");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/settings.component */ "1U8w");
/* harmony import */ var _tiles_info_tiles_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tiles-info/tiles-info.component */ "ljza");
/* harmony import */ var _choose_layout_choose_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../choose-layout/choose-layout.component */ "tLwX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/duration.pipe */ "je0U");











function GameComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_68_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.toggleHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_68_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_68_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.toggleHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-help");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_69_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.toggleSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_69_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_69_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toggleSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameComponent_div_70_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r13.game.message.msgID));
} }
function GameComponent_div_70_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r14.game.message.playTime));
} }
function GameComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_70_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.clickMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_70_div_2_Template, 3, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_70_div_3_Template, 3, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.game.message.msgID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.game.message.playTime);
} }
function GameComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_71_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.toggleTilesInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_71_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_71_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.toggleTilesInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tiles-info", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageSet", ctx_r3.app.settings.tileset);
} }
function GameComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_72_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.toggleNewGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_72_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_72_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.toggleNewGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-choose-layout", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("startEvent", function GameComponent_div_72_Template_app_choose_layout_startEvent_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.startGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("layouts", ctx_r4.layouts);
} }
class GameComponent {
    constructor(app) {
        this.app = app;
        this.tilesInfoVisible = false;
        this.helpVisible = false;
        this.settingsVisible = false;
        this.newGameVisible = false;
        this.game = app.game;
        if (this.game.isIdle()) {
            this.newGameVisible = true;
        }
    }
    handleKeyDownEvent(event) {
        if (this.helpVisible) {
            if (event.keyCode === 27) {
                this.toggleHelp();
            }
            return;
        }
        if (this.newGameVisible) {
            if (event.keyCode === 27) {
                this.newGameVisible = !this.newGameVisible;
            }
            return;
        }
        if (this.tilesInfoVisible) {
            if (event.keyCode === 27) {
                this.toggleTilesInfo();
            }
            return;
        }
        if (this.settingsVisible) {
            if (event.keyCode === 27) {
                this.toggleSettings();
            }
            return;
        }
        switch (event.which) {
            case 72: // h
                this.toggleHelp();
                break;
            case 73: // i
                this.toggleTilesInfo();
                break;
            case 83: // s
                this.toggleSettings();
                break;
            case 84: // t
                this.game.hint();
                break;
            case 85: // u
                this.game.back();
                break;
            case 78: // n
                this.game.pause();
                this.newGameVisible = true;
                break;
            case 32: // space
            case 80: // p
                if (this.game.isRunning()) {
                    this.game.pause();
                }
                else if (this.game.isPaused()) {
                    this.game.resume();
                }
                break;
            default:
                break;
        }
    }
    stoneClick(stone) {
        this.game.click(stone);
    }
    enterFullScreen() {
        const doc = window.document;
        if (doc.fullScreen || doc.fullscreen || doc.mozFullScreen || doc.webkitIsFullScreen) {
            if (doc.exitFullscreen) {
                doc.exitFullscreen()
                    .catch(e => {
                    console.error(e);
                });
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
            return;
        }
        const elem = document.body; // this.el.nativeElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen()
                .catch(e => {
                console.error(e);
            });
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
    }
    newGame() {
        this.game.pause();
        this.newGameVisible = true;
    }
    startGame(data) {
        this.newGameVisible = false;
        this.game.reset();
        this.game.start(data.layout, data.mode);
    }
    toggleNewGame() {
        // if (!this.game.isIdle()) {
        this.newGameVisible = !this.newGameVisible;
        // }
    }
    toggleTilesInfo() {
        this.tilesInfoVisible = !this.tilesInfoVisible;
    }
    toggleSettings() {
        this.settingsVisible = !this.settingsVisible;
        if (!this.settingsVisible) {
            this.app.settings.save();
        }
    }
    toggleHelp() {
        this.helpVisible = !this.helpVisible;
    }
    clickMessage() {
        if (this.game.isPaused()) {
            this.game.resume();
        }
        else {
            this.game.reset();
            this.newGameVisible = true;
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game-component"]], hostBindings: function GameComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function GameComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDownEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { layouts: "layouts" }, decls: 73, vars: 65, consts: [[1, "controls", "controls-top"], [1, "ctrl", "ctrl-name"], [1, "link", "button", 3, "title", "click"], [1, "name"], [1, "ctrl", "ctrl-game"], [1, "icon-resize-full-alt"], [1, "label"], [1, "icon-pause"], [1, "icon-undo"], [1, "icon-lightbulb"], [1, "icon-loop"], [1, "board", 3, "tiles", "imageSet", "background", "clickEvent"], [1, "controls", "controls-bottom"], [1, "ctrl", "ctrl-stats"], [1, "icon-cog"], [1, "icon-volume-low"], [1, "icon-calendar"], [1, "label", "button"], [1, "ctrl", "ctrl-time"], ["class", "overlay overlay-help", 3, "click", 4, "ngIf"], ["class", "overlay overlay-settings", 3, "click", 4, "ngIf"], ["class", "overlay overlay-message", 3, "click", 4, "ngIf"], ["class", "overlay overlay-tiles-info", 3, "click", 4, "ngIf"], ["class", "overlay overlay-newgame", 3, "click", 4, "ngIf"], [1, "overlay", "overlay-help", 3, "click"], [1, "overlay-popup", 3, "click"], [1, "close", 3, "click"], [1, "icon-cancel-circled2", "pull-right"], [1, "overlay", "overlay-settings", 3, "click"], [1, "overlay", "overlay-message", 3, "click"], [1, "overlay-popup"], [4, "ngIf"], [1, "overlay", "overlay-tiles-info", 3, "click"], [3, "imageSet"], [1, "overlay", "overlay-newgame", 3, "click"], [1, "choose", 3, "layouts", "startEvent"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_2_listener() { return ctx.toggleHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83E\uDD8A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_8_listener() { return ctx.enterFullScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_14_listener() { return ctx.game.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_20_listener() { return ctx.game.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_26_listener() { return ctx.game.hint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_32_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "app-board", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickEvent", function GameComponent_Template_app_board_clickEvent_38_listener($event) { return ctx.stoneClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_41_listener() { return ctx.toggleSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_44_listener() { return ctx.app.toggleSound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_Template_span_click_47_listener() { return ctx.toggleTilesInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, GameComponent_div_68_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, GameComponent_div_69_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, GameComponent_div_70_Template, 4, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, GameComponent_div_71_Template, 5, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, GameComponent_div_72_Template, 5, 1, "div", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 31, "OPEN_HELP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.app.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 33, "FULLSCREEN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 35, "FULLSCREEN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 37, "PAUSE_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 39, "PAUSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 41, "UNDO_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.game.undo.length == 0 ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 43, "UNDO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 45, "HINT_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 47, "HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 49, "RESTART_LONG"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 51, "RESTART"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tiles", ctx.game.board.stones)("imageSet", ctx.app.settings.tileset)("background", ctx.app.settings.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 53, "OPEN_SETTINGS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inactive", !ctx.app.settings.sounds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 55, "AUDIO_SOUNDS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 57, "TILES_INFO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 59, "STONES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.game.board.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 61, "FREE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.game.board.free.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 63, ctx.game.clock.elapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.helpVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settingsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tilesInfoVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.layouts && ctx.newGameVisible);
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], _tiles_info_tiles_info_component__WEBPACK_IMPORTED_MODULE_6__["TilesInfoComponent"], _choose_layout_choose_layout_component__WEBPACK_IMPORTED_MODULE_7__["ChooseLayoutComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_9__["DurationPipe"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n  min-width: 170px;\n  padding: 0 0.8em 0 0.8em;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #000000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: normal;\n  color: #000000;\n  margin-left: 4px;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #0d0d0d;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .link[disabled][_ngcontent-%COMP%] {\n  color: black;\n}\n@media only screen and (min-width: 400px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl.ctrl-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%] {\n  color: black;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl.ctrl-game[_ngcontent-%COMP%] {\n  float: right;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl.ctrl-time[_ngcontent-%COMP%] {\n  cursor: default;\n  float: right;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl.ctrl-stats[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   .ctrl.ctrl-stats[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n@media only screen and (min-width: 700px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n@media only screen and (min-width: 1900px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n}\n@media only screen and (min-width: 2200px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n  }\n}\n@media only screen and (min-width: 3000px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 4em;\n  }\n}\n@media only screen and (max-width: 500px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    padding: 0 6px 0 6px;\n  }\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 280px) {\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  [_nghost-%COMP%]   .controls[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .controls-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eedb90;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   .controls-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #eedb90;\n}\n[_nghost-%COMP%]   .board[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  background-color: rgba(0, 0, 0, 0.2);\n  max-height: 100%;\n  font-size: 0.9em;\n}\n@media only screen and (min-width: 700px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (min-width: 1900px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (min-width: 2200px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n@media only screen and (min-width: 3000px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 3.5em;\n  }\n}\n@media only screen and (max-height: 500px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-height: 90%;\n  max-width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #707070;\n  background-color: #f5f1e4;\n  padding: 1em;\n  line-height: 1.2em;\n  border-radius: 12px;\n  -webkit-box-shadow: 12px 14px 16px rgba(0, 0, 0, 0.5);\n  box-shadow: 12px 14px 16px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (min-width: 2200px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n    border-radius: 30px;\n  }\n}\n@media only screen and (min-width: 1000px) {\n  [_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n    max-height: 80%;\n    max-width: 80%;\n  }\n}\n[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  right: 4px;\n  top: 4px;\n  position: absolute;\n  color: darkgray;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  border: 1px solid #707070;\n}\n[_nghost-%COMP%]   .overlay-help[_ngcontent-%COMP%], [_nghost-%COMP%]   .overlay-settings[_ngcontent-%COMP%], [_nghost-%COMP%]   .overlay-tiles-info[_ngcontent-%COMP%] {\n  z-index: 10010;\n}\n[_nghost-%COMP%]   .overlay-help[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%], [_nghost-%COMP%]   .overlay-settings[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%], [_nghost-%COMP%]   .overlay-tiles-info[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n  width: 90%;\n  overflow-y: auto;\n  padding: 1.5em 2em;\n}\n[_nghost-%COMP%]   .overlay-message[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: 600;\n  text-align: center;\n  color: #000000;\n  padding: 1.5em 2em;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n[_nghost-%COMP%]   .overlay-newgame[_ngcontent-%COMP%]   .overlay-popup[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  padding: 1.5em 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZVxcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREQ7QUFHQztFQUNDLGdCQUFBO0VBQ0Esd0JBQUE7QUFERjtBQUdFO0VBQ0MscUJBQUE7RUFDQSxjQ1hVO0VDK0JYLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtNQUFBLGlCQUFBO0FGcEJGO0FBQUc7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NqQlM7RURrQlQsZ0JBQUE7QUFFSjtBQUFJO0VBQ0MsY0FBQTtBQUVMO0FBQ0k7RUFDQyxZQUFBO0FBQ0w7QUUrSUU7RUYzSkM7SUFlRSxpQkFBQTtFQUNIO0FBQ0Y7QUFFRztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0c7RUFDQyxZQUFBO0FBREo7QUFFSTtFQUNDLFlBQUE7QUFBTDtBQUlHO0VBQ0MsYUFBQTtBQUZKO0FBS0c7RUFDQyxZQUFBO0FBSEo7QUFNRztFQUNDLGVBQUE7RUFDQSxZQUFBO0FBSko7QUFPRztFQUNDLGVBQUE7QUFMSjtBQU9JO0VBQ0MsaUJBQUE7QUFMTDtBRTRIRTtFRmhMRDtJQW1FRSxnQkFBQTtFQVhEO0FBQ0Y7QUUrSEU7RUZ4TEQ7SUF1RUUsZ0JBQUE7RUFWRDtBQUNGO0FFc0lFO0VGcE1EO0lBMkVFLGdCQUFBO0VBVEQ7QUFDRjtBRXlJRTtFRjVNRDtJQStFRSxnQkFBQTtFQVJEO0FBQ0Y7QUU0SUU7RUZwTkQ7SUFtRkUsY0FBQTtFQVBEO0FBQ0Y7QUUrRkU7RUY1S0Q7SUF1RkUsZ0JBQUE7SUFDQSxvQkFBQTtFQU5EO0VBT0M7SUFDQyxhQUFBO0VBTEY7QUFDRjtBRTBFRTtFRmhLRDtJQThGRSxnQkFBQTtFQUpEO0VBS0M7SUFDQyxhQUFBO0VBSEY7QUFDRjtBRTBERTtFRnhKRDtJQW9HRSxnQkFBQTtFQUZEO0VBR0M7SUFDQyxhQUFBO0VBREY7QUFDRjtBQUtDO0VBQ0MsZ0NBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUM7RUFDQyw2QkFBQTtBQUpGO0FBT0M7RUFDQyxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7TUFBQSxXQUFBO1VBQUEsT0FBQTtFQUNBLGdCQUFBO0FBTEY7QUFRQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5GO0FFa0RFO0VGckREO0lBWUUsZ0JBQUE7RUFMRDtBQUNGO0FFcURFO0VGN0REO0lBZ0JFLGdCQUFBO0VBSkQ7QUFDRjtBRTRERTtFRnpFRDtJQW9CRSxnQkFBQTtFQUhEO0FBQ0Y7QUUrREU7RUZqRkQ7SUF3QkUsZ0JBQUE7RUFGRDtBQUNGO0FFa0VFO0VGekZEO0lBNEJFLGdCQUFBO0VBREQ7QUFDRjtBRWxERTtFRnNCRDtJQWdDRSxnQkFBQTtFQUFEO0FBQ0Y7QUFFRTtFQUNDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQ2hMc0I7RURpTHRCLFlBQUE7RUFDQSxrQkFBQTtFRXBKRCxtQkZxSm1CO0VFOUpqQixxREFBQTtFQUVBLDZDQUFBO0FGaUtKO0FFNEJFO0VGOUNBO0lFeElBLG1CRnlKbUI7RUFPbkI7QUFDRjtBRUNFO0VGMUJBO0lBcUJFLGVBQUE7SUFDQSxjQUFBO0VBUUY7QUFDRjtBQUxFO0VBQ0MsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBT0g7QUFMRztFQUNDLHlCQUFBO0FBT0o7QUFGQztFQUNDLGNBQUE7QUFJRjtBQUZFO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJSDtBQUNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzNOVTtFRDROVixrQkFBQTtFRTdMRCx5QkFBQTtFQUNBLHNCQUFBO0VBRUEscUJBQUE7TUFBQSxpQkFBQTtBRitMRjtBQUNFO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNIIiwiZmlsZSI6ImdhbWUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlL2dsb2JhbHNcIjtcblxuOmhvc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cblx0LmNvbnRyb2xzIHtcblx0XHRtaW4td2lkdGg6IDE3MHB4O1xuXHRcdHBhZGRpbmc6IDAgMC44ZW0gMCAwLjhlbTtcblxuXHRcdC5jdHJsIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdGNvbG9yOiAkdGV4dC1jb2xvcjtcblx0XHRcdEBpbmNsdWRlIG5vLXNlbGVjdCgpO1xuXG5cdFx0XHQubGluayB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHRcdFx0Y29sb3I6ICR0ZXh0LWNvbG9yO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNHB4O1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCA1JSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmW2Rpc2FibGVkXSB7XG5cdFx0XHRcdFx0Y29sb3I6IGRhcmtlbigkdGV4dC1jb2xvciwgMTAlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8odGlueS11cCkge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYuY3RybC1uYW1lIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0fVxuXG5cdFx0XHQuaW5hY3RpdmUge1xuXHRcdFx0XHRjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCAxMCUpO1xuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogZGFya2VuKCR0ZXh0LWNvbG9yLCA1JSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm9mZiB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cblx0XHRcdCYuY3RybC1nYW1lIHtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmN0cmwtdGltZSB7XG5cdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmN0cmwtc3RhdHMge1xuXHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cblx0XHRcdFx0LmxhYmVsIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9AaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsLXVwKSB7XG5cdFx0Ly99XG5cblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bS11cCkge1xuXHRcdFx0Zm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS4yO1xuXHRcdH1cblxuXHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8obGFyZ2UtdXApIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjEuMztcblx0XHR9XG5cblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKGh1Z2UtdXApIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjEuNjtcblx0XHR9XG5cblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKGp1bWJvLXVwKSB7XG5cdFx0XHRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZSoyLjM7XG5cdFx0fVxuXG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byhsdWRpY3JvdXMtdXApIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjQ7XG5cdFx0fVxuXG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byhzbWFsbC1kb3duKSB7XG5cdFx0XHRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZSoxLjM7XG5cdFx0XHRwYWRkaW5nOiAwIDZweCAwIDZweDtcblx0XHRcdHNwYW4ubGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKHRpbnktZG93bikge1xuXHRcdFx0Zm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS41O1xuXHRcdFx0c3Bhbi5uYW1lIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byhwaWNvLWRvd24pIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjEuMjtcblx0XHRcdHNwYW4ubmFtZSB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNvbnRyb2xzLXRvcCB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0ZW4oJGJhY2tncm91bmQtY29sb3IsIDUlKTtcblx0XHRwYWRkaW5nLXRvcDogM3B4O1xuXHR9XG5cblx0LmNvbnRyb2xzLWJvdHRvbSB7XG5cdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGJhY2tncm91bmQtY29sb3IsIDUlKTtcblx0fVxuXG5cdC5ib2FyZCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXg6IDE7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC5vdmVybGF5IHtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHotaW5kZXg6IDEwMDAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjAuOTtcblxuXHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8obWVkaXVtLXVwKSB7XG5cdFx0XHRmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZSoxLjE7XG5cdFx0fVxuXG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byhsYXJnZS11cCkge1xuXHRcdFx0Zm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS4yO1xuXHRcdH1cblxuXHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8oaHVnZS11cCkge1xuXHRcdFx0Zm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS4yO1xuXHRcdH1cblxuXHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8oanVtYm8tdXApIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjIuNTtcblx0XHR9XG5cblx0XHRAaW5jbHVkZSByZXNwb25kLXRvKGx1ZGljcm91cy11cCkge1xuXHRcdFx0Zm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMy41O1xuXHRcdH1cblxuXHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8taGVpZ2h0KHNtYWxsLWRvd24pIHtcblx0XHRcdGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjAuOTtcblx0XHR9XG5cblx0XHQub3ZlcmxheS1wb3B1cCB7XG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHR0b3A6IDUwJTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdFx0bWF4LWhlaWdodDogOTAlO1xuXHRcdFx0bWF4LXdpZHRoOiA5MCU7XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICRwb3B1cC1ib3JkZXItY29sb3I7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcG9wdXAtYmFja2dyb3VuZC1jb2xvcjtcblx0XHRcdHBhZGRpbmc6IDFlbTtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjJlbTtcblx0XHRcdEBpbmNsdWRlIHJvdW5kZWQgKDEycHgpO1xuXHRcdFx0QGluY2x1ZGUgYm94LXNoYWRvdyAoMTJweCwgMTRweCwgMTZweCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcblxuXHRcdFx0QGluY2x1ZGUgcmVzcG9uZC10byhqdW1iby11cCkge1xuXHRcdFx0XHRAaW5jbHVkZSByb3VuZGVkKDMwcHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRAaW5jbHVkZSByZXNwb25kLXRvKGxhcmdlLXVwKSB7XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDgwJTtcblx0XHRcdFx0bWF4LXdpZHRoOiA4MCU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmNsb3NlIHtcblx0XHRcdHJpZ2h0OiA0cHg7XG5cdFx0XHR0b3A6IDRweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGNvbG9yOiBkYXJrZ3JheTtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHBhZGRpbmc6IDRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICRwb3B1cC1ib3JkZXItY29sb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lm92ZXJsYXktaGVscCwgLm92ZXJsYXktc2V0dGluZ3MsIC5vdmVybGF5LXRpbGVzLWluZm8ge1xuXHRcdHotaW5kZXg6IDEwMDEwO1xuXG5cdFx0Lm92ZXJsYXktcG9wdXAge1xuXHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0XHRwYWRkaW5nOiAxLjVlbSAyZW07XG5cdFx0fVxuXHR9XG5cblx0Lm92ZXJsYXktbWVzc2FnZSB7XG5cdFx0Lm92ZXJsYXktcG9wdXAge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAkdGV4dC1jb2xvcjtcblx0XHRcdHBhZGRpbmc6IDEuNWVtIDJlbTtcblx0XHRcdEBpbmNsdWRlIG5vLXNlbGVjdCgpO1xuXHRcdH1cblx0fVxuXG5cdC5vdmVybGF5LW5ld2dhbWUge1xuXHRcdC5vdmVybGF5LXBvcHVwIHtcblx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRoZWlnaHQ6IDkwJTtcblx0XHRcdHBhZGRpbmc6IDEuNWVtIDJlbTtcblx0XHR9XG5cdH1cblxufVxuIiwiJGJhY2tncm91bmQtY29sb3I6ICNlYmQ0N2E7XG5cbiRwb3B1cC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMWU0O1xuJHBvcHVwLWJvcmRlci1jb2xvcjojNzA3MDcwO1xuXG4kdGV4dC1jb2xvcjogIzAwMDAwMDtcbiR0ZXh0LWZvbnQ6ICdqb3NlZmluX3NhbnNyZWd1bGFyJywgJ1RhaG9tYScsIHNhbnMtc2VyaWY7XG5cbi8vIEZvbnQtU2l6ZVxuJGJhc2UtZm9udC1zaXplOiAxZW07XG5cbi8vIExpbmUtSGVpZ2h0XG4kYmFzZS1saW5lLWhlaWdodDogMS41O1xuJGhlYWRlci1saW5lLWhlaWdodDogMS4yNTtcblxuLy8gQnJlYWtwb2ludHNcbiRicC1waWNvOiAyODBweDtcbiRicC10aW55OiA0MDBweDtcbiRicC1zbWFsbDogNTAwcHg7XG4kYnAtbWVkaXVtOiA3MDBweDtcbiRicC1sYXJnZTogMTAwMHB4O1xuJGJwLWh1Z2U6IDE5MDBweDtcbiRicC1qdW1ibzogMjIwMHB4O1xuJGJwLWx1ZGljcm91czogMzAwMHB4O1xuXG4kbXEtcmV0aW5hOiBcIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSlcIjtcbiIsIkBtaXhpbiBmb250ZGVmKCRPcGVuU2Fuc1BhdGgsICRPcGVuU2Fuc1ZlcnNpb24sICRGb250VHlwZTpcIlJlZ3VsYXJcIikge1xuICBzcmM6IHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LmVvdD92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKTtcbiAgc3JjOiB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5lb3Q/I2llZml4JnY9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0ud29mZjI/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd3b2ZmMicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS53b2ZmP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnd29mZicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS50dGY/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd0cnVldHlwZScpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5zdmc/dj0jeyRPcGVuU2Fuc1ZlcnNpb259IyN7JEZvbnRUeXBlfScpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBtaXhpbiBzY2FsZSgkYW1vdW50KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gU2FmYXJpIGFuZCBDaHJvbWUoRW5naW5lOi1XZWJraXQpXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gTW96aWxsYShFbmdpbmU6LUdlY2tvKVxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gSUUoRW5naW5lOi1UcmlkZW50KVxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBPcGVyYShFbmdpbmU6LVByZXN0bylcbiAgdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHJvdW5kZWQoJHJhZGl1czogMC41ZW0pIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBib3goJGJveCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRib3g7XG4gIC1tb3otYm94LXNpemluZzogJGJveDtcbiAgYm94LXNpemluZzogJGJveDtcbn1cblxuQG1peGluIGJsdXIoJGJsdXIpIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtby1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG5AbWl4aW4gdGV4dHNoYWRvdy1ncmFkaWVudCgkdGV4dC1jb2xvcikge1xuICB0ZXh0LXNoYWRvdzogZGFya2VuKCR0ZXh0LWNvbG9yLCAxJSkgMXB4IDAgMCwgZGFya2VuKCR0ZXh0LWNvbG9yLDE2JSkgLTFweCAwIDAsIGRhcmtlbigkdGV4dC1jb2xvciwgMzIlKSAwIDFweCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDUwJSkgMCAtMXB4IDAsIGRhcmtlbigkdGV4dC1jb2xvciwgNzAlKSAzcHggM3B4IDVweCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA5OSUpIDVweCA1cHggMTVweDtcbn1cblxuQG1peGluIGJhY2tncm91bmQtbGluZWFyLWdyYWRpZW50KCRiYWNrLCAkc3RhcnQ6ICMwMDAsICRzdG9wOiAjRkZGKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydCwgJHN0b3ApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQsICRzdG9wKTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93LXdoaXRlLWdyYWRpZW50KCkge1xuICB0ZXh0LXNoYWRvdzogI2VlZSAxcHggMCAwLCAjZWVlIC0xcHggMCAwLCAjZWVlIDAgMXB4IDAsICNlZWUgMCAtMXB4IDAsICNiYmIgM3B4IDNweCA1cHgsICNiMWFlOTcgNXB4IDVweCAxNXB4O1xufVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpOyAvL0lFOFxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1vLXRyYW5zaXRpb246ICRhcmdzO1xuICB0cmFuc2l0aW9uOiAkYXJncztcbn1cblxuXG5AbWl4aW4gcmVzcG9uZC10by1oZWlnaHQoJG1lZGlhKSB7XG5cdEBpZiAkbWVkaWEgPT0gcGljby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbHVkaWNyb3VzLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuXHRAaWYgJG1lZGlhID09IHBpY28tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGx1ZGljcm91cy11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.service */ "3mgE");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/layout.service */ "8LS9");
/* harmony import */ var _service_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/localstorage.service */ "pp5G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_game_game_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/game-component.component */ "NVz8");












class AppComponent {
    constructor(layoutService, storage, translate, meta, app) {
        this.layoutService = layoutService;
        this.storage = storage;
        this.translate = translate;
        this.meta = meta;
        this.app = app;
        this.loading = true;
        this.updateName();
        this.loadLayouts();
        this.registerWindowListeners();
    }
    loadLayouts() {
        this.layoutService.get().then(data => {
            this.layouts = data;
            this.loading = false;
        })
            .catch(e => {
            console.error(e);
        });
    }
    registerWindowListeners() {
        // does not work:
        // @HostListener('window:onbeforeunload')
        // public onBeforeUnload() {}
        // => old style!
        window.addEventListener('beforeunload', () => {
            if (this.app.game.isRunning()) {
                this.app.game.pause();
            }
        }, false);
        window.addEventListener('blur', () => {
            if (this.app.game.isRunning()) {
                this.app.game.pause();
            }
        }, false);
    }
    updateName() {
        const tag = this.meta.getTag('name=application-name');
        this.app.name = tag ? tag.content : this.app.name;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 2, consts: [[3, "hidden", "layouts"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-game-component", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.loading)("layouts", ctx.layouts);
    } }, directives: [_components_game_game_component_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board/board.component */ "qtDB");
/* harmony import */ var _components_choose_layout_choose_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/choose-layout/choose-layout.component */ "tLwX");
/* harmony import */ var _components_game_game_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game/game-component.component */ "NVz8");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/help/help.component */ "BikA");
/* harmony import */ var _components_image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/image-set-loader/image-set-loader.component */ "/vdE");
/* harmony import */ var _components_layout_preview_layout_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout-preview/layout-preview.component */ "JjJJ");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/settings/settings.component */ "1U8w");
/* harmony import */ var _components_tile_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tile/tile.component */ "/cIV");
/* harmony import */ var _components_tiles_info_tiles_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tiles-info/tiles-info.component */ "ljza");
/* harmony import */ var _directives_drop_zone_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/drop-zone.directive */ "4sam");
/* harmony import */ var _modules_defer_load__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/defer-load */ "KEUs");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/duration.pipe */ "je0U");
/* harmony import */ var _pipes_prefix_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/prefix.pipe */ "mQty");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/app.service */ "3mgE");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/layout.service */ "8LS9");
/* harmony import */ var _service_svgdef_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/svgdef.service */ "ITmp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_defer_load_defer_load_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/defer-load/defer-load.module */ "0ngG");
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        _service_app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"],
        _service_layout_service__WEBPACK_IMPORTED_MODULE_19__["LayoutService"],
        _service_svgdef_service__WEBPACK_IMPORTED_MODULE_20__["SvgdefService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _modules_defer_load__WEBPACK_IMPORTED_MODULE_15__["DeferLoadModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_choose_layout_choose_layout_component__WEBPACK_IMPORTED_MODULE_6__["ChooseLayoutComponent"],
        _components_game_game_component_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
        _components_layout_preview_layout_preview_component__WEBPACK_IMPORTED_MODULE_10__["LayoutPreviewComponent"],
        _components_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
        _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_16__["DurationPipe"],
        _pipes_prefix_pipe__WEBPACK_IMPORTED_MODULE_17__["PrefixPipe"],
        _components_tiles_info_tiles_info_component__WEBPACK_IMPORTED_MODULE_13__["TilesInfoComponent"],
        _components_tile_tile_component__WEBPACK_IMPORTED_MODULE_12__["TileComponent"],
        _components_image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_9__["ImageSetLoaderComponent"],
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
        _directives_drop_zone_directive__WEBPACK_IMPORTED_MODULE_14__["DropZoneDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _modules_defer_load_defer_load_module__WEBPACK_IMPORTED_MODULE_22__["DeferLoadModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();


/***/ }),

/***/ "dlcT":
/*!********************************!*\
  !*** ./src/app/model/clock.ts ***!
  \********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
class Clock {
    constructor() {
        this.elapsed = 0;
        this.lastTime = 0;
        this.started = 0;
        this.timer = undefined;
    }
    start() {
        if (!this.timer) {
            this.elapsed = this.elapsed || 0;
        }
    }
    reset() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = undefined;
        }
        this.started = 0;
        this.lastTime = 0;
        this.elapsed = 0;
    }
    run() {
        if (this.timer) {
            return;
        }
        this.lastTime = Date.now();
        this.timer = window.setTimeout(() => {
            this.step();
        }, 1000);
    }
    pause() {
        if (!this.timer) {
            return;
        }
        window.clearTimeout(this.timer);
        this.timer = undefined;
        const newtime = Date.now();
        this.elapsed += newtime - this.lastTime;
    }
    step() {
        const newtime = Date.now();
        this.elapsed += newtime - this.lastTime;
        this.lastTime = newtime;
        this.timer = window.setTimeout(() => {
            this.step();
        }, 1000);
    }
}


/***/ }),

/***/ "je0U":
/*!****************************************!*\
  !*** ./src/app/pipes/duration.pipe.ts ***!
  \****************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

function pad(num) {
    return (num < 10 ? '0' : '') + num.toString();
}
class DurationPipe {
    transform(value) {
        if (isNaN(value) || (value === 0)) {
            return '-';
        }
        const secNum = Math.floor(value / 1000);
        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - (hours * 3600)) / 60);
        const seconds = secNum - (hours * 3600) - (minutes * 60);
        return `${(hours > 0) ? `${pad(hours)}:` : ''}${pad(minutes)}:${pad(seconds)}`;
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });


/***/ }),

/***/ "jxWM":
/*!*************************************!*\
  !*** ./src/app/model/layout-svg.ts ***!
  \*************************************/
/*! exports provided: generateStaticLayoutSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateStaticLayoutSVG", function() { return generateStaticLayoutSVG; });
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ "nH6a");

function generateStaticLayoutSVG(mapping) {
    const items = Object(_draw__WEBPACK_IMPORTED_MODULE_0__["mappingToDrawItems"])(mapping);
    const viewport = Object(_draw__WEBPACK_IMPORTED_MODULE_0__["getDrawViewPort"])(items, 1470, 960, false);
    const sl = [];
    sl.push(`<svg xmlns="http://www.w3.org/2000/svg" class="board-svg" viewBox="${viewport}" preserveAspectRatio="xMidYMid meet" height="100%" width="100%">`);
    for (const draw of items) {
        sl.push(`<g transform="${draw.pos.translate}"><rect class="stone" fill="#FFF9E5" stroke-width="2" stroke="black" x="0" y="0" width="75" height="100" rx="10" ry="10"></rect></g>`);
    }
    sl.push('</svg>');
    return `data:image/svg+xml;base64,${window.btoa(sl.join(''))}`;
}


/***/ }),

/***/ "ljza":
/*!***************************************************************!*\
  !*** ./src/app/components/tiles-info/tiles-info.component.ts ***!
  \***************************************************************/
/*! exports provided: TilesInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesInfoComponent", function() { return TilesInfoComponent; });
/* harmony import */ var _model_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/consts */ "1GeQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tile/tile.component */ "/cIV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function TilesInfoComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tile", tile_r4.img)("imageSet", ctx_r3.imageSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", tile_r4.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TilesInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TilesInfoComponent_div_4_div_4_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](suit_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", suit_r2.tiles);
} }
function TilesInfoComponent_div_5_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-tile", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tile", tile_r9.img)("imageSet", ctx_r8.imageSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", tile_r9.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TilesInfoComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TilesInfoComponent_div_5_div_1_div_4_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](suit_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", suit_r7.tiles);
} }
function TilesInfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TilesInfoComponent_div_5_div_1_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r5);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class TilesInfoComponent {
    constructor() {
        this.info = _model_consts__WEBPACK_IMPORTED_MODULE_0__["TILES_INFO"];
    }
}
TilesInfoComponent.ɵfac = function TilesInfoComponent_Factory(t) { return new (t || TilesInfoComponent)(); };
TilesInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TilesInfoComponent, selectors: [["app-tiles-info"]], inputs: { imageSet: "imageSet" }, decls: 6, vars: 8, consts: [[1, "tiles-content"], ["class", "tiles-section", 4, "ngFor", "ngForOf"], ["class", "tiles-section-half", 4, "ngFor", "ngForOf"], [1, "tiles-section"], [1, "tiles-title"], [1, "tiles-set-9"], ["class", "tile", 4, "ngFor", "ngForOf"], [1, "tile"], [3, "tile", "imageSet"], [3, "innerHtml"], [1, "tiles-section-half"], ["class", "tiles-section-4", 4, "ngFor", "ngForOf"], [1, "tiles-section-4"], [1, "tiles-set-4"]], template: function TilesInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TilesInfoComponent_div_4_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TilesInfoComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\uD83E\uDD8A", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "TILES"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.info.suits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.info.bonus, ctx.info.honors));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_3__["TileComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #000000;\n  margin-top: 0;\n  margin-bottom: 0.2em;\n}\n[_nghost-%COMP%]   .tiles-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .tiles-reference[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n[_nghost-%COMP%]   .tile[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100%;\n          flex: 1 100%;\n  min-width: auto;\n  text-align: center;\n  word-break: normal;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   .tiles-title[_ngcontent-%COMP%] {\n  margin-top: 0.2em;\n  font-weight: bold;\n  text-align: center;\n  border-bottom: 1px solid #eedb90;\n}\n[_nghost-%COMP%]   .tiles-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .tiles-section[_ngcontent-%COMP%]   .tiles-set-9[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .tiles-section[_ngcontent-%COMP%]   .tiles-set-9[_ngcontent-%COMP%] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n  }\n  [_nghost-%COMP%]   .tiles-section[_ngcontent-%COMP%]   .tiles-set-9[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 25%;\n            flex: 1 25%;\n  }\n}\n[_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n[_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-section-4[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 12%;\n}\n[_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-section-4[_ngcontent-%COMP%] {\n  width: 44%;\n}\n[_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-section-4[_ngcontent-%COMP%]   .tiles-set-4[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n  }\n  [_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-section-4[_ngcontent-%COMP%]:first-of-type {\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-section-4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n  }\n  [_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-set-4[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  [_nghost-%COMP%]   .tiles-section-half[_ngcontent-%COMP%]   .tiles-set-4[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 25%;\n            flex: 1 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aWxlcy1pbmZvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxjQUFBO0FBREQ7QUFHQztFQUNDLGtCQUFBO0VBQ0EsY0NGVztFREdYLGFBQUE7RUFDQSxvQkFBQTtBQURGO0FBSUM7RUFDQyxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0FBRkY7QUFLQztFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1DO0VBQ0MsbUJBQUE7TUFBQSxnQkFBQTtVQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0M7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUxGO0FBUUM7RUFDQyxXQUFBO0FBTkY7QUFRRTtFQUNDLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7TUFBQSxxQkFBQTtVQUFBLHVCQUFBO0FBTkg7QUVvSUU7RUZoSUE7SUFJRSw4QkFBQTtJQUFBLDZCQUFBO1FBQUEsdUJBQUE7WUFBQSxtQkFBQTtJQUNBLG1CQUFBO1FBQUEsZUFBQTtJQUNBLHVCQUFBO1FBQUEsbUJBQUE7RUFKRjtFQUtFO0lBQ0MsbUJBQUE7UUFBQSxlQUFBO1lBQUEsV0FBQTtFQUhIO0FBQ0Y7QUFRQztFQUNDLFdBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBQU5GO0FBUUU7RUFDQyxpQkFBQTtBQU5IO0FBU0U7RUFDQyxVQUFBO0FBUEg7QUFTRztFQUNDLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtNQUFBLHVCQUFBO1VBQUEsbUJBQUE7QUFQSjtBRTRHRTtFRmxIRDtJQWlCRSxtQkFBQTtRQUFBLGVBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1FBQUEsdUJBQUE7WUFBQSxtQkFBQTtJQUNBLHVCQUFBO1FBQUEsbUJBQUE7RUFQRDtFQVNDO0lBQ0MsZUFBQTtFQVBGO0VBU0M7SUFDQyxXQUFBO0lBQ0EsZUFBQTtFQVBGO0VBU0M7SUFDQyxtQkFBQTtRQUFBLGVBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1FBQUEsdUJBQUE7WUFBQSxtQkFBQTtJQUNBLHVCQUFBO1FBQUEsbUJBQUE7SUFDQSx3QkFBQTtRQUFBLHFCQUFBO1lBQUEsdUJBQUE7RUFQRjtFQVNFO0lBQ0MsbUJBQUE7UUFBQSxlQUFBO1lBQUEsV0FBQTtFQVBIO0FBQ0YiLCJmaWxlIjoidGlsZXMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZS9nbG9iYWxzXCI7XG5cbjpob3N0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cblx0aDEge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogJHRleHQtY29sb3I7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0XHRtYXJnaW4tYm90dG9tOiAwLjJlbTtcblx0fVxuXG5cdC50aWxlcy1jb250ZW50IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHR9XG5cblx0LnRpbGVzLXJlZmVyZW5jZSB7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0fVxuXG5cdC50aWxlIHtcblx0XHRmbGV4OiAxIDEwMCU7XG5cdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0fVxuXG5cdC50aWxlcy10aXRsZSB7XG5cdFx0bWFyZ2luLXRvcDogMC4yZW07XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGVuKCRiYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG5cdH1cblxuXHQudGlsZXMtc2VjdGlvbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cblx0XHQudGlsZXMtc2V0LTkge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0QGluY2x1ZGUgcmVzcG9uZC10byh0aW55LWRvd24pIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRcdFx0XHQudGlsZSB7XG5cdFx0XHRcdFx0ZmxleDogMSAyNSU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQudGlsZXMtc2VjdGlvbi1oYWxmIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXG5cdFx0LnRpbGVzLXNlY3Rpb24tNDpmaXJzdC1vZi10eXBlIHtcblx0XHRcdG1hcmdpbi1yaWdodDogMTIlO1xuXHRcdH1cblxuXHRcdC50aWxlcy1zZWN0aW9uLTQge1xuXHRcdFx0d2lkdGg6IDQ0JTtcblxuXHRcdFx0LnRpbGVzLXNldC00IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdH1cblx0XHR9XG5cdFx0QGluY2x1ZGUgcmVzcG9uZC10byh0aW55LWRvd24pIHtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG5cdFx0XHQudGlsZXMtc2VjdGlvbi00OmZpcnN0LW9mLXR5cGUge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0XHQudGlsZXMtc2VjdGlvbi00IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMDtcblx0XHRcdH1cblx0XHRcdC50aWxlcy1zZXQtNCB7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0ZmxleC1mbG93OiByb3cgd3JhcDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0XHRcdFx0LnRpbGUge1xuXHRcdFx0XHRcdGZsZXg6IDEgMjUlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWJkNDdhO1xuXG4kcG9wdXAtYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjFlNDtcbiRwb3B1cC1ib3JkZXItY29sb3I6IzcwNzA3MDtcblxuJHRleHQtY29sb3I6ICMwMDAwMDA7XG4kdGV4dC1mb250OiAnam9zZWZpbl9zYW5zcmVndWxhcicsICdUYWhvbWEnLCBzYW5zLXNlcmlmO1xuXG4vLyBGb250LVNpemVcbiRiYXNlLWZvbnQtc2l6ZTogMWVtO1xuXG4vLyBMaW5lLUhlaWdodFxuJGJhc2UtbGluZS1oZWlnaHQ6IDEuNTtcbiRoZWFkZXItbGluZS1oZWlnaHQ6IDEuMjU7XG5cbi8vIEJyZWFrcG9pbnRzXG4kYnAtcGljbzogMjgwcHg7XG4kYnAtdGlueTogNDAwcHg7XG4kYnAtc21hbGw6IDUwMHB4O1xuJGJwLW1lZGl1bTogNzAwcHg7XG4kYnAtbGFyZ2U6IDEwMDBweDtcbiRicC1odWdlOiAxOTAwcHg7XG4kYnAtanVtYm86IDIyMDBweDtcbiRicC1sdWRpY3JvdXM6IDMwMDBweDtcblxuJG1xLXJldGluYTogXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpXCI7XG4iLCJAbWl4aW4gZm9udGRlZigkT3BlblNhbnNQYXRoLCAkT3BlblNhbnNWZXJzaW9uLCAkRm9udFR5cGU6XCJSZWd1bGFyXCIpIHtcbiAgc3JjOiB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5lb3Q/dj0jeyRPcGVuU2Fuc1ZlcnNpb259Jyk7XG4gIHNyYzogdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0uZW90PyNpZWZpeCZ2PSN7JE9wZW5TYW5zVmVyc2lvbn0nKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gIHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LndvZmYyP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnd29mZjInKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0ud29mZj92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKSBmb3JtYXQoJ3dvZmYnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0udHRmP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0uc3ZnP3Y9I3skT3BlblNhbnNWZXJzaW9ufSMjeyRGb250VHlwZX0nKSBmb3JtYXQoJ3N2ZycpO1xufVxuXG5AbWl4aW4gc2NhbGUoJGFtb3VudCkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJGFtb3VudCk7IC8vIFNhZmFyaSBhbmQgQ2hyb21lKEVuZ2luZTotV2Via2l0KVxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJGFtb3VudCk7IC8vIE1vemlsbGEoRW5naW5lOi1HZWNrbylcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJGFtb3VudCk7IC8vIElFKEVuZ2luZTotVHJpZGVudClcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gT3BlcmEoRW5naW5lOi1QcmVzdG8pXG4gIHRyYW5zZm9ybTogc2NhbGUoJGFtb3VudCk7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCR0b3AsICRsZWZ0LCAkYmx1ciwgJGNvbG9yLCAkaW5zZXQ6IGZhbHNlKSB7XG4gIEBpZiAkaW5zZXQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiByb3VuZGVkKCRyYWRpdXM6IDAuNWVtKSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG5AbWl4aW4gbm8tc2VsZWN0KCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYm94KCRib3gpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94O1xuICAtbW96LWJveC1zaXppbmc6ICRib3g7XG4gIGJveC1zaXppbmc6ICRib3g7XG59XG5cbkBtaXhpbiBibHVyKCRibHVyKSB7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbXMtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW8tZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgZmlsdGVyOiBibHVyKCRibHVyKTtcbn1cblxuQG1peGluIHRleHRzaGFkb3ctZ3JhZGllbnQoJHRleHQtY29sb3IpIHtcbiAgdGV4dC1zaGFkb3c6IGRhcmtlbigkdGV4dC1jb2xvciwgMSUpIDFweCAwIDAsIGRhcmtlbigkdGV4dC1jb2xvciwxNiUpIC0xcHggMCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDMyJSkgMCAxcHggMCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA1MCUpIDAgLTFweCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDcwJSkgM3B4IDNweCA1cHgsIGRhcmtlbigkdGV4dC1jb2xvciwgOTklKSA1cHggNXB4IDE1cHg7XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWxpbmVhci1ncmFkaWVudCgkYmFjaywgJHN0YXJ0OiAjMDAwLCAkc3RvcDogI0ZGRikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjaztcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAkc3RhcnQsICRzdG9wKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHN0YXJ0LCAkc3RvcCk7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gIHRleHQtc2hhZG93OiAkeCAkeSAkYmx1ciAkY29sb3I7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdy13aGl0ZS1ncmFkaWVudCgpIHtcbiAgdGV4dC1zaGFkb3c6ICNlZWUgMXB4IDAgMCwgI2VlZSAtMXB4IDAgMCwgI2VlZSAwIDFweCAwLCAjZWVlIDAgLTFweCAwLCAjYmJiIDNweCAzcHggNXB4LCAjYjFhZTk3IDVweCA1cHggMTVweDtcbn1cblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICRvcGFjaXR5LWllOiAkb3BhY2l0eSAqIDEwMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTsgLy9JRThcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJGFyZ3MuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcbiAgLW1vei10cmFuc2l0aW9uOiAkYXJncztcbiAgLW1zLXRyYW5zaXRpb246ICRhcmdzO1xuICAtby10cmFuc2l0aW9uOiAkYXJncztcbiAgdHJhbnNpdGlvbjogJGFyZ3M7XG59XG5cblxuQG1peGluIHJlc3BvbmQtdG8taGVpZ2h0KCRtZWRpYSkge1xuXHRAaWYgJG1lZGlhID09IHBpY28tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXBpY28pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gcGljby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLXBpY28pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gdGlueS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1tZWRpdW0pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1tZWRpdW0pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFyZ2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbGFyZ2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGx1ZGljcm91cy11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWx1ZGljcm91cykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWx1ZGljcm91cykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG59XG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcblx0QGlmICRtZWRpYSA9PSBwaWNvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLXBpY28pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gcGljby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLXRpbnkpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gdGlueS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1tZWRpdW0pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbGFyZ2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFyZ2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbGFyZ2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsdWRpY3JvdXMtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWx1ZGljcm91cykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "mQty":
/*!**************************************!*\
  !*** ./src/app/pipes/prefix.pipe.ts ***!
  \**************************************/
/*! exports provided: PrefixPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixPipe", function() { return PrefixPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrefixPipe {
    transform(value, prefix) {
        return `${prefix}${value}`;
    }
}
PrefixPipe.ɵfac = function PrefixPipe_Factory(t) { return new (t || PrefixPipe)(); };
PrefixPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "prefix", type: PrefixPipe, pure: true });


/***/ }),

/***/ "nB5j":
/*!*******************************!*\
  !*** ./src/app/model/game.ts ***!
  \*******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "FB/+");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "dlcT");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "1GeQ");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound */ "+wy4");




class Game {
    constructor(storage) {
        this.storage = storage;
        this.clock = new _clock__WEBPACK_IMPORTED_MODULE_1__["Clock"]();
        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]();
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_3__["Sound"]();
        // music: Music = new Music();
        this.state = _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].idle;
        this.layoutID = undefined;
        this.undo = [];
    }
    init() {
        this.load();
        this.board.update();
        if (this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].run) {
            this.pause();
        }
        this.message = { msgID: this.isPaused() ? 'MSG_CONTINUE_SAVE' : 'MSG_START' };
    }
    click(stone) {
        if (!stone) {
            this.board.clearSelection();
            return false;
        }
        if (!this.isRunning() || stone.state.blocked) {
            this.sound.play(_sound__WEBPACK_IMPORTED_MODULE_3__["SOUNDS"].NOPE);
            return true;
        }
        if (this.clock.elapsed === 0) {
            this.clock.run();
        }
        if (this.board.selected && stone && stone !== this.board.selected && stone.groupnr === this.board.selected.groupnr) {
            this.resolveMatchingStone(stone);
            return true;
        }
        if (this.board.selected !== stone) {
            this.sound.play(_sound__WEBPACK_IMPORTED_MODULE_3__["SOUNDS"].SELECT);
        }
        this.board.setStoneSelected(this.board.selected !== stone ? stone : undefined);
        return true;
    }
    isRunning() {
        return this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].run;
    }
    isFreezed() {
        return this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].freeze;
    }
    isPaused() {
        return this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].pause;
    }
    isIdle() {
        return this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].idle;
    }
    resume() {
        this.run();
        this.clock.run();
        // if (this.settings.music) {
        // 	this.music.play();
        // }
    }
    freeze() {
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].freeze);
        this.clock.pause();
    }
    unfreeze() {
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].run);
        this.clock.run();
        // if (this.settings.music) {
        // 	this.music.play();
        // }
    }
    run() {
        this.board.clearHints();
        this.board.update();
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].run);
    }
    hint() {
        this.board.hint();
    }
    toggle() {
        if (this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].run) {
            this.pause();
        }
        else if (this.state === _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].pause) {
            this.resume();
        }
    }
    pause() {
        this.clock.pause();
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].pause, 'MSG_CONTINUE_PAUSE');
        this.save();
        // if (this.settings.music) {
        // 	this.music.pause();
        // }
    }
    reset() {
        this.clock.reset();
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].idle);
        this.board.reset();
        this.undo = [];
    }
    start(layout, mode) {
        this.layoutID = layout.id;
        this.board.applyMapping(layout.mapping, mode);
        this.board.update();
        this.run();
    }
    back() {
        if (!this.isRunning() || (this.undo.length < 2)) {
            return;
        }
        this.board.clearSelection();
        this.board.clearHints();
        const n1 = this.undo.pop();
        const n2 = this.undo.pop();
        if (!n1 || !n2) {
            return;
        }
        this.board.stones.forEach(stone => {
            if ((stone.z === n1[0]) && (stone.x === n1[1]) && (stone.y === n1[2])) {
                stone.picked = false;
            }
            else if ((stone.z === n2[0]) && (stone.x === n2[1]) && (stone.y === n2[2])) {
                stone.picked = false;
            }
        });
        this.board.update();
    }
    load() {
        try {
            const store = this.storage.getState();
            if (store && store.stones) {
                this.clock.elapsed = store.elapsed || 0;
                this.undo = store.undo || [];
                this.layoutID = store.layout;
                this.state = store.state || _consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].idle;
                this.board.load(store.stones, this.undo);
                return true;
            }
        }
        catch (e) {
            console.error('load state failed', e);
        }
        return false;
    }
    save() {
        try {
            this.storage.storeState({
                elapsed: this.clock.elapsed,
                state: this.state,
                layout: this.layoutID || '',
                undo: this.undo,
                stones: this.board.save()
            });
        }
        catch (e) {
            console.error('storing state failed', e);
        }
    }
    gameOverLoosing() {
        const id = this.layoutID || 'unknown';
        const score = this.storage.getScore(id) || {};
        score.playCount = (score.playCount || 0) + 1;
        this.storage.storeScore(id, score);
        this.gameOver('MSG_FAIL');
    }
    gameOverWining() {
        const id = this.layoutID || 'unknown';
        const playTime = this.clock.elapsed;
        const score = this.storage.getScore(id) || {};
        score.playCount = (score.playCount || 0) + 1;
        if (!score.bestTime || score.bestTime > playTime) {
            score.bestTime = playTime;
            this.gameOver('MSG_BEST', playTime);
        }
        else {
            this.gameOver('MSG_GOOD', playTime);
        }
        this.storage.storeScore(id, score);
    }
    // toggleMusic(): void {
    // if (!this.settings.music) {
    // 	this.music.stop();
    // } else {
    // 	this.music.play();
    // }
    // }
    delayedSave() {
        setTimeout(() => {
            this.save();
        }, 500);
    }
    resolveMatchingStone(stone) {
        const sel = this.board.selected;
        if (!sel) {
            return;
        }
        this.board.clearSelection();
        this.undo.push([sel.z, sel.x, sel.y], [stone.z, stone.x, stone.y]);
        this.board.clearHints();
        sel.picked = true;
        stone.picked = true;
        this.board.update();
        if (this.board.count < 2) {
            this.gameOverWining();
        }
        else if (this.board.free.length < 1) {
            this.gameOverLoosing();
        }
        else {
            this.sound.play(_sound__WEBPACK_IMPORTED_MODULE_3__["SOUNDS"].MATCH);
            this.delayedSave();
        }
    }
    gameOver(message, playTime) {
        this.sound.play(_sound__WEBPACK_IMPORTED_MODULE_3__["SOUNDS"].OVER);
        this.setState(_consts__WEBPACK_IMPORTED_MODULE_2__["STATES"].idle, message, playTime);
        this.clock.reset();
        this.delayedSave();
    }
    setState(state, msgID, playTime) {
        this.message = msgID ? { msgID, playTime } : undefined;
        this.state = state;
    }
}


/***/ }),

/***/ "nH6a":
/*!*******************************!*\
  !*** ./src/app/model/draw.ts ***!
  \*******************************/
/*! exports provided: calcDrawPos, sortDrawItems, getDrawViewPort, getDrawBounds, mappingToDrawItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDrawPos", function() { return calcDrawPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDrawItems", function() { return sortDrawItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawViewPort", function() { return getDrawViewPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDrawBounds", function() { return getDrawBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappingToDrawItems", function() { return mappingToDrawItems; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "1GeQ");
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stone */ "DgVQ");


function calcDrawPos(z, x, y) {
    const pos = {
        x: ((_consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileWidth + 2) * x / 2 - (z * 8)) + (_consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileWidth / 2),
        y: ((_consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight + 2) * y / 2 - (z * 8)) + (_consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight / 2),
        z: y + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].mY * (x + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].mX * z),
        translate: ''
    };
    pos.translate = `translate(${pos.x},${pos.y})`;
    return pos;
}
function sortDrawItems(items) {
    const sortToDraw = (draw) => draw.pos.z;
    return items.sort((ad, bd) => {
        const a = sortToDraw(ad);
        const b = sortToDraw(bd);
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
}
function getDrawViewPort(items, width, height, rotate) {
    const bounds = getDrawBounds(items, width, height);
    const b = rotate ?
        [-bounds[3] - _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight - 10, -bounds[0] - 30, bounds[3] + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight - 10, bounds[2] + bounds[0] + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileWidth + 40] :
        [bounds[0] - 40, bounds[1] - 20, bounds[2] + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight + 40, bounds[3] + _consts__WEBPACK_IMPORTED_MODULE_0__["Consts"].tileHeight + 20];
    return b.join(' ');
}
function getDrawBounds(items, width, height) {
    const m = Math.max(width, height);
    const bounds = [m, m, 0, 0];
    items.forEach(draw => {
        bounds[0] = Math.min(bounds[0], draw.pos.x);
        bounds[1] = Math.min(bounds[1], draw.pos.y);
        bounds[2] = Math.max(bounds[2], draw.pos.x);
        bounds[3] = Math.max(bounds[3], draw.pos.y);
    });
    return bounds;
}
function mappingToDrawItems(mapping) {
    const emptySource = new _stone__WEBPACK_IMPORTED_MODULE_1__["Stone"](0, 0, 0, 0, 0);
    const result = mapping.map((row) => ({
        z: row[0],
        x: row[1],
        y: row[2],
        v: 0,
        visible: true,
        pos: calcDrawPos(row[0], row[1], row[2]),
        source: emptySource
    }));
    return sortDrawItems(result);
}


/***/ }),

/***/ "octk":
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
const version = '1.2.0';


/***/ }),

/***/ "pp5G":
/*!*************************************************!*\
  !*** ./src/app/service/localstorage.service.ts ***!
  \*************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _model_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/types */ "Io0L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalstorageService {
    constructor() {
        this.prefix = 'mah.';
        this.updateData();
    }
    getScore(id) {
        return this.get(`score.${id}`);
    }
    getSettings() {
        return this.get('settings');
    }
    getState() {
        return this.get('state');
    }
    getLastPlayed() {
        if (!localStorage) {
            return;
        }
        try {
            const result = localStorage.getItem('last');
            return result || undefined;
        }
        catch (e) {
            console.error(e);
        }
        return;
    }
    storeLastPlayed(id) {
        if (!localStorage) {
            return;
        }
        try {
            if (!id) {
                localStorage.removeItem('last');
            }
            else {
                localStorage.setItem('last', id);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    storeScore(id, store) {
        this.set(`score.${id}`, store);
    }
    clearScore(id) {
        this.set(`score.${id}`, undefined);
    }
    storeSettings(store) {
        this.set('settings', store);
    }
    storeState(store) {
        this.set('state', store);
    }
    get(key) {
        if (!localStorage) {
            return;
        }
        try {
            const s = localStorage.getItem(`${this.prefix}${key}`);
            if (!s) {
                return;
            }
            return JSON.parse(s);
        }
        catch (e) {
            return;
        }
    }
    set(key, data) {
        if (!localStorage) {
            return;
        }
        if (data === undefined) {
            localStorage.removeItem(`${this.prefix}${key}`);
        }
        else {
            localStorage.setItem(this.prefix + key, JSON.stringify(data));
        }
    }
    updateData() {
        if (!localStorage) {
            return;
        }
        try {
            let old = localStorage.getItem('state');
            if (old) {
                localStorage.removeItem('state');
                this.set('state', JSON.parse(old));
            }
            old = localStorage.getItem('settings');
            if (old) {
                localStorage.removeItem('settings');
                this.set('settings', JSON.parse(old));
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qtDB":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/consts */ "1GeQ");
/* harmony import */ var _model_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/draw */ "nH6a");
/* harmony import */ var _image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-set-loader/image-set-loader.component */ "/vdE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_prefix_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/prefix.pipe */ "mQty");







function BoardComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BoardComponent__svg_g_9_Template__svg_g_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const draw_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick($event, draw_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "prefix");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draw_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", draw_r1.source.selected)("hidden", draw_r1.source.picked)("hinted", draw_r1.source.hinted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", draw_r1.pos.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, draw_r1.url, ctx_r0.urlPrefix), null, "xlink");
} }
class BoardComponent {
    constructor() {
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.drawStones = [];
        this.rotate = false;
        this.translate = '';
        this.viewport = '0 0 1470 960';
    }
    ngOnInit() {
        this.resize(window);
    }
    trackByDrawStone(index, draw) {
        return `${draw.source.groupnr}/${draw.source.v}`;
    }
    ngOnChanges(changes) {
        if (changes.tiles) {
            this.updateTiles(changes.tiles.currentValue);
        }
        if (changes.background) {
            this.updateBackground(changes.background.currentValue);
        }
        if (changes.imageSet) {
            this.prefix = `b_${changes.imageSet.currentValue}_`;
            this.urlPrefix = `#b_${changes.imageSet.currentValue}_`;
        }
    }
    onClick(event, draw) {
        this.clickEvent.emit(draw ? draw.source : undefined);
        event.stopPropagation();
    }
    resize(element) {
        const r = element.innerHeight > element.innerWidth;
        if (r !== this.rotate) {
            this.rotate = r;
            this.translate = this.rotate ? 'rotate(90)' : '';
            this.setViewPort();
        }
    }
    onResize(event) {
        const element = event.target;
        if (element) {
            this.resize(element);
        }
    }
    setViewPort() {
        this.viewport = Object(_model_draw__WEBPACK_IMPORTED_MODULE_2__["getDrawViewPort"])(this.drawStones, 1470, 960, this.rotate);
    }
    updateTiles(stones) {
        if (!stones) {
            return;
        }
        const items = stones
            .filter((stone) => (stone !== undefined))
            .map((stone) => {
            var _a;
            return ({
                z: stone.z,
                x: stone.x,
                y: stone.y,
                v: stone.v,
                visible: true,
                url: (_a = stone.img) === null || _a === void 0 ? void 0 : _a.id,
                pos: Object(_model_draw__WEBPACK_IMPORTED_MODULE_2__["calcDrawPos"])(stone.z, stone.x, stone.y),
                source: stone
            });
        });
        this.drawStones = Object(_model_draw__WEBPACK_IMPORTED_MODULE_2__["sortDrawItems"])(items);
        this.setViewPort();
    }
    updateBackground(background) {
        const back = _model_consts__WEBPACK_IMPORTED_MODULE_1__["Backgrounds"].find(b => b.img === background);
        this.backgroundUrl = back && back.img ? `url("assets/img/${back.img}")` : undefined;
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], hostVars: 2, hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.backgroundUrl);
    } }, inputs: { background: "background", imageSet: "imageSet", tiles: "tiles" }, outputs: { clickEvent: "clickEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 8, consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 1, "board-svg", 3, "resize", "mousedown"], ["id", "filter4198-8", 2, "color-interpolation-filters", "sRGB"], ["in", "SourceGraphic", "stdDeviation", "8"], ["id", "front", "width", "300", "height", "400", "viewBox", "0 0 300 400"], ["d", "m 151.73588,1025.0177 c -3.32683,-9.3138 -10.24843,-68.45389 5.31821,-90.62655 20.27717,-26.12032 219.43558,-16.45796 231.55506,-9.93184 11.07433,5.31702 -178.60366,0.0589 -204.85126,34.86646 -21.59349,30.0006 -26.50086,82.17843 -32.02201,65.69193 z", "transform", "rotate(180,228.93649,666.47892)", 2, "fill", "#000000", "fill-opacity", "0.15", "fill-rule", "evenodd", "stroke", "none", "filter", "url(#filter4198-8)"], ["transform", "translate(5.9349307,-644.92912)", "d", "M -4.7687833,775.07096 C -9.6501835,741.99485 -16.84552,674.23676 -1.2788716,652.0641 18.998297,625.94378 233.50094,631.63117 263.31435,653.90999 276.21398,662.64856 70.349579,663.12124 47.099353,691.74479 24.390958,719.11242 0.65060847,818.18718 -4.7687833,775.07096 Z", 2, "fill", "#ffffff", "fill-opacity", "0.4", "fill-rule", "evenodd", "stroke", "none", "filter", "url(#filter4198-8)"], ["app-image-set-loader", "", 3, "imageSet", "prefix"], [1, "stage"], ["class", "draw", 3, "selected", "hidden", "hinted", "mousedown", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "draw", 3, "mousedown"], [1, "tile"], ["x", "3", "y", "3", "width", "75px", "height", "100px", "rx", "10", "ry", "10", 1, "shadow"], ["x", "0", "y", "0", "width", "75", "height", "100", "rx", "10", "ry", "10", 1, "stone"], ["x", "6", "y", "6", "width", "63", "height", "88"], [0, "xlink", "href", "#front", "x", "0", "y", "0", "width", "75", "height", "100"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BoardComponent_Template__svg_svg_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousedown", function BoardComponent_Template__svg_svg_mousedown_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "feGaussianBlur", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "defs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BoardComponent__svg_g_9_Template, 7, 11, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotate", ctx.rotate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx.viewport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageSet", ctx.imageSet)("prefix", ctx.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.translate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drawStones)("ngForTrackBy", ctx.trackByDrawStone);
    } }, directives: [_image_set_loader_image_set_loader_component__WEBPACK_IMPORTED_MODULE_3__["ImageSetLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_pipes_prefix_pipe__WEBPACK_IMPORTED_MODULE_5__["PrefixPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-repeat: repeat;\n  background-size: cover;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.stage[_ngcontent-%COMP%] {\n  -webkit-transition: opacity 500ms;\n  transition: opacity 500ms;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%] {\n  \n  -webkit-transform-origin: 50px 32.5px;\n          transform-origin: 50px 32.5px;\n  opacity: 1;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.hinted[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.12);\n          transform: scale(1.12);\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.hinted[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%]    > rect[_ngcontent-%COMP%] {\n  stroke: #9f0000;\n  stroke-width: 3px;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.selected[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.04);\n          transform: scale(1.04);\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.selected[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%]   rect.stone[_ngcontent-%COMP%] {\n  stroke: black;\n  fill: #F8EABB;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.selected.hinted[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.14);\n          transform: scale(1.14);\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.selected.hinted[_ngcontent-%COMP%]   g.tile[_ngcontent-%COMP%]    > rect[_ngcontent-%COMP%] {\n  stroke: #9f0000;\n  stroke-width: 3px;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.draw[_ngcontent-%COMP%]   rect.shadow[_ngcontent-%COMP%] {\n  fill: #191919;\n  opacity: 0.6;\n  stroke-width: 1;\n  stroke: black;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.draw[_ngcontent-%COMP%]   rect.stone[_ngcontent-%COMP%] {\n  fill: #FFF9E5;\n  stroke-width: 1;\n  stroke: black;\n}\n[_nghost-%COMP%]   .board-svg[_ngcontent-%COMP%]   g.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNELHNCQUFBO0FBREQ7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUN3QkYseUJBQUE7RUFDQSxzQkFBQTtFQUVBLHFCQUFBO01BQUEsaUJBQUE7QUR4QkY7QUFDRTtFQUNDLGlDQUFBO0VBQUEseUJBQUE7QUFDSDtBQUVFO0VBQ0Msd0NBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsVUFBQTtBQUFIO0FBR0U7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FBREg7QUFJRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUZIO0FBS0U7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FBSEg7QUFNRTtFQUNDLGFBQUE7RUFDQSxhQUFBO0FBSkg7QUFPRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUFMSDtBQVFFO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBTkg7QUFTRTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFQSDtBQVVFO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUkg7QUFXRTtFQUNDLFVBQUE7QUFUSCIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZS9nbG9iYWxzXCI7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLmJvYXJkLXN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBpbmNsdWRlIG5vLXNlbGVjdCgpO1xuXG5cdFx0Zy5zdGFnZSB7XG5cdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xuXHRcdH1cblxuXHRcdGcudGlsZSB7XG5cdFx0XHQvKnRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLW91dDsqL1xuXHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogNTBweCAzMi41cHg7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdH1cblxuXHRcdGcuaGludGVkIGcudGlsZSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xuXHRcdH1cblxuXHRcdGcuaGludGVkIGcudGlsZSA+IHJlY3Qge1xuXHRcdFx0c3Ryb2tlOiAjOWYwMDAwO1xuXHRcdFx0c3Ryb2tlLXdpZHRoOiAzcHg7XG5cdFx0fVxuXG5cdFx0Zy5zZWxlY3RlZCBnLnRpbGUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcblx0XHR9XG5cblx0XHRnLnNlbGVjdGVkIGcudGlsZSByZWN0LnN0b25lIHtcblx0XHRcdHN0cm9rZTogYmxhY2s7XG5cdFx0XHRmaWxsOiAjRjhFQUJCO1xuXHRcdH1cblxuXHRcdGcuc2VsZWN0ZWQuaGludGVkIGcudGlsZSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMTQpO1xuXHRcdH1cblxuXHRcdGcuc2VsZWN0ZWQuaGludGVkIGcudGlsZSA+IHJlY3Qge1xuXHRcdFx0c3Ryb2tlOiAjOWYwMDAwO1xuXHRcdFx0c3Ryb2tlLXdpZHRoOiAzcHg7XG5cdFx0fVxuXG5cdFx0Zy5kcmF3IHJlY3Quc2hhZG93IHtcblx0XHRcdGZpbGw6ICMxOTE5MTk7XG5cdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRzdHJva2Utd2lkdGg6IDE7XG5cdFx0XHRzdHJva2U6IGJsYWNrO1xuXHRcdH1cblxuXHRcdGcuZHJhdyByZWN0LnN0b25lIHtcblx0XHRcdGZpbGw6ICNGRkY5RTU7XG5cdFx0XHRzdHJva2Utd2lkdGg6IDE7XG5cdFx0XHRzdHJva2U6IGJsYWNrO1xuXHRcdH1cblxuXHRcdGcuaGlkZGVuIHtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxuXG4gIH1cbn1cbiIsIkBtaXhpbiBmb250ZGVmKCRPcGVuU2Fuc1BhdGgsICRPcGVuU2Fuc1ZlcnNpb24sICRGb250VHlwZTpcIlJlZ3VsYXJcIikge1xuICBzcmM6IHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LmVvdD92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKTtcbiAgc3JjOiB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5lb3Q/I2llZml4JnY9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0ud29mZjI/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd3b2ZmMicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS53b2ZmP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnd29mZicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS50dGY/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd0cnVldHlwZScpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5zdmc/dj0jeyRPcGVuU2Fuc1ZlcnNpb259IyN7JEZvbnRUeXBlfScpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBtaXhpbiBzY2FsZSgkYW1vdW50KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gU2FmYXJpIGFuZCBDaHJvbWUoRW5naW5lOi1XZWJraXQpXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gTW96aWxsYShFbmdpbmU6LUdlY2tvKVxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gSUUoRW5naW5lOi1UcmlkZW50KVxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBPcGVyYShFbmdpbmU6LVByZXN0bylcbiAgdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHJvdW5kZWQoJHJhZGl1czogMC41ZW0pIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBib3goJGJveCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRib3g7XG4gIC1tb3otYm94LXNpemluZzogJGJveDtcbiAgYm94LXNpemluZzogJGJveDtcbn1cblxuQG1peGluIGJsdXIoJGJsdXIpIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtby1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG5AbWl4aW4gdGV4dHNoYWRvdy1ncmFkaWVudCgkdGV4dC1jb2xvcikge1xuICB0ZXh0LXNoYWRvdzogZGFya2VuKCR0ZXh0LWNvbG9yLCAxJSkgMXB4IDAgMCwgZGFya2VuKCR0ZXh0LWNvbG9yLDE2JSkgLTFweCAwIDAsIGRhcmtlbigkdGV4dC1jb2xvciwgMzIlKSAwIDFweCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDUwJSkgMCAtMXB4IDAsIGRhcmtlbigkdGV4dC1jb2xvciwgNzAlKSAzcHggM3B4IDVweCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA5OSUpIDVweCA1cHggMTVweDtcbn1cblxuQG1peGluIGJhY2tncm91bmQtbGluZWFyLWdyYWRpZW50KCRiYWNrLCAkc3RhcnQ6ICMwMDAsICRzdG9wOiAjRkZGKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydCwgJHN0b3ApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQsICRzdG9wKTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93LXdoaXRlLWdyYWRpZW50KCkge1xuICB0ZXh0LXNoYWRvdzogI2VlZSAxcHggMCAwLCAjZWVlIC0xcHggMCAwLCAjZWVlIDAgMXB4IDAsICNlZWUgMCAtMXB4IDAsICNiYmIgM3B4IDNweCA1cHgsICNiMWFlOTcgNXB4IDVweCAxNXB4O1xufVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpOyAvL0lFOFxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1vLXRyYW5zaXRpb246ICRhcmdzO1xuICB0cmFuc2l0aW9uOiAkYXJncztcbn1cblxuXG5AbWl4aW4gcmVzcG9uZC10by1oZWlnaHQoJG1lZGlhKSB7XG5cdEBpZiAkbWVkaWEgPT0gcGljby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbHVkaWNyb3VzLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuXHRAaWYgJG1lZGlhID09IHBpY28tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGx1ZGljcm91cy11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "tLwX":
/*!*********************************************************************!*\
  !*** ./src/app/components/choose-layout/choose-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLayoutComponent", function() { return ChooseLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _model_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/builder */ "xrI7");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/layout.service */ "8LS9");
/* harmony import */ var _service_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/localstorage.service */ "pp5G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_defer_load_defer_load_scroll_host_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/defer-load/defer-load-scroll-host.directive */ "zY0Y");
/* harmony import */ var _directives_drop_zone_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/drop-zone.directive */ "4sam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modules_defer_load_defer_load_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/defer-load/defer-load.directive */ "9L4c");
/* harmony import */ var _layout_preview_layout_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout-preview/layout-preview.component */ "JjJJ");
/* harmony import */ var _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/duration.pipe */ "je0U");
















function ChooseLayoutComponent_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChooseLayoutComponent_div_4_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.scrollToGroup(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r4.name);
} }
function ChooseLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLayoutComponent_div_4_a_1_Template, 2, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
} }
function ChooseLayoutComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", group_r8.name, " (", group_r8.layouts.length, ")");
} }
function ChooseLayoutComponent_div_6_ng_container_3_div_1_app_layout_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout-preview", 24);
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", item_r15.layout);
} }
function ChooseLayoutComponent_div_6_ng_container_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChooseLayoutComponent_div_6_ng_container_3_div_1_div_2_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.clearBestTimeClick($event, item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "STATS_BEST"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, item_r15.bestTime), " ");
} }
function ChooseLayoutComponent_div_6_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChooseLayoutComponent_div_6_ng_container_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r15 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.onStart(item_r15.layout); })("appDeferLoad", function ChooseLayoutComponent_div_6_ng_container_3_div_1_Template_div_appDeferLoad_0_listener() { const item_r15 = ctx.$implicit; return item_r15.visible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLayoutComponent_div_6_ng_container_3_div_1_app_layout_preview_1_Template, 1, 1, "app-layout-preview", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChooseLayoutComponent_div_6_ng_container_3_div_1_div_2_Template, 6, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", item_r15.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "item-" + item_r15.layout.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.bestTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.layout.name);
} }
function ChooseLayoutComponent_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLayoutComponent_div_6_ng_container_3_div_1_Template, 5, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r8.layouts);
} }
function ChooseLayoutComponent_div_6_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", item_r28.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "item-" + item_r28.layout.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.layout.name);
} }
function ChooseLayoutComponent_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLayoutComponent_div_6_ng_container_4_div_1_Template, 3, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r8.layouts);
} }
function ChooseLayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appDeferLoad", function ChooseLayoutComponent_div_6_Template_div_appDeferLoad_0_listener() { const group_r8 = ctx.$implicit; return group_r8.visible = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLayoutComponent_div_6_div_1_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChooseLayoutComponent_div_6_ng_container_3_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChooseLayoutComponent_div_6_ng_container_4_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "group-", i_r9, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.groups.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r8.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r8.visible);
} }
function ChooseLayoutComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", m_r31.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, m_r31.id), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, m_r31.id + "_DESC"), "");
} }
class ChooseLayoutComponent {
    constructor(layoutService, storage, translate) {
        this.layoutService = layoutService;
        this.storage = storage;
        this.translate = translate;
        this.startEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.groups = [];
        this.mode = 'MODE_SOLVABLE';
        this.builder = new _model_builder__WEBPACK_IMPORTED_MODULE_2__["Builder"]();
    }
    ngOnChanges(changes) {
        if (this.layouts) {
            this.buildGroups();
        }
        setTimeout(() => {
            this.selectLastPlayed();
        });
    }
    onStart(layout) {
        if (layout) {
            this.startEvent.emit({ layout, mode: this.mode });
            this.storage.storeLastPlayed(layout.id);
        }
    }
    selectLastPlayed() {
        const id = this.storage.getLastPlayed();
        if (id) {
            this.groups.forEach(g => {
                g.layouts.forEach(layout => {
                    layout.selected = layout.layout.id === id;
                });
            });
            this.scrollToItem(id);
        }
    }
    buildGroups() {
        const groups = [];
        const g = {};
        for (const layout of this.layouts.items) {
            if (!g[layout.category]) {
                g[layout.category] = { name: layout.category, layouts: [], visible: false };
                groups.push(g[layout.category]);
            }
            const score = this.storage.getScore(layout.id) || {};
            g[layout.category].layouts.push({ layout, playCount: score.playCount, bestTime: score.bestTime, visible: false });
        }
        this.groups = groups;
    }
    randomGame() {
        const index = Math.floor(Math.random() * this.layouts.items.length);
        this.onStart(this.layouts.items[index]);
    }
    onDrop(files) {
        this.layoutService.importFile(files[0])
            .then(layout => {
            this.layouts.items.push(layout);
            this.buildGroups();
        })
            .catch(e => {
            alert(e);
        });
    }
    scrollToGroup(index) {
        const elements = document.getElementById(`group-${index}`);
        if (elements) {
            elements.scrollIntoView();
        }
    }
    scrollToItem(id) {
        const elements = document.getElementById(`item-${id}`);
        if (elements) {
            elements.scrollIntoView();
        }
    }
    clearBestTimeClick(event, layout) {
        event.stopPropagation();
        if (confirm(this.translate.instant('BEST_TIME_CLEAR_SURE'))) {
            this.storage.clearScore(layout.layout.id);
            layout.bestTime = undefined;
            layout.playCount = undefined;
        }
    }
}
ChooseLayoutComponent.ɵfac = function ChooseLayoutComponent_Factory(t) { return new (t || ChooseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ChooseLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChooseLayoutComponent, selectors: [["app-choose-layout"]], inputs: { layouts: "layouts" }, outputs: { startEvent: "startEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 13, consts: [[1, "headline"], ["class", "headline-anchors", 4, "ngIf"], ["appDeferLoadScrollHost", "", 1, "groups", 3, "appDropZone"], ["class", "group", 3, "id", "appDeferLoad", 4, "ngFor", "ngForOf"], [1, "choose-buttons"], [1, "generator"], ["for", "board-generator-select"], ["id", "board-generator-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "start-links"], [1, "link", 3, "click"], [1, "headline-anchors"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "group", 3, "id", "appDeferLoad"], ["class", "group-name", 4, "ngIf"], [1, "previews"], [4, "ngIf"], [1, "group-name"], ["class", "preview", 3, "id", "selected", "click", "appDeferLoad", 4, "ngFor", "ngForOf"], [1, "preview", 3, "id", "click", "appDeferLoad"], ["class", "svg-board", 3, "layout", 4, "ngIf"], ["class", "preview-best-time", 4, "ngIf"], [1, "preview-name"], [1, "svg-board", 3, "layout"], [1, "preview-best-time"], [1, "icon-trash-empty"], ["class", "preview", 3, "id", "selected", 4, "ngFor", "ngForOf"], [1, "preview", 3, "id"], [3, "value"]], template: function ChooseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChooseLayoutComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appDropZone", function ChooseLayoutComponent_Template_div_appDropZone_5_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChooseLayoutComponent_div_6_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChooseLayoutComponent_Template_select_ngModelChange_12_listener($event) { return ctx.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChooseLayoutComponent_option_13_Template, 4, 7, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChooseLayoutComponent_Template_button_click_15_listener() { return ctx.randomGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "SELECT_BOARD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groups.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "BOARD_GENERATOR"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.builder.modes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "START_RANDOM"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _modules_defer_load_defer_load_scroll_host_directive__WEBPACK_IMPORTED_MODULE_6__["DeferLoadScrollHostDirective"], _directives_drop_zone_directive__WEBPACK_IMPORTED_MODULE_7__["DropZoneDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _modules_defer_load_defer_load_directive__WEBPACK_IMPORTED_MODULE_9__["DeferLoadDirective"], _layout_preview_layout_preview_component__WEBPACK_IMPORTED_MODULE_10__["LayoutPreviewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_11__["DurationPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .headline[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #afafaf;\n}\n[_nghost-%COMP%]   .headline-anchors[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #afafaf;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .headline-anchors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  display: inline-block;\n  padding: 2px 4px;\n  font-size: 0.9em;\n  cursor: pointer;\n  text-align: center;\n}\n[_nghost-%COMP%]   .headline-anchors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d0d0d;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 100%;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 16px;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  border-top: 1px solid #d5d5d5;\n  padding-top: 16px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]:first-of-type   .group-name[_ngcontent-%COMP%] {\n  border-top: inherit;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .previews[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 200px;\n  height: 180px;\n  cursor: pointer;\n  border: 1px solid #afafaf;\n  display: block;\n  background-color: #2b424f;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview.selected[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   app-layout-preview[_ngcontent-%COMP%] {\n  display: block;\n  width: 200px;\n  height: 180px;\n  text-align: center;\n  padding-bottom: 1.5em;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-best-time[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgba(24, 24, 24, 0.8);\n  color: white;\n  border-bottom-left-radius: 3px;\n  padding: 3px;\n  padding-left: 6px;\n  text-shadow: 1px 1px black;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-best-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 1.2em;\n  text-align: right;\n  -webkit-transition: all 100ms;\n  transition: all 100ms;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-best-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-best-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .preview-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  text-shadow: 1px 1px white;\n}\n[_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]:hover {\n  background-color: #636056;\n}\n@media only screen and (max-width: 700px) {\n  [_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  [_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   app-layout-preview[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .groups[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%] {\n  border-top: 1px solid #afafaf;\n  padding-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%]   .start-links[_ngcontent-%COMP%] {\n  text-align: right;\n  display: inline-block;\n  width: 50%;\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%]   .start-links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: black;\n  margin-left: 8px;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%]   .generator[_ngcontent-%COMP%] {\n  width: 50%;\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%]   .generator[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n[_nghost-%COMP%]   .choose-buttons[_ngcontent-%COMP%]   .generator[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  width: 100%;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaG9vc2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FBREQ7QUFHQztFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURGO0FBSUM7RUFDQyxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0FBRkY7QUFJRTtFQUNDLG1CQUFBO01BQUEsb0JBQUE7VUFBQSxZQUFBO0VBQ0EsMEJBQUE7TUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkg7QUFJRztFQUNDLGNBQUE7QUFGSjtBQU9DO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMRjtBQU9FO0VBQ0MsV0FBQTtFQUNBLG9CQUFBO0FBTEg7QUFPRztFQUNDLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxKO0FBU0k7RUFDQyxtQkFBQTtBQVBMO0FBV0c7RUFDQyxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO01BQUEsdUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtFQUNBLDhCQUFBO01BQUEsMkJBQUE7VUFBQSw2QkFBQTtBQVRKO0FBWUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVZKO0FBWUk7RUFDQyx5QkFBQTtBQVZMO0FBYUk7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBWEw7QUFjSTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBWkw7QUFjSztFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUFaTjtBQWFNO0VBQ0MsZ0JBQUE7QUFYUDtBQWFNO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQVhQO0FBZ0JJO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQWRMO0FBaUJJO0VBQ0MseUJBQUE7QUFmTDtBQ2dGRTtFRDNIQztJQThERSxVQUFBO0VBZkg7RUFnQkc7SUFDQyxXQUFBO0VBZEo7QUFDRjtBQ29ERTtFRHZHQztJQW9FRSxXQUFBO0VBYkg7QUFDRjtBQWtCQztFQUNDLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7TUFBQSxpQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7VUFBQSxxQkFBQTtBQWhCRjtBQWtCRTtFQUNDLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBaEJIO0FBa0JHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFoQko7QUFvQkU7RUFDQyxVQUFBO0FBbEJIO0FBb0JHO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0FBbEJKO0FBcUJHO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFuQkoiLCJmaWxlIjoiY2hvb3NlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZS9nbG9iYWxzXCI7XG5cbjpob3N0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdC5oZWFkbGluZSB7XG5cdFx0cGFkZGluZy10b3A6IDhweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xuXHR9XG5cblx0LmhlYWRsaW5lLWFuY2hvcnMge1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cblx0XHRhIHtcblx0XHRcdGZsZXgtZ3JvdzogMTtcblx0XHRcdGZsZXgtYmFzaXM6IDA7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwYWRkaW5nOiAycHggNHB4O1xuXHRcdFx0Zm9udC1zaXplOiAwLjllbTtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCA1JSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Lmdyb3VwcyB7XG5cdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0d2lkdGg6IDEwMCU7XG5cblx0XHQuZ3JvdXAge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuXHRcdFx0Lmdyb3VwLW5hbWUge1xuXHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcblx0XHRcdFx0cGFkZGluZy10b3A6IDE2cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdFx0Lmdyb3VwLW5hbWUge1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IGluaGVyaXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnByZXZpZXdzIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0XHR9XG5cblx0XHRcdC5wcmV2aWV3IHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0MjRmO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFwcC1sYXlvdXQtcHJldmlldyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxLjVlbTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wcmV2aWV3LWJlc3QtdGltZSB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0LCAyNCwgMjQsIC44KTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDNweDtcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDZweDtcblx0XHRcdFx0XHR0ZXh0LXNoYWRvdzogMXB4IDFweCBibGFjaztcblxuXHRcdFx0XHRcdGEge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxLjJlbTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDEwMG1zO1xuXHRcdFx0XHRcdFx0aSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wcmV2aWV3LW5hbWUge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtc2hhZG93OiAxcHggMXB4IHdoaXRlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM4Yjg3N2EsIDE1JSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRAaW5jbHVkZSByZXNwb25kLXRvKG1lZGl1bS1kb3duKSB7XG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRhcHAtbGF5b3V0LXByZXZpZXcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdEBpbmNsdWRlIHJlc3BvbmQtdG8odGlueS1kb3duKSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY2hvb3NlLWJ1dHRvbnMge1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWZhZmFmO1xuXHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cblx0XHQuc3RhcnQtbGlua3Mge1xuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogNTAlO1xuXG5cdFx0XHQubGluayB7XG5cdFx0XHRcdGNvbG9yOiBibGFjaztcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5nZW5lcmF0b3Ige1xuXHRcdFx0d2lkdGg6IDUwJTtcblxuXHRcdFx0bGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMnB4O1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3Qge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDhweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cbiIsIkBtaXhpbiBmb250ZGVmKCRPcGVuU2Fuc1BhdGgsICRPcGVuU2Fuc1ZlcnNpb24sICRGb250VHlwZTpcIlJlZ3VsYXJcIikge1xuICBzcmM6IHVybCgnI3skT3BlblNhbnNQYXRofS8jeyRGb250VHlwZX0vT3BlblNhbnMtI3skRm9udFR5cGV9LmVvdD92PSN7JE9wZW5TYW5zVmVyc2lvbn0nKTtcbiAgc3JjOiB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5lb3Q/I2llZml4JnY9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgdXJsKCcjeyRPcGVuU2Fuc1BhdGh9LyN7JEZvbnRUeXBlfS9PcGVuU2Fucy0jeyRGb250VHlwZX0ud29mZjI/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd3b2ZmMicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS53b2ZmP3Y9I3skT3BlblNhbnNWZXJzaW9ufScpIGZvcm1hdCgnd29mZicpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS50dGY/dj0jeyRPcGVuU2Fuc1ZlcnNpb259JykgZm9ybWF0KCd0cnVldHlwZScpLFxuICB1cmwoJyN7JE9wZW5TYW5zUGF0aH0vI3skRm9udFR5cGV9L09wZW5TYW5zLSN7JEZvbnRUeXBlfS5zdmc/dj0jeyRPcGVuU2Fuc1ZlcnNpb259IyN7JEZvbnRUeXBlfScpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBtaXhpbiBzY2FsZSgkYW1vdW50KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gU2FmYXJpIGFuZCBDaHJvbWUoRW5naW5lOi1XZWJraXQpXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gTW96aWxsYShFbmdpbmU6LUdlY2tvKVxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTsgLy8gSUUoRW5naW5lOi1UcmlkZW50KVxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRhbW91bnQpOyAvLyBPcGVyYShFbmdpbmU6LVByZXN0bylcbiAgdHJhbnNmb3JtOiBzY2FsZSgkYW1vdW50KTtcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cblxuQG1peGluIHJvdW5kZWQoJHJhZGl1czogMC41ZW0pIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG59XG5cbkBtaXhpbiBuby1zZWxlY3QoKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBib3goJGJveCkge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRib3g7XG4gIC1tb3otYm94LXNpemluZzogJGJveDtcbiAgYm94LXNpemluZzogJGJveDtcbn1cblxuQG1peGluIGJsdXIoJGJsdXIpIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtby1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG5AbWl4aW4gdGV4dHNoYWRvdy1ncmFkaWVudCgkdGV4dC1jb2xvcikge1xuICB0ZXh0LXNoYWRvdzogZGFya2VuKCR0ZXh0LWNvbG9yLCAxJSkgMXB4IDAgMCwgZGFya2VuKCR0ZXh0LWNvbG9yLDE2JSkgLTFweCAwIDAsIGRhcmtlbigkdGV4dC1jb2xvciwgMzIlKSAwIDFweCAwLCBkYXJrZW4oJHRleHQtY29sb3IsIDUwJSkgMCAtMXB4IDAsIGRhcmtlbigkdGV4dC1jb2xvciwgNzAlKSAzcHggM3B4IDVweCwgZGFya2VuKCR0ZXh0LWNvbG9yLCA5OSUpIDVweCA1cHggMTVweDtcbn1cblxuQG1peGluIGJhY2tncm91bmQtbGluZWFyLWdyYWRpZW50KCRiYWNrLCAkc3RhcnQ6ICMwMDAsICRzdG9wOiAjRkZGKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydCwgJHN0b3ApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQsICRzdG9wKTtcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuQG1peGluIHRleHQtc2hhZG93LXdoaXRlLWdyYWRpZW50KCkge1xuICB0ZXh0LXNoYWRvdzogI2VlZSAxcHggMCAwLCAjZWVlIC0xcHggMCAwLCAjZWVlIDAgMXB4IDAsICNlZWUgMCAtMXB4IDAsICNiYmIgM3B4IDNweCA1cHgsICNiMWFlOTcgNXB4IDVweCAxNXB4O1xufVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgJG9wYWNpdHktaWU6ICRvcGFjaXR5ICogMTAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9JG9wYWNpdHktaWUpOyAvL0lFOFxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkYXJncy4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbW96LXRyYW5zaXRpb246ICRhcmdzO1xuICAtbXMtdHJhbnNpdGlvbjogJGFyZ3M7XG4gIC1vLXRyYW5zaXRpb246ICRhcmdzO1xuICB0cmFuc2l0aW9uOiAkYXJncztcbn1cblxuXG5AbWl4aW4gcmVzcG9uZC10by1oZWlnaHQoJG1lZGlhKSB7XG5cdEBpZiAkbWVkaWEgPT0gcGljby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtc21hbGwpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gc21hbGwtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLXNtYWxsKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogJGJwLWxhcmdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1odWdlKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGh1Z2UtZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6ICRicC1qdW1ibykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBqdW1iby1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtanVtYm8pIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gbHVkaWNyb3VzLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH1cbn1cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuXHRAaWYgJG1lZGlhID09IHBpY28tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtcGljbykge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBwaWNvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1waWNvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHRpbnktZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGlueSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSB0aW55LXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC10aW55KSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IHNtYWxsLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBzbWFsbC1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1zbWFsbCkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLW1lZGl1bSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBtZWRpdW0tZG93biB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtbWVkaXVtKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcmdlLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXJnZS1kb3duIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sYXJnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0gaHVnZS11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtaHVnZSkge1xuXHRcdFx0QGNvbnRlbnQ7XG5cdFx0fVxuXHR9IEBlbHNlIGlmICRtZWRpYSA9PSBodWdlLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWh1Z2UpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fSBAZWxzZSBpZiAkbWVkaWEgPT0ganVtYm8tdXAge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLWRvd24ge1xuXHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwLWp1bWJvKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGx1ZGljcm91cy11cCB7XG5cdFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnAtbHVkaWNyb3VzKSB7XG5cdFx0XHRAY29udGVudDtcblx0XHR9XG5cdH0gQGVsc2UgaWYgJG1lZGlhID09IGp1bWJvLXVwIHtcblx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1sdWRpY3JvdXMpIHtcblx0XHRcdEBjb250ZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "xHFQ":
/*!***********************************!*\
  !*** ./src/app/model/settings.ts ***!
  \***********************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "1GeQ");

class Settings {
    constructor(storageProvider) {
        this.storageProvider = storageProvider;
        this.lang = 'auto';
        this.sounds = true;
        // music = false;
        this.tileset = _consts__WEBPACK_IMPORTED_MODULE_0__["ImageSetDefault"];
        this.background = '';
        this.stats = {
            games: 0,
            bestTime: 0
        };
    }
    load() {
        try {
            const store = this.storageProvider.getSettings();
            if (store) {
                this.lang = store.lang || 'auto';
                this.tileset = store.tileset || _consts__WEBPACK_IMPORTED_MODULE_0__["ImageSetDefault"];
                this.background = store.background;
                // this.music = store.music || false;
                this.sounds = store.sounds || false;
                // this.stats.games = store.games || 0;
                // this.stats.bestTime = store.bestTime || 0;
            }
            return true;
        }
        catch (e) {
            console.error('load settings failed', e);
        }
        return false;
    }
    save() {
        try {
            this.storageProvider.storeSettings({
                lang: this.lang,
                sounds: this.sounds,
                // music: this.music,
                background: this.background,
                tileset: this.tileset
                // games: this.stats.games,
                // bestTime: this.stats.bestTime
            });
            return true;
        }
        catch (e) {
            console.error('storing settings failed', e);
        }
        return false;
    }
}


/***/ }),

/***/ "xrI7":
/*!**********************************!*\
  !*** ./src/app/model/builder.ts ***!
  \**********************************/
/*! exports provided: BuilderModes, Builder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModes", function() { return BuilderModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return Builder; });
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stone */ "DgVQ");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiles */ "II96");
/* eslint-disable max-classes-per-file */


function random(array) {
    return Math.floor(Math.random() * array.length);
}
function randomExtract(array) {
    const i = random(array);
    return array.splice(i, 1)[0];
}
function collectNodes(stones, stone) {
    const nodes = { left: [], right: [], top: [], bottom: [] };
    let s;
    for (let y = stone.y - 1; y <= stone.y + 1; y++) {
        s = Object(_stone__WEBPACK_IMPORTED_MODULE_0__["safeGetStone"])(stones, stone.z, stone.x - 2, y);
        if (s) {
            nodes.left.push(s);
        }
        s = Object(_stone__WEBPACK_IMPORTED_MODULE_0__["safeGetStone"])(stones, stone.z, stone.x + 2, y);
        if (s) {
            nodes.right.push(s);
        }
        for (let x = stone.x - 1; x <= stone.x + 1; x++) {
            s = Object(_stone__WEBPACK_IMPORTED_MODULE_0__["safeGetStone"])(stones, stone.z + 1, x, y);
            if (s) {
                nodes.top.push(s);
            }
            s = Object(_stone__WEBPACK_IMPORTED_MODULE_0__["safeGetStone"])(stones, stone.z - 1, x, y);
            if (s) {
                nodes.bottom.push(s);
            }
        }
    }
    return nodes;
}
function fillStones(stones, tiles) {
    const groups = {};
    stones.forEach((stone) => {
        const tile = tiles.list[stone.v];
        stone.img = tile ? tile.img : { id: undefined };
        groups[stone.groupnr] = groups[stone.groupnr] || [];
        groups[stone.groupnr].push(stone);
        stone.nodes = collectNodes(stones, stone);
    });
    Object.keys(groups).forEach(key => {
        const group = groups[parseInt(key, 10)];
        group.forEach((stone) => {
            stone.group = group.filter((s) => s !== stone);
        });
    });
    return stones;
}
class LinearBoardBuilder {
    build(mapping, tiles) {
        const remainingTiles = tiles.list.filter((tile) => tile !== undefined);
        const stones = [];
        mapping.forEach((place) => {
            const tile = randomExtract(remainingTiles);
            const stone = new _stone__WEBPACK_IMPORTED_MODULE_0__["Stone"](place[0], place[1], place[2], tile.v, tile.groupnr);
            stones.push(stone);
        });
        fillStones(stones, tiles);
        return stones;
    }
}
class RandomBoardBuilder {
    build(mapping, tiles) {
        const remainingTiles = tiles.list.filter((tile) => tile !== undefined);
        const stones = [];
        const remainingPlaces = mapping.slice(0);
        while (remainingTiles.length > 0) {
            const tile = randomExtract(remainingTiles);
            const place = randomExtract(remainingPlaces);
            stones.push(new _stone__WEBPACK_IMPORTED_MODULE_0__["Stone"](place[0], place[1], place[2], tile.v, tile.groupnr));
        }
        fillStones(stones, tiles);
        return stones;
    }
}
class SolvableBoardBuilder {
    build(mapping, tiles) {
        const stones = [];
        mapping.forEach((st) => {
            stones.push(new _stone__WEBPACK_IMPORTED_MODULE_0__["Stone"](st[0], st[1], st[2], 0, 0));
        });
        fillStones(stones, tiles); // grouping will be repaired later
        let pairs = this.solve(stones, tiles);
        let runs = 1;
        while (pairs.length === 0 && runs < 100) {
            stones.forEach((stone) => {
                stone.picked = false;
                stone.v = 0;
                stone.groupnr = 0;
            });
            pairs = this.solve(stones, tiles);
            runs++;
        }
        stones.forEach((stone) => {
            stone.picked = false;
        });
        fillStones(stones, tiles); // repair grouping & images, etc
        stones.sort((a, b) => a.v - b.v);
        return stones;
    }
    solve(stones, tiles) {
        const pairs = [];
        const allpairs = [];
        tiles.groups.forEach(group => {
            const g = group.tiles.slice();
            const tile1 = randomExtract(g);
            const tile2 = randomExtract(g);
            const tile3 = randomExtract(g);
            const tile4 = g[0];
            allpairs.push([tile1, tile2]);
            allpairs.push([tile3, tile4]);
        });
        while (allpairs.length > 0) {
            const pair = randomExtract(allpairs);
            const freestones = stones.filter((stone) => !stone.picked && !stone.isBlocked());
            if (freestones.length < 2) {
                // not enough free places
                // this may happen if the last stones are directly on each other
                return [];
            }
            const place1 = randomExtract(freestones);
            const place2 = randomExtract(freestones);
            place1.v = pair[0].v;
            place1.img = pair[0].img;
            place1.groupnr = pair[0].groupnr;
            place1.picked = true;
            place2.v = pair[1].v;
            place2.img = pair[1].img;
            place2.groupnr = pair[1].groupnr;
            place2.picked = true;
            pairs.push(pair);
        }
        return pairs;
    }
}
class LoadBoardBuilder {
    build(mapping, tiles) {
        const stones = [];
        mapping.forEach((st) => {
            const tile = tiles.list[st[3]];
            if (tile) {
                const stone = new _stone__WEBPACK_IMPORTED_MODULE_0__["Stone"](st[0], st[1], st[2], st[3], tile.groupnr);
                stones.push(stone);
            }
        });
        fillStones(stones, tiles);
        return stones;
    }
}
const BuilderModes = [
    { id: 'MODE_SOLVABLE', builder: SolvableBoardBuilder },
    { id: 'MODE_LINEAR', builder: LinearBoardBuilder },
    { id: 'MODE_RANDOM', builder: RandomBoardBuilder }
];
class Builder {
    constructor() {
        this.tiles = new _tiles__WEBPACK_IMPORTED_MODULE_1__["Tiles"]();
        this.modes = BuilderModes;
    }
    build(mode, mapping) {
        let builder;
        if (mode === 'load') {
            builder = new LoadBoardBuilder();
        }
        else {
            const buildermode = BuilderModes.find(m => m.id === mode);
            if (buildermode) {
                builder = new buildermode.builder();
            }
        }
        if (builder) {
            return builder.build(mapping, this.tiles);
        }
        return;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => {
    console.error(err);
});


/***/ }),

/***/ "zY0Y":
/*!************************************************************************!*\
  !*** ./src/app/modules/defer-load/defer-load-scroll-host.directive.ts ***!
  \************************************************************************/
/*! exports provided: DeferLoadScrollHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadScrollHostDirective", function() { return DeferLoadScrollHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _defer_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defer-load.service */ "EMuv");




class DeferLoadScrollHostDirective {
    constructor(element, scrollNotify) {
        this.element = element;
        this.scrollNotify = scrollNotify;
    }
    ngOnChanges(changes) {
        if (changes.scrollTo && changes.scrollTo.currentValue) {
            const o = changes.scrollTo.currentValue;
            if (o.id && o.id.length > 0) {
                const elm = document.getElementById(o.id);
                if (elm) {
                    this.element.nativeElement.scrollTop = elm.offsetTop - elm.offsetHeight;
                }
            }
        }
    }
    scrollTrack(event) {
        this.scrollNotify.notifyScroll({ name: 'scroll-host', element: this.element.nativeElement });
    }
}
DeferLoadScrollHostDirective.ɵfac = function DeferLoadScrollHostDirective_Factory(t) { return new (t || DeferLoadScrollHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_defer_load_service__WEBPACK_IMPORTED_MODULE_1__["DeferLoadService"])); };
DeferLoadScrollHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeferLoadScrollHostDirective, selectors: [["", "appDeferLoadScrollHost", ""]], hostBindings: function DeferLoadScrollHostDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DeferLoadScrollHostDirective_scroll_HostBindingHandler($event) { return ctx.scrollTrack($event); });
    } }, inputs: { scrollTo: "scrollTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map