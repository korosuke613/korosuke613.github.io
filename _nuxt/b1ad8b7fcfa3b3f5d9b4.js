(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{171:function(t,e,o){"use strict";e.a={head:function(){return{title:this.meta.title,meta:[{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"description",name:"description",content:this.meta.description},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:"https://korosuke613.github.io"+this.meta.url}]}}}},172:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var r=function(t){return"ga('send', 'event', 'link', 'make', '".concat(t,"')")},n=[{href:"https://github.com/korosuke613/miyadai-sso-auto-login",ga:r("miyadai_auto_login"),day:"2018/08",title:"宮大SSO自動ログインスクリプト"},{href:"https://github.com/korosuke613/pict-java",ga:r("pict4java"),day:"2018/07",title:"PICTをJava/Kotlinから利用するJNAクラス"},{href:"https://hub.docker.com/r/korosuke613/etrobo-docker/",ga:r("etrobo_docker"),day:"2017/12",title:"ETロボコンのビルド環境Docker Image"},{href:"http://earth.cs.miyazaki-u.ac.jp/seminar/",ga:r("senmon2017"),day:"2017/10",title:"専門教育入門セミナーT 2017 in 片山（徹）研"},{href:"https://github.com/korosuke613/etrobocon2017",ga:r("ETrobocon2017"),day:"2017/09",title:"ETロボコン2017"},{href:"https://twitter.com/miya_330_bot",ga:r("MiyadaiOshiraseBot"),day:"2017/07",title:"宮大支援課お知らせBOT【非公式】"}]},215:function(t,e,o){"use strict";o.r(e);var r=o(172),n={layout:"default",mixins:[o(171).a],data:function(){return{items:r.a,meta:{title:"Activity",description:"今まで作ったもの？をまとめたページです。",url:this.$nuxt.$route.path}}}},c=o(9),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-12"},[o("h1",[t._v("Activity")]),t._v(" "),t._l(t.items,function(e){return o("div",{key:e.href},[o("a",{staticClass:"make",attrs:{href:e.href,target:"_blank",onClick:e.ga}},[o("span",{staticStyle:{color:"#000"}},[t._v(t._s(e.day))]),t._v("\n        "+t._s(e.title)+"\n      ")])])})],2),t._v(" "),o("div",{staticClass:"col-xs-12 text-right"},[o("nuxt-link",{attrs:{to:"/"}},[o("em",[t._v("戻る")])])],1)])},[],!1,null,null,null);e.default=component.exports}}]);