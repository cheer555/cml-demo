var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([76],{

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radiogroup = function () {
  function Radiogroup() {
    _classCallCheck(this, Radiogroup);

    this.props = {
      option: {
        type: Array,
        default: [{}]
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#fc9153'
      },
      cstyle: {
        type: String,
        default: ''
      },
      itemStyle: {
        type: String,
        default: ''
      }
    };
    this.data = {
      radioList: []
    };
    this.computed = {
      horizontalStyle: function horizontalStyle() {
        if (this.horizontal) {
          return 'display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;' + this.cstyle;
        }
        return this.cstyle;
      },
      subPosition: function subPosition() {
        // 水平排列默认位置失效
        if (this.position === 'right' && !this.horizontal) {
          return 'right';
        }
        return 'left';
      }
    };
    this.watch = {
      option: function option(n) {
        try {
          this.radioList = JSON.parse(JSON.stringify(n));
        } catch (e) {
          console.error('【c-radio-group】入参option有问题，', e);
        }
      }
    };
    this.methods = {
      valueChange: function valueChange(e) {
        this.radioList = this.radioList.map(function (item, index) {
          if (index == e.detail.index) {
            item.checked = true;
          } else {
            item.checked = false;
          }
          return item;
        });
        this.$cmlEmit('groupchange', {
          value: this.radioList,
          index: e.detail.index
        });
      }
    };
  }

  _createClass(Radiogroup, [{
    key: 'mounted',
    value: function mounted() {
      try {
        this.radioList = JSON.parse(JSON.stringify(this.option));
      } catch (e) {
        console.error('【c-radio-group】入参option有问题，', e);
      }
    }
  }]);

  return Radiogroup;
}();

exports.default = new Radiogroup();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml");
var __cml__script = __webpack_require__("../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../.nvm/versions/node/v10.3.0/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml");


/***/ })

},["./node_modules/cml-ui/components/c-radio-group/c-radio-group.cml"]);