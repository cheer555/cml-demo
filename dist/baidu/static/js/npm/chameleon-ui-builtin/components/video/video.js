var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([84],{489:function(t,n,i){i(490),i(491)},490:function(t,n){},491:function(t,n,i){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function t(){e(this,t),this.props={controls:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},src:{type:String,default:""},cstyle:{type:String,default:""}},this.methods={onstart:function(t){this.$cmlEmit("start"),this.$cmlEmit("customstart")},onpause:function(t){this.$cmlEmit("pause"),this.$cmlEmit("custompause")},onfinish:function(t){this.$cmlEmit("finish"),this.$cmlEmit("customfinish")},onfail:function(t){this.$cmlEmit("fail"),this.$cmlEmit("customfail")}}};n.default=new a,n.default=s.default.createComponent(n.default).getOptions()}},[489]);