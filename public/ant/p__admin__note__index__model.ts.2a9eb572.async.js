(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{QDV1:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryRule=l,t.addRule=s,t.updateRule=i,t.removeRule=f,t.forceDeleteRule=w,t.restoreRule=v;var r=n(a("d6i3")),u=n(a("1l/V")),c=n(a("sy1d"));function l(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes",{params:t}));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return p=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function i(e){return o.apply(this,arguments)}function o(){return o=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes/".concat(t.id),{method:"PUT",data:t}));case 1:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes/".concat(t.id),{method:"DELETE",data:t}));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes/".concat(t.id,"/forceDelete"),{method:"DELETE",data:t}));case 1:case"end":return e.stop()}},e)})),y.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/notes/".concat(t.id,"/restore"),{method:"PATCH",data:t}));case 1:case"end":return e.stop()}},e)})),m.apply(this,arguments)}},bYhT:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),c=a("QDV1"),l={namespace:"adminNote",state:{data:{list:[],pagination:{}}},effects:{fetch:u.default.mark(function e(t,a){var n,r,l,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(c.queryRule,n);case 4:return d=e.sent,e.next=7,l({type:"save",payload:d});case 7:case"end":return e.stop()}},e)}),add:u.default.mark(function e(t,a){var n,r,l,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,l=a.call,d=a.put,e.next=4,l(c.addRule,n);case 4:return s=e.sent,e.next=7,d({type:"new",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),update:u.default.mark(function e(t,a){var n,r,l,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,l=a.call,d=a.put,e.next=4,l(c.updateRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),destroy:u.default.mark(function e(t,a){var n,r,l,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,l=a.call,d=a.put,e.next=4,l(c.removeRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),forceDelete:u.default.mark(function e(t,a){var n,r,l,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,l=a.call,d=a.put,e.next=4,l(c.forceDeleteRule,n);case 4:return e.next=6,d({type:"remove",payload:n.id});case 6:r&&r();case 7:case"end":return e.stop()}},e)}),restore:u.default.mark(function e(t,a){var n,r,l,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,l=a.call,d=a.put,e.next=4,l(c.restoreRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,r.default)({},e,{data:t.payload})},new:function(e,t){return void 0!==e&&e.data.list.push(t.payload.data),(0,r.default)({data:t.payload},e)},edit:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,n){a.id===t.payload.data.id&&(e.data.list[n]=t.payload.data)}),(0,r.default)({data:t.payload},e)},remove:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,n){a.id===t.payload&&e.data.list.splice(n,1)}),(0,r.default)({data:t.payload},e)}}},d=l;t.default=d}}]);