var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([21],{477:function(t,e,n){n(478),n(479)},478:function(t,e){},479:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(480),i=r(a),s=n(0),f=r(s),u=function t(){o(this,t),this.props={richData:{type:Object,default:{message:"",rich_message:[{color:"",font_size:0,start:0,end:0}]}}},this.computed={richList:function(){var t=(0,i.default)(this.richData);return t=t.map(function(t){return t.color&&t.font_size?t.style="color:"+t.color+";font-size:"+t.font_size+"cpx;":t.style="",t})}}};e.default=new u,e.default=f.default.createComponent(e.default).getOptions()},480:function(t,e){function n(t){var e=t.rich_message,n=t.message.split("");n=n.map(function(t){return{text:t,index:-1}}),e=e.filter(function(t){var e=t.start,n=t.end;return e=parseInt(e,10),n=parseInt(n,10),!isNaN(e)&&!isNaN(n)&&e<=n}),e.forEach(function(t,e){var r=t.start,o=t.end;r=parseInt(r,10),o=parseInt(o,10),r=r<0?0:r,o=o>n.length-1?n.length-1:o;for(var a=r;a<=o;a++)n[a].index=e});for(var r=0,o=n.length,a=[];r<o;){for(var i=r,s=n[i].index,f=-1===s?null:e[s],u={font_size:f&&f.font_size,color:f&&f.color,text:""};i<o&&n[i].index===s;i++)u.text+=n[i].text;a.push(u),r=i}return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}},[477]);