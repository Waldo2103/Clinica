(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-6 text-center\">\n              <img src=\"./assets/img/brand/argon-white.png\" style=\"width: 200px;\" class=\"img-fluid\">\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\n              <div class=\"btn-wrapper mt-5\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                  <span class=\"btn-inner--text\">Download Angular</span>\n                </a>\n                <a href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-index-header\" class=\"btn btn-lg btn-github btn-icon mb-3 mb-sm-0\" target=\"_blank\">\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-github\"></i></span>\n                  <span class=\"btn-inner--text\">\n                    <span class=\"text-warning\">Star us</span> on Github</span>\n                </a>\n              </div>\n              <div class=\"mt-5\">\n                <small class=\"text-white font-weight-bold mb-0 mr-2\">*proudly coded by</small>\n                <img src=\"./assets/img/brand/creativetim-white-slim.png\" style=\"height: 28px;\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n  </div>\n  <app-sections></app-sections>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <!--div class=\"text-muted text-center mb-3\">\n                <small>Sign in with</small>\n              </div>\n              <div class=\"btn-wrapper text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign in with credentials</small>\n              </div-->\n              <form role=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitLogin()\">\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Email\" formControlName=\"mail\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\" required>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Contraseña\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" formControlName=\"password\" required>\n                  </div>\n                </div>\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                    <span>Recuerdame</span>\n                  </label>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary my-4\" type=\"submit\" [disabled]=\"!form.valid\">Ingresar</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-6\">\n              <a href=\"javascript:void(0)\" class=\"text-light\">\n                <small>Olvidaste tu contraseña? Jodete</small>\n              </a>\n            </div>\n            <div class=\"col-6 text-right\">\n              <a href=\"/registro\" ruoterLink=\"/registro\" class=\"text-light\">\n                <small>Registrate</small>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/signup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/signup.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n              <!--div class=\"text-muted text-center mb-3\">\n                <small>Sign up with</small>\n              </div>\n              <div class=\"text-center\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/github.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Github</span>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                  <span class=\"btn-inner--icon\">\n                    <img src=\"./assets/img/icons/common/google.svg\">\n                  </span>\n                  <span class=\"btn-inner--text\">Google</span>\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Or sign up with credentials</small>\n              </div-->\n              <form role=\"form\">\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Correo\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Clave\" type=\"password\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Confirmar Clave\" type=\"password\" (focus)=\"focus3=true\" (blur)=\"focus3=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Nombre\" type=\"text\" (focus)=\"focus4=true\" (blur)=\"focus4=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Apellido\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus6===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"DNI\" type=\"number\" (focus)=\"focus6=true\" (blur)=\"focus6=false\">\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus7===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-image\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Fotos\" type=\"file\" (focus)=\"focus7=true\" (blur)=\"focus7=false\">\n                  </div>\n                </div>\n                <mat-form-field>\n                  <ngx-mat-file-input class=\"form-control\" placeholder=\"Multiple inputs\" multiple></ngx-mat-file-input>\n                  <mat-icon matSuffix>folder</mat-icon>\n                </mat-form-field>\n                <!--div class=\"input-group mb-3\">\n\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\" multiple formControlName=\"importFile\" id=\"importFile\" (change)=\"onFileChange($event.target.files)\">\n                    <label class=\"custom-file-label\" #labelImport for=\"importFile\"><i class=\"ni ni-image\"></i> Elige foto</label>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"import()\"><i class=\"fas fa-file-import\"></i> Importer\n                  </button>\n                </div-->\n                <!--div class=\"text-muted font-italic\">\n                  <small>password strength:\n                    <span class=\"text-success font-weight-700\">strong</span>\n                  </small>\n                </div-->\n                <div class=\"row my-4\">\n                  <div class=\"col-12\">\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                        <span>I agree with the\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\n                        </span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\"container py-lg-md d-flex\">\n        <div class=\"col px-0\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <h1 class=\"display-3  text-white\">A beautiful Design System\n                <span>completed with examples</span>\n              </h1>\n              <p class=\"lead  text-white\">The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n              <div class=\"btn-wrapper\">\n                <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-landing-page\" class=\"btn btn-info btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-code\"></i></span>\n                  <span class=\"btn-inner--text\">Components</span>\n                </a>\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-white btn-icon mb-3 mb-sm-0\">\n                  <span class=\"btn-inner--icon\"><i class=\"ni ni-cloud-download-95\"></i></span>\n                  <span class=\"btn-inner--text\">Download Angular</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div>\n  <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">business</span>\n                    <span class=\"badge badge-pill badge-success\">vision</span>\n                    <span class=\"badge badge-pill badge-success\">success</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\n                    <span class=\"badge badge-pill badge-warning\">product</span>\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"./assets/img/theme/promo-1.png\" class=\"img-fluid floating\">\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\n              <i class=\"ni ni-settings-gear-65\"></i>\n            </div>\n            <h3>Awesome features</h3>\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Carefully crafted components</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-html5\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Amazing page examples</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div>\n                    <h6 class=\"mb-0\">Super friendly support team</h6>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section bg-secondary\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <div class=\"card bg-default shadow border-0\">\n            <img src=\"./assets/img/theme/img-1-1200x1000.jpg\" class=\"card-img-top\">\n            <blockquote class=\"card-blockquote\">\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\n              </svg>\n              <h4 class=\"display-3 font-weight-bold text-white\">Design System</h4>\n              <p class=\"lead text-italic text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</p>\n            </blockquote>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pl-md-5\">\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\n              <i class=\"ni ni-settings\"></i>\n            </div>\n            <h3>Our customers</h3>\n            <p class=\"lead\">Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-warning mt-5\">A beautiful UI Kit for impactful websites</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section pb-0 bg-gradient-warning\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\n          <div class=\"position-relative pl-md-5\">\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\n          </div>\n        </div>\n        <div class=\"col-lg-6 order-lg-1\">\n          <div class=\"d-flex px-3\">\n            <div>\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                <i class=\"ni ni-building text-primary\"></i>\n              </div>\n            </div>\n            <div class=\"pl-4\">\n              <h4 class=\"display-3 text-white\">Modern Interface</h4>\n              <p class=\"text-white\">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n            </div>\n          </div>\n          <div class=\"card shadow shadow-lg--hover mt-5\">\n            <div class=\"card-body\">\n              <div class=\"d-flex px-3\">\n                <div>\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                    <i class=\"ni ni-satisfied\"></i>\n                  </div>\n                </div>\n                <div class=\"pl-4\">\n                  <h5 class=\"title text-success\">Awesome Support</h5>\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                  <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card shadow shadow-lg--hover mt-5\">\n            <div class=\"card-body\">\n              <div class=\"d-flex px-3\">\n                <div>\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                    <i class=\"ni ni-active-40\"></i>\n                  </div>\n                </div>\n                <div class=\"pl-4\">\n                  <h5 class=\"title text-warning\">Modular Components</h5>\n                  <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center mb-lg\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">The amazing Team</h2>\n          <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Ryan Tompson</span>\n                <small class=\"h6 text-muted\">Web Developer</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Romina Hadid</span>\n                <small class=\"h6 text-muted\">Marketing Strategist</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">Alexander Smith</span>\n                <small class=\"h6 text-muted\">UI/UX Designer</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-info btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\">\n          <div class=\"px-4\">\n            <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\" style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">John Doe</span>\n                <small class=\"h6 text-muted\">Founder and CEO</small>\n              </h5>\n              <div class=\"mt-3\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-success btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-dribbble\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-0\">\n    <div class=\"container\">\n      <div class=\"card bg-gradient-warning shadow-lg border-0\">\n        <div class=\"p-5\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-lg-8\">\n              <h3 class=\"text-white\">We made website building easier for you.</h3>\n              <p class=\"lead text-white mt-3\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>\n            </div>\n            <div class=\"col-lg-3 ml-lg-auto\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-lg btn-block btn-white\">Download Angular</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg bg-gradient-default\">\n    <div class=\"container pt-lg pb-300\">\n      <div class=\"row text-center justify-content-center\">\n        <div class=\"col-lg-10\">\n          <h2 class=\"display-3 text-white\">Build something</h2>\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\n        </div>\n      </div>\n      <div class=\"row row-grid mt-5\">\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-settings text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Building tools</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-atom text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Launch time</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 section-contact-us\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center mt--300\">\n        <div class=\"col-lg-8\">\n          <div class=\"card bg-gradient-secondary shadow\">\n            <div class=\"card-body p-lg-5\">\n              <h4 class=\"mb-1\">Want to work with us?</h4>\n              <p class=\"mt-0\">Your project is very important to us.</p>\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                </div>\n              </div>\n              <div class=\"form-group mb-4\">\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Do you love this awesome\n            <span class=\"text-success\">Design System for Angular?</span>\n          </h2>\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n          <div class=\"btn-wrapper\">\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"profile-page\">\n  <section class=\"section-profile-cover section-shaped my-0\">\n    <!-- Circles background -->\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"card card-profile shadow mt--300\">\n        <div class=\"px-4\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-3 order-lg-2\">\n              <div class=\"card-profile-image\">\n                <a href=\"javascript:void(0)\">\n                  <img src=\"./assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 order-lg-3 text-lg-right align-self-lg-center\">\n              <div class=\"card-profile-actions py-4 mt-lg-0\">\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\n              </div>\n            </div>\n            <div class=\"col-lg-4 order-lg-1\">\n              <div class=\"card-profile-stats d-flex justify-content-center\">\n                <div>\n                  <span class=\"heading\">22</span>\n                  <span class=\"description\">Friends</span>\n                </div>\n                <div>\n                  <span class=\"heading\">10</span>\n                  <span class=\"description\">Photos</span>\n                </div>\n                <div>\n                  <span class=\"heading\">89</span>\n                  <span class=\"description\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center mt-5\">\n            <h3>Jessica Jones\n              <span class=\"font-weight-light\">, 27</span>\n            </h3>\n            <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Bucharest, Romania</div>\n            <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer</div>\n            <div><i class=\"ni education_hat mr-2\"></i>University of Computer Science</div>\n          </div>\n          <div class=\"mt-5 py-5 border-top text-center\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-9\">\n                <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>\n                <a href=\"javascript:void(0)\">Show more</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/registro' && getPath()!=='/login'}\">\n  <div class=\"container container-lg\" *ngIf=\"getPath()!=='/user-profile' && getPath()!=='/registro' && getPath()!=='/login'\">\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-5 mb-md-0\">\n        <div class=\"card card-lift--hover shadow border-0\">\n          <a [routerLink]=\"['/landing']\" title=\"Landing Page\">\n            <img src=\"./assets/img/theme/landing.jpg\" class=\"card-img\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-5 mb-lg-0\">\n        <div class=\"card card-lift--hover shadow border-0\">\n          <a [routerLink]=\"['/user-profile']\" title=\"Profile Page\">\n            <img src=\"./assets/img/theme/profile.jpg\" class=\"card-img\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/registro' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/registro' || getPath()==='/login'}\">\n      <div class=\"col-lg-6\">\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\n      </div>\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\n          <i class=\"fa fa-facebook-square\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\n          <i class=\"fa fa-dribbble\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright\">\n          &copy; {{test | date: 'yyyy'}}\n          <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Creative Tim</a>.\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-footer justify-content-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\n      <img src=\"./assets/img/brand/argon-white.png\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/home']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\n            <span class=\"nav-link-inner--text\">Components</span>\n          </a>\n          <div class=\"dropdown-menu-xl dropdown-menu\" >\n            <div class=\"dropdown-menu-inner\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\n                  <i class=\"ni ni-spaceship\"></i>\n                </div>\n                <div class=\"media-body ml-3\">\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\n                </div>\n              </a>\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                  <i class=\"ni ni-palette\"></i>\n                </div>\n                <div class=\"media-body ml-3\">\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\n                </div>\n              </a>\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                  <i class=\"ni ni-ui-04\"></i>\n                </div>\n                <div class=\"media-body ml-3\">\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\n                </div>\n              </a>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-collection d-lg-none\"></i>\n            <span class=\"nav-link-inner--text\">Examples</span>\n          </a>\n          <div class=\"dropdown-menu\">\n            <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">Landing</a>\n            <a [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">Profile</a>\n            <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Login</a>\n            <a [routerLink]=\"['/registro']\" class=\"dropdown-item\">Register</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.facebook.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Like us on Facebook\">\n            <i class=\"fa fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://www.instagram.com/creativetimofficial\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\">\n            <i class=\"fa fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://twitter.com/creativetim\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Twitter\">\n            <i class=\"fa fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://github.com/creativetimofficial/argon-design-system-angular?ref=adsa-navbar\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Star us on Github\">\n            <i class=\"fa fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a href=\"\" class=\"btn btn-neutral btn-icon\">\n            <span class=\"btn-inner--icon\">\n              <i class=\"fa fa-sign-out mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\" (click)=\"desconectar()\">Desconectar</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_registro_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/registro/signup.component */ "./src/app/componentes/registro/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _componentes_home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/home/home.module */ "./src/app/componentes/home/home.module.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import { AngularFireModule } from 'angularfire2';




















//, , , 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _componentes_registro_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _componentes_home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                //AngularFireAuth,
                //AngularFirestore,
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["firebaseConfig"]),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"]
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuth"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/home/home.component */ "./src/app/componentes/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _componentes_registro_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/registro/signup.component */ "./src/app/componentes/registro/signup.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _guards_nologin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/nologin.guard */ "./src/app/guards/nologin.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var routes = [
    { path: 'home', component: _componentes_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'perfil', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'registro', component: _componentes_registro_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'navbar', component: _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], canActivate: [_guards_nologin_guard__WEBPACK_IMPORTED_MODULE_8__["NologinGuard"]], data: { animation: 'LoginPage' } },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/componentes/home/home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/componentes/home/home.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/componentes/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/home/home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/componentes/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/componentes/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import { SectionsModule } from '../sections/sections.module';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




//import { Roles } from '../../clases/roles.enum';
//import { ResultadosService } from '../../servicios/resultados/resultados.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route, router, formBuilder //, private resulService: ResultadosService
    ) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.enLogin = true;
        //rolesEnum = Roles;
        this.userbtn = "";
        this.passbtn = "";
        this.validation_messages = {
            'mail': [
                { type: 'required', message: 'Debe ingresar un email.' },
                { type: 'email', message: 'Debe ingresar un email válido.' }
            ],
            'password': [
                { type: 'required', message: 'Debe ingresar una contraseña.' }
            ]
        };
        this.form = this.formBuilder.group({
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.completarUser = function (user) {
        if (user == 1) {
            this.userbtn = "cvega@cvega.com";
            this.passbtn = "cvega1";
            //this.form.valid = true
            //this.form.get('mail').value ="";
        }
        else if (user == 2) {
            this.userbtn = "admin@admin.com";
            this.passbtn = "admin1";
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ocultarNavBar = function () {
    };
    LoginComponent.prototype.loguear = function (user) {
        // this.resulService.createLog(user);
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.userbtn = this.form.get('mail').value;
        this.passbtn = this.form.get('password').value;
        this.authService.login(this.userbtn, this.passbtn)
            .then(function (res) {
            var f = new Date;
            var fec = f.getDate() + "/" + f.getMonth() + "/" + f.getUTCFullYear() + " - " + f.getUTCHours() + ":" + f.getUTCMinutes() + ":" + f.getUTCSeconds();
            var data = { email: _this.userbtn, fec: fec };
            _this.loguear(data);
            localStorage.setItem("email", _this.userbtn);
            _this.router.navigate(['/Juegos']);
        })
            .catch(function (error) {
            document.getElementById('btnModal').click();
            if (error.code === 'auth/user-not-found') {
                _this.modalText = "Usuario no encontrado!";
                //this.toastService.error('Usuario no encontrado.');
            }
            else if (error.code === 'auth/wrong-password') {
                _this.modalText = "Contraseña incorrecta.";
                //this.toastService.error('Contraseña incorrecta.');
            }
            else {
                _this.modalText = "Ocurrió un error con el servidor";
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] //, private resulService: ResultadosService
         }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] //, private resulService: ResultadosService
        ])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/registro/signup.component.scss":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/signup.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/registro/signup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/registro/signup.component.ts ***!
  \**********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/componentes/registro/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(auth)) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/nologin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/nologin.guard.ts ***!
  \*****************************************/
/*! exports provided: NologinGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NologinGuard", function() { return NologinGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NologinGuard = /** @class */ (function () {
    function NologinGuard(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    NologinGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(auth)) {
                return true;
            }
            else {
                _this.router.navigate(['/home']);
                return false;
            }
        }));
    };
    NologinGuard.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NologinGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NologinGuard);
    return NologinGuard;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/servicios/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import 'rxjs/add/operator/map';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.registeruser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.login = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    //Obtiene los datos del usuario en caso de que esté logueado. 
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(function (auth) { return auth; });
    };
    AuthService.prototype.updateProfile = function (newName, photoURL) {
        return this.afAuth.auth.currentUser.updateProfile({
            displayName: newName,
            photoURL: photoURL
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth/auth.service */ "./src/app/servicios/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router, auth) {
        this.location = location;
        this.router = router;
        this.auth = auth;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.desconectar = function () {
        this.auth.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_servicios_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
var firebaseConfig = {
    apiKey: "AIzaSyA8-vOd4kEkP9VvldBG8hlPmUNM9QGG7eo",
    authDomain: "clinica-4494b.firebaseapp.com",
    databaseURL: "https://clinica-4494b.firebaseio.com",
    projectId: "clinica-4494b",
    storageBucket: "clinica-4494b.appspot.com",
    messagingSenderId: "340157278315",
    appId: "1:340157278315:web:9126d8179f30d679b5692e"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Argon Design System Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Waldo\LABO4-ANG\Clinica\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map