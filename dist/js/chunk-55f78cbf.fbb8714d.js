(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55f78cbf"],{"96f4":function(t,a,e){var l=e("24fb");a=l(!1),a.push([t.i,".log[data-v-dfc15bd0]{width:1200px;height:300px;margin:0 auto}.log .header[data-v-dfc15bd0]{display:flex;align-items:center;height:70px;padding-top:10px}.log .header .label[data-v-dfc15bd0]{line-height:1}.log .header .input[data-v-dfc15bd0]{width:300px;height:32px;padding:0 10px;border-radius:4px;border:1px solid #e5e5e5;outline:none}.log .header .btn[data-v-dfc15bd0]{height:32px;padding:0 20px;margin-left:20px;background-color:$primary-color;color:#fff}.log .body[data-v-dfc15bd0]{height:calc(100% - 70px);padding-bottom:30px}.log .body .table-header-wrapper[data-v-dfc15bd0]{height:48px;border:1px solid #e5e5e5;border-radius:4px 4px 0 0;background-color:#f5f5f5}.log .body .table-header-wrapper .table-header[data-v-dfc15bd0]{width:100%;height:100%;table-layout:fixed;border-collapse:collapse;font-size:14px}.log .body .table-header-wrapper .table-header .row .column[data-v-dfc15bd0]{border-right:1px solid #e5e5e5}.log .body .table-header-wrapper .table-header .row .column[data-v-dfc15bd0]:last-child{border-right:none}.log .body .table-header-wrapper .table-header .row .column .cell[data-v-dfc15bd0]{padding:10px}.log .body .table-body-wrapper[data-v-dfc15bd0]{max-height:calc(100% - 48px);min-height:40px;overflow:hidden;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 4px 4px;box-sizing:content-box}.log .body .table-body-wrapper .table-body[data-v-dfc15bd0]{width:100%;table-layout:fixed;border-collapse:collapse}.log .body .table-body-wrapper .table-body .row[data-v-dfc15bd0]{height:48px}.log .body .table-body-wrapper .table-body .row .column[data-v-dfc15bd0]{border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.log .body .table-body-wrapper .table-body .row .column[data-v-dfc15bd0]:last-child{border-right:none}.log .body .table-body-wrapper .table-body .row .column .cell[data-v-dfc15bd0]{padding:10px;word-break:break-word}.log .body .table-body-wrapper .table-body .row:last-of-type .column[data-v-dfc15bd0]{border-bottom:none}.log .body .table-body-wrapper .empty[data-v-dfc15bd0]{padding:10px;font-size:14px;text-align:center}",""]),t.exports=a},f836:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"log"},[e("div",{staticClass:"header"},[e("label",{staticClass:"label"},[t._v("搜索：")]),e("input",{staticClass:"input",attrs:{placeholder:"请输入搜索的内容"}}),e("button",{staticClass:"btn btn-search"},[t._v("搜索")]),e("button",{staticClass:"btn btn-download",on:{click:t.handleDownload}},[t._v("下载")]),e("button",{staticClass:"btn btn-clear",on:{click:t.handleClearAll}},[t._v("清空所有日志")])]),e("div",{staticClass:"body"},[t._m(0),e("div",{staticClass:"table-body-wrapper"},[e("vue-scroll",[e("table",{staticClass:"table-body"},[e("colgroup",[e("col",{attrs:{width:"100"}}),e("col",{attrs:{width:"100"}}),e("col",{attrs:{width:"200"}}),e("col",{attrs:{width:"100"}})]),t._l(t.filterData,(function(a,l){return e("tr",{key:a.time+l,staticClass:"row"},[e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v(t._s(t._f("timeFilter")(a.time)))])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v(t._s(a.type))])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v(t._s(a.content))])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v(t._s(a.url))])])])}))],2),0===t.filterData.length?e("div",{staticClass:"empty"},[t._v("暂无数据")]):t._e()])],1)])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-header-wrapper"},[e("table",{staticClass:"table-header"},[e("colgroup",[e("col",{attrs:{width:"100"}}),e("col",{attrs:{width:"100"}}),e("col",{attrs:{width:"200"}}),e("col",{attrs:{width:"100"}})]),e("tr",{staticClass:"row"},[e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v("时间")])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v("类型")])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v("内容")])]),e("td",{staticClass:"column"},[e("div",{staticClass:"cell"},[t._v("位置")])])])])])}],o=(e("ac1f"),e("5319"),{name:"Log",inject:["monitor"],data:function(){return{data:this.monitor.get()}},computed:{filterData:function(){return this.data}},watch:{data:{handler:"setScrollHeight",immediate:!0}},methods:{setScrollHeight:function(){var t=this;this.$nextTick((function(){var a=t.$el.querySelector(".table-body-wrapper"),e=t.$el.querySelector(".table-body");a.style.height=e.scrollHeight+"px"}))},handleClearAll:function(){this.monitor.clear(),this.data=[]},handleDownload:function(){var t=JSON.stringify(this.filterData),a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download","log.txt"),a.style.display="none",document.body.appendChild(a),a.click(),document.removeChild(a)}},filters:{timeFilter:function(t){var a=new Date(t);return a.toLocaleDateString().replace(/\//g,"-")+"  "+a.toTimeString().replace(/\s.+$/,"")}}}),r=o,i=e("2dba"),s=e.n(i),c=e("96f4"),n=e.n(c),b={attributes:{shinmark:!0},insert:"head",singleton:!1},p=(s()(n.a,b),n.a.locals,e("2877")),h=Object(p["a"])(r,l,d,!1,null,"dfc15bd0",null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-55f78cbf.fbb8714d.js.map