(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"1cd9":function(e,t,a){"use strict";a("6123");var s=d(a("b0ce")),i=d(a("a0ed"));function d(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},6429:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{isSelect:!1,addressList:[{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0},{id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深北小道2222号有名公寓502"},isDefault:!1},{id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1},{id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!1}]}},onShow:function(){var t=this;e.getStorage({key:"delAddress",success:function(a){var s=t.addressList.length;if(a.data.hasOwnProperty("id"))for(var i=0;i<s;i++)if(t.addressList[i].id==a.data.id){t.addressList.splice(i,1);break}e.removeStorage({key:"delAddress"})}}),e.getStorage({key:"saveAddress",success:function(a){var s=t.addressList.length;if(a.data.hasOwnProperty("id")){for(var i=0;i<s;i++)if(t.addressList[i].id==a.data.id){t.addressList.splice(i,1,a.data);break}}else{var d=t.addressList[s-1];d++,a.data.id=d,t.addressList.push(a.data)}e.removeStorage({key:"saveAddress"})}})},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{edit:function(t){e.setStorage({key:"address",data:t,success:function(){e.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){e.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&e.setStorage({key:"selectAddress",data:t,success:function(){e.navigateBack()}})}}};t.default=a}).call(this,a("543d")["default"])},"92e9":function(e,t,a){"use strict";var s=a("f5fe"),i=a.n(s);i.a},a0ed:function(e,t,a){"use strict";a.r(t);var s=a("e718"),i=a("a5e3");for(var d in i)"default"!==d&&function(e){a.d(t,e,function(){return i[e]})}(d);a("92e9");var n=a("2877"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},a5e3:function(e,t,a){"use strict";a.r(t);var s=a("6429"),i=a.n(s);for(var d in s)"default"!==d&&function(e){a.d(t,e,function(){return s[e]})}(d);t["default"]=i.a},e718:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("view",{staticClass:"content"},[a("view",{staticClass:"list"},e._l(e.addressList,function(t,s){return a("view",{key:s,staticClass:"row",attrs:{eventid:"a0134320-1-"+s},on:{tap:function(a){e.select(t)}}},[a("view",{staticClass:"left"},[a("view",{staticClass:"head"},[e._v(e._s(t.head))])]),a("view",{staticClass:"center"},[a("view",{staticClass:"name-tel"},[a("view",{staticClass:"name"},[e._v(e._s(t.name))]),a("view",{staticClass:"tel"},[e._v(e._s(t.tel))]),t.isDefault?a("view",{staticClass:"default"},[e._v("默认")]):e._e()]),a("view",{staticClass:"address"},[e._v(e._s(t.address.region.label)+" "+e._s(t.address.detailed))])]),a("view",{staticClass:"right"},[a("view",{staticClass:"icon bianji",attrs:{eventid:"a0134320-0-"+s},on:{tap:function(a){a.stopPropagation(),e.edit(t)}}})])])}))]),a("view",{staticClass:"add"},[a("view",{staticClass:"btn",attrs:{eventid:"a0134320-2"},on:{tap:e.add}},[a("view",{staticClass:"icon tianjia"}),e._v("新增地址")])])])},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},f5fe:function(e,t,a){}},[["1cd9","common/runtime","common/vendor"]]]);