(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"I/iY":function(t,e,a){"use strict";a.r(e);var s={name:"CardList",props:{cards:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},template:{type:String,default:"sent"}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.cards.length>0?a("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),a("tbody",t._l(t.cards,(function(e,s){return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),"sent"===t.template?a("td",[t._v(t._s(e.to.name))]):a("td",[t._v(t._s(e.from.name))]),t._v(" "),a("td",[a("img",{staticClass:"rounded w-25 img-thumbnail",attrs:{src:e.card_file}})])])})),0)]):t._e(),t._v(" "),t.loading?a("span",[t._v("Loading cards...")]):t._e(),t._v(" "),t.cards.length<=0&&!t.loading?a("span",[t._v("No cards found!")]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Id")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("To")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Card")])])])}],!1,null,null,null);e.default=r.exports}}]);