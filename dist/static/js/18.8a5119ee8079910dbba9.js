webpackJsonp([18],{"9PVp":function(t,e,c){"use strict";function s(t){c("lIrb")}Object.defineProperty(e,"__esModule",{value:!0});var a=c("Dd8w"),n=c.n(a),i=c("Au9i"),o=c("SJI6"),l={name:"accountLink",data:function(){return{userObj:{}}},computed:n()({},Object(o.mapGetters)(["userInfo"])),methods:{getInfo:function(){var t=this;this.$ajax.post("/api/buyerAccount/refresh",{telephone:this.userInfo.telephone}).then(function(e){"200"===e.data.code?t.userObj=e.data.data:Object(i.Toast)({message:e.data.message,position:"bottom"})}).catch(function(t){console.error(t)})}},mounted:function(){this.getInfo()}},r=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ul",{staticClass:"accountLink"},[c("li",{staticClass:"border-bottom-1px"},[0==t.userObj.isAddManagerWechat?c("mt-cell",{staticClass:"title",attrs:{title:"加微信好友","is-link":"",to:"addWechat"}},[c("span",{staticClass:"contText"},[t._v("未加好友")])]):t._e(),t._v(" "),1==t.userObj.isAddManagerWechat?c("mt-cell",{staticClass:"title",attrs:{title:"加微信好友"}},[c("span",{staticClass:"contText Asuccess"},[t._v("已加好友")])]):t._e()],1),t._v(" "),c("li",[0==t.userObj.isJdPassCheck?c("mt-cell",{staticClass:"title",attrs:{"is-link":"",to:"bindJdAccount"}},[c("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号")]),t._v(" "),c("span",{staticClass:"contText"},[t._v("未绑定")])]):t._e(),t._v(" "),2==t.userObj.isJdPassCheck?c("mt-cell",{staticClass:"title"},[c("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),c("span",{staticClass:"contText Awaiting"},[t._v("审核中")])]):t._e(),t._v(" "),3==t.userObj.isJdPassCheck?c("mt-cell",{staticClass:"title",attrs:{"is-link":""}},[c("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),c("span",{staticClass:"contText Aerror"},[t._v("未通过审核")])]):t._e(),t._v(" "),1==t.userObj.isJdPassCheck?c("mt-cell",{staticClass:"title"},[c("span",{attrs:{slot:"title"},slot:"title"},[t._v("绑定京东买号："+t._s(t.userObj.jdNickName))]),t._v(" "),c("span",{staticClass:"contText Asuccess"},[t._v("已通过审核")])]):t._e()],1)])},A=[],u={render:r,staticRenderFns:A},C=u,d=c("VU/8"),b=s,f=d(l,C,!1,b,"data-v-25eb2cc8",null);e.default=f.exports},lIrb:function(t,e,c){var s=c("t+pM");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);c("rjj0")("71bed297",s,!0)},"t+pM":function(t,e,c){e=t.exports=c("FZ+f")(!0),e.push([t.i,".accountLink[data-v-25eb2cc8]{width:100%;height:100%;overflow:auto;background:#eff0f2;padding-top:1.2rem}.accountLink .contText[data-v-25eb2cc8]{font-size:1.2rem;line-height:2rem;color:#666}.accountLink li[data-v-25eb2cc8]{background:#fff}.accountLink li .Asuccess[data-v-25eb2cc8]{color:#52cc68}.accountLink li .Aerror[data-v-25eb2cc8]{color:#ff3341}.accountLink li .Awaiting[data-v-25eb2cc8]{color:#e6a545}.accountLink li .title[data-v-25eb2cc8]{color:#08090a;min-height:5rem;font-size:1.4rem}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/userCenter/accountLink.vue"],names:[],mappings:"AACA,8BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,mBAAoB,AACpB,kBAAoB,CACrB,AACD,wCACE,iBAAkB,AAClB,iBAAkB,AAClB,UAAY,CACb,AACD,iCACE,eAAiB,CAClB,AACD,2CACE,aAAe,CAChB,AACD,yCACE,aAAe,CAChB,AACD,2CACE,aAAe,CAChB,AACD,wCACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB",file:"accountLink.vue",sourcesContent:["\n.accountLink[data-v-25eb2cc8] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n  padding-top: 1.2rem;\n}\n.accountLink .contText[data-v-25eb2cc8] {\n  font-size: 1.2rem;\n  line-height: 2rem;\n  color: #666;\n}\n.accountLink li[data-v-25eb2cc8] {\n  background: #fff;\n}\n.accountLink li .Asuccess[data-v-25eb2cc8] {\n  color: #52cc68;\n}\n.accountLink li .Aerror[data-v-25eb2cc8] {\n  color: #ff3341;\n}\n.accountLink li .Awaiting[data-v-25eb2cc8] {\n  color: #e6a545;\n}\n.accountLink li .title[data-v-25eb2cc8] {\n  color: #08090a;\n  min-height: 5rem;\n  font-size: 1.4rem;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=18.8a5119ee8079910dbba9.js.map