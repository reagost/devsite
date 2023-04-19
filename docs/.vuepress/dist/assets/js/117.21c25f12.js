(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{570:function(t,e,s){"use strict";s.r(e);var a=s(0),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[t._v("一个 ENULS 帐户是一个具有 NULS (ENULS) 余额的实体，可以在 ENULS 上发送交易。 帐户可以由用户控制，也可以作为智能合约部署。")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("帐户是一个很适合初学者的主题。 但为了帮助您更好地理解这个页面，我们建议您首先阅读我们的"),s("router-link",{attrs:{to:"./../intro/"}},[t._v("ENULS 简介")]),t._v("。")],1),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("ENULS 有两种帐户类型：")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("这两种帐户类型都能：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("ENULS 帐户有四个字段：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("帐户由公钥和私钥加密对组成。 它们有助于证明交易实际上是由发送者签名的，并防止伪造。 您的私钥是您用来签名交易的密钥，所以它保障您对与您帐户相关的资金进行管理。 您从未真正持有加密货币，您持有私钥 – 资金总是在 ENULS 的账本上。")]),t._v(" "),s("p",[t._v("这将防止恶意参与者广播虚假交易，因为您总是可以验证交易的发送者。")]),t._v(" "),s("p",[t._v("如果 Alice 想要从她自己的帐户发送 NULS 到 Bob 的帐户，Alice 需要创建交易请求并将其发送到网络进行验证。 ENULS 对公钥加密的使用确保了 Alice 可以证明她最初发起了交易请求。 没有加密机制，恶意对手 Eve 可以简单地公开广播一个看起来像“从 Alice 的帐户发送 5 NULS 到 Eve 帐户”的请求。而且没有人能够证实它不是来自 Alice 的。")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("当你想要创建一个帐户时，大多数库将生成一个随机的私钥。")]),t._v(" "),s("p",[t._v("私钥由 64 个十六进制字符组成，可以用密码加密保存。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("使用"),s("a",{attrs:{href:"https://wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("椭圆曲线数字签名算法"),s("OutboundLink")],1),t._v("从私钥生成公钥。 通过获取公钥 Keccak-256 哈希的最后 20 个字节并校验码前面添加 "),s("code",[t._v("0x")]),t._v("，可以为帐户获取公共地址。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("您需要一个私钥来签署消息和交易并输出签名。 然后其他人可以使用签名获取您的公钥，证明信息的作者。 在您的应用程序中，您可以使用 javascript 库向网络发送交易。")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("合约帐户也有一个 42 个字符组成的十六进制地址：")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("合约地址通常在将合约部署到 ENULS 区块链时给出。 地址产生自创建人的地址和从创建人地址发送的交易数量（“nonce”）。")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("ENULS 还有一另种类型的密钥，它们是在 ENULS 从工作量证明过渡到权益证明共识时引入的。 它们是“BLS”密钥，用来识别验证者。 这些密钥可以有效地聚合，减少网络达成共识所需要的带宽。 没有这种密钥集合，验证者的最小质押金额将会高出许多。")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("帐户和钱包不同。 帐户是用户拥有的 ENULS 帐户的密钥对。 钱包是界面或应用程序，可以让你与 ENULS 帐户交互。")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("跟随 Austin 了解哈希函数和密钥对。")]),t._v(" "),s("YouTube",{attrs:{id:"QJ010l-pBpE"}}),t._v(" "),s("YouTube",{attrs:{id:"9LtBDy67Tho"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[this._v("#")]),this._v(" 前提条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"帐户类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帐户类型"}},[this._v("#")]),this._v(" 帐户类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("外部所有的帐户 (EOA) – 由任何拥有私钥的人控制")]),this._v(" "),e("li",[this._v("合约帐户 — 部署到网络上的智能合约，由代码控制。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("接收、持有和发送 ENULS 和 token")]),this._v(" "),e("li",[this._v("与已部署的智能合约进行交互")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"主要区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要区别"}},[this._v("#")]),this._v(" 主要区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("外部持有")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("创建帐户是免费的")]),this._v(" "),e("li",[this._v("可以发起交易")]),this._v(" "),e("li",[this._v("外部所有的帐户之间只能进行 NULS 和代币交易")]),this._v(" "),e("li",[this._v("由一对加密密钥组成：控制帐户活动的公钥和私钥")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("合约")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("创建合约存在成本，因为需要使用网络存储空间")]),this._v(" "),e("li",[this._v("只能在收到交易时发送交易")]),this._v(" "),e("li",[this._v("从外部帐户向合约帐户发起的交易能触发可执行多种操作的代码，例如转移代币甚至创建新合约")]),this._v(" "),e("li",[this._v("合约帐户没有私钥。 相反，它们由智能合约代码逻辑控制")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"理解帐户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解帐户"}},[this._v("#")]),this._v(" 理解帐户")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("nonce")]),t._v(" – 显示从帐户发送的交易数量的计数器。 这将确保交易只处理一次。 在合约帐户中，这个数字代表该帐户创建的合约数量")]),t._v(" "),s("li",[s("code",[t._v("balance")]),t._v(" – 这个地址拥有的 Wei 数量。 Wei 是 NULS 的计数单位，每个 NULS 有 1e+18 Wei。")]),t._v(" "),s("li",[s("code",[t._v("codeHash")]),t._v(" - 该哈希表示 ENULS 虚拟机 (EVM) 上的帐户"),s("em",[t._v("代码")]),t._v("。 合约帐户具有编程的代码片段，可以执行不同的操作。 如果帐户收到消息调用，则执行此 EVM 代码。 与其他帐户字段不同，不能更改。 所有代码片段都被保存在状态数据库的相应哈希下，供后续检索。 此哈希值称为 codeHash。 对于外部所有的帐户，codeHash 字段是空字符串的哈希。")]),t._v(" "),s("li",[s("code",[t._v("storageRoot")]),t._v(" – 有时被称为存储哈希。 Merkle Patricia trie 根节点的 256 位哈希已编码了帐户的存储内容（256 位整数值映射），并编码为 Trie，作为来自 256 的 Keccak 256 位哈希的映射位整数键，用于 RLP 编码的 256 位整数值。 此 Trie 对此帐户存储内容的哈希进行编码，默认情况下为空。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"外部持有的帐户和密钥对"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外部持有的帐户和密钥对"}},[this._v("#")]),this._v(" 外部持有的帐户和密钥对")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"帐户创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#帐户创建"}},[this._v("#")]),this._v(" 帐户创建")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036415f")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面是使用 GENULS 的 "),e("code",[this._v("personal_newAccount")]),this._v(" 在控制台中创建一个帐户的例子")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" personal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPassphrase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nRepeat passphrase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x5e97870f263700f46aa00d967821199b9bc5a120"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" personal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h4ck3r"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x3d80b31a78c30fc628f20b2c89d7ddbf6e53cedc"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以通过您的私钥获取公钥，但您不能通过公钥获取私钥。 这意味着保持私人密钥的安全至关重要，如同名称所建议的 "),e("strong",[this._v("PRIVATE")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"合约帐户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合约帐户"}},[this._v("#")]),this._v(" 合约帐户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("0x06012c8cf97bead5deae237070f9587f8e7a266d")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"验证者密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证者密钥"}},[this._v("#")]),this._v(" 验证者密钥")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"关于钱包的说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于钱包的说明"}},[this._v("#")]),this._v(" 关于钱包的说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"视频演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频演示"}},[this._v("#")]),this._v(" 视频演示")])}],!1,null,null,null);e.default=_.exports}}]);