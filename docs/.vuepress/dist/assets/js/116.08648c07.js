(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{569:function(t,s,e){"use strict";e.r(s);var _=e(0),r=Object(_.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("对区块链最好的描述是将其描述为一个公共数据库，它由网络中的许多计算机更新和共享。")]),t._v(" "),e("p",[t._v('"区块"指的是数据和状态是按顺序批量或"区块"存储的。 如果你向别人发送 ENULS，需要将交易数据添加到一个区块中才算成功。')]),t._v(" "),e("p",[t._v('"链"指的是每个区块加密引用其父块。 换句话说，区块被链接在一起。 在不改变所有后续区块的情况下，区块内数据是无法改变，但改变后续区块需要整个网络的共识。')]),t._v(" "),e("p",[t._v("网络中的每台计算机都必须就每个新区块和链达成一致。 这些计算机被称为“节点”。 节点保证所有与区块链交互的人都有相同的数据。 要完成此分布式协议，区块链需要一个共识机制。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("ENULS 是一条区块链，其中嵌入了计算机。 它是以去中心化、无需许可、抗审查的方式构建应用程序和组织的基础。")]),t._v(" "),e("p",[t._v("在 ENULS 宇宙中，有一台规范化计算机（称为 ENULS 虚拟机，或 EVM），其状态得到 ENULS 网络中所有人的一致同意。 每个参与 ENULS 网络的人（每个 ENULS 节点）都会保存一份该计算机的状态。 此外，任何参与者都可以广播请求这台计算机进行任意计算。 每当广播这样的请求时，网络上的其他参与者就会检查、验证并进行（“执行”）该计算。 该执行会导致 ENULS 虚拟机的状态变化，并且在整个网络中传播。")]),t._v(" "),e("p",[t._v("计算请求被称为交易请求；所有交易的记录以及 ENULS 虚拟机的当前状态存储在区块链中，而区块链又由所有节点存储并达成一致。")]),t._v(" "),e("p",[t._v("加密机制确保一旦交易被验证为有效并添加到区块链中后，之后就无法被篡改。 同样的机制还确保所有交易都以适当的“权限”签名和执行（除了 Alice 本人，任何人都不能从 Alice 的帐户发送数字资产）。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("任何广播交易请求的参与者还必须向网络提供一定数量的 NULS 作为奖金。 网络将把这种奖金奖励给最终验证交易、执行交易、将其提交到区块链并广播到网络的任何人。")]),t._v(" "),e("p",[t._v("支付的 NULS 数量对应于进行计算所需的资源。 这类奖励也可以阻止恶意参与者通过请求执行无穷计算或其他资源密集型脚本来故意堵塞网络，因为这些参与者必须为计算资源付费。")]),t._v(" "),e("p",[t._v("NULS 还用于通过以下三种主要方式为网络提供加密经济安全性：1) 作为一种奖励方式，奖励提议区块或指出其他验证者不诚实行为的验证者；2) 由验证者抵押，作为遏制不诚实行为的抵押品 — 如果验证者试图行为不端，它们的 NULS 可能会被销毁；3) 用于对新提议的区块的“投票”进行加权，并影响共识机制的分叉选择部分。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("实际上，参与者不会每次在 ENULS 虚拟机上请求计算时都编写新代码。 相反，应用程序开发者将程序（可重用的代码片段）上传到 ENULS 虚拟机状态，用户发出请求以使用不同参数执行这些代码片段。 我们将这些上传至网络并由网络执行的程序称为智能合约。")]),t._v(" "),e("p",[t._v("简单来说，你可以把智能合约想象成一种自动售货机：通过特定参数调用脚本后，如果满足某些特定条件，就会执行一些操作或计算。 例如，如果调用者将 NULS 发送给特定的接收者，简单的卖方智能合约就可以创建和分配数字资产所有权。")]),t._v(" "),e("p",[t._v("任何开发者都可以创建智能合约，并使用区块链作为其数据层，将其公开给网络，但要向网络支付 NULS。 然后，任何用户都可以调用智能合约来执行其代码，并再次向网络支付费用。")]),t._v(" "),e("p",[t._v("因此，通过智能合约，开发者可以任意构建和部署面向用户的复杂应用程序和服务，例如市场、金融工具、游戏等。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("所有在 ENULS 网络历史上提交给 ENULS 网络的区块的序列。 如此命名，是因为每个区块都包含对前一个区块的引用，这有助于保持所有区块的顺序，因而维持了精确历史记录的顺序。")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("ENULS 虚拟机是一个全局虚拟计算机，ENULS 网络中的每个参与者都会存储并一致同意其状态。 任何参与者都可以请求在 ENULS 虚拟机上执行任意代码；代码执行会改变 ENULS 虚拟机的状态。")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("存储 ENULS 虚拟机状态的实体计算机。 节点间相互通信，传播关于 ENULS 状态的信息及其新的状态变化。 任何用户还可以通过广播来自节点的代码执行请求来请求代码执行。 ENULS 网络本身就是所有 ENULS 节点及其通信的集合。")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"./nodes-and-clients/"}},[t._v("有关节点的更多信息")])],1),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("帐户是存储 NULS 之处。 用户可以初始化帐户，将 NULS 存入帐户，并将自己帐户中的 NULS 转账给其他用户。 帐户和帐户余额存储在 ENULS 虚拟机中的一个大表格中，是 ENULS 虚拟机总体状态的一部分。")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"./accounts/"}},[t._v("有关帐户的更多信息")])],1),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("“交易请求”是表示 ENULS 虚拟机上的代码执行请求的正式术语。“交易”是指已完成的交易请求和相关的 ENULS 虚拟机状态变化。 任何用户都可以从节点向网络广播交易请求。 为了使交易请求影响一致同意的 ENULS 虚拟机状态，就必须由其他节点对其进行验证、执行并“提交到网络”。 执行任何代码都会导致 ENULS 虚拟机状态变化；一旦提交后，该状态变化将广播到网络中的所有节点。 以下为一些交易示例：")]),t._v(" "),t._m(11),t._v(" "),e("p",[e("router-link",{attrs:{to:"./transactions/"}},[t._v("有关交易的更多信息")])],1),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("交易量巨大，因此交易分批或分区块“提交”。 区块通常包含数十至数百笔交易。")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"./blocks/"}},[t._v("有关区块的更多信息")])],1)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是区块链？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是区块链？"}},[this._v("#")]),this._v(" 什么是区块链？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"enuls-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enuls-简介"}},[this._v("#")]),this._v(" ENULS 简介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是-nuls-？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nuls-？"}},[this._v("#")]),this._v(" 什么是 NULS ？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("NULS (ENULS)")]),this._v(" 是 ENULS 上的原生加密货币。 NULS 的目的是允许计算市场化。 这种市场为参与者提供了一种经济激励，以验证并执行交易请求，为网络提供计算资源。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是智能合约？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是智能合约？"}},[this._v("#")]),this._v(" 什么是智能合约？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[this._v("#")]),this._v(" 术语")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"区块链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区块链"}},[this._v("#")]),this._v(" 区块链")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"evm-enuls-虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#evm-enuls-虚拟机"}},[this._v("#")]),this._v(" EVM ENULS 虚拟机")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"nodes-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodes-节点"}},[this._v("#")]),this._v(" Nodes 节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"帐户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#帐户"}},[this._v("#")]),this._v(" 帐户")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"交易"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易"}},[this._v("#")]),this._v(" 交易")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("从我的帐户发送 X 个 NULS 到 Alice 的帐户。")]),this._v(" "),s("li",[this._v("将一些智能合约代码发布到 ENULS 虚拟机状态中。")]),this._v(" "),s("li",[this._v("使用 Y 参数执行 EVM 中 X 地址的智能合约代码。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"区块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区块"}},[this._v("#")]),this._v(" 区块")])}],!1,null,null,null);s.default=r.exports}}]);