(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{UfgR:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("p0pE")),u=n(r("d6i3")),s=r("jyhV"),c={namespace:"accountAndcenter",state:{currentUser:{},list:[]},effects:{fetchCurrent:u.default.mark(function e(t,r){var n,a,c;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,e.next=3,n(s.queryCurrent);case 3:return c=e.sent,e.next=6,a({type:"saveCurrentUser",payload:c});case 6:case"end":return e.stop()}},e)}),fetch:u.default.mark(function e(t,r){var n,a,c,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,a=r.call,c=r.put,e.next=4,a(s.queryFakeList,n);case 4:return i=e.sent,e.next=7,c({type:"queryList",payload:Array.isArray(i)?i:[]});case 7:case"end":return e.stop()}},e)})},reducers:{saveCurrentUser:function(e,t){return(0,a.default)({},e,{currentUser:t.payload||{}})},queryList:function(e,t){return(0,a.default)({},e,{list:t.payload})}}},i=c;t.default=i},jyhV:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryCurrent=c,t.queryFakeList=p;var a=n(r("d6i3")),u=n(r("1l/V")),s=n(r("sy1d"));function c(){return i.apply(this,arguments)}function i(){return i=(0,u.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/currentUser"));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=(0,u.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/fake_list",{params:t}));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}}}]);