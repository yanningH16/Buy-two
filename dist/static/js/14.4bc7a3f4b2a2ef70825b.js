webpackJsonp([14],{"0yhl":function(t,e,a){"use strict";function s(t){a("Dfze")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),i=a("lRwf"),o=a.n(i),c=a("SJI6"),l=a("Au9i");o.a.component(l.Cell.name,l.Cell);var A={name:"userSet",data:function(){return{}},computed:r()({},Object(c.mapGetters)(["userInfo"])),methods:{toDo:function(t){var e=this;switch(t){case"withdraw":this.$router.push({name:"withdrawSet"});break;case"changePass":this.$router.push({name:"forget"});break;case"logout":l.MessageBox.confirm("确定退出登录?").then(function(t){e.$router.push({name:"login"})}).catch(function(t){console.log(t)})}}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userSet"},[a("ul",{staticClass:"userInfo"},[a("li",{staticClass:"border-bottom-1px"},[a("mt-cell",{staticClass:"title",attrs:{title:"头像","is-link":""}},[a("img",{staticClass:"headImg",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511957696669&di=5bbc3ea76a7b62eae7dc82073b12b0a6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F16%2F20150416H4223_vG4eY.jpeg",alt:"pic"}})])],1),t._v(" "),a("li",{staticClass:"border-bottom-1px"},[a("mt-cell",{staticClass:"title",attrs:{title:"用户名"}},[a("span",{staticClass:"contText"},[t._v(t._s(t.userInfo.userName||"暂无用户名"))])])],1),t._v(" "),a("li",{staticClass:"border-bottom-1px"},[a("mt-cell",{staticClass:"title",attrs:{title:"京东等级"}},[a("div",{staticClass:"leave"},[a("strong",{staticClass:"gold"},[t._v(t._s((1==t.userInfo.jdPlusType?"正式会员":0==t.userInfo.jdPlusType?"临时会员":"非会员")||"暂无等级"))]),t._v(" "),a("p",{staticClass:"contText"},[t._v("Plus到期日："+t._s(t.userInfo.jdPlusEndDate?t.userInfo.jdPlusEndDate.split(" ")[0]:"暂无"))])])])],1),t._v(" "),a("li",{staticClass:"border-bottom-1px"},[a("mt-cell",{staticClass:"title",attrs:{title:"性别"}},[a("span",{staticClass:"contText"},[t._v(t._s(("1"==t.userInfo.gender?"男":"2"==t.userInfo.gender?"女":"暂未设置")||"暂未设置"))])])],1),t._v(" "),a("li",[a("mt-cell",{staticClass:"title",attrs:{title:"职业"}},[a("span",{staticClass:"contText"},[t._v(t._s(t.userInfo.profession||"暂无"))])])],1)]),t._v(" "),a("ul",{staticClass:"cashSet"},[t.userInfo.bankUserName||t.userInfo.bankCardNo||t.userInfo.bankName?a("li",{staticClass:"label"},[a("mt-cell",{staticClass:"title",attrs:{title:"提现设置",label:"买号通过审核后方可设置"}},[a("span",{staticClass:"contText"},[t._v("已设置")])])],1):a("li",{staticClass:"label",on:{click:function(e){t.toDo("withdraw")}}},[a("mt-cell",{staticClass:"title",attrs:{title:"提现设置",label:"买号通过审核后方可设置","is-link":""}},[a("span",{staticClass:"contText"},[t._v("未设置")])])],1)]),t._v(" "),a("ul",{staticClass:"changePass"},[a("li",{on:{click:function(e){t.toDo("changePass")}}},[a("mt-cell",{staticClass:"title",attrs:{title:"更改登录密码","is-link":""}})],1)]),t._v(" "),a("div",{staticClass:"buttons"},[a("span",{staticClass:"btn",on:{click:function(e){t.toDo("logout")}}},[t._v("退出登录")])])])},C=[],m={render:u,staticRenderFns:C},d=m,b=a("VU/8"),f=s,g=b(A,d,!1,f,"data-v-c523ab5c",null);e.default=g.exports},Dfze:function(t,e,a){var s=a("OD4c");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("181c95ab",s,!0)},OD4c:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".userSet[data-v-c523ab5c]{width:100%;height:100%;overflow:auto;background:#eff0f2}.userSet>ul[data-v-c523ab5c]{margin-top:1.2rem}.userSet>ul li[data-v-c523ab5c]{background:#fff}.userSet .title[data-v-c523ab5c]{color:#08090a;min-height:5rem;font-size:1.4rem}.userSet .contText[data-v-c523ab5c]{font-size:1.2rem;line-height:2rem;color:#666}.userSet .gold[data-v-c523ab5c]{font-size:1.6rem;color:#e6a545;line-height:2.4rem}.userSet .leave[data-v-c523ab5c]{text-align:right;margin-top:1.8rem;margin-bottom:1.8rem}.userSet .userInfo .headImg[data-v-c523ab5c]{width:5.4rem;height:5.4rem;border-radius:50%;margin-top:.8rem;margin-bottom:.8rem}.userSet .buttons[data-v-c523ab5c]{padding:2rem 1.6rem}.userSet .buttons .btn[data-v-c523ab5c]{background:#ff3341}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/userCenter/userSet.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,kBAAoB,CACrB,AACD,6BACE,iBAAmB,CACpB,AACD,gCACE,eAAiB,CAClB,AACD,iCACE,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CACnB,AACD,oCACE,iBAAkB,AAClB,iBAAkB,AAClB,UAAY,CACb,AACD,gCACE,iBAAkB,AAClB,cAAe,AACf,kBAAoB,CACrB,AACD,iCACE,iBAAkB,AAClB,kBAAmB,AACnB,oBAAsB,CACvB,AACD,6CACE,aAAc,AACd,cAAe,AACf,kBAAmB,AACnB,iBAAmB,AACnB,mBAAsB,CACvB,AACD,mCACE,mBAAqB,CACtB,AACD,wCACE,kBAAoB,CACrB",file:"userSet.vue",sourcesContent:["\n.userSet[data-v-c523ab5c] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #eff0f2;\n}\n.userSet >ul[data-v-c523ab5c] {\n  margin-top: 1.2rem;\n}\n.userSet >ul li[data-v-c523ab5c] {\n  background: #fff;\n}\n.userSet .title[data-v-c523ab5c] {\n  color: #08090a;\n  min-height: 5rem;\n  font-size: 1.4rem;\n}\n.userSet .contText[data-v-c523ab5c] {\n  font-size: 1.2rem;\n  line-height: 2rem;\n  color: #666;\n}\n.userSet .gold[data-v-c523ab5c] {\n  font-size: 1.6rem;\n  color: #e6a545;\n  line-height: 2.4rem;\n}\n.userSet .leave[data-v-c523ab5c] {\n  text-align: right;\n  margin-top: 1.8rem;\n  margin-bottom: 1.8rem;\n}\n.userSet .userInfo .headImg[data-v-c523ab5c] {\n  width: 5.4rem;\n  height: 5.4rem;\n  border-radius: 50%;\n  margin-top: 0.8rem;\n  margin-bottom: 0.8rem;\n}\n.userSet .buttons[data-v-c523ab5c] {\n  padding: 2rem 1.6rem;\n}\n.userSet .buttons .btn[data-v-c523ab5c] {\n  background: #ff3341;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=14.4bc7a3f4b2a2ef70825b.js.map