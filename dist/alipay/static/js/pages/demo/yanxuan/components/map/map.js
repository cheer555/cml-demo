var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([55],{420:function(e,t,n){n(421),n(422)},421:function(e,t){},422:function(e,t,n){function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(41),r=u(a),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),f=n(0),l=u(f),c=function(){function e(){o(this,e),this.props={name:{type:String,default:"默认值"}},this.data={longitude:"",latitude:"",markers:[],mapCtx:null},this.computed={},this.watch={},this.methods={}}return i(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){var e=this;(0,r.default)().then(function(t){e.latitude=t.lat,e.longitude=t.lng})}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new c,t.default=l.default.createComponent(t.default).getOptions()}},[420]);