webpackJsonp([8],{IBkV:function(t,e,a){"use strict";function s(t){a("WZyG")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),i=a("Omn0"),r=a("Au9i"),d=a("SJI6"),p=a("L6bb"),c=a.n(p),m={name:"withdrawSet2",components:{Step:i.a},computed:o()({},Object(d.mapGetters)(["userInfo"])),data:function(){return{stepArr:["绑定银行卡","设置提现密码"],timeout:"获取",phone:"",pass1:"",pass2:"",keyNum:""}},methods:o()({getkey:function(){var t=this,e=60,a=setInterval(function(){e--,t.timeout=e+" s",0===e&&(clearInterval(a),t.timeout="获取")},1e3)},getMessage:function(){var t=this,e=/^1[34578]\d{9}$/;"获取"===this.timeout&&e.test(this.phone)?this.$ajax.post("/api/config/sms/sendSms",{type:2,telephone:this.phone}).then(function(e){"200"===e.data.code?t.getkey():Object(r.Toast)({message:e.data.message,position:"bottom"})}).catch(function(t){console.log(t)}):Object(r.Toast)({message:"请输入手机号码",position:"bottom"})},testMessage:function(){var t=this;this.$ajax.post("/api/config/sms/vertify",{type:2,telephone:this.phone,code:this.keyNum}).then(function(e){"200"===e.data.code?t.setPass():Object(r.Toast)({message:e.data.message,position:"bottom"})}).catch(function(t){console.log(t)})},setPass:function(){var t=this;this.$ajax.post("/api/buyerAccount/resetWithdrawPassword",{newWithdrawPassword:c()(this.pass1),telephone:this.phone}).then(function(e){"200"===e.data.code?(t.reFresh(),t.$router.push({name:"userCenter"})):Object(r.Toast)({message:e.data.message,position:"bottom"})}).catch(function(t){console.log(t)})},finsh:function(){""===this.pass1||""===this.pass2?Object(r.Toast)({message:"请填写提现密码",position:"bottom"}):this.pass1!==this.pass2?Object(r.Toast)({message:"密码不一致,请重新输入",position:"bottom"}):this.testMessage()},reFresh:function(){var t=this;this.$ajax.post("/api/buyerAccount/refresh",{telephone:this.userInfo.telephone}).then(function(e){"200"===e.data.code?t.setUserInfo(e.data.data):Object(r.Toast)({message:e.data.message,position:"bottom"})}).catch(function(t){console.log(t)})}},Object(d.mapActions)(["setUserInfo"])),mounted:function(){this.phone=this.userInfo.telephone}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"withdrawSet2"},[a("div",{staticClass:"step"},[a("step",{attrs:{stepArr:t.stepArr,stepIndex:1}})],1),t._v(" "),a("ul",{staticClass:"cont"},[a("li",{staticClass:"border-bottom-1px"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",disabled:"true",placeholder:"输入手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyNum,expression:"keyNum"}],staticStyle:{width:"50%"},attrs:{type:"number",placeholder:"输入验证码"},domProps:{value:t.keyNum},on:{input:function(e){e.target.composing||(t.keyNum=e.target.value)}}}),t._v(" "),a("span",{staticClass:"get border-1px",on:{click:t.getMessage}},[t._v(t._s(t.timeout))])])]),t._v(" "),a("ul",{staticClass:"cont"},[a("li",{staticClass:"border-bottom-1px"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pass1,expression:"pass1"}],attrs:{type:"password",placeholder:"输入提现密码"},domProps:{value:t.pass1},on:{input:function(e){e.target.composing||(t.pass1=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pass2,expression:"pass2"}],attrs:{type:"password",placeholder:"再次输入密码"},domProps:{value:t.pass2},on:{input:function(e){e.target.composing||(t.pass2=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"footer"},[a("span",{staticClass:"btn",on:{click:t.finsh}},[t._v("完成")])])])},h=[],u={render:A,staticRenderFns:h},l=u,g=a("VU/8"),f=s,v=g(m,l,!1,f,"data-v-2a617d84",null);e.default=v.exports},WZyG:function(t,e,a){var s=a("waI+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("c423b56e",s,!0)},"waI+":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".withdrawSet2[data-v-2a617d84]{width:100%;height:100%;overflow:auto;background:#eff0f2}.withdrawSet2 .cont[data-v-2a617d84]{margin-top:1.2rem;background:#fff;padding-left:1.6rem}.withdrawSet2 .cont li[data-v-2a617d84]{height:1.4rem;padding-top:1.8rem;padding-right:1rem;padding-bottom:1.8rem;font-size:1.4rem}.withdrawSet2 .cont li .get[data-v-2a617d84]{float:right;margin-top:-1rem;width:4.8rem;height:3.4rem;line-height:3.4rem;text-align:center;font-size:#999}.withdrawSet2 .cont li input[data-v-2a617d84]{width:100%;outline:none;background:#fff}.withdrawSet2 .footer[data-v-2a617d84]{padding:2rem 1.6rem}","",{version:3,sources:["C:/Users/Administrator/Desktop/planB/buyer/src/components/userCenter/withdrawSet2.vue"],names:[],mappings:"AACA,+BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,kBAAoB,CACrB,AACD,qCACE,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,wCACE,cAAe,AACf,mBAAoB,AACpB,mBAAoB,AACpB,sBAAuB,AACvB,gBAAkB,CACnB,AACD,6CACE,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,cAAgB,CACjB,AACD,8CACE,WAAY,AACZ,aAAc,AACd,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB",file:"withdrawSet2.vue",sourcesContent:["\n.withdrawSet2[data-v-2a617d84] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n}\n.withdrawSet2 .cont[data-v-2a617d84] {\n  margin-top: 1.2rem;\n  background: #fff;\n  padding-left: 1.6rem;\n}\n.withdrawSet2 .cont li[data-v-2a617d84] {\n  height: 1.4rem;\n  padding-top: 1.8rem;\n  padding-right: 1rem;\n  padding-bottom: 1.8rem;\n  font-size: 1.4rem;\n}\n.withdrawSet2 .cont li .get[data-v-2a617d84] {\n  float: right;\n  margin-top: -1rem;\n  width: 4.8rem;\n  height: 3.4rem;\n  line-height: 3.4rem;\n  text-align: center;\n  font-size: #999;\n}\n.withdrawSet2 .cont li input[data-v-2a617d84] {\n  width: 100%;\n  outline: none;\n  background: #fff;\n}\n.withdrawSet2 .footer[data-v-2a617d84] {\n  padding: 2rem 1.6rem;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=8.43f35a5dab89a22fad70.js.map