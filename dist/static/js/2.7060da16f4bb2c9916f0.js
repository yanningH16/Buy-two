webpackJsonp([2],{"0DL9":function(e,t,a){"use strict";function n(e){a("NRHl")}var s={name:"check",data:function(){return{}},computed:{shopNameFormate:function(){console.log(this.infoArr[1]);for(var e=this.infoArr[1].split(""),t=0;t<e.length;t++)console.log(t),t%2!=0&&(e[t]="※");return e=e.join("")}},props:{title:{type:String,default:""},goodsImg:{type:String,default:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511875719755&di=ab6dcb955b793b77820db79130a2f05d&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F0721%2F31d87362da0efcf126a487a049b1576e.jpg"},infoArr:{type:Array,default:[]}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"check"},[a("h2",[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"cont"},[a("div",[a("img",{attrs:{src:e.goodsImg,alt:"pic"}})]),e._v(" "),a("div",{staticClass:"right"},[a("h3",[e._v(e._s(e.infoArr[0]))]),e._v(" "),a("p",[a("span",[e._v("店铺名称")]),e._v(" "),a("strong",[e._v(e._s(e.shopNameFormate))])]),e._v(" "),a("p",[a("span",[e._v("下单数量")]),e._v(" "),a("strong",[e._v(e._s(e.infoArr[2]))])]),e._v(" "),a("p",[a("span",[e._v("规格")]),e._v(" "),a("strong",[e._v(e._s(e.infoArr[3]))])]),e._v(" "),a("p",[a("span",[e._v("价格")]),e._v(" "),a("strong",[e._v(e._s(e.infoArr[4]))])])])])])},A=[],r={render:i,staticRenderFns:A},o=r,d=a("VU/8"),c=n,l=d(s,o,!1,c,"data-v-6ea7431f",null);t.a=l.exports},"0reX":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".search[data-v-12d545a8]{font-size:1.4rem;color:#08090a}.search h2[data-v-12d545a8]{font-size:1.6rem;line-height:1}.search .cont[data-v-12d545a8]{margin-top:1rem;padding:1rem}.search .cont li[data-v-12d545a8]{display:-webkit-box;display:-ms-flexbox;display:flex}.search .cont li span[data-v-12d545a8]{width:7rem;line-height:3rem;vertical-align:top;color:#75787f;margin-right:1.6rem}.search .cont li p[data-v-12d545a8]{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:3rem;vertical-align:top}.search .buttons[data-v-12d545a8]{text-align:center;margin-top:.4rem}.search .buttons span[data-v-12d545a8]{display:inline-block;border-radius:.2rem;line-height:2.9rem;width:10.7rem}.search .alert[data-v-12d545a8]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(8,9,10,.6);-webkit-animation:fade-data-v-12d545a8 .2s ease-in;animation:fade-data-v-12d545a8 .2s ease-in;-webkit-transition:.2s;transition:.2s}.search .alert .red[data-v-12d545a8]{color:#ff3341}.search .alert .tip[data-v-12d545a8]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;background:#fff;border-radius:2px;width:24rem;height:22.2rem;text-align:center;color:#08090a;-webkit-animation:scale-data-v-12d545a8 .2s ease-in;animation:scale-data-v-12d545a8 .2s ease-in;-webkit-transition:.2s;transition:.2s}.search .alert .tip h2[data-v-12d545a8]{font-size:2rem;line-height:1;margin-top:2.8rem}.search .alert .tip p[data-v-12d545a8]{padding:1.6rem;font-size:1.4rem;line-height:1.8rem;vertical-align:top;color:#666}.search .alert .tip h3[data-v-12d545a8]{font-size:1.6rem;line-height:5rem;margin-top:.5px;border-top:1px solid #d4d5d8}@-webkit-keyframes scale-data-v-12d545a8{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-data-v-12d545a8{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fade-data-v-12d545a8{0%{opacity:0}to{opacity:1}}@keyframes fade-data-v-12d545a8{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/base/taskStep/search.vue"],names:[],mappings:"AACA,yBACE,iBAAkB,AAClB,aAAe,CAChB,AACD,4BACE,iBAAkB,AAClB,aAAe,CAChB,AACD,+BACE,gBAAiB,AACjB,YAAc,CACf,AACD,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,uCACE,WAAY,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,mBAAqB,CACtB,AACD,oCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,kCACE,kBAAmB,AACnB,gBAAmB,CACpB,AACD,uCACE,qBAAsB,AACtB,oBAAsB,AACtB,mBAAoB,AACpB,aAAe,CAChB,AACD,gCACE,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA6B,AAC7B,mDAAqD,AAC7C,2CAA6C,AACrD,uBAAyB,AACzB,cAAiB,CAClB,AACD,qCACE,aAAe,CAChB,AACD,qCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,YAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,oDAAsD,AAC9C,4CAA8C,AACtD,uBAAyB,AACzB,cAAiB,CAClB,AACD,wCACE,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACpB,AACD,uCACE,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,mBAAoB,AACpB,UAAY,CACb,AACD,wCACE,iBAAkB,AAClB,iBAAkB,AAClB,gBAAkB,AAClB,4BAA8B,CAC/B,AACD,yCACA,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACA,AACD,iCACA,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACA,AACD,wCACA,GACI,SAAW,CACd,AACD,GACI,SAAW,CACd,CACA,AACD,gCACA,GACI,SAAW,CACd,AACD,GACI,SAAW,CACd,CACA",file:"search.vue",sourcesContent:["\n.search[data-v-12d545a8] {\n  font-size: 1.4rem;\n  color: #08090a;\n}\n.search h2[data-v-12d545a8] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.search .cont[data-v-12d545a8] {\n  margin-top: 1rem;\n  padding: 1rem;\n}\n.search .cont li[data-v-12d545a8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.search .cont li span[data-v-12d545a8] {\n  width: 7rem;\n  line-height: 3rem;\n  vertical-align: top;\n  color: #75787f;\n  margin-right: 1.6rem;\n}\n.search .cont li p[data-v-12d545a8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  line-height: 3rem;\n  vertical-align: top;\n}\n.search .buttons[data-v-12d545a8] {\n  text-align: center;\n  margin-top: 0.4rem;\n}\n.search .buttons span[data-v-12d545a8] {\n  display: inline-block;\n  border-radius: 0.2rem;\n  line-height: 2.9rem;\n  width: 10.7rem;\n}\n.search .alert[data-v-12d545a8] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(8,9,10,0.6);\n  -webkit-animation: fade-data-v-12d545a8 0.2s ease-in;\n          animation: fade-data-v-12d545a8 0.2s ease-in;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.search .alert .red[data-v-12d545a8] {\n  color: #ff3341;\n}\n.search .alert .tip[data-v-12d545a8] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background: #fff;\n  border-radius: 2px;\n  width: 24rem;\n  height: 22.2rem;\n  text-align: center;\n  color: #08090a;\n  -webkit-animation: scale-data-v-12d545a8 0.2s ease-in;\n          animation: scale-data-v-12d545a8 0.2s ease-in;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.search .alert .tip h2[data-v-12d545a8] {\n  font-size: 2rem;\n  line-height: 1;\n  margin-top: 2.8rem;\n}\n.search .alert .tip p[data-v-12d545a8] {\n  padding: 1.6rem;\n  font-size: 1.4rem;\n  line-height: 1.8rem;\n  vertical-align: top;\n  color: #666;\n}\n.search .alert .tip h3[data-v-12d545a8] {\n  font-size: 1.6rem;\n  line-height: 5rem;\n  margin-top: 0.5px;\n  border-top: 1px solid #d4d5d8;\n}\n@-webkit-keyframes scale-data-v-12d545a8 {\nfrom {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\nto {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes scale-data-v-12d545a8 {\nfrom {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\nto {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@-webkit-keyframes fade-data-v-12d545a8 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fade-data-v-12d545a8 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}"],sourceRoot:""}])},"3Nfm":function(e,t,a){var n=a("ezXw");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("f2df5504",n,!0)},"4Hpw":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".operateTask[data-v-7fb062c8]{background:#eff0f2;width:100%;height:100%;overflow:auto}.operateTask .reject[data-v-7fb062c8]{padding:1.2rem 1.6rem;background:#ffeaeb}.operateTask .reject>p[data-v-7fb062c8]{font-size:1.2rem;line-height:1.6rem;color:#ff3341;vertical-align:top}.operateTask li[data-v-7fb062c8]{margin-top:1.2rem;background:#fff;padding:2rem 1.6rem}.operateTask .next[data-v-7fb062c8]{padding:2rem 1.6rem}.operateTask>p[data-v-7fb062c8]{padding:0 1.6rem 2rem;color:#666;font-size:1.2rem;line-height:1}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/operateTask/operateTask.vue"],names:[],mappings:"AACA,8BACE,mBAAoB,AACpB,WAAY,AACZ,YAAa,AACb,aAAe,CAChB,AACD,sCACE,sBAAuB,AACvB,kBAAoB,CACrB,AACD,wCACE,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,kBAAoB,CACrB,AACD,iCACE,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,oCACE,mBAAqB,CACtB,AACD,gCACE,sBAAuB,AACvB,WAAY,AACZ,iBAAkB,AAClB,aAAe,CAChB",file:"operateTask.vue",sourcesContent:["\n.operateTask[data-v-7fb062c8] {\n  background: #eff0f2;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.operateTask .reject[data-v-7fb062c8] {\n  padding: 1.2rem 1.6rem;\n  background: #ffeaeb;\n}\n.operateTask .reject >p[data-v-7fb062c8] {\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  color: #ff3341;\n  vertical-align: top;\n}\n.operateTask li[data-v-7fb062c8] {\n  margin-top: 1.2rem;\n  background: #fff;\n  padding: 2rem 1.6rem;\n}\n.operateTask .next[data-v-7fb062c8] {\n  padding: 2rem 1.6rem;\n}\n.operateTask >p[data-v-7fb062c8] {\n  padding: 0 1.6rem 2rem;\n  color: #666;\n  font-size: 1.2rem;\n  line-height: 1;\n}"],sourceRoot:""}])},"8OFK":function(e,t,a){var n=a("XPMe");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("a7f1103c",n,!0)},NRHl:function(e,t,a){var n=a("g4Mg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("82b26bba",n,!0)},QB70:function(e,t,a){var n=a("0reX");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("61bd87d2",n,!0)},XPMe:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".findGoods h2[data-v-b8be4d84]{font-size:1.6rem;color:#08090a;line-height:1}.findGoods .text[data-v-b8be4d84]{margin-top:1rem;padding:1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:1.4rem}.findGoods .text li[data-v-b8be4d84]:first-child{min-width:7rem}.findGoods .text li[data-v-b8be4d84]:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1}.findGoods .text li[data-v-b8be4d84]:last-child{min-width:1.6rem}.findGoods .text li p[data-v-b8be4d84]{padding-left:1.6rem;padding-right:2rem;line-height:2.2rem;color:#08090a}.findGoods .text li span[data-v-b8be4d84]{color:#75787f;line-height:2.2rem}.findGoods .text li i[data-v-b8be4d84]{display:inline-block;width:1.6rem;height:1.6rem;font-size:1.6rem;text-align:center}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/base/taskStep/findGoods.vue"],names:[],mappings:"AACA,+BACE,iBAAkB,AAClB,cAAe,AACf,aAAe,CAChB,AACD,kCACE,gBAAiB,AACjB,aAAc,AACd,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,gBAAkB,CACnB,AACD,iDACE,cAAgB,CACjB,AACD,kDACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,gDACE,gBAAkB,CACnB,AACD,uCACE,oBAAqB,AACrB,mBAAoB,AACpB,mBAAoB,AACpB,aAAe,CAChB,AACD,0CACE,cAAe,AACf,kBAAoB,CACrB,AACD,uCACE,qBAAsB,AACtB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,iBAAmB,CACpB",file:"findGoods.vue",sourcesContent:["\n.findGoods h2[data-v-b8be4d84] {\n  font-size: 1.6rem;\n  color: #08090a;\n  line-height: 1;\n}\n.findGoods .text[data-v-b8be4d84] {\n  margin-top: 1rem;\n  padding: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 1.4rem;\n}\n.findGoods .text li[data-v-b8be4d84]:first-child {\n  min-width: 7rem;\n}\n.findGoods .text li[data-v-b8be4d84]:nth-child(2) {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.findGoods .text li[data-v-b8be4d84]:last-child {\n  min-width: 1.6rem;\n}\n.findGoods .text li p[data-v-b8be4d84] {\n  padding-left: 1.6rem;\n  padding-right: 2rem;\n  line-height: 2.2rem;\n  color: #08090a;\n}\n.findGoods .text li span[data-v-b8be4d84] {\n  color: #75787f;\n  line-height: 2.2rem;\n}\n.findGoods .text li i[data-v-b8be4d84] {\n  display: inline-block;\n  width: 1.6rem;\n  height: 1.6rem;\n  font-size: 1.6rem;\n  text-align: center;\n}"],sourceRoot:""}])},dpcH:function(e,t,a){"use strict";function n(e){a("QB70")}function s(e){a("3Nfm")}function i(e){a("wKM/")}Object.defineProperty(t,"__esModule",{value:!0});var A=a("Omn0"),r=a("zGR/"),o=a("G7BK"),d={name:"search",data:function(){return{alert:!1}},props:{title:{type:String,default:""},condition:{type:Array,default:["综合排序","无","0.00-0.00元","全国","0","0"]}},methods:{giveup:function(){this.$emit("giveup"),this.alert=!1},lookMore:function(){this.$emit("lookMore"),this.alert=!1}}},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("h2",[e._v(e._s(e.title))]),e._v(" "),a("ul",{staticClass:"cont"},[a("li",[a("span",[e._v("排序方式")]),e._v(" "),a("p",[e._v(e._s(e.condition[0]))])]),e._v(" "),a("li",[a("span",[e._v("品牌")]),e._v(" "),a("p",[e._v(e._s(e.condition[1]))])]),e._v(" "),a("li",[a("span",[e._v("价格区间")]),e._v(" "),a("p",[e._v(e._s(e.condition[2]))])]),e._v(" "),a("li",[a("span",[e._v("发货地")]),e._v(" "),a("p",[e._v(e._s(e.condition[3]))])]),e._v(" "),a("li",[a("span",[e._v("评价数")]),e._v(" "),a("p",[e._v(e._s(e.condition[4]))])]),e._v(" "),a("li",[a("span",[e._v("预计翻页数")]),e._v(" "),a("p",[e._v(e._s(e.condition[5]))])])]),e._v(" "),a("div",{staticClass:"buttons"},[a("span",{staticClass:"border-1px",on:{click:function(t){e.alert=!0}}},[e._v("找不到商品？")])]),e._v(" "),e.alert?a("div",{staticClass:"alert"},[a("div",{staticClass:"tip"},[a("h2",[e._v("提示")]),e._v(" "),a("p",[e._v("找不到商品？可以刷新关键词再试试查找商品")]),e._v(" "),a("h3",{staticClass:"red",on:{click:e.lookMore}},[e._v("再找找")]),e._v(" "),a("h3",{on:{click:e.giveup}},[e._v("放弃该任务")])])]):e._e()])},l=[],p={render:c,staticRenderFns:l},C=p,h=a("VU/8"),f=n,m=h(d,C,!1,f,"data-v-12d545a8",null),B=m.exports,u=a("0DL9"),v={name:"shopName",data:function(){return{}},computed:{value:{get:function(e){return this.shopValue},set:function(e){return this.$emit("update:shopValue",e),e}}},props:{title:{type:String,default:""},shopValue:{type:String,default:""}},methods:{onInput:function(){this.$emit("onInput")}}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shopName"},[a("h2",[e._v(e._s(e.title)+"\n    "),a("i",{staticClass:"wanderIcon"})]),e._v(" "),a("div",{staticClass:"inputs"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",placeholder:"输入店铺名称"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.onInput]}})])])},g=[],k={render:b,staticRenderFns:g},y=k,x=a("VU/8"),_=s,w=x(v,y,!1,_,"data-v-38c8790c",null),T=w.exports,j=a("Au9i"),I={name:"operateTask",components:{Step:A.a,FindGoods:r.a,Upload:o.a,Search:B,Check:u.a,ShopName:T},computed:{shopName:{get:function(){return this.stpesObj.step7Value},set:function(e){return this.stpesObj.step7Value=e,e}}},data:function(){return{isPass:!1,stpesObj:{stepArr:["货比三家","填写订单信息"],step1Title:"一、打开手机京东，查找商品",step1Key:"水洗毛边短裤前短后水洗水洗毛边短裤前短后水洗",step2Title:"二、上传搜索结果截图",step2Tip:"请把输入框内的搜索关键词也截到图片中",step2ImgArr:[],step3Title:"二、下划商品列表，随机查看2件商品",step4Title:"四、上传任意2件商品截图",step4Tip:"依次点开列表中任意2个商品，分别截图",step4ImgArr:[],step5Title:"三、精确搜索，设置搜索条件",step5Arr:["价格排序","阿迪","20.00-50.00元","河南","0","0"],step6Title:"四、核对商品参数",step6Arr:["美丽哈撒发美丽哈撒发美丽哈撒发","事故多发司法所","1件","任意规格","49.00"],step6Url:"",step7Title:"五、输入店铺全称，验证店铺",step7Value:""},taskInfoObj:{},rbObj:{}}},methods:{giveup:function(){var e=this;Object(j.MessageBox)({title:"提示",message:"确定放弃该任务?",showCancelButton:!0}).then(function(){e.toGive()}).catch(function(e){console.log(e)})},toGive:function(){var e=this;this.$ajax.post("/api/buyer/task/cancelTask",{buyerTaskId:this.$route.query.buyerTaskId||this.$route.query.rbBuyerTaskId||this.$route.query.backBuyerTaskId}).then(function(t){"200"===t.data.code?(Object(j.Toast)({message:"放弃任务成功!"}),e.$router.push({name:"myTask"})):Object(j.Toast)({message:t.data.message})}).catch(function(e){console.log(e)})},testShop:function(){this.stpesObj.step7Value!==this.taskInfoObj.shopName?this.isPass=!1:this.isPass=!0},randomKey:function(){var e=JSON.parse(this.taskInfoObj.searchWordList),t=e.length,a=Math.floor(Math.random()*t),n=e[a];this.stpesObj.step1Key=n.keyword||"暂无",this.stpesObj.step5Arr=[n.sortClass||"",n.brand||"暂无",n.priceLow+"-"+n.priceHigh+"元",n.postLocation,n.favorNum||"暂无",n.pageNum||"暂无"]},getTaskInfo:function(){var e=this;this.$ajax.post("/api/buyer/task/getTaskDetail",{buyerTaskId:this.$route.query.buyerTaskId||this.$route.query.rbBuyerTaskId||this.$route.query.backBuyerTaskId}).then(function(t){if("200"===t.data.code){var a=t.data.data;e.taskInfoObj=t.data.data,"1"===e.taskInfoObj.taskSubType?e.stpesObj.step1Title="一、打开手机京东app，查找商品":"2"===e.taskInfoObj.taskSubType&&(e.stpesObj.step1Title="一、打开手机京东微信，查找商品"),e.stpesObj.step6Arr=[a.productName,a.shopName,a.numPerOrder,a.productFormat,a.productUnitPrice],e.stpesObj.step6Url=a.productPicUrl,e.randomKey()}else Object(j.Toast)({message:t.data.message})}).catch(function(e){console.log(e)})},doNext:function(){this.isPass&&this.submit()},submit:function(){var e=this;this.$route.query.backBuyerTaskId?this.$router.push({name:"operateTask2",query:{rbBuyerTaskId:this.$route.query.backBuyerTaskId}}):this.$ajax.post("/api/buyer/task/doTaskFirst",{buyerTaskId:this.$route.query.buyerTaskId||this.$route.query.rbBuyerTaskId||this.$route.query.backBuyerTaskId,searchPicUrl:this.stpesObj.step2ImgArr,otherPicUrl:this.stpesObj.step4ImgArr}).then(function(t){"200"===t.data.code?e.$route.query.buyerTaskId?e.$router.push({name:"operateTask2",query:{buyerTaskId:e.$route.query.buyerTaskId}}):e.$route.query.rbBuyerTaskId&&e.$router.push({name:"operateTask2",query:{backBuyerTaskId:e.$route.query.rbBuyerTaskId}}):Object(j.Toast)({message:t.data.message})}).catch(function(e){console.log(e)})},getRbInfo:function(){var e=this;this.$ajax.post("/api/buyer/task/getOrderTaskFirst",{buyerTaskId:this.$route.query.rbBuyerTaskId||this.$route.query.backBuyerTaskId}).then(function(t){if("200"===t.data.code){e.rbObj=t.data.data;var a=t.data.data;e.stpesObj.step2ImgArr=JSON.parse(a.searchPicUrl)||[],e.stpesObj.step4ImgArr=JSON.parse(a.otherPicUrl)||[]}else Object(j.Toast)({message:t.data.message})}).catch(function(e){console.log(e)})}},mounted:function(){this.getTaskInfo(),(this.$route.query.rbBuyerTaskId||this.$route.query.backBuyerTaskId)&&this.getRbInfo()}},D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"operateTask"},[e.$route.query.rbBuyerTaskId?a("div",{staticClass:"reject"},[a("p",[e._v("驳回原因："+e._s(e.rbObj.rejectReason||""))]),e._v(" "),a("p",[e._v("修改方案："+e._s(e.rbObj.solution||""))])]):e._e(),e._v(" "),a("div",{staticClass:"step"},[a("step",{attrs:{stepArr:e.stpesObj.stepArr,stepIndex:0}})],1),e._v(" "),a("ul",{staticClass:"cont"},[a("li",[a("findGoods",{attrs:{title:e.stpesObj.step1Title,value:e.stpesObj.step1Key},on:{refresh:e.randomKey}})],1),e._v(" "),a("li",[a("findGoods",{attrs:{title:e.stpesObj.step3Title,onlyTitle:!0}})],1),e._v(" "),a("li",[a("search",{attrs:{title:e.stpesObj.step5Title,condition:e.stpesObj.step5Arr},on:{lookMore:e.randomKey,giveup:e.giveup}})],1),e._v(" "),a("li",[a("check",{attrs:{title:e.stpesObj.step6Title,goodsImg:e.stpesObj.step6Url,infoArr:e.stpesObj.step6Arr}})],1),e._v(" "),a("li",[a("shopName",{attrs:{title:e.stpesObj.step7Title,shopValue:e.shopName},on:{onInput:e.testShop,"update:shopValue":function(t){e.shopName=t}}})],1)]),e._v(" "),a("div",{staticClass:"next"},[e.$route.query.buyerTaskId||e.$route.query.backBuyerTaskId?a("span",{staticClass:"btn",class:{"btn-gray":!e.isPass},on:{click:e.doNext}},[e._v("下一步")]):e._e(),e._v(" "),e.$route.query.rbBuyerTaskId?a("span",{staticClass:"btn",class:{"btn-gray":!e.isPass},on:{click:e.doNext}},[e._v("下一步")]):e._e()]),e._v(" "),a("p",[e._v("如遇问题，请微信联系您的专属客服")])])},O=[],q={render:D,staticRenderFns:O},E=q,$=a("VU/8"),z=i,N=$(I,E,!1,z,"data-v-7fb062c8",null);t.default=N.exports},ezXw:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".shopName[data-v-38c8790c]{color:#08090a}.shopName h2[data-v-38c8790c]{font-size:1.6rem;line-height:1}.shopName h2 i[data-v-38c8790c]{display:inline-block;font-size:1.6rem;line-height:1;width:1.6rem;height:1.6rem;vertical-align:top}.shopName .inputs[data-v-38c8790c]{margin-top:4rem}.shopName .inputs input[data-v-38c8790c]{font-size:1.4rem;outline:none;line-height:1;width:100%}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/base/taskStep/shopName.vue"],names:[],mappings:"AACA,2BACE,aAAe,CAChB,AACD,8BACE,iBAAkB,AAClB,aAAe,CAChB,AACD,gCACE,qBAAsB,AACtB,iBAAkB,AAClB,cAAe,AACf,aAAc,AACd,cAAe,AACf,kBAAoB,CACrB,AACD,mCACE,eAAiB,CAClB,AACD,yCACE,iBAAkB,AAClB,aAAc,AACd,cAAe,AACf,UAAY,CACb",file:"shopName.vue",sourcesContent:["\n.shopName[data-v-38c8790c] {\n  color: #08090a;\n}\n.shopName h2[data-v-38c8790c] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.shopName h2 i[data-v-38c8790c] {\n  display: inline-block;\n  font-size: 1.6rem;\n  line-height: 1;\n  width: 1.6rem;\n  height: 1.6rem;\n  vertical-align: top;\n}\n.shopName .inputs[data-v-38c8790c] {\n  margin-top: 4rem;\n}\n.shopName .inputs input[data-v-38c8790c] {\n  font-size: 1.4rem;\n  outline: none;\n  line-height: 1;\n  width: 100%;\n}"],sourceRoot:""}])},g4Mg:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".check[data-v-6ea7431f]{color:#08090a}.check h2[data-v-6ea7431f]{font-size:1.6rem;line-height:1}.check .cont[data-v-6ea7431f]{margin-top:2rem;overflow:hidden;font-size:1.4rem}.check .cont>div[data-v-6ea7431f]{float:left;width:14rem;height:14rem}.check .cont>div img[data-v-6ea7431f]{width:14rem;height:14rem;border-radius:2px}.check .cont>div h3[data-v-6ea7431f]{margin-bottom:1.2rem;padding-left:1.2rem;padding-right:1.2rem;line-height:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.check .cont>div p[data-v-6ea7431f]{margin-bottom:1.2rem;padding-left:1.2rem;display:-webkit-box;display:-ms-flexbox;display:flex}.check .cont>div p span[data-v-6ea7431f]{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#75787f}.check .cont>div p strong[data-v-6ea7431f]{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.check .cont .right[data-v-6ea7431f]{width:calc(100% - 14rem)}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/base/taskStep/check.vue"],names:[],mappings:"AACA,wBACE,aAAe,CAChB,AACD,2BACE,iBAAkB,AAClB,aAAe,CAChB,AACD,8BACE,gBAAiB,AACjB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,kCACE,WAAY,AACZ,YAAa,AACb,YAAc,CACf,AACD,sCACE,YAAa,AACb,aAAc,AACd,iBAAmB,CACpB,AACD,qCACE,qBAAsB,AACtB,oBAAqB,AACrB,qBAAsB,AACtB,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,oCACE,qBAAsB,AACtB,oBAAqB,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,yCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,aAAe,CAChB,AACD,2CACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,qCACE,wBAA0B,CAC3B",file:"check.vue",sourcesContent:["\n.check[data-v-6ea7431f] {\n  color: #08090a;\n}\n.check h2[data-v-6ea7431f] {\n  font-size: 1.6rem;\n  line-height: 1;\n}\n.check .cont[data-v-6ea7431f] {\n  margin-top: 2rem;\n  overflow: hidden;\n  font-size: 1.4rem;\n}\n.check .cont >div[data-v-6ea7431f] {\n  float: left;\n  width: 14rem;\n  height: 14rem;\n}\n.check .cont >div img[data-v-6ea7431f] {\n  width: 14rem;\n  height: 14rem;\n  border-radius: 2px;\n}\n.check .cont >div h3[data-v-6ea7431f] {\n  margin-bottom: 1.2rem;\n  padding-left: 1.2rem;\n  padding-right: 1.2rem;\n  line-height: 3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.check .cont >div p[data-v-6ea7431f] {\n  margin-bottom: 1.2rem;\n  padding-left: 1.2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.check .cont >div p span[data-v-6ea7431f] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #75787f;\n}\n.check .cont >div p strong[data-v-6ea7431f] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.check .cont .right[data-v-6ea7431f] {\n  width: calc(100% - 14rem);\n}"],sourceRoot:""}])},"wKM/":function(e,t,a){var n=a("4Hpw");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("210de5a6",n,!0)},"zGR/":function(e,t,a){"use strict";function n(e){a("8OFK")}var s={name:"findGoods",data:function(){return{}},methods:{refresh:function(){this.$emit("refresh")}},props:{title:{type:String,default:""},value:{type:String,default:""},onlyTitle:{type:Boolean,default:!1}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"findGoods"},[a("h2",[e._v(e._s(e.title))]),e._v(" "),e.onlyTitle?e._e():a("ul",{staticClass:"text"},[e._m(0),e._v(" "),a("li",[a("p",[e._v(e._s(e.value))])]),e._v(" "),a("li",[a("i",{staticClass:"refreshIcon",on:{click:e.refresh}})])])])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",[e._v("搜索关键词")])])}],r={render:i,staticRenderFns:A},o=r,d=a("VU/8"),c=n,l=d(s,o,!1,c,"data-v-b8be4d84",null);t.a=l.exports}});
//# sourceMappingURL=2.7060da16f4bb2c9916f0.js.map