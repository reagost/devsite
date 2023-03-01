(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{553:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("区块链项目在运行过程中，所产生的链上的数据，都会相互广播，每个节点也会存储数据。但这些数据，并不能直观的展示给用户，且用户需要查询相关的数据也很麻烦。public-service指在给用户提供一个通过浏览器或网页钱包查询链上数据和相关统计信息。")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("解析节点钱包已同步到的区块，将数据存入到可提供关系查询和统计的数据库中。")]),t._v(" "),s("p",[t._v("对外提供查询区块、交易、账户、共识信息、合约信息、统计信息等接口。")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("public-service属于辅助型模块，非底层核心模块，因此默认钱包启动后不会运行该模块。")]),t._v(" "),s("p",[t._v("运行public-service前服务器需要先安装数据库，默认实现是mongoDB数据库。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("负责调用底层模块接口和解析接口返回的数据")]),t._v(" "),s("p",[t._v("WalletRpcHandler：public-service调用其他模块RPC接口处理类")]),t._v(" "),s("p",[t._v("AnalysisHandler: public-service解析底层区块数据处理类")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("提供public-service数据库增删改查的接口与实现")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("public-service的数据结构，包括持久层、dto层")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("对外提供rpc接口，查询区块、交易、账户信息等")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("public-service同步区块和回滚区块的主业务接口")]),t._v(" "),s("p",[t._v("SyncService: 同步区块")]),t._v(" "),s("p",[t._v("RollbackService：回滚区块")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("public-service定时任务，包括同步区块任务、统计任务等")]),t._v(" "),s("p",[t._v("SyncBlockTask：同步区块的定时任务")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("参考"),s("router-link",{attrs:{to:"./account.html"}},[t._v("NULS2.0-API接口文档")])],1),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("缓存链上的常用数据，包括链信息、账户信息、共识信息、统计信息等。")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("调用底层区块模块接口，获取下一个区块，区块连续性验证成功后，存储数据到mongoDB，继续获取下一区块信息；若区块hash连续性验证失败，回滚当前已存储的最新块，直到连续性验证通过为止。")]),t._v(" "),s("p",[t._v("若获取不到下一区块，说明当前public-service已经解析到最新高度，则每过10秒，重新获取一次最新高度的区块并做解析和存储。")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("同步区块的主接口， 首先得处理区块奖励的统计，再根据不同交易，处理各个业务相关的数据，再处理轮次相关的信息，最后将解析完的数据存储到数据库。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"public-service模块设计文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-service模块设计文档"}},[this._v("#")]),this._v(" public-service模块设计文档")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总体概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总体概览"}},[this._v("#")]),this._v(" 总体概览")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"模块概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块概述"}},[this._v("#")]),this._v(" 模块概述")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"为什么要有public-service模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有public-service模块"}},[this._v("#")]),this._v(" 为什么要有public-service模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"public-service要做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-service要做什么"}},[this._v("#")]),this._v(" public-service要做什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"public-service在系统中的定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-service在系统中的定位"}},[this._v("#")]),this._v(" public-service在系统中的定位")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"功能设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能设计"}},[this._v("#")]),this._v(" 功能设计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"功能架构图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能架构图"}},[this._v("#")]),this._v(" 功能架构图")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/img/public-service-functions.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"接口说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[this._v("#")]),this._v(" 接口说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.analysis")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.db")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.model")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.rpc")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.service")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.task")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"模块rpc接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块rpc接口"}},[this._v("#")]),this._v(" 模块RPC接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"java特有的设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java特有的设计"}},[this._v("#")]),this._v(" Java特有的设计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"java实现细节简要说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java实现细节简要说明"}},[this._v("#")]),this._v(" JAVA实现细节简要说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.cache.ApiCache")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.task.SyncBlockTask")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("io.nuls.api.service.SyncService")])])}],!1,null,null,null);e.default=r.exports}}]);