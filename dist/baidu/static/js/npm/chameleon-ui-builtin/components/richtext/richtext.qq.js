var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([91],{

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _richHandle = __webpack_require__("./node_modules/chameleon-ui-builtin/components/richtext/richHandle.js");

var _richHandle2 = _interopRequireDefault(_richHandle);

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Richtext = function Richtext() {
  _classCallCheck(this, Richtext);

  this.props = {
    richData: {
      type: Object,
      default: {
        message: '',
        rich_message: [{
          color: '',
          font_size: 0,
          start: 0,
          end: 0
        }]
      }
    }
  };
  this.computed = {
    richList: function richList() {
      var richList = (0, _richHandle2.default)(this.richData);
      richList = richList.map(function (item) {
        if (item.color && item.font_size) {
          item.style = 'color:' + item.color + ';font-size:' + item.font_size + 'cpx;';
        } else {
          item.style = '';
        }
        return item;
      });
      return richList;
    }
  };
};

exports.default = new Richtext();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml");
var __cml__script = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/richtext/richtext.qq.cml"]);