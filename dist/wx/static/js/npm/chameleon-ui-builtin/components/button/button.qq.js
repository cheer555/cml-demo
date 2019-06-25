var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([110],{

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__("./node_modules/chameleon-ui-builtin/components/button/util.js");

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function Button() {
  _classCallCheck(this, Button);

  this.props = {
    text: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "auto"
    },
    width: {
      type: Number,
      default: -1
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    textStyleDisabled: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    btnHoverStyle: {
      type: String,
      default: ''
    },
    textHoverStyle: {
      type: String,
      default: ''
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.data = {
    hover: false
  };
  this.computed = {
    hasWidth: function hasWidth() {
      return this.width !== -1;
    },
    btnClasses: function btnClasses() {
      return (0, _util.transCls)('cml-view cml-btn', this);
    },
    textClasses: function textClasses() {
      return (0, _util.transCls)('btn-text', this);
    },
    mrBtnStyle: function mrBtnStyle() {
      var disabled = this.disabled,
          btnStyle = this.btnStyle,
          disabledStyle = this.disabledStyle,
          hover = this.hover,
          btnHoverStyle = this.btnHoverStyle,
          hasWidth = this.hasWidth,
          width = this.width;


      var style = disabled ? btnStyle + ";" + disabledStyle : hover ? btnStyle + ";" + btnHoverStyle : btnStyle;

      if (hasWidth) {
        style = "width:" + width + "cpx;" + style;
      }
      return style;
    },
    mrTextStyle: function mrTextStyle() {
      var disabled = this.disabled,
          textStyle = this.textStyle,
          textStyleDisabled = this.textStyleDisabled,
          hover = this.hover,
          textHoverStyle = this.textHoverStyle;

      return disabled ? textStyle + ";" + textStyleDisabled : hover ? textStyle + ";" + textHoverStyle : textStyle;
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;

      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    },
    touchstart: function touchstart(e) {
      this.hover = true;
    },
    touchend: function touchend(e) {
      this.hover = false;
    },
    getuserinfo: function getuserinfo(e) {
      this.$cmlEmit('getuserinfo', e.detail);
    },
    error: function error(e) {
      this.$cmlEmit('error', {
        errMsg: e.detail.errMsg
      });
    },
    opensetting: function opensetting(e) {
      this.$cmlEmit('opensetting');
    }
  };
};

exports.default = new Button();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/button/button.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.qq.cml");
var __cml__script = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/button/button.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/button/button.qq.cml"]);