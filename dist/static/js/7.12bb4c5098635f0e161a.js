webpackJsonp([7,21],{"5tvH":function(t,a,e){"use strict";function n(t){e("Zsxk")}Object.defineProperty(a,"__esModule",{value:!0});var A=e("Omn0"),i=e("v+Bi"),r={name:"withdrawSet",components:{Step:A.a,BindCard:i.default},data:function(){return{showAddress:!1,stepArr:["绑定银行卡","设置提现密码"],provinceArr:[],addressArr:[],pcName:"",slots:[{flex:1,values:[{code:"110000",id:1,name:"北京市"}],className:"slot1",textAlign:"center"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:[],className:"slot3",textAlign:"center"}],bankName:"",bankUserName:"",bankCardNo:""}},watch:{provinceArr:function(t){t&&this.getCity(t.code)}},methods:{}},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"withdrawSet"},[e("div",{staticClass:"step"},[e("step",{attrs:{stepArr:t.stepArr,stepIndex:0}})],1),t._v(" "),e("div",{staticClass:"bindCard"},[e("bindCard",{attrs:{otherPage:!0}})],1)])},o=[],s={render:d,staticRenderFns:o},C=s,m=e("VU/8"),c=n,b=m(r,C,!1,c,"data-v-5b1043c3",null);a.default=b.exports},"7YAh":function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,'.withdrawSet[data-v-5b1043c3]{width:100%;height:100%;overflow:auto;background:#eff0f2;position:relative}.withdrawSet .cont[data-v-5b1043c3]{margin-top:1.2rem;background:#fff;padding-left:1.6rem}.withdrawSet .cont li[data-v-5b1043c3]{height:1.4rem;padding-top:1.8rem;padding-right:1rem;padding-bottom:1.8rem;font-size:1.4rem}.withdrawSet .cont li input[data-v-5b1043c3]{width:100%;outline:none}.withdrawSet .cont li i[data-v-5b1043c3]{position:relative;float:right}.withdrawSet .cont li i[data-v-5b1043c3]:after{border:2px solid #999;border-bottom-width:0;border-left-width:0;content:"";top:.75rem;right:.75rem;position:absolute;width:5px;height:5px;-webkit-transform:translateY(-50%) rotate(135deg);transform:translateY(-50%) rotate(135deg)}.withdrawSet .footer[data-v-5b1043c3]{padding:0 1.6rem}.withdrawSet .footer p[data-v-5b1043c3]{font-size:1.2rem;color:#75787f;line-height:2.4rem;margin-top:1.2rem}.withdrawSet .footer .btn[data-v-5b1043c3]{margin-top:2rem;margin-bottom:2rem}.withdrawSet .addressWrap[data-v-5b1043c3]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6);-webkit-animation:fadeIn-data-v-5b1043c3 .2s ease-out;animation:fadeIn-data-v-5b1043c3 .2s ease-out;-webkit-transition:.2s;transition:.2s}.withdrawSet .addressWrap .address[data-v-5b1043c3]{position:absolute;bottom:0;left:0;width:100%;background:#fff;-webkit-animation:slideUp-data-v-5b1043c3 .2s ease-out;animation:slideUp-data-v-5b1043c3 .2s ease-out;-webkit-transition:.2s;transition:.2s}.withdrawSet .addressWrap .address .buttons[data-v-5b1043c3]{display:-webkit-box;display:-ms-flexbox;display:flex}.withdrawSet .addressWrap .address .buttons span[data-v-5b1043c3]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:1.2rem;line-height:3.2rem;color:#26a2ff;text-align:center}@-webkit-keyframes slideUp-data-v-5b1043c3{0%{-webkit-transform:translate3d(0,20rem,0);transform:translate3d(0,20rem,0)}}@keyframes slideUp-data-v-5b1043c3{0%{-webkit-transform:translate3d(0,20rem,0);transform:translate3d(0,20rem,0)}}@-webkit-keyframes fadeIn-data-v-5b1043c3{0%{opacity:0}}@keyframes fadeIn-data-v-5b1043c3{0%{opacity:0}}',"",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/userCenter/withdrawSet.vue"],names:[],mappings:"AACA,8BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,mBAAoB,AACpB,iBAAmB,CACpB,AACD,oCACE,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,uCACE,cAAe,AACf,mBAAoB,AACpB,mBAAoB,AACpB,sBAAuB,AACvB,gBAAkB,CACnB,AACD,6CACE,WAAY,AACZ,YAAc,CACf,AACD,yCACE,kBAAmB,AACnB,WAAa,CACd,AACD,+CACE,sBAAuB,AACvB,sBAAuB,AACvB,oBAAqB,AACrB,WAAY,AACZ,WAAa,AACb,aAAe,AACf,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,kDAAmD,AACnD,yCAA2C,CAC5C,AACD,sCACE,gBAAkB,CACnB,AACD,wCACE,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,iBAAmB,CACpB,AACD,2CACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,2CACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,MAAO,AACP,OAAQ,AACR,0BAA4B,AAC5B,sDAAwD,AAChD,8CAAgD,AACxD,uBAAyB,AACzB,cAAiB,CAClB,AACD,oDACE,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,gBAAiB,AACjB,uDAAyD,AACjD,+CAAiD,AACzD,uBAAyB,AACzB,cAAiB,CAClB,AACD,6DACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,kEACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,iBAAmB,CACpB,AACD,2CACA,GACI,yCAA4C,AACpC,gCAAoC,CAC/C,CACA,AACD,mCACA,GACI,yCAA4C,AACpC,gCAAoC,CAC/C,CACA,AACD,0CACA,GACI,SAAW,CACd,CACA,AACD,kCACA,GACI,SAAW,CACd,CACA",file:"withdrawSet.vue",sourcesContent:["\n.withdrawSet[data-v-5b1043c3] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n  position: relative;\n}\n.withdrawSet .cont[data-v-5b1043c3] {\n  margin-top: 1.2rem;\n  background: #fff;\n  padding-left: 1.6rem;\n}\n.withdrawSet .cont li[data-v-5b1043c3] {\n  height: 1.4rem;\n  padding-top: 1.8rem;\n  padding-right: 1rem;\n  padding-bottom: 1.8rem;\n  font-size: 1.4rem;\n}\n.withdrawSet .cont li input[data-v-5b1043c3] {\n  width: 100%;\n  outline: none;\n}\n.withdrawSet .cont li i[data-v-5b1043c3] {\n  position: relative;\n  float: right;\n}\n.withdrawSet .cont li i[data-v-5b1043c3]:after {\n  border: solid 2px #999;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  content: '';\n  top: 0.75rem;\n  right: 0.75rem;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  -webkit-transform: translateY(-50%) rotate(135deg);\n  transform: translateY(-50%) rotate(135deg);\n}\n.withdrawSet .footer[data-v-5b1043c3] {\n  padding: 0 1.6rem;\n}\n.withdrawSet .footer p[data-v-5b1043c3] {\n  font-size: 1.2rem;\n  color: #75787f;\n  line-height: 2.4rem;\n  margin-top: 1.2rem;\n}\n.withdrawSet .footer .btn[data-v-5b1043c3] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.withdrawSet .addressWrap[data-v-5b1043c3] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.6);\n  -webkit-animation: fadeIn-data-v-5b1043c3 0.2s ease-out;\n          animation: fadeIn-data-v-5b1043c3 0.2s ease-out;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.withdrawSet .addressWrap .address[data-v-5b1043c3] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  -webkit-animation: slideUp-data-v-5b1043c3 0.2s ease-out;\n          animation: slideUp-data-v-5b1043c3 0.2s ease-out;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.withdrawSet .addressWrap .address .buttons[data-v-5b1043c3] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.withdrawSet .addressWrap .address .buttons span[data-v-5b1043c3] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 1.2rem;\n  line-height: 3.2rem;\n  color: #26a2ff;\n  text-align: center;\n}\n@-webkit-keyframes slideUp-data-v-5b1043c3 {\nfrom {\n    -webkit-transform: translate3d(0, 20rem, 0);\n            transform: translate3d(0, 20rem, 0);\n}\n}\n@keyframes slideUp-data-v-5b1043c3 {\nfrom {\n    -webkit-transform: translate3d(0, 20rem, 0);\n            transform: translate3d(0, 20rem, 0);\n}\n}\n@-webkit-keyframes fadeIn-data-v-5b1043c3 {\nfrom {\n    opacity: 0;\n}\n}\n@keyframes fadeIn-data-v-5b1043c3 {\nfrom {\n    opacity: 0;\n}\n}"],sourceRoot:""}])},CuxB:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,'.bindCard[data-v-24bd11dc]{width:100%;height:100%;overflow:auto;background:#eff0f2;position:relative}.bindCard .cont[data-v-24bd11dc]{margin-top:1.2rem;background:#fff;padding-left:1.6rem}.bindCard .cont li[data-v-24bd11dc]{height:1.4rem;padding-top:1.8rem;padding-right:1rem;padding-bottom:1.8rem;font-size:1.4rem}.bindCard .cont li input[data-v-24bd11dc]{width:100%;outline:none}.bindCard .cont li i[data-v-24bd11dc]{position:relative;float:right}.bindCard .cont li i[data-v-24bd11dc]:after{border:2px solid #999;border-bottom-width:0;border-left-width:0;content:"";top:.75rem;right:.75rem;position:absolute;width:5px;height:5px;-webkit-transform:translateY(-50%) rotate(135deg);transform:translateY(-50%) rotate(135deg)}.bindCard .cont li i[data-v-24bd11dc]:before{content:"\\9009\\62E9\\94F6\\884C";font-size:1.2rem;color:#666;margin-right:2rem;vertical-align:middle}.bindCard .addressWrap[data-v-24bd11dc]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6);-webkit-animation:fadeIn-data-v-24bd11dc .2s ease-out;animation:fadeIn-data-v-24bd11dc .2s ease-out;-webkit-transition:.2s;transition:.2s}.bindCard .addressWrap .address[data-v-24bd11dc]{position:absolute;bottom:0;left:0;width:100%;background:#fff;-webkit-animation:slideUp-data-v-24bd11dc .2s ease-out;animation:slideUp-data-v-24bd11dc .2s ease-out;-webkit-transition:.2s;transition:.2s}.bindCard .addressWrap .address .buttons[data-v-24bd11dc]{display:-webkit-box;display:-ms-flexbox;display:flex}.bindCard .addressWrap .address .buttons span[data-v-24bd11dc]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:1.2rem;line-height:3.2rem;color:#26a2ff;text-align:center}@-webkit-keyframes slideUp-data-v-24bd11dc{0%{-webkit-transform:translate3d(0,20rem,0);transform:translate3d(0,20rem,0)}}@keyframes slideUp-data-v-24bd11dc{0%{-webkit-transform:translate3d(0,20rem,0);transform:translate3d(0,20rem,0)}}@-webkit-keyframes fadeIn-data-v-24bd11dc{0%{opacity:0}}@keyframes fadeIn-data-v-24bd11dc{0%{opacity:0}}.bindCard .tip[data-v-24bd11dc]{padding:0 1.6rem}.bindCard .tip p[data-v-24bd11dc]{font-size:1.2rem;color:#75787f;line-height:2.4rem;margin-top:1.2rem}.bindCard .sureBtn[data-v-24bd11dc]{padding:2rem 1.6rem}',"",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/userCenter/bindCard.vue"],names:[],mappings:"AACA,2BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,mBAAoB,AACpB,iBAAmB,CACpB,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,oCACE,cAAe,AACf,mBAAoB,AACpB,mBAAoB,AACpB,sBAAuB,AACvB,gBAAkB,CACnB,AACD,0CACE,WAAY,AACZ,YAAc,CACf,AACD,sCACE,kBAAmB,AACnB,WAAa,CACd,AACD,4CACE,sBAAuB,AACvB,sBAAuB,AACvB,oBAAqB,AACrB,WAAY,AACZ,WAAa,AACb,aAAe,AACf,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,kDAAmD,AACnD,yCAA2C,CAC5C,AACD,6CACE,+BAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,qBAAuB,CACxB,AACD,wCACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,MAAO,AACP,OAAQ,AACR,0BAA4B,AAC5B,sDAAwD,AAChD,8CAAgD,AACxD,uBAAyB,AACzB,cAAiB,CAClB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,gBAAiB,AACjB,uDAAyD,AACjD,+CAAiD,AACzD,uBAAyB,AACzB,cAAiB,CAClB,AACD,0DACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,+DACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,iBAAmB,CACpB,AACD,2CACA,GACI,yCAA4C,AACpC,gCAAoC,CAC/C,CACA,AACD,mCACA,GACI,yCAA4C,AACpC,gCAAoC,CAC/C,CACA,AACD,0CACA,GACI,SAAW,CACd,CACA,AACD,kCACA,GACI,SAAW,CACd,CACA,AACD,gCACE,gBAAkB,CACnB,AACD,kCACE,iBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,iBAAmB,CACpB,AACD,oCACE,mBAAqB,CACtB",file:"bindCard.vue",sourcesContent:["\n.bindCard[data-v-24bd11dc] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n  position: relative;\n}\n.bindCard .cont[data-v-24bd11dc] {\n  margin-top: 1.2rem;\n  background: #fff;\n  padding-left: 1.6rem;\n}\n.bindCard .cont li[data-v-24bd11dc] {\n  height: 1.4rem;\n  padding-top: 1.8rem;\n  padding-right: 1rem;\n  padding-bottom: 1.8rem;\n  font-size: 1.4rem;\n}\n.bindCard .cont li input[data-v-24bd11dc] {\n  width: 100%;\n  outline: none;\n}\n.bindCard .cont li i[data-v-24bd11dc] {\n  position: relative;\n  float: right;\n}\n.bindCard .cont li i[data-v-24bd11dc]:after {\n  border: solid 2px #999;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  content: '';\n  top: 0.75rem;\n  right: 0.75rem;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  -webkit-transform: translateY(-50%) rotate(135deg);\n  transform: translateY(-50%) rotate(135deg);\n}\n.bindCard .cont li i[data-v-24bd11dc]:before {\n  content: '选择银行';\n  font-size: 1.2rem;\n  color: #666;\n  margin-right: 2rem;\n  vertical-align: middle;\n}\n.bindCard .addressWrap[data-v-24bd11dc] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.6);\n  -webkit-animation: fadeIn-data-v-24bd11dc 0.2s ease-out;\n          animation: fadeIn-data-v-24bd11dc 0.2s ease-out;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.bindCard .addressWrap .address[data-v-24bd11dc] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  -webkit-animation: slideUp-data-v-24bd11dc 0.2s ease-out;\n          animation: slideUp-data-v-24bd11dc 0.2s ease-out;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.bindCard .addressWrap .address .buttons[data-v-24bd11dc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.bindCard .addressWrap .address .buttons span[data-v-24bd11dc] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 1.2rem;\n  line-height: 3.2rem;\n  color: #26a2ff;\n  text-align: center;\n}\n@-webkit-keyframes slideUp-data-v-24bd11dc {\nfrom {\n    -webkit-transform: translate3d(0, 20rem, 0);\n            transform: translate3d(0, 20rem, 0);\n}\n}\n@keyframes slideUp-data-v-24bd11dc {\nfrom {\n    -webkit-transform: translate3d(0, 20rem, 0);\n            transform: translate3d(0, 20rem, 0);\n}\n}\n@-webkit-keyframes fadeIn-data-v-24bd11dc {\nfrom {\n    opacity: 0;\n}\n}\n@keyframes fadeIn-data-v-24bd11dc {\nfrom {\n    opacity: 0;\n}\n}\n.bindCard .tip[data-v-24bd11dc] {\n  padding: 0 1.6rem;\n}\n.bindCard .tip p[data-v-24bd11dc] {\n  font-size: 1.2rem;\n  color: #75787f;\n  line-height: 2.4rem;\n  margin-top: 1.2rem;\n}\n.bindCard .sureBtn[data-v-24bd11dc] {\n  padding: 2rem 1.6rem;\n}"],sourceRoot:""}])},Zsxk:function(t,a,e){var n=e("7YAh");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("6db32c51",n,!0)},lPEv:function(t,a,e){var n=e("CuxB");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("74e38266",n,!0)},"v+Bi":function(t,a,e){"use strict";function n(t){e("lPEv")}Object.defineProperty(a,"__esModule",{value:!0});var A=e("Dd8w"),i=e.n(A),r=e("lRwf"),d=e.n(r),o=e("SJI6"),s=e("Au9i");d.a.component(s.Picker.name,s.Picker);var C={name:"bindCard",props:{otherPage:{type:Boolean,default:!1}},data:function(){return{name:"",bank:"",bankNum:"",checkBank:"",otherBank:"",showBank:!1,slots:[{flex:1,values:[{id:"1",bankName:"中国工商银行"}],className:"slot1",textAlign:"center"}]}},computed:i()({},Object(o.mapGetters)(["userInfo"])),methods:{onValuesChange:function(t,a){this.checkBank=a[0]},chooseBank:function(){var t=this;this.$ajax.post("/api/config/bankCard/getBankInfoList",{}).then(function(a){if("200"===a.data.code){t.showBank=!0;var e=a.data.data;e.push({bankName:"其他银行",id:"0"}),t.slots[0].values=e}else Object(s.Toast)({message:a.data.message,position:"bottom"})}).catch(function(t){console.log(t)})},sureBank:function(){this.showBank=!1,this.bank=this.checkBank.bankName},sureToBindCard:function(){var t=this;this.$ajax.post("/api/buyerAccount/bindBankCard",{buyerUserAccountId:this.userInfo.buyerUserAccountId,bankName:this.bank,bankUserName:this.name,bankCardNo:this.bankNum}).then(function(a){"200"===a.data.code?(Object(s.Toast)({message:"绑定成功!",position:"bottom"}),t.otherPage?t.$router.push({name:"withdrawSet2"}):t.$router.push({name:"accountLink"})):Object(s.Toast)({message:a.data.message,position:"bottom"})}).catch(function(t){console.log(t)})}},mounted:function(){this.userInfo.bankUserName&&(this.name=this.userInfo.bankUserName),this.userInfo.bankName&&(this.bank=this.userInfo.bankName),this.userInfo.bankCardNo&&(this.bankNum=this.userInfo.bankCardNo)}},m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bindCard"},[e("ul",{staticClass:"cont"},[e("li",{staticClass:"border-bottom-1px"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("li",{staticClass:"border-bottom-1px",on:{click:t.chooseBank}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank,expression:"bank"}],staticStyle:{width:"70%"},attrs:{type:"text",readonly:"",placeholder:"银行"},domProps:{value:t.bank},on:{input:function(a){a.target.composing||(t.bank=a.target.value)}}}),t._v(" "),e("i")]),t._v(" "),"其他银行"==t.bank?e("li",{staticClass:"border-bottom-1px"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.otherBank,expression:"otherBank"}],attrs:{type:"text",placeholder:"银行名称"},domProps:{value:t.otherBank},on:{input:function(a){a.target.composing||(t.otherBank=a.target.value)}}})]):t._e(),t._v(" "),e("li",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bankNum,expression:"bankNum"}],attrs:{type:"text",placeholder:"银行卡号"},domProps:{value:t.bankNum},on:{input:function(a){a.target.composing||(t.bankNum=a.target.value)}}})])]),t._v(" "),t.otherPage?e("div",{staticClass:"tip"},[t._m(0)]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBank,expression:"showBank"}],staticClass:"addressWrap"},[e("div",{staticClass:"address"},[e("div",{staticClass:"buttons border-bottom-1px"},[e("span",{on:{click:function(a){t.showBank=!1}}},[t._v("取消")]),t._v(" "),e("span",{on:{click:t.sureBank}},[t._v("确定")])]),t._v(" "),e("mt-picker",{ref:"pickerObj",attrs:{slots:t.slots,visibleItemCount:7,"value-key":"bankName"},on:{change:t.onValuesChange}})],1)]),t._v(" "),e("div",{staticClass:"sureBtn"},[t.otherPage?e("span",{staticClass:"btn",on:{click:t.sureToBindCard}},[t._v("下一步")]):e("span",{staticClass:"btn",on:{click:t.sureToBindCard}},[t._v("确认")])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n      1. 只支持提现到借记卡（普通储蓄卡），不支持提现 到信用卡和农村信用社"),e("br"),t._v("2. 如果您填写的银行卡账户信息不正确，可能将无法 成功返款，平台不承担由此产生的一切费用"),e("br"),t._v("3. 为确保您资金安全，绑定后支付宝信息、银行卡开 户名不可修改，即便帐号被盗，您帐号里的资金也不会 转移到他人的账户中\n    ")])}],b={render:m,staticRenderFns:c},l=b,f=e("VU/8"),p=n,B=f(C,l,!1,p,"data-v-24bd11dc",null);a.default=B.exports}});
//# sourceMappingURL=7.12bb4c5098635f0e161a.js.map