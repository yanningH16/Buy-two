webpackJsonp([8],{"5T/H":function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".myTask[data-v-7eefbfa6]{width:100%;height:100%;overflow:auto;position:relative}.myTask .buttons[data-v-7eefbfa6]{position:fixed;right:1rem;bottom:3rem;background:#fff;border-radius:50%;border:1px solid #ddd;-webkit-box-shadow:0 6px 8px hsla(0,0%,80%,.3);box-shadow:0 6px 8px hsla(0,0%,80%,.3);width:4rem;height:4rem;text-align:center;opacity:.8}.myTask .buttons span[data-v-7eefbfa6]{position:absolute;top:0;right:0;left:0;bottom:0;width:1.5rem;height:1.5rem;margin:auto;background-size:1.5rem;color:red}.myTask .bg[data-v-7eefbfa6]{background:#f5f5f5;border-top:1px solid #d4d5d8;margin-top:.2rem}.myTask .spinnerWrap[data-v-7eefbfa6]{background:#fff}.myTask .spinnerWrap .spinner[data-v-7eefbfa6]{text-align:center;width:28px;height:28px;margin:0 auto}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/components/myTask/myTask.vue"],names:[],mappings:"AACA,yBACE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,iBAAmB,CACpB,AACD,kCACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,kBAAmB,AACnB,sBAAuB,AACvB,+CAAoD,AAC5C,uCAA4C,AACpD,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,UAAa,CACd,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,OAAQ,AACR,SAAU,AACV,aAAc,AACd,cAAe,AACf,YAAa,AACb,uBAAwB,AACxB,SAAY,CACb,AACD,6BACE,mBAAoB,AACpB,6BAA8B,AAC9B,gBAAmB,CACpB,AACD,sCACE,eAAiB,CAClB,AACD,+CACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,aAAe,CAChB",file:"myTask.vue",sourcesContent:["\n.myTask[data-v-7eefbfa6] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n}\n.myTask .buttons[data-v-7eefbfa6] {\n  position: fixed;\n  right: 1rem;\n  bottom: 3rem;\n  background: #fff;\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 6px 8px rgba(204,204,204,0.3);\n          box-shadow: 0 6px 8px rgba(204,204,204,0.3);\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  opacity: 0.8;\n}\n.myTask .buttons span[data-v-7eefbfa6] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  margin: auto;\n  background-size: 1.5rem;\n  color: #f00;\n}\n.myTask .bg[data-v-7eefbfa6] {\n  background: #f5f5f5;\n  border-top: 1px solid #d4d5d8;\n  margin-top: 0.2rem;\n}\n.myTask .spinnerWrap[data-v-7eefbfa6] {\n  background: #fff;\n}\n.myTask .spinnerWrap .spinner[data-v-7eefbfa6] {\n  text-align: center;\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n}"],sourceRoot:""}])},Gfj1:function(t,a,e){var s=e("5T/H");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("d606aa72",s,!0)},"bS/K":function(t,a,e){"use strict";function s(t){e("hjQc")}function o(t){e("Gfj1")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("BO1k"),r=e.n(n),i=e("Dd8w"),A=e.n(i),d=e("lRwf"),p=e.n(d),c=e("SJI6"),l=e("V33R"),m=e.n(l),C=e("Au9i"),u={name:"taskList",props:{datas:{type:Array,default:[]}},data:function(){return{}},methods:{goTask:function(t){this.$emit("myrouter",t)},doCopy:function(){new m.a(".copy").on("success",function(t){Object(C.Toast)("复制成功")})}}},h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.datas,function(a,s){return e("div",{key:s,staticClass:"wrap"},[e("div",{staticClass:"header border-bottom-1px"},[e("p",[e("em",{staticClass:"jdIcon img"}),t._v(" "),e("span",{staticClass:"jd"},[t._v(t._s(a.jdTask))])]),t._v(" "),"1"===a.slot?e("p",{staticClass:"slot"},[t._v("待下单")]):"3"===a.slot?e("p",{staticClass:"slot"},[t._v("待商家确认并返还本金")]):"10"===a.slot?e("p",{staticClass:"slot"},[t._v("待根据提示评价")]):"11"===a.slot?e("p",{staticClass:"slot"},[t._v("待商家确认并返还佣金")]):"20"===a.slot?e("p",{staticClass:"slot gray"},[t._v("已完成")]):"19"===a.slot?e("p",{staticClass:"slot gray"},[t._v("已放弃")]):"6"===a.slot||"7"===a.slot?e("p",{staticClass:"slot"},[t._v("待修改订单")]):"12"===a.slot?e("p",{staticClass:"slot"},[t._v("待修改评价")]):"13"===a.slot?e("p",{staticClass:"slot"},[t._v("待返佣")]):"5"===a.slot?e("p",{staticClass:"slot"},[t._v("待完成订单")]):e("p",{staticClass:"slot"},[t._v("已下单")])]),t._v(" "),e("div",{staticClass:"shopName border-bottom-1px"},[e("h2",[t._v(t._s(a.shopName))])]),t._v(" "),e("div",{staticClass:"shopConten"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.imgSrc,expression:"item.imgSrc"}],staticClass:"picImg",attrs:{alt:"",width:"8rem",height:"8rem"}}),t._v(" "),e("div",{staticClass:"shopText"},[e("p",[t._v("垫付本金(元) \n          "),e("span",{staticClass:"color"},[t._v(t._s(a.myMoney))])]),t._v(" "),e("p",{staticClass:"yongjin"},[t._v("佣金收益(元)  \n          "),e("span",{staticClass:"color"},[t._v(t._s(a.yongMoney))])])])]),t._v(" "),e("div",{staticClass:"detail border-bottom-1px border-top-1px"},[e("div",{staticClass:"detail_first"},[e("p",[t._v("\n          子任务编号\n          "),e("span",{staticClass:"taskNumber"},[t._v(t._s(a.taskNumber))])]),t._v(" "),e("p",{staticClass:"copy border-1px",attrs:{"data-clipboard-text":a.taskNumber},on:{click:t.doCopy}},[t._v("复制")])]),t._v(" "),"1"===a.prom?e("p",{staticClass:"detail_two"},[t._v("请一定要签收后再评价哦~")]):"12"===a.prom?e("p",{staticClass:"detail_two red"},[t._v("驳回原因：\n        "),e("span",[t._v(t._s(a.rejectReason))])]):t._e(),t._v(" "),"12"===a.proms?e("p",{staticClass:"detail_two red"},[t._v("修改方案:\n        "),e("span",[t._v(t._s(a.solution))])]):t._e()]),t._v(" "),e("div",{staticClass:"bottom"},["1"===a.btn?e("p",{staticClass:"appraise border-1px",on:{click:function(a){t.goTask(s)}}},[t._v("去做任务")]):"10"===a.btn?e("p",{staticClass:"appraise border-1px",on:{click:function(a){t.goTask(s)}}},[t._v("去评价")]):"20"===a.btn||"19"===a.btn?e("p",{staticClass:"appraise border-1px grey",on:{click:function(a){t.goTask(s)}}},[t._v("删除任务")]):"6"===a.btn||"7"===a.btn?e("p",{staticClass:"appraise border-1px",on:{click:function(a){t.goTask(s)}}},[t._v("去修改订单")]):"12"===a.btn?e("p",{staticClass:"appraise border-1px",on:{click:function(a){t.goTask(s)}}},[t._v("去修改评价")]):"5"===a.btn?e("p",{staticClass:"appraise border-1px",on:{click:function(a){t.goTask(s)}}},[t._v("去完成")]):t._e()])])}))},b=[],f={render:h,staticRenderFns:b},B=f,v=e("VU/8"),g=s,y=v(u,B,!1,g,"data-v-2e4cda85",null),k=y.exports,w=e("Y2dX");p.a.use(C.InfiniteScroll),p.a.component(C.Spinner.name,C.Spinner);var x={name:"myTask",components:{TaskList:k,NoCont:w.a},data:function(){return{selected:"1,6,7",toFavorNum:"",toPlaceOrderNum:"",waitCommision:"",waitMoneyNum:"",order:!0,money:!0,favor:!0,commision:!0,pageSize:5,tableData:[],loadAllData:[],bottomText:"上拉加载更多...",totalCount:"",getScoreLog:[],pageNo:1,pageNos:1,showMore:!1,touchStartY:0,touchEndY:0}},watch:{selected:function(t){this.taskList()}},computed:A()({showCenter:function(){return!(this.touchStartY-this.touchEndY>0)}},Object(c.mapGetters)(["userInfo","userToken"])),methods:{show:function(t){var a=this;"1"===this.tableData[t].slot?this.$router.push({name:"operateTask",query:{buyerTaskId:this.tableData[t].buyerTaskId}}):"10"===this.tableData[t].slot?C.MessageBox.confirm("请务必确认物流信息已显示签收,需上传截图","确定快递已签收").then(function(e){a.$router.push({name:"evalute",query:{buyerTaskId:a.tableData[t].buyerTaskId}})}).catch(function(t){console.log(t)}):"6"===this.tableData[t].slot?this.$router.push({name:"operateTask",query:{rbBuyerTaskId:this.tableData[t].buyerTaskId}}):"7"===this.tableData[t].slot?this.$router.push({name:"operateTask2",query:{rbBuyerTaskId:this.tableData[t].buyerTaskId}}):"12"===this.tableData[t].slot?this.$router.push({name:"evalute",query:{rbBuyerTaskId:this.tableData[t].buyerTaskId}}):"5"===this.tableData[t].slot?this.$router.push({name:"operateTask2",query:{buyerTaskId:this.tableData[t].buyerTaskId}}):C.MessageBox.confirm("删除后不可再恢复","确定删除?").then(function(e){a.$ajax.post("/api/buyer/task/deleteOrder",{buyerTaskId:a.tableData[t].buyerTaskId}).then(function(t){var e=t.data;"200"===e.code?(Object(C.Toast)("删除成功"),a.taskList(1,a.pageSize)):Object(C.Toast)(e.message)}).catch(function(t){console.log(t),Object(C.Toast)("未知错误")})}).catch(function(t){console.log(t)})},pointNum:function(){var t=this;this.$ajax.post("/api/buyer/task/getTodoNumList",{buyerUserId:this.userInfo.buyerUserAccountId}).then(function(a){var e=a.data;"200"===e.code&&(t.toFavorNum=e.data.toFavorNum,t.toPlaceOrderNum=e.data.toPlaceOrderNum,t.waitCommision=e.data.waitCommision,t.waitMoneyNum=e.data.waitMoneyNum),0===t.toPlaceOrderNum&&(t.order=!1),0===t.waitMoneyNum&&(t.money=!1),0===t.toFavorNum&&(t.favor=!1),0===t.waitCommision&&(t.commision=!1)}).catch(function(t){console.log(t)})},taskList:function(t){var a=this;this.$ajax.post("/api/buyer/task/getTaskListByStatus",{pageNo:this.pageNo,pageSize:this.pageSize,status:this.selected,buyerUserId:this.userInfo.buyerUserAccountId}).then(function(e){var s=e.data;if("200"===s.code){var o=[],n=!0,i=!1,A=void 0;try{for(var d,p=r()(s.data.datas);!(n=(d=p.next()).done);n=!0){var c=d.value,l={jdTask:c.taskTypeDetail||"暂无数据",slot:c.status||"暂无数据",shopName:c.productName||"暂无数据",wchat:c.wechatNum||"暂无数据",imgSrc:c.productPicUrl||"暂无数据",myMoney:c.payment||"暂无数据",yongMoney:c.commision||"暂无数据",taskNumber:c.sellerTaskDayId||"暂无数据",city:c.postCity||"暂无数据",money:c.jdMonthIncome||"暂无数据",sellerUserId:c.buyerUserAccountId||"暂无数据",btn:c.status||"暂无数据",prom:c.status||"暂无数据",buyerTaskId:c.buyerTaskId,rejectReason:c.rejectReason||"暂未填写驳回原因",solution:c.solution||"暂未填写解决方案"};o.push(l)}}catch(t){i=!0,A=t}finally{try{!n&&p.return&&p.return()}finally{if(i)throw A}}a.tableData=1===t?a.tableData.concat(o):o,a.showMore=!1,a.pageNos=s.data.pageNos}else Object(C.Toast)(s.message)}).catch(function(t){console.log(t),Object(C.Toast)(t)})},handleScroll:function(){var t=this,a=this.$refs.myTask.scrollTop,e=this.$refs.myTask.clientHeight;this.$refs.myTask.scrollHeight-e-a<=10&&this.pageNos>this.pageNo&&!this.showMore&&(this.showMore=!0,this.pageNo=this.pageNo+1,setTimeout(function(){t.taskList(1)},600))},touchStart:function(t){this.touchStartY=t.touches[0].pageY},touchEnd:function(t){this.touchEndY=t.changedTouches[0].pageY}},mounted:function(){this.pointNum(),this.taskList(),this.$refs.myTask.addEventListener("scroll",this.handleScroll),this.$refs.myTask.addEventListener("touchstart",this.touchStart),this.$refs.myTask.addEventListener("touchend",this.touchEnd)},destroyed:function(){}},_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"myTask",staticClass:"myTask"},[e("mt-navbar",{model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[e("mt-tab-item",{attrs:{id:"1,6,7"}},[t._v("待下单\n      "),t.order?e("mt-badge",{staticStyle:{position:"absolute","margin-top":"-10px","margin-left":"-10px"},attrs:{type:"error"}},[t._v(t._s(this.toPlaceOrderNum))]):t._e()],1),t._v(" "),e("mt-tab-item",{attrs:{id:"3"}},[t._v("待返款\n      "),t.money?e("mt-badge",{staticStyle:{position:"absolute","margin-top":"-10px","margin-left":"-10px"},attrs:{type:"error"}},[t._v(t._s(this.waitMoneyNum))]):t._e()],1),t._v(" "),e("mt-tab-item",{attrs:{id:"10"}},[t._v("待评价\n      "),t.favor?e("mt-badge",{staticStyle:{position:"absolute","margin-top":"-10px","margin-left":"-10px"},attrs:{type:"error"}},[t._v(t._s(this.toFavorNum))]):t._e()],1),t._v(" "),e("mt-tab-item",{attrs:{id:"11"}},[t._v("待返佣\n      "),t.commision?e("mt-badge",{staticStyle:{position:"absolute","margin-top":"-10px","margin-left":"-10px"},attrs:{type:"error"}},[t._v(t._s(this.waitCommision))]):t._e()],1),t._v(" "),e("mt-tab-item",{attrs:{id:"0"}},[t._v("全部")])],1),t._v(" "),e("div",{ref:"myTaskCont",staticClass:"bg"},[e("mt-tab-container",{model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[e("mt-tab-container-item",{attrs:{id:"1,6,7"}},[e("taskList",{attrs:{datas:t.tableData},on:{myrouter:t.show}})],1),t._v(" "),e("mt-tab-container-item",{attrs:{id:"3"}},[e("taskList",{attrs:{datas:t.tableData},on:{myrouter:t.show}})],1),t._v(" "),e("mt-tab-container-item",{attrs:{id:"10"}},[e("taskList",{attrs:{datas:t.tableData},on:{myrouter:t.show}})],1),t._v(" "),e("mt-tab-container-item",{attrs:{id:"11"}},[e("taskList",{attrs:{datas:t.tableData},on:{myrouter:t.show}})],1),t._v(" "),e("mt-tab-container-item",{attrs:{id:"0"}},[e("taskList",{attrs:{datas:t.tableData},on:{myrouter:t.show}})],1)],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"spinnerWrap"},[e("div",{staticClass:"spinner"},[e("mt-spinner",{attrs:{type:"fading-circle",color:"rgba(0,0,0,0.8)",size:20}})],1)]),t._v(" "),0===t.tableData.length?e("noCont"):t._e()],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCenter,expression:"showCenter"}],staticClass:"buttons",on:{click:function(a){t.$router.push({name:"userCenter"})}}},[e("span",{staticClass:"userCenterIcon"})])],1)},T=[],D={render:_,staticRenderFns:T},j=D,N=e("VU/8"),E=o,I=N(x,j,!1,E,"data-v-7eefbfa6",null);a.default=I.exports},hjQc:function(t,a,e){var s=e("y86N");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("7483a9c9",s,!0)},y86N:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".wrap[data-v-2e4cda85]{background:#fff;padding-left:1.6rem;margin-top:1.2rem}.wrap .header[data-v-2e4cda85]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:1.3rem;padding-top:1.3rem}.wrap .header .img[data-v-2e4cda85]{width:1.5rem;height:1.5rem;display:inline-block;vertical-align:middle;border-radius:2px}.wrap .header .jd[data-v-2e4cda85]{display:inline-block;font-size:1.2rem;color:#000;margin-left:.4rem;vertical-align:middle}.wrap .header .slot[data-v-2e4cda85]{font-size:1.2rem;color:#ff3341;margin-right:1.6rem}.wrap .header .gray[data-v-2e4cda85]{color:#666}.wrap .shopName[data-v-2e4cda85]{padding-bottom:1.2rem;margin-top:2rem}.wrap .shopName h2[data-v-2e4cda85]{width:17rem;font-size:1.4rem;color:#08090a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wrap .shopConten[data-v-2e4cda85]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-top:1.2rem}.wrap .shopConten .picImg[data-v-2e4cda85]{width:8rem;height:8rem}.wrap .shopConten .shopText[data-v-2e4cda85]{margin-top:8%;margin-left:1.6rem;font-size:1.2rem}.wrap .shopConten .shopText .color[data-v-2e4cda85]{color:#e6a545}.wrap .shopConten .shopText .yongjin[data-v-2e4cda85]{margin-top:1.25rem}.wrap .detail[data-v-2e4cda85]{padding-top:1.5rem;padding-bottom:1.2rem;margin-top:2rem;font-size:1.2rem;color:#666}.wrap .detail .detail_first[data-v-2e4cda85]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.wrap .detail .detail_first .copy[data-v-2e4cda85]{margin-right:1.6rem;font-size:1rem;padding:4px 8px;border-radius:3px;cursor:pointer}.wrap .detail .detail_first .taskNumber[data-v-2e4cda85]{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:14.5rem;vertical-align:top}.wrap .detail .detail_two[data-v-2e4cda85]{margin-top:1.1rem}.wrap .detail .red[data-v-2e4cda85]{color:#ff3341}.wrap .bottom[data-v-2e4cda85]{padding-bottom:1.2rem;overflow:hidden}.wrap .bottom .appraise[data-v-2e4cda85]{float:right;margin-right:1.6rem;font-size:1.4rem;padding:.8rem 1.9rem;cursor:pointer;color:#ff3341;margin-top:1.2rem;border-radius:3px}.wrap .bottom .grey[data-v-2e4cda85]{color:#000}","",{version:3,sources:["C:/Users/Administrator/Desktop/项目二/buyer/src/base/taskList/taskList.vue"],names:[],mappings:"AACA,uBACE,gBAAiB,AACjB,oBAAqB,AACrB,iBAAmB,CACpB,AACD,+BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,sBAAuB,AACvB,kBAAoB,CACrB,AACD,oCACE,aAAc,AACd,cAAe,AACf,qBAAsB,AACtB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,mCACE,qBAAsB,AACtB,iBAAkB,AAClB,WAAY,AACZ,kBAAoB,AACpB,qBAAuB,CACxB,AACD,qCACE,iBAAkB,AAClB,cAAe,AACf,mBAAqB,CACtB,AACD,qCACE,UAAY,CACb,AACD,iCACE,sBAAuB,AACvB,eAAiB,CAClB,AACD,oCACE,YAAa,AACb,iBAAkB,AAClB,cAAe,AACf,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB,AACD,mCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,oBAAqB,AACjB,2BAA4B,AACpC,iBAAmB,CACpB,AACD,2CACE,WAAY,AACZ,WAAa,CACd,AACD,6CACE,cAAe,AACf,mBAAoB,AACpB,gBAAkB,CACnB,AACD,oDACE,aAAe,CAChB,AACD,sDACE,kBAAoB,CACrB,AACD,+BACE,mBAAoB,AACpB,sBAAuB,AACvB,gBAAiB,AACjB,iBAAkB,AAClB,UAAY,CACb,AACD,6CACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,mDACE,oBAAqB,AACrB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,cAAgB,CACjB,AACD,yDACE,qBAAsB,AACtB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,cAAe,AACf,kBAAoB,CACrB,AACD,2CACE,iBAAmB,CACpB,AACD,oCACE,aAAe,CAChB,AACD,+BACE,sBAAuB,AACvB,eAAiB,CAClB,AACD,yCACE,YAAa,AACb,oBAAqB,AACrB,iBAAkB,AAClB,qBAAuB,AACvB,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,iBAAmB,CACpB,AACD,qCACE,UAAY,CACb",file:"taskList.vue",sourcesContent:["\n.wrap[data-v-2e4cda85] {\n  background: #fff;\n  padding-left: 1.6rem;\n  margin-top: 1.2rem;\n}\n.wrap .header[data-v-2e4cda85] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 1.3rem;\n  padding-top: 1.3rem;\n}\n.wrap .header .img[data-v-2e4cda85] {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n.wrap .header .jd[data-v-2e4cda85] {\n  display: inline-block;\n  font-size: 1.2rem;\n  color: #000;\n  margin-left: 0.4rem;\n  vertical-align: middle;\n}\n.wrap .header .slot[data-v-2e4cda85] {\n  font-size: 1.2rem;\n  color: #ff3341;\n  margin-right: 1.6rem;\n}\n.wrap .header .gray[data-v-2e4cda85] {\n  color: #666;\n}\n.wrap .shopName[data-v-2e4cda85] {\n  padding-bottom: 1.2rem;\n  margin-top: 2rem;\n}\n.wrap .shopName h2[data-v-2e4cda85] {\n  width: 17rem;\n  font-size: 1.4rem;\n  color: #08090a;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.wrap .shopConten[data-v-2e4cda85] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: 1.2rem;\n}\n.wrap .shopConten .picImg[data-v-2e4cda85] {\n  width: 8rem;\n  height: 8rem;\n}\n.wrap .shopConten .shopText[data-v-2e4cda85] {\n  margin-top: 8%;\n  margin-left: 1.6rem;\n  font-size: 1.2rem;\n}\n.wrap .shopConten .shopText .color[data-v-2e4cda85] {\n  color: #e6a545;\n}\n.wrap .shopConten .shopText .yongjin[data-v-2e4cda85] {\n  margin-top: 1.25rem;\n}\n.wrap .detail[data-v-2e4cda85] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.2rem;\n  margin-top: 2rem;\n  font-size: 1.2rem;\n  color: #666;\n}\n.wrap .detail .detail_first[data-v-2e4cda85] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.wrap .detail .detail_first .copy[data-v-2e4cda85] {\n  margin-right: 1.6rem;\n  font-size: 1rem;\n  padding: 4px 8px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.wrap .detail .detail_first .taskNumber[data-v-2e4cda85] {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 14.5rem;\n  vertical-align: top;\n}\n.wrap .detail .detail_two[data-v-2e4cda85] {\n  margin-top: 1.1rem;\n}\n.wrap .detail .red[data-v-2e4cda85] {\n  color: #ff3341;\n}\n.wrap .bottom[data-v-2e4cda85] {\n  padding-bottom: 1.2rem;\n  overflow: hidden;\n}\n.wrap .bottom .appraise[data-v-2e4cda85] {\n  float: right;\n  margin-right: 1.6rem;\n  font-size: 1.4rem;\n  padding: 0.8rem 1.9rem;\n  cursor: pointer;\n  color: #ff3341;\n  margin-top: 1.2rem;\n  border-radius: 3px;\n}\n.wrap .bottom .grey[data-v-2e4cda85] {\n  color: #000;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=8.f674c7c20c367e0cb50c.js.map