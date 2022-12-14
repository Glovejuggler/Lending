(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SidebarMenuAkahon',
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      "default": true
    },
    menuTitle: {
      type: String,
      "default": 'Lending'
    },
    menuLogo: {
      type: String,
      "default": ''
    },
    menuIcon: {
      type: String,
      "default": 'bx-analyse'
    },
    isPaddingLeft: {
      type: Boolean,
      "default": true
    },
    menuOpenedPaddingLeftBody: {
      type: String,
      "default": '250px'
    },
    menuClosedPaddingLeftBody: {
      type: String,
      "default": '78px'
    },
    //! Menu items
    menuItems: {
      type: Array,
      "default": function _default() {
        return [{
          link: route('dashboard'),
          name: 'Dashboard',
          tooltip: 'Dashboard',
          icon: 'bx-grid-alt',
          parent: 'Dashboard',
          admin: false
        }, {
          link: route('lendees.index'),
          name: 'Lendees',
          tooltip: 'Lendees',
          icon: 'bx-user',
          parent: 'Lendees',
          admin: true
        }, {
          link: route('subsidiaries.index'),
          name: 'Subsidiaries',
          tooltip: 'Subsidiaries',
          icon: 'bx-hive',
          parent: 'Subsidiaries',
          admin: true
        }];
      }
    },
    //! Profile detailes
    profileImg: {
      type: String,
      "default": '/assets/img/photo.jpg'
    },
    profileName: {
      type: String,
      "default": 'Admin'
    },
    profileRole: {
      type: String,
      "default": 'Frontend vue developer'
    },
    isExitButton: {
      type: Boolean,
      "default": true
    },
    isLoggedIn: {
      type: Boolean,
      "default": true
    },
    //! Styles
    bgColor: {
      type: String,
      "default": 'rgb(17, 24, 39)'
    },
    secondaryColor: {
      type: String,
      "default": 'rgb(17, 24, 39)'
    },
    homeSectionColor: {
      type: String,
      "default": '#e4e9f7'
    },
    logoTitleColor: {
      type: String,
      "default": '#fff'
    },
    iconsColor: {
      type: String,
      "default": '#fff'
    },
    itemsTooltipColor: {
      type: String,
      "default": '#e4e9f7'
    },
    searchInputTextColor: {
      type: String,
      "default": '#fff'
    },
    menuItemsHoverColor: {
      type: String,
      "default": '#fff'
    },
    menuItemsTextColor: {
      type: String,
      "default": '#fff'
    },
    menuFooterTextColor: {
      type: String,
      "default": '#fff'
    }
  },
  data: function data() {
    var _window$innerWidth;

    return {
      isOpened: false,
      width: (_window$innerWidth = window.innerWidth) !== null && _window$innerWidth !== void 0 ? _window$innerWidth : screen.width
    };
  },
  mounted: function mounted() {
    var _window$innerWidth2;

    var width = (_window$innerWidth2 = window.innerWidth) !== null && _window$innerWidth2 !== void 0 ? _window$innerWidth2 : screen.width;
    this.isOpened = width > 768 ? this.isMenuOpen : this.isOpened;
    document.getElementById('main').style.paddingLeft = this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody;
    window.addEventListener("resize", this.beResponsive);
  },
  computed: {
    cssVars: function cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,
        '--menu-footer-text-color': this.menuFooterTextColor
      };
    }
  },
  watch: {
    isOpened: function isOpened() {
      document.getElementById('main').style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody;
    }
  },
  methods: {
    beResponsive: function beResponsive() {
      var _window$innerWidth3;

      this.width = (_window$innerWidth3 = window.innerWidth) !== null && _window$innerWidth3 !== void 0 ? _window$innerWidth3 : screen.width;

      if (this.width > 900) {
        this.isOpened = true;
      } else if (this.width > 768) {
        this.isOpened = false;
      } else {
        document.getElementById('main').style.paddingLeft = '0px';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Sidebar_menu_akahon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Sidebar-menu-akahon.vue */ "./resources/js/Components/Sidebar-menu-akahon.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SidebarMenuAkahon: _Components_Sidebar_menu_akahon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "logo-details",
  style: {
    "margin": "6px 14px 0 14px"
  }
};
var _hoisted_2 = ["src"];

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "logo_name"
}, " Lending ", -1
/* HOISTED */
);

