var __CML__GLOBAL=require("../../../../../manifest.js");__CML__GLOBAL.webpackJsonp([23],{360:function(e,t,c){c(361),c(362)},361:function(e,t){},362:function(e,t,c){function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=c(5),l=i(o),a=c(10),h=i(a),r=function(){function e(e,t){for(var c=0;c<t.length;c++){var i=t[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,c,i){return c&&e(t.prototype,c),i&&e(t,i),t}}(),u=c(13),d=i(u),p=c(0),s=i(p),f=((0,h.default)(),c(44)),x=function(){function e(){n(this,e),this.data={title:"chameleon",scrollHeight:-1,animationData:{},num:1,currentCom:"home",selectedIndex:0,tabbar:{tabbarStyle:"height:120cpx;",textStyle:"font-size: 24cpx",selectedTextStyle:"font-size: 24cpx;color:#61c7fc;",list:[{compName:"home",text:"首页",icon:f,iconStyle:"width:40cpx;height:40cpx;",selectedIconStyle:"width:45cpx;height:45cpx;"},{compName:"classify",text:"分类",icon:f,iconStyle:"width:40cpx;height:40cpx;",selectedIconStyle:"width:45cpx;height:45cpx;"},{compName:"topic",text:"识物",icon:f,iconStyle:"width:40cpx;height:40cpx;",selectedIconStyle:"width:45cpx;height:45cpx;"},{compName:"shop",text:"购物车",icon:f,iconStyle:"width:40cpx;height:40cpx;",selectedIconStyle:"width:45cpx;height:45cpx;"},{compName:"my",text:"个人",icon:f,iconStyle:"width:40cpx;height:40cpx;",selectedIconStyle:"width:45cpx;height:45cpx;"}]}},this.methods={handleTabbarClick:function(e){this.selectedIndex=e.detail.index}}}return r(e,[{key:"created",value:function(){var e=d.default.data,t=e.special,c=e.disscountPriceImgUrl;this.special=t,this.disscountPriceImgUrl=c}},{key:"mounted",value:function(){var e=this;(0,l.default)().then(function(t){"weex"==t.env?e.scrollHeight=Number(t.viewportHeight)-100-88:e.scrollHeight=Number(t.viewportHeight)-100})}}]),e}();t.default=new x,t.default=s.default.createPage(t.default).getOptions()}},[360]);