var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([35],{307:function(e,t,n){n(308),n(309)},308:function(e,t){},309:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(){function e(){i(this,e),this.data={actionShow:!1,mask:!0,list:["高铁","火车","飞机","打车","地铁"],active:-1,title:"出行方式",pickerStyle:!1},this.computed={},this.watch={},this.methods={showActionSheet:function(){this.pickerStyle=!1,this.actionShow=!0},showActionSheetActive:function(){this.pickerStyle=!1,this.actionShow=!0},showActionSheetPicker:function(){this.pickerStyle=!0,this.actionShow=!0},cancel:function(){this.actionShow=!1},select:function(e){this.actionShow=!1,this.active=+e.detail.index}}}return o(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){this.active=0}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new u,t.default=a.default.createPage(t.default).getOptions()}},[307]);