var _hoisted_4 = {
  style: {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "flex-grow": "1",
    "max-height": "calc(100% - 60px)"
  }
};
var _hoisted_5 = {
  id: "my-scroll",
  style: {
    "margin": "6px 14px 0 14px"
  }
};
var _hoisted_6 = {
  "class": "nav-list",
  style: {
    "overflow": "visible"
  }
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  "class": "links_name"
};
var _hoisted_9 = {
  "class": "tooltip"
};
var _hoisted_10 = {
  key: 0,
  "class": "profile dark:bg-zinc-900"
};
var _hoisted_11 = {
  "class": "profile-details dark:bg-zinc-900 bg-gray-900"
};
var _hoisted_12 = {
  key: 0,
  src: "/images/photo.jpg",
  alt: "profileImg"
};
var _hoisted_13 = {
  key: 1,
  "class": "bx bxs-user-rectangle"
};
var _hoisted_14 = {
  "class": "name_job"
};
var _hoisted_15 = {
  "class": "name"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "job"
}, " Admin ", -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 0,
  "class": "dark:bg-zinc-900 bg-gray-900 bx bx-log-out",
  id: "log_out"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return $data.width > 768 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sidebar dark:bg-zinc-900", $data.isOpened ? 'open' : '']),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.cssVars)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.menuLogo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $props.menuLogo,
    alt: "menu-logo",
    "class": "menu-logo icon"
  }, null, 8
  /* PROPS */
  , _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx icon", $props.menuIcon])
  }, null, 2
  /* CLASS */
  )), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx", $data.isOpened ? 'bx-menu-alt-right' : 'bx-menu']),
    id: "btn",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.isOpened = !$data.isOpened;
    })
  }, null, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.menuItems, function (menuItem, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: index
    }, [(_ctx.$page.props.auth.is_admin ? 1 : _ctx.$page.props.auth.is_admin == menuItem.admin) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: menuItem.link,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'active': _ctx.$page.component.startsWith(menuItem.parent)
      }, "dark:bg-zinc-900"])
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx", menuItem.icon || 'bx-square-rounded'])
        }, null, 2
        /* CLASS */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(menuItem.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(menuItem.tooltip || menuItem.name), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), $props.isLoggedIn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$props.profileImg ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_12)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_13)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.name), 1
  /* TEXT */
  ), _hoisted_16])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    as: "button",
    href: _ctx.route('logout'),
    method: "post"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.isExitButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "dark"
};
var _hoisted_2 = {
  "class": "min-h-screen bg-gray-100 dark:bg-zinc-800",
  style: {
    "transition": "all 0.5s ease"
  }
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "md:hidden flex"
}, "Lamao", -1
/* HOISTED */
);

var _hoisted_4 = {
  id: "main"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SidebarMenuAkahon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SidebarMenuAkahon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SidebarMenuAkahon), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _Layouts_Authenticated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Layouts/Authenticated */ "./resources/js/Layouts/Authenticated.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _window$document$getE;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





