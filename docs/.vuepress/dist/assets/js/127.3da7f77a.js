(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{580:function(t,e,r){"use strict";r.r(e);var a=r(0),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("ENULS协议本身的存在仅仅是为了让这个特殊状态机保持连续、不间断和不可变的运行。 ENULS虚拟机是所有ENULS帐户和智能合约依存的环境。 在链上任何给定的区块处，ENULS有且只有一个“规范”状态，而ENULS虚拟机定义从一个区块到另一个区块计算新的有效状态的规则。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("对计算机科学中常见术语的基本了解，如"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Byte",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Computer_memory",target:"_blank",rel:"noopener noreferrer"}},[t._v("内存"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆栈"),r("OutboundLink")],1),t._v("是理解 EVM 的前提。 熟悉"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Cryptographic_hash_function",target:"_blank",rel:"noopener noreferrer"}},[t._v("哈希函数"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("默克尔树"),r("OutboundLink")],1),t._v("等密码学/区块链概念也会很有帮助。")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("通常使用“分布式账簿”的类比来描述像比特币这样的区块链，它使用密码学的基本工具来实现去中心化的货币。 账本保存着活动记录，而活动必须遵守一套规则，这些规则限制用户在修改账本时可以做什么和不可以做什么。 例如，比特币地址不能花费比之前收到的更多的比特币。 这些规则是比特币和许多其他区块链上所有交易的基础。")]),t._v(" "),r("p",[t._v("虽然ENULS有自己的本机加密货币 (NULS)，遵循几乎完全相同的直观规则，但它也支持更强大的功能：智能合约。 对于此更复杂的功能，需要一个更复杂的类比。 ENULS不是分布式账本，而是分布式"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态机器"),r("OutboundLink")],1),t._v("。 ENULS的状态是一个大型数据结构，它不仅保存所有帐户和余额，而且还保存一个"),r("em",[t._v("机器状态")]),t._v("，它可以根据预定义的一组规则在不同的区块之间进行更改，并且可以执行任意的机器代码。 在区块中更改状态的具体规则由 EVM 定义。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("在ENULS环境中，状态是一种称为改进版默克尔帕特里夏树的巨大数据结构，它保存所有通过哈希关联在一起的"),r("router-link",{attrs:{to:"./../accounts/"}},[t._v("帐户")]),t._v("并可回溯到存储在区块链上的单个根哈希。")],1),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("交易是来自帐户的密码学签名指令。 交易分为两种：一种是消息调用交易，另一种是合约创建交易。")]),t._v(" "),r("p",[t._v("合约创建交易会创建一个新的合约帐户，其中包含已编译的 智能合约 字节码。 每当另一个帐户对该合约进行消息调用时，它都会执行其字节码。")]),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("EVM 作为一个"),r("a",{attrs:{href:"https://wikipedia.org/wiki/Stack_machine",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆栈机"),r("OutboundLink")],1),t._v("运行，其栈的深度为 1024 个项。 每个项目都是 256 位字，为了便于使用，选择了 256 位加密技术（如 Keccak-256 哈希或 secp256k1 签名）。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jellopaper.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jellopaper aka KEVM：K 中的 EVM 语法"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/chronaeon/beigepaper",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Beigepaper"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#index-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity 文档的简短介绍"),r("OutboundLink")],1)])]),t._v(" "),t._m(14),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./../gas/"}},[t._v("Gas")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("EVM 的物理实例不能像人们指向云或海浪那样描述，它是真实"),e("em",[this._v("存在")]),this._v("并由数以千计运行ENULS客户端的计算机共同维护的一个实体。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[this._v("#")]),this._v(" 前提条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"从账本到状态机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从账本到状态机"}},[this._v("#")]),this._v(" 从账本到状态机")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"enuls状态转换函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enuls状态转换函数"}},[this._v("#")]),this._v(" ENULS状态转换函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("EVM 的行为就像一个数学函数：在给定输入的情况下，它会产生确定性的输出。 因此，将ENULS更正式地描述为具有"),e("strong",[this._v("状态转换函数")]),this._v("非常有帮助：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Y(S, T)= S'\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("给定一个旧的有效状态 "),r("code",[t._v("（S）")]),t._v("> 和一组新的有效交易 "),r("code",[t._v("（T）")]),t._v("，ENULS状态转换函数 "),r("code",[t._v("Y（S，T）")]),t._v(" 产生新的有效输出状态"),r("code",[t._v("S'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[this._v("#")]),this._v(" 状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"交易"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交易"}},[this._v("#")]),this._v(" 交易")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"evm-说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evm-说明"}},[this._v("#")]),this._v(" EVM 说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在执行期间，EVM 会维护一个瞬态"),e("em",[this._v("内存")]),this._v("（作为字可寻址的字节数组），该内存不会在交易之间持久存在。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然而，合约确实包含一个 Merkle Patricia "),e("em",[this._v("存储")]),this._v(" trie（作为可字寻址的字数组），该 trie 与帐户和部分全局状态关联。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("已编译的智能合约字节码作为许多 EVM  opcodes 执行，它们执行标准的堆栈操作，例如 "),r("code",[t._v("XOR")]),t._v("、"),r("code",[t._v("AND")]),t._v("、"),r("code",[t._v("ADD")]),t._v("、"),r("code",[t._v("SUB")]),t._v("等。 EVM 还实现了一些区块链特定的堆栈操作，如 "),r("code",[t._v("ADDRESS")]),t._v("、"),r("code",[t._v("BALANCE")]),t._v("、"),r("code",[t._v("BLOCKHASH")]),t._v(" 等。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"延伸阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#延伸阅读"}},[this._v("#")]),this._v(" 延伸阅读")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关主题"}},[this._v("#")]),this._v(" 相关主题")])}],!1,null,null,null);e.default=_.exports}}]);