webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},CIaC:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("CIaC")},null,null).exports,u=a("/ocq"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var i=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(t){a("Ugm9")},"data-v-694cd902",null).exports,l=a("mtWM"),c=a.n(l),d=a("gjrH"),v=a.n(d),m={name:"editYoutubeId",props:{},data:function(){return{youtubeList:null,categoryList:null,formInput:{youtubeid:null,youtubename:null,categoryid:null,insuser:"catDaisuke",delflg:"0"}}},created:function(){var t=this;c.a.get("https://emotion-api-project-ibm.herokuapp.com/youtube/all").then(function(e){t.$data.youtubeList=e.data,c.a.get("https://emotion-api-project-ibm.herokuapp.com/category").then(function(e){t.$data.categoryList=e.data}).catch(function(t){alert("test"),console.log(t)})}).catch(function(t){alert("通信に失敗しました"),console.log(t)})},methods:{helpCagetory:function(){for(var t="カテゴリは以下から選択してください<br>",e=0;e<this.$data.categoryList.length;e++)t=t+this.$data.categoryList[e].categoryid+this.$data.categoryList[e].categoryname+"<br>";v.a.alert(t)},helpYoutubeId:function(){v.a.alert('youtubeIdとは、youtubeを一意に特定するIDです。URLのv=以降の部分です。<br>詳細は<a href="https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1161467451">リンク</a>をご覧ください。')},submit:function(){c.a.post("https://emotion-api-project-ibm.herokuapp.com/youtube",{youtubeid:this.$data.formInput.youtubeid,youtubename:this.$data.formInput.youtubename,categoryid:this.$data.formInput.categoryid,insuser:this.$data.formInput.insuser,delflg:this.$data.formInput.delflg}).then(function(t){console.log(t.data),null===t||null===t.data||void 0===t.data||""===t.data?alert("入力に誤りがあります"):alert("登録完了しました。画面を更新してください")}).catch(function(t){alert("登録に失敗しました"),console.log(t)})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table table-fixed table-striped"},[a("thead",[a("tr",[a("td",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.newModal",modifiers:{newModal:!0}}]},[t._v("new youtube")])],1),t._v(" "),a("td",[t._v("YoutubeId")]),t._v(" "),a("td",[t._v("画面表示名")]),t._v(" "),a("td",[t._v("カテゴリ")]),t._v(" "),a("td",[t._v("削除フラグ")])])]),t._v(" "),a("tbody",t._l(t.youtubeList,function(e){return a("tr",{key:e.youtubeid},[a("td",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.editModal",modifiers:{editModal:!0}}]},[t._v("edit")])],1),t._v(" "),a("td",[t._v(t._s(e.youtubeid))]),t._v(" "),a("td",[t._v(t._s(e.youtubename))]),t._v(" "),a("td",[t._v(t._s(e.categoryid))]),t._v(" "),a("td",[t._v(t._s(e.delflg))])])}))]),t._v(" "),a("b-modal",{attrs:{id:"editModal"}},[t._v("\n        工事中\n    ")]),t._v(" "),a("b-modal",{attrs:{id:"newModal",size:"lg"}},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"2"}},[t._v("youtubeid")]),t._v(" "),a("b-col",{attrs:{sm:"2"}},[a("b-btn",{on:{click:t.helpYoutubeId}},[t._v("?")])],1),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{model:{value:t.formInput.youtubeid,callback:function(e){t.$set(t.formInput,"youtubeid",e)},expression:"formInput.youtubeid"}})],1)],1),t._v(" "),a("b-row",[a("b-col",{attrs:{sm:"2"}},[t._v("画面表示名")]),t._v(" "),a("b-col",{attrs:{sm:"2"}}),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{model:{value:t.formInput.youtubename,callback:function(e){t.$set(t.formInput,"youtubename",e)},expression:"formInput.youtubename"}})],1)],1),t._v(" "),a("b-row",[a("b-col",{attrs:{sm:"2"}},[t._v("カテゴリID")]),t._v(" "),a("b-col",{attrs:{sm:"2"}},[a("b-btn",{on:{click:t.helpCagetory}},[t._v("?")])],1),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{attrs:{type:"number"},model:{value:t.formInput.categoryid,callback:function(e){t.$set(t.formInput,"categoryid",e)},expression:"formInput.categoryid"}})],1)],1),t._v(" "),a("b-row",[a("b-col",{attrs:{sm:"2"}},[t._v("投入者ID")]),t._v(" "),a("b-col",{attrs:{sm:"2"}}),t._v(" "),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{model:{value:t.formInput.insuser,callback:function(e){t.$set(t.formInput,"insuser",e)},expression:"formInput.insuser"}})],1)],1)],1),t._v(" "),a("b-btn",{on:{click:t.submit}},[t._v("登録")])],1)],1)},staticRenderFns:[]};var _=a("VU/8")(m,b,!1,function(t){a("QZkW")},"data-v-2d843549",null).exports;o.a.use(u.a);var p=new u.a({routes:[{path:"/",name:"HelloWorld",component:i},{path:"/editYoutube",name:"PageEditYoutubeId",component:_}]}),f=a("e6fC");a("Jmt5"),a("9M+g");o.a.use(f.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},QZkW:function(t,e){},Ugm9:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2662baae7c11244b8251.js.map