var appName = ((_window$document$getE = window.document.getElementsByTagName('title')[0]) === null || _window$document$getE === void 0 ? void 0 : _window$document$getE.innerText) || 'Laravel';
(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(_title, " - ").concat(appName);
  },
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
      var page;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));

            case 2:
              page = _context.sent["default"];

              if (page.layout === undefined) {
                page.layout = _Layouts_Authenticated__WEBPACK_IMPORTED_MODULE_3__["default"];
              }

              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        app = _ref.app,
        props = _ref.props,
        plugin = _ref.plugin;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(app, props);
      }
    }).use(plugin).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__.InertiaProgress.init({
  delay: 250,
  color: '#4B5563',
  includeCSS: true,
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* Google Font Link */\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\n}\nmain {\r\n  transition: all 0.5s ease;\n}\n.menu-logo {\r\n  width: 30px;\r\n  margin: 0 10px 0 10px;\n}\n.sidebar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  min-height: -webkit-min-content;\r\n  min-height: -moz-min-content;\r\n  min-height: min-content;\r\n  /* overflow-y: auto; */\r\n  width: 78px;\r\n  background: var(--bg-color);\r\n  /* padding: 6px 14px 0 14px; */\r\n  z-index: 30;\r\n  transition: all 0.5s ease;\n}\n.sidebar.open {\r\n  width: 250px;\n}\n.sidebar .logo-details {\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\n}\n.sidebar .logo-details .icon {\r\n  opacity: 0;\r\n  transition: all 0.5s ease;\n}\n.sidebar .logo-details .logo_name {\r\n  color: var(--logo-title-color);\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  opacity: 0;\r\n  transition: all 0.5s ease;\n}\n.sidebar.open .logo-details .icon,\r\n.sidebar.open .logo-details .logo_name {\r\n  opacity: 1;\n}\n.sidebar .logo-details #btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  font-size: 22px;\r\n  transition: all 0.4s ease;\r\n  font-size: 23px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\n}\n.sidebar.open .logo-details #btn {\r\n  text-align: right;\n}\n.sidebar i {\r\n  color: var(--icons-color);\r\n  height: 60px;\r\n  min-width: 50px;\r\n  font-size: 28px;\r\n  text-align: center;\r\n  line-height: 60px;\n}\n.sidebar .nav-list {\r\n  margin-top: 20px;\r\n  /* margin-bottom: 60px; */\r\n  /* height: 100%; */\r\n  /* min-height: min-content; */\n}\n.sidebar li {\r\n  position: relative;\r\n  margin: 8px 0;\r\n  list-style: none;\n}\n.sidebar li .tooltip {\r\n  position: absolute;\r\n  top: -20px;\r\n  left: calc(100% + 15px);\r\n  z-index: 3;\r\n  background: var(--items-tooltip-color);\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\r\n  padding: 6px 12px;\r\n  border-radius: 4px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  opacity: 0;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  transition: 0s;\n}\n.sidebar li:hover .tooltip {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transition: all 0.4s ease;\r\n  top: 50%;\r\n  transform: translateY(-50%);\n}\n.sidebar.open li .tooltip {\r\n  display: none;\n}\n.sidebar input {\r\n  font-size: 15px;\r\n  color: var(--serach-input-text-color);\r\n  font-weight: 400;\r\n  outline: none;\r\n  height: 50px;\r\n  width: 100%;\r\n  width: 50px;\r\n  border: none;\r\n  border-radius: 12px;\r\n  transition: all 0.5s ease;\r\n  background: var(--secondary-color);\n}\n.sidebar li a {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  transition: all 0.4s ease;\r\n  background: var(--bg-color);\n}\n.sidebar li a.active {\r\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar li a:hover {\r\n  background: var(--menu-items-hover-color);\n}\n.sidebar li a .links_name {\r\n  color: var(--menu-items-text-color);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.4s;\n}\n.sidebar.open li a .links_name {\r\n  opacity: 1;\r\n  pointer-events: auto;\n}\n.sidebar li a:hover .links_name,\r\n.sidebar li a:hover i {\r\n  transition: all 0.5s ease;\r\n  color: var(--bg-color);\n}\n.sidebar li i {\r\n  height: 50px;\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  border-radius: 12px;\n}\n.sidebar div.profile {\r\n  position: relative;\r\n  height: 60px;\r\n  width: 78px;\r\n  /* left: 0;\r\n    bottom: 0; */\r\n  padding: 10px 14px;\r\n  /* background: var(--secondary-color); */\r\n  transition: all 0.5s ease;\r\n  overflow: hidden;\n}\n.sidebar.open div.profile {\r\n  width: 250px;\n}\n.sidebar div .profile-details {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\n}\n.sidebar div img {\r\n  height: 45px;\r\n  width: 45px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  border-radius: 6px;\r\n  margin-right: 10px;\n}\n.sidebar div.profile .name,\r\n.sidebar div.profile .job {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  color: var(--menu-footer-text-color);\r\n  white-space: nowrap;\n}\n.sidebar div.profile .job {\r\n  font-size: 12px;\n}\n.sidebar .profile #log_out {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  /* background: var(--secondary-color); */\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  border-radius: 0px;\r\n  transition: all 0.5s ease;\n}\n.sidebar.open .profile #log_out {\r\n  width: 50px;\r\n  /* background: var(--secondary-color); */\r\n  opacity: 0;\n}\n.sidebar.open .profile:hover #log_out {\r\n  opacity: 1;\n}\n.sidebar.open .profile #log_out:hover {\r\n  opacity: 1;\r\n  color: red;\n}\n.sidebar .profile #log_out:hover {\r\n  color: red;\n}\n.home-section {\r\n  position: relative;\r\n  background: var(--home-section-color);\r\n  min-height: 100vh;\r\n  top: 0;\r\n  left: 78px;\r\n  width: calc(100% - 78px);\r\n  transition: all 0.5s ease;\r\n  z-index: 2;\n}\n.sidebar.open~.home-section {\r\n  left: 250px;\r\n  width: calc(100% - 250px);\n}\n.home-section .text {\r\n  display: inline-block;\r\n  color: var(--bg-color);\r\n  font-size: 25px;\r\n  font-weight: 500;\r\n  margin: 18px;\n}\n.my-scroll-active {\r\n  overflow-y: auto;\n}\n#my-scroll {\r\n  overflow-y: auto;\r\n  height: calc(100% - 60px);\n}\n#my-scroll::-webkit-scrollbar {\r\n  display: none;\r\n  /* background-color: rgba(255, 255, 255, 0.2); \r\n    width: 10px;\r\n    border-radius:5px  */\n}\r\n\r\n/* #my-scroll::-webkit-scrollbar-thumb{\r\n    background-color: red;\r\n    border-radius:5px \r\n  }\r\n  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{\r\n    display:none;\r\n  }\r\n  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{\r\n    display:none;\r\n  } */\n@media (max-width: 420px) {\n.sidebar li .tooltip {\r\n    display: none;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_style_index_0_id_070cc39c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_style_index_0_id_070cc39c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_style_index_0_id_070cc39c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/Sidebar-menu-akahon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Sidebar-menu-akahon.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_menu_akahon_vue_vue_type_template_id_070cc39c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c */ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c");
/* harmony import */ var _Sidebar_menu_akahon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar-menu-akahon.vue?vue&type=script&lang=js */ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js");
/* harmony import */ var _Sidebar_menu_akahon_vue_vue_type_style_index_0_id_070cc39c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css */ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css");
/* harmony import */ var C_Users_Glovejuggler_Desktop_Web_Development_Side_Projects_LaravelSPA_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_Glovejuggler_Desktop_Web_Development_Side_Projects_LaravelSPA_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Sidebar_menu_akahon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_menu_akahon_vue_vue_type_template_id_070cc39c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Sidebar-menu-akahon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/Authenticated.vue":
/*!************************************************!*\
  !*** ./resources/js/Layouts/Authenticated.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Authenticated_vue_vue_type_template_id_7412da4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authenticated.vue?vue&type=template&id=7412da4a */ "./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a");
