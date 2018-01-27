webpackJsonp([24],{"9PVp":function(t,s,e){"use strict";function n(t){e("i2cC")}Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),i=e.n(a),o=e("Au9i"),c=e("SJI6"),r={name:"accountLink",data:function(){return{userObj:{}}},computed:i()({},Object(c.mapGetters)(["userInfo"])),methods:i()({getInfo:function(){var t=this;this.$ajax.post("/api/buyerAccount/refresh",{telephone:this.userInfo.telephone}).then(function(s){"200"===s.data.code?(t.userObj=s.data.data,t.setUserInfo(s.data.data)):Object(o.Toast)({message:s.data.message,position:"bottom"})}).catch(function(t){console.error(t)})},toBindJd:function(t){1===t?this.$router.push({name:"bindJdAccount",query:{buyerAccountId:this.userInfo.buyerUserAccountId,returnBack:1}}):this.$router.push({name:"bindJdAccount",query:{buyerAccountId:this.userInfo.buyerUserAccountId,login:1}})},toBindTb:function(t){1===t?this.$router.push({name:"bindTbAccount",query:{buyerAccountId:this.userInfo.buyerUserAccountId,returnBack:1}}):this.$router.push({name:"bindTbAccount",query:{buyerAccountId:this.userInfo.buyerUserAccountId,login:1}})},toBindCard:function(){this.$router.push({name:"bindCard",query:{buyerAccountId:this.userInfo.buyerUserAccountId}})},toBindAddress:function(){this.$router.push({name:"bindAddress",query:{buyerAccountId:this.userInfo.buyerUserAccountId}})}},Object(c.mapActions)(["setUserInfo"])),mounted:function(){this.getInfo()}},l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"accountLink"},[e("li",{directives:[{name:"show",rawName:"v-show",value:!t.$route.query.getMore,expression:"!$route.query.getMore"}],staticClass:"border-bottom-1px"},[0==t.userObj.isAddManagerWechat?e("mt-cell",{staticClass:"title",attrs:{title:"加微信好友","is-link":"",to:"addWechat"}},[e("span",{staticClass:"contText"},[t._v("未加好友")])]):t._e(),t._v(" "),1==t.userObj.isAddManagerWechat?e("mt-cell",{staticClass:"title",attrs:{title:"加微信好友"}},[e("span",{staticClass:"contText Asuccess"},[t._v("已加好友")])]):t._e()],1),t._v(" "),e("li",{staticClass:"border-bottom-1px"},[2==t.userObj.isTaobaoPassCheck?e("mt-cell",{staticClass:"title"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定淘宝买号："+t._s(t.userObj.taobaoWangNickName))]),t._v(" "),e("span",{staticClass:"contText Awaiting"},[t._v("审核中")])]):t._e(),t._v(" "),3==t.userObj.isTaobaoPassCheck?e("div",{on:{click:function(s){t.toBindTb(1)}}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定淘宝买号："+t._s(t.userObj.taobaoWangNickName))]),t._v(" "),e("span",{staticClass:"contText Aerror"},[t._v("未通过审核")])])],1):t._e(),t._v(" "),1==t.userObj.isTaobaoPassCheck?e("mt-cell",{staticClass:"title"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定淘宝买号："+t._s(t.userObj.taobaoWangNickName))]),t._v(" "),e("span",{staticClass:"contText Asuccess"},[t._v("已通过审核")])]):t._e(),t._v(" "),0!=t.userObj.isTaobaoPassCheck&&t.userObj.isTaobaoPassCheck?t._e():e("div",{on:{click:t.toBindTb}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定淘宝买号")]),t._v(" "),e("span",{staticClass:"contText"},[t._v("未绑定")])])],1)],1),t._v(" "),e("li",{staticClass:"border-bottom-1px"},[0==t.userObj.isJdPassCheck?e("div",{on:{click:t.toBindJd}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号")]),t._v(" "),e("span",{staticClass:"contText"},[t._v("未绑定")])])],1):t._e(),t._v(" "),2==t.userObj.isJdPassCheck?e("mt-cell",{staticClass:"title"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),e("span",{staticClass:"contText Awaiting"},[t._v("审核中")])]):t._e(),t._v(" "),3==t.userObj.isJdPassCheck?e("div",{on:{click:function(s){t.toBindJd(1)}}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),e("span",{staticClass:"contText Aerror"},[t._v("未通过审核")])])],1):t._e(),t._v(" "),1==t.userObj.isJdPassCheck?e("mt-cell",{staticClass:"title"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),e("span",{staticClass:"contText Asuccess"},[t._v("已通过审核")])]):t._e()],1),t._v(" "),e("li",{staticClass:"border-bottom-1px"},[t.userObj.bankCardNo?t._e():e("div",{on:{click:t.toBindCard}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定银行卡")]),t._v(" "),e("span",{staticClass:"contText"},[t._v("未绑定")])])],1),t._v(" "),t.userObj.bankCardNo?e("div",{on:{click:t.toBindCard}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定银行卡")]),t._v(" "),e("span",{staticClass:"contText Asuccess"},[t._v("已绑定")])])],1):t._e()]),t._v(" "),e("li",{staticClass:"border-bottom-1px"},[t.userObj.postProvince||t.userObj.postCity||t.userObj.postRegion?t._e():e("div",{on:{click:t.toBindAddress}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("收货地址")]),t._v(" "),e("span",{staticClass:"contText"},[t._v("未绑定")])])],1),t._v(" "),t.userObj.postProvince||t.userObj.postCity||t.userObj.postRegion?e("div",{on:{click:t.toBindAddress}},[e("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("收货地址")]),t._v(" "),e("span",{staticClass:"contText Asuccess"},[t._v("已绑定")])])],1):t._e()]),t._v(" "),e("li",{staticClass:"button"},[t._m(0),t._v(" "),e("span",{staticClass:"btn",on:{click:function(s){t.$router.push({name:"userCenter"})}}},[t._v("返回首页")])])])},u=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("温馨提示\n      "),e("br"),t._v("绑定更多，就会有更多的任务可以派发，赚取更多佣金")])}],A={render:l,staticRenderFns:u},b=A,d=e("VU/8"),C=n,v=d(r,b,!1,C,"data-v-3bb49163",null);s.default=v.exports},Gunl:function(t,s,e){s=t.exports=e("FZ+f")(!0),s.push([t.i,".accountLink[data-v-3bb49163]{width:100%;height:100%;overflow:auto;background:#eff0f2;padding-top:1.2rem}.accountLink .contText[data-v-3bb49163]{font-size:1.2rem;line-height:2rem;color:#666}.accountLink li[data-v-3bb49163]{background:#fff}.accountLink li .Asuccess[data-v-3bb49163]{color:#52cc68}.accountLink li .Aerror[data-v-3bb49163]{color:#ff3341}.accountLink li .Awaiting[data-v-3bb49163]{color:#e6a545}.accountLink li .title[data-v-3bb49163]{color:#08090a;min-height:5rem;font-size:1.4rem}.accountLink .button[data-v-3bb49163]{padding:1.2rem;background:none}.accountLink .button p[data-v-3bb49163]{font-size:1.2rem;color:#666;line-height:1.8rem;margin-bottom:1rem}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/userCenter/accountLink.vue"],names:[],mappings:"AACA,8BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,mBAAoB,AACpB,kBAAoB,CACrB,AACD,wCACE,iBAAkB,AAClB,iBAAkB,AAClB,UAAY,CACb,AACD,iCACE,eAAiB,CAClB,AACD,2CACE,aAAe,CAChB,AACD,yCACE,aAAe,CAChB,AACD,2CACE,aAAe,CAChB,AACD,wCACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB,AACD,sCACE,eAAgB,AAChB,eAAiB,CAClB,AACD,wCACE,iBAAkB,AAClB,WAAY,AACZ,mBAAoB,AACpB,kBAAoB,CACrB",file:"accountLink.vue",sourcesContent:["\n.accountLink[data-v-3bb49163] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n  padding-top: 1.2rem;\n}\n.accountLink .contText[data-v-3bb49163] {\n  font-size: 1.2rem;\n  line-height: 2rem;\n  color: #666;\n}\n.accountLink li[data-v-3bb49163] {\n  background: #fff;\n}\n.accountLink li .Asuccess[data-v-3bb49163] {\n  color: #52cc68;\n}\n.accountLink li .Aerror[data-v-3bb49163] {\n  color: #ff3341;\n}\n.accountLink li .Awaiting[data-v-3bb49163] {\n  color: #e6a545;\n}\n.accountLink li .title[data-v-3bb49163] {\n  color: #08090a;\n  min-height: 5rem;\n  font-size: 1.4rem;\n}\n.accountLink .button[data-v-3bb49163] {\n  padding: 1.2rem;\n  background: none;\n}\n.accountLink .button p[data-v-3bb49163] {\n  font-size: 1.2rem;\n  color: #666;\n  line-height: 1.8rem;\n  margin-bottom: 1rem;\n}"],sourceRoot:""}])},i2cC:function(t,s,e){var n=e("Gunl");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("b2446a32",n,!0)}});
//# sourceMappingURL=24.240169fe00b078899a1e.js.map