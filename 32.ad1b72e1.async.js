(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{ceP7:function(e,a,t){"use strict";var l=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("g9YV");var d=l(t("wCAj"));t("5Dmo");var n=l(t("3S7+"));t("jCWc");var r=l(t("kPKH"));t("14J3");var s=l(t("BMrR"));t("IzEo");var u=l(t("bx4M")),i=t("RBnf"),o=t("Y2fQ"),f=l(t("q1tI")),c=l(t("ZhIB")),m=t("ucLW"),g=l(t("Hq6x")),y=l(t("byNY")),h=l(t("WD6q")),E=[{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return f.default.createElement("a",{href:"/"},e)}},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:h.default.alignRight},{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return f.default.createElement(y.default,{flag:1===a.status?"down":"up"},f.default.createElement("span",{style:{marginRight:4}},e,"%"))}}],b=function(e){var a=e.loading,t=e.visitData2,l=e.searchData,y=e.dropdownGroup;return f.default.createElement(u.default,{loading:a,bordered:!1,title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:y,style:{height:"100%"}},f.default.createElement(s.default,{gutter:68,type:"flex"},f.default.createElement(r.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.search-users",defaultMessage:"search users"}),f.default.createElement(n.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(i.InfoCircleOutlined,{style:{marginLeft:8}}))),gap:8,total:(0,c.default)(12321).format("0,0"),status:"up",subTotal:17.1}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t})),f.default.createElement(r.default,{sm:12,xs:24,style:{marginBottom:24}},f.default.createElement(g.default,{subTitle:f.default.createElement("span",null,f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),f.default.createElement(n.default,{title:f.default.createElement(o.FormattedMessage,{id:"dashboardandanalysis.analysis.introduce",defaultMessage:"introduce"})},f.default.createElement(i.InfoCircleOutlined,{style:{marginLeft:8}}))),total:2.7,status:"down",subTotal:26.2,gap:8}),f.default.createElement(m.MiniArea,{line:!0,height:45,data:t}))),f.default.createElement(d.default,{rowKey:function(e){return e.index},size:"small",columns:E,dataSource:l,pagination:{style:{marginBottom:0},pageSize:5}}))},p=b;a.default=p}}]);