/* harmony import */ var _Authenticated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authenticated.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Glovejuggler_Desktop_Web_Development_Side_Projects_LaravelSPA_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Glovejuggler_Desktop_Web_Development_Side_Projects_LaravelSPA_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Authenticated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Authenticated_vue_vue_type_template_id_7412da4a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/Authenticated.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar-menu-akahon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authenticated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authenticated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Authenticated.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_template_id_070cc39c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_template_id_070cc39c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=template&id=070cc39c");


/***/ }),

/***/ "./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a":
/*!******************************************************************************!*\
  !*** ./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authenticated_vue_vue_type_template_id_7412da4a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authenticated_vue_vue_type_template_id_7412da4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Authenticated.vue?vue&type=template&id=7412da4a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Authenticated.vue?vue&type=template&id=7412da4a");


/***/ }),

/***/ "./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_menu_akahon_vue_vue_type_style_index_0_id_070cc39c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar-menu-akahon.vue?vue&type=style&index=0&id=070cc39c&lang=css");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*\.vue$ namespace object ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/ConfirmPassword.vue": [
		"./resources/js/Pages/Auth/ConfirmPassword.vue",
		"resources_js_Pages_Auth_ConfirmPassword_vue"
	],
	"./Auth/ForgotPassword.vue": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/ResetPassword.vue": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/VerifyEmail.vue": [
		"./resources/js/Pages/Auth/VerifyEmail.vue",
		"resources_js_Pages_Auth_VerifyEmail_vue"
	],
	"./Dashboard.vue": [
		"./resources/js/Pages/Dashboard.vue",
		"resources_js_Pages_Dashboard_vue"
	],
	"./Home.vue": [
		"./resources/js/Pages/Home.vue",
		"resources_js_Pages_Home_vue"
	],
	"./Lendees/Create.vue": [
		"./resources/js/Pages/Lendees/Create.vue",
		"resources_js_Pages_Lendees_Create_vue"
	],
	"./Lendees/Edit.vue": [
		"./resources/js/Pages/Lendees/Edit.vue",
		"resources_js_Pages_Lendees_Edit_vue"
	],
	"./Lendees/Index.vue": [
		"./resources/js/Pages/Lendees/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Lendees_Index_vue"
	],
	"./Lendees/Show.vue": [
		"./resources/js/Pages/Lendees/Show.vue",
		"/js/vendor",
		"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Lendees_Show_vue"
	],
	"./Lendees/View.vue": [
		"./resources/js/Pages/Lendees/View.vue",
		"/js/vendor",
		"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Lendees_View_vue"
	],
	"./Loan/Create.vue": [
		"./resources/js/Pages/Loan/Create.vue",
		"resources_js_Pages_Loan_Create_vue"
	],
	"./Loan/Edit.vue": [
		"./resources/js/Pages/Loan/Edit.vue",
		"resources_js_Pages_Loan_Edit_vue"
	],
	"./Payment/Edit.vue": [
		"./resources/js/Pages/Payment/Edit.vue",
		"/js/vendor",
		"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Payment_Edit_vue"
	],
	"./Subsidiaries/Index.vue": [
		"./resources/js/Pages/Subsidiaries/Index.vue",
		"resources_js_Pages_Subsidiaries_Index_vue"
	],
	"./Subsidiaries/Show.vue": [
		"./resources/js/Pages/Subsidiaries/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Subsidiaries_Show_vue"
	],
	"./Welcome.vue": [
		"./resources/js/Pages/Welcome.vue",
		"resources_js_Pages_Welcome_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);