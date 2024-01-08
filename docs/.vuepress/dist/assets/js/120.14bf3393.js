(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{573:function(t,e,i){"use strict";i.r(e);var _=i(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("Gas 对ENULS网络至关重要。 正是这种燃料使它能够运行，正如车辆需要汽油一样。")]),t._v(" "),t._m(0),t._v(" "),i("p",[t._v("为了更好地理解此页面，推荐先阅读"),i("router-link",{attrs:{to:"./../transactions/"}},[t._v("交易")]),t._v("和 "),i("router-link",{attrs:{to:"./../evm/"}},[t._v("EVM")]),t._v("。")],1),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("Gas 是指在ENULS网络上执行特定操作所需的计算工作量。")]),t._v(" "),i("p",[t._v("由于每笔ENULS交易都需要计算资源才能执行，每笔交易都需要付费。 在这个方面上，Gas 是指在ENULS成功进行交易所需的费用。")]),t._v(" "),i("p",[t._v("本质上，Gas 费用是ENULS的货币ENULS (NULS) 支付的。 Gas 价格以 Gwei 标明，Gwei 本身就是 NULS 的一个单位――每个 Gwei 等于 0.000000001 NULS (10"),i("sup",[t._v("-9")]),t._v(" NULS)。 例如，您可以说您的 Gas 成本为 1 Gwei，而不是说您的 Gas 成本为 0.000000001 NULS。 “gwei”一词本身表示“giga-wei”，等于 1,000,000,000 wei。 Wei 本身（以 "),i("a",{attrs:{href:"https://www.investopedia.com/terms/b/bmoney.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("b-money"),i("OutboundLink")],1),t._v(" 的发明者 "),i("a",{attrs:{href:"https://wikipedia.org/wiki/Wei_Dai",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wei Dai"),i("OutboundLink")],1),t._v(" 命名）是 NULS 中最小的单位。")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("ENULS网络交易费的计算方式在 2021 年 8 月的伦敦升级后发生了改变。 以下回顾了过去的工作方式：")]),t._v(" "),i("p",[t._v("假设 Alice 需要支付 1 NULS 给 Bob。 在交易中，燃料限额为 21,000 单位，燃料的价格是 200 gwei。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("假设 Jordan 需要向 Taylor 支付 1 个NULS。 在交易中，燃料限额为 21,000 单位，基础费是 10 gwei。 Jordan 支付了 2 gwei 作为小费。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("当 Jordan 转账时，将从 Jordan 帐户中扣除 1.000252 个NULS。 Taylor 的帐户增加 1.0000 个NULS。 验证者收到 0.000042 个NULS的小费。 0.00021 个NULS的基础费被销毁。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("在伦敦升级之前，ENULS具有固定大小的区块。 在网络需求高峰期，这些区块满负荷运行。 因此，用户常常不得不等到需求量从高峰降低后才能将交易添加到区块中，这导致用户体验很糟糕。")]),t._v(" "),i("p",[t._v("伦敦升级为ENULS引入了大小可变的区块。 每个区块的目标大小为 1500 万单位燃料，但区块的大小将根据网络需求增减，但不得超过 3000 万单位燃料的区块大小限制（目标区块大小的 2 倍）。 协议通过 "),i("em",[t._v("tâtonnement")]),t._v(" 过程使均衡区块大小平均达到 1,500 万单位燃料。 这意味着如果区块大小超出目标区块大小，协议将增加下一个区块的基础费。 同样，如果区块大小小于目标区块大小，协议将减少基础费。 基础费的调整金额与当前区块大小和目标区块大小的差距成比例。 "),i("router-link",{attrs:{to:"./../blocks/"}},[t._v("更多关于区块的信息")]),t._v("。")],1),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("每个区块都有一个基础费作为底价。 要想有资格添加到区块中，燃料费用报价必须至少等于基础费。 基础费独立于当前区块计算，是由当前区块之前的区块决定的，这使得用户更容易预测交易费。 当区块被开采时，其基础费将被“销毁”并退出流通。")]),t._v(" "),i("p",[t._v("基础费是用一个公式计算的，该公式将前一个区块的大小（所有交易中使用的燃料数量）与目标大小进行比较。 如果超过目标区块大小，每个区块的基础费将最多增加 12.5%。 这种指数级增长使得区块大小无限期保持高位在经济上不可行。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("还请注意，由于在处理完整区块时基础费增加的速度，我们不太可能看到长时间出现完整区块高峰。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("在伦敦升级之前，矿工获得区块中所含全部交易的总燃料费。")]),t._v(" "),i("p",[t._v("由于新的基础费被销毁，伦敦升级引入了优先费（小费），激励矿工将交易添加到区块中。 如果没有小费，矿工会发现开采空区块在经济上可行，因为他们会获得相同的区块奖励。 在正常情况下，一笔金额不大的小费为矿工添加交易提供了极小的激励。 对于需要在同一区块中优先执行的交易，需要提供更高的小费，力争使出价高于竞争交易。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),i("p",[t._v("伦敦升级带来的主要好处之一是提升了用户在设定交易费时的体验。 对于支持该升级的钱包，用户无需明确说明愿意支付多少费用来完成交易，钱包提供商将自动设置推荐的交易费（基础费 + 建议优先费），以便降低用户面临的复杂程度。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),i("p",[t._v("简而言之，燃料费用有助于确保ENULS网络的安全。 在网络上执行的每次计算都需要收费，这样可以防止不良行为者给网络带来垃圾信息。 为了防止代码中出现无意或恶意的无限循环或其他计算浪费，要求每个交易对可以采用的代码执行计算步骤设置一个限制。 基本计算单位是“燃料”。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),i("p",[t._v("燃料限额是指你愿意在交易中消耗的最大燃料数量。 涉及智能合约]的更复杂交易需要进行更多的计算工作，因此相比简单的支付，它们需要更高的燃料限额。 标准NULS转账要求燃料限额为 21,000 单位燃料。")]),t._v(" "),i("p",[t._v("例如，如果你对简单的NULS转账设置 50,000 单位燃料限额，ENULS虚拟机将消耗 21,000 单位，你将收到剩余的 29,000 单位。 然而，如果你设置的燃料太少，比如说，对于简单的NULS转账，设置燃料限额为 20,000 单位，ENULS虚拟机将消耗 20,000 单位燃料并尝试完成交易，但不会完成。 然后，ENULS虚拟机回滚所有变化，但由于矿工已经完成了价值 20k 单位燃料的工作，这些燃料就被消耗了。")]),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("燃料费高是由于ENULS广受欢迎。 在ENULS进行任何操作都需要消耗燃料，并且每个区块的燃料空间有限。 费用括计算费用、存储或操作数据费用或转移代币费用，这些操作消耗不同数量的“燃料”单位。 随着去中心化应用程序的功能变得更加复杂，智能合约执行的操作数量也会增加，即每笔交易在有限大小的区块内占用更多空间。 如果需求量太大，用户必须提供更高的小费，力争使出价高于其他用户的交易。 小费越高，交易进入下一个区块的可能性就越大。")]),t._v(" "),i("p",[t._v("光靠燃料价格并不能实际决定我们必须为特定交易支付的金额。 为了计算交易费，我们必须将使用的燃料乘以基础燃料费，后者以 Gwei 为单位。")]),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("如果你希望降低NULS的燃料成本，可以设置小费来表明交易的优先级。 矿工将“处理”并执行每单位燃料小费更高的交易，因为他们可以保留你支付的小费；矿工不太愿意执行小费较低的交易。")]),t._v(" "),t._m(24),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.blocknative.com/gas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocknative 的燃料平台"),i("OutboundLink")],1),t._v(" "),i("em",[t._v("由 Blocknative 的全局内存池数据平台提供支持的燃料估算应用程序接口")])])]),t._v(" "),t._m(25),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://defiprime.com/gas",target:"_blank",rel:"noopener noreferrer"}},[t._v("ENULS Gas 详解"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://medium.com/coinmonks/8-ways-of-reducing-the-gas-consumption-of-your-smart-contracts-9a506b339c0a",target:"_blank",rel:"noopener noreferrer"}},[t._v("减少智能合约的 gas 消耗"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://blockgeeks.com/guides/proof-of-work-vs-proof-of-stake/",target:"_blank",rel:"noopener noreferrer"}},[t._v("权益证明与工作量证明"),i("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[this._v("#")]),this._v(" 前提条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是-gas？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-gas？"}},[this._v("#")]),this._v(" 什么是 Gas？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"伦敦升级之前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伦敦升级之前"}},[this._v("#")]),this._v(" 伦敦升级之前")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("总费用为:"),e("code",[this._v("燃料单位（限额） * 燃料单价")]),this._v(" 例如 "),e("code",[this._v("21,000 * 200 = 4,200,000 gwei")]),this._v(" 或者 0.0042 NULS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"伦敦升级之后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伦敦升级之后"}},[this._v("#")]),this._v(" 伦敦升级之后")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在，总费用为："),e("code",[this._v("units of gas used * (base fee + priority fee)")]),this._v("，其中 "),e("code",[this._v("base fee")]),this._v(" 是协议设置的值，"),e("code",[this._v("priority fee")]),this._v(" 是用户设置的值，即给验证者的小费。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("即，"),e("code",[this._v("21,000 * (10 + 2) = 252,000 gwei")]),this._v(" 或 0.000252 个NULS。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("此外，Jordan 还可以为交易设定最高费用 ("),e("code",[this._v("maxFeePerGas")]),this._v(")。 最高费用与实际费用之间的差额将退还 Jordan。即 "),e("code",[this._v("refund = max fee - (base fee + priority fee)")]),this._v("。 Jordan 可以为要执行的交易设置一个最高支付金额，而不用担心在执行交易时“超额”支付基础费。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"区块大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区块大小"}},[this._v("#")]),this._v(" 区块大小")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"基础费"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础费"}},[this._v("#")]),this._v(" 基础费")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("区块编号")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("已包含燃料")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("费用增加")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("当前基本费用")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("15M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("0%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("0%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("100 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("112.5 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("4")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("126.6 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("5")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("142.4 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("6")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("160.2 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("7")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("180.2 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("8")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("202.7 gwei")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("相对于伦敦升级之前的燃料拍卖市场，这种交易费机制的变化使费用更容易预测。 根据以上表格，要在 9 号区块创建交易，钱包会让用户明确知晓，要将交易添加到下一个区块的"),e("strong",[this._v("最大基础费")]),this._v("等于 "),e("code",[this._v("current base fee * 112.5%")]),this._v(" 或 "),e("code",[this._v("202.8 gwei * 112.5% = 228.1 gwei")]),this._v("。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("区块编号")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("已包含燃料")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("费用增加")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("当前基本费用")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("30")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2705.6 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("...")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("...")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("...")])]),t._v(" "),i("tr",[i("td",[t._v("50")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("28531.3 gwei")])]),t._v(" "),i("tr",[i("td",[t._v("...")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("...")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("...")])]),t._v(" "),i("tr",[i("td",[t._v("100")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("30M")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("12.5%")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("10302608.6 gwei")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"优先费（小费）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先费（小费）"}},[this._v("#")]),this._v(" 优先费（小费）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"最高费用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最高费用"}},[this._v("#")]),this._v(" 最高费用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要在网络上执行交易，用户可以为他们愿意支付的交易执行费用指定最高限额。 此可选参数称为 "),e("code",[this._v("maxFeePerGas")]),this._v("。 为了执行交易，最高费用必须超过基础费和小费的总和。 交易完成后，会退还给交易发送人最高费用与基础费和小费总和之间的差额。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"计算费用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算费用"}},[this._v("#")]),this._v(" 计算费用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"eip-1559-eip-1559"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eip-1559-eip-1559"}},[this._v("#")]),this._v(" EIP-1559 {#eip-1559}")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在伦敦升级中实现的 EIP-1559 使得交易费机制比以前的燃料价格竞拍更加复杂，但优点是提高了燃料费用的可预测性，使交易费市场更加高效。 用户可以在提交交易时设定 "),e("code",[this._v("maxFeePerGas")]),this._v("（对应于他们愿意为执行交易支付多少费用），他们清楚支付金额将不会超过燃料的市场价格 ("),e("code",[this._v("baseFeePerGas")]),this._v(")，并且多支付的金额将在减去小费后退还。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么存在燃料费用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么存在燃料费用？"}},[this._v("#")]),this._v(" 为什么存在燃料费用？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("尽管交易中包含费用限制，但交易中未使用的所有燃料将退还给用户（即退还 "),e("code",[this._v("max fee - (base fee + tip)")]),this._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是燃料限额？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是燃料限额？"}},[this._v("#")]),this._v(" 什么是燃料限额？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么燃料费会变得如此高？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么燃料费会变得如此高？"}},[this._v("#")]),this._v(" 为什么燃料费会变得如此高？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"降低燃料成本的策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降低燃料成本的策略"}},[this._v("#")]),this._v(" 降低燃料成本的策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关工具"}},[this._v("#")]),this._v(" 相关工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"延伸阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#延伸阅读"}},[this._v("#")]),this._v(" 延伸阅读")])}],!1,null,null,null);e.default=a.exports}}]);