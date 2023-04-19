(window.webpackJsonp = window.webpackJsonp || []).push([
  [126],
  {
    579: function(t, e, s) {
      "use strict";
      s.r(e);
      var a = s(0),
        r = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e;
            return s("div", { staticClass: "content" }, [
              s("p", [
                t._v(
                  "区块是指一批交易的组合，并且包含链中上一个区块的哈希。 这将区块连接在一起（成为一个链），因为哈希是从区块数据中加密得出的。 这可以防止欺诈，因为以前的任何区块中的任何改变都会使后续所有区块无效，而且所有哈希都会改变，所有运行区块链的人都会注意到。"
                ),
              ]),
              t._v(" "),
              t._m(0),
              t._v(" "),
              s(
                "p",
                [
                  t._v(
                    "区块是一个对初学者非常友好的主题。 为了帮助您更好地理解这个页面，我们建议您先阅读"
                  ),
                  s("router-link", { attrs: { to: "./../accounts/" } }, [
                    t._v("帐户"),
                  ]),
                  t._v("、"),
                  s("router-link", { attrs: { to: "./../transactions/" } }, [
                    t._v("交易"),
                  ]),
                  t._v("和我们的"),
                  s("router-link", { attrs: { to: "./../" } }, [
                    t._v("ENULS简介"),
                  ]),
                  t._v("。"),
                ],
                1
              ),
              t._v(" "),
              t._m(1),
              t._v(" "),
              s("p", [
                t._v(
                  "为了确保ENULS网络上的所有参与者保持同步状态并就交易的确切历史达成共识，我们将交易分为多个区块。 这意味着同时有数十个（甚至数百个）交易被提交、达成一致并同步。"
                ),
              ]),
              t._v(" "),
              s("p", [
                t._v(
                  "通过间隔提交，所有网络参与者有足够时间达成共识：即使交易请求每秒发生数十次，但ENULS上的区块仅仅大约每十秒创建并提交一次。"
                ),
              ]),
              t._v(" "),
              t._m(2),
              t._v(" "),
              s("p", [
                t._v(
                  "为了保存交易历史，区块被严格排序（创建的每个新区块都包含一个其父块的引用），区块内的交易也严格排序。 除极少数情况外，在任何特定时间，网络上的所有参与者都同意区块的确切数目和历史， 并且正在努力将当前的活动交易请求分批到下一个区块。"
                ),
              ]),
              t._v(" "),
              s("p", [
                t._v(
                  "某位验证者在网络上构建完区块后，区块将传播到整个网络；所有节点都将该区块添加至其区块链的末尾，然后挑选新的验证者来创建下一个区块。 目前，确切的区块构建过程和提交/共识过程由ENULS的“权益证明”协议规定。"
                ),
              ]),
              t._v(" "),
              t._m(3),
              t._v(" "),
              s("p", [t._v("权益证明是指：")]),
              t._v(" "),
              t._m(4),
              t._v(" "),
              t._m(5),
              t._v(" "),
              t._m(6),
              t._v(" "),
              s("p", [
                t._v("一个区块中包含很多信息。 区块的最高层包含以下字段："),
              ]),
              t._v(" "),
              t._m(7),
              t._m(8),
              t._v(" "),
              t._m(9),
              t._m(10),
              t._v(" "),
              t._m(11),
              t._m(12),
              t._v(" "),
              t._m(13),
              t._m(14),
              t._v(" "),
              t._m(15),
              t._v(" "),
              t._m(16),
              t._m(17),
              t._v(" "),
              t._m(18),
              t._m(19),
              t._v(" "),
              s("p", [
                t._v(
                  "出块时间是指两个区块之间的时间间隔。 在ENULS中，时间划分为每 12 秒一个单位，称为“时隙”。 在每个时隙内，选择一个单独的验证者提议区块。 假设所有验证者都在线且完全正常运行，则每个时隙内都会有一个区块产生，意味着出块时间是 12 秒。 但是，偶尔验证者在被要求提议区块时不在线，导致有时候一些时隙是空的。 这与基于工作量证明的系统不同。在工作量证明系统中，出块时间是带有概率性的，并由挖矿难度调节。"
                ),
              ]),
              t._v(" "),
              t._m(20),
              t._v(" "),
              s("p", [
                t._v(
                  "最后一条重要提示是，区块本身的大小是有界限的。 每个区块的目标大小为 1500 万单位燃料，但区块的大小将根据网络需求而增加或减少，直至达到 3000 万单位燃料的区块限制（目标区块大小的 2 倍）。 区块中所有交易所消耗的总燃料量必须低于区块的燃料限制。 这很重要，因为它可以确保区块不能任意扩大。 如果区块可以任意扩大，由于空间和速度方面的要求，性能较差的全节点将逐渐无法跟上网络。 区块越大，在下一个时隙中及时处理它们需要的算力就越强大。 这是一种集中化的因素，可以通过限制区块大小来抵制。"
                ),
              ]),
              t._v(" "),
              t._m(21),
              t._v(" "),
              s("ul", [
                s(
                  "li",
                  [
                    s("router-link", { attrs: { to: "./../transactions/" } }, [
                      t._v("交易"),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                s(
                  "li",
                  [
                    s("router-link", { attrs: { to: "./../gas/" } }, [
                      t._v("燃料"),
                    ]),
                  ],
                  1
                ),
                t._v(" "),
                t._m(22),
              ]),
            ]);
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "前提条件" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#前提条件" },
                  },
                  [this._v("#")]
                ),
                this._v(" 前提条件"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "为什么要有区块？" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#为什么要有区块？" },
                  },
                  [this._v("#")]
                ),
                this._v(" 为什么要有区块？"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "区块如何工作" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#区块如何工作" },
                  },
                  [this._v("#")]
                ),
                this._v(" 区块如何工作"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "权益证明协议" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#权益证明协议" },
                  },
                  [this._v("#")]
                ),
                this._v(" 权益证明协议"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("ul", [
                e("li", [
                  this._v(
                    "验证节点必须向存款合约中质押 32 个NULS，作为抵押品防止发生不良行为。 这有助于保护网络，因为如果发生不诚实活动且可以证实，部分甚至全部质押金额将被销毁。"
                  ),
                ]),
                this._v(" "),
                e("li", [
                  this._v(
                    "在每个时隙（12 秒的时间间隔）中，会随机选择一个验证者作为区块提议者。 他们将交易打包并执行，然后确定一个新的“状态”。 他们将这些信息包装到一个区块中并传送给其他验证者。"
                  ),
                ]),
                this._v(" "),
                e("li", [
                  this._v(
                    "其他获悉新区块的验证者再次执行区块中包含的交易，确定他们同意对全局状态提出的修改。 假设该区块是有效的，验证者就将该区块添加进各自的数据库。"
                  ),
                ]),
                this._v(" "),
                e("li", [
                  this._v(
                    "如果验证者获悉在同一时隙内有两个冲突区块，他们会使用自己的分叉选择算法选择获得最多质押NULS支持的那一个区块。"
                  ),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                e("a", { attrs: { href: "../pos" } }, [
                  this._v("有关权益证明的更多信息"),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "区块包含什么？" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#区块包含什么？" },
                  },
                  [this._v("#")]
                ),
                this._v(" 区块包含什么？"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "slot：区块所属的时隙\nproposer_index：提出区块的验证者的 ID\nparent_root：前一个区块的哈希\nstate_root：状态对象的根哈希\nbody：包含一些字段的对象，定义如下\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                this._v("区块的 "),
                e("code", [this._v("body")]),
                this._v(" 包含一些自有字段："),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "randao_reveal：用于选择下一个区块提议者的值\nENULS1_data：有关存款合约的信息\ngraffiti：用于标记区块的任意数据\nproposer_slashings：将要受到惩罚的验证者的列表\nattester_slashings：将要受到惩罚的验证者的列表\nattestations：支持当前区块的认证列表\ndeposits：存入存款合约中的新存款的列表\nvoluntary_exits：将要退出网络的验证者的列表\nsync_aggregate：用于服务轻客户端的验证者子集\nexecution_payload：由执行客户端传送的交易\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                e("code", [this._v("attestations")]),
                this._v(
                  " 字段包含区块中所有认证的列表。 认证有自己的数据类型，其中包含多条数据。 每个认证包含："
                ),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "aggregation_bits：参与此认证的验证者列表\ndata：具有多个子字段的容器\nsignature：所有证明验证者的聚合签名\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                e("code", [this._v("attestation")]),
                this._v(" 中的 "),
                e("code", [this._v("data")]),
                this._v(" 字段包含以下内容："),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "slot：认证涉及的时隙\nindex：证明验证者的索引\nbeacon_block_root：包含此对象的信标链区块的根哈希\nsource：上一个合理的检查点\ntarget：最新的时段边界区块\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this,
                e = t.$createElement,
                s = t._self._c || e;
              return s("p", [
                t._v("执行 "),
                s("code", [t._v("execution_payload")]),
                t._v(" 中的交易会更新全局状态。 所有客户端重新执行 "),
                s("code", [t._v("execution_payload")]),
                t._v(" 中的交易，以确保新状态与新区块 "),
                s("code", [t._v("state_root")]),
                t._v(
                  " 字段中的状态相符。 这就是客户端如何判断新区块是否有效且可以安全添加到其区块链的方式。 "
                ),
                s("code", [t._v("execution payload")]),
                t._v(" 本身是一个包含多个字段的对象。 还有一个 "),
                s("code", [t._v("execution_payload_header")]),
                t._v(
                  "，包含有关执行数据的重要摘要信息。 这些数据结构如下组织："
                ),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                e("code", [this._v("execution_payload_header")]),
                this._v(" 包含以下字段："),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "parent_hash：父块的哈希\nfee_recipient：接收交易费的帐户地址\nstate_root：应用此区块中的变化后全局状态的根哈希\nreceipts_root：交易收据树的哈希\nlogs_bloom：包含事件日志的数据结构\nprev_randao：随机选择验证者时使用的值\nblock_number：当前区块的编号\ngas_limit：此区块允许使用的最大燃料量\ngas_used：此区块实际使用的燃料量\ntimestamp：出块时间\nextra_data：作为原始字节的任意附加数据\nbase_fee_per_gas：基础费的值\nblock_hash：执行区块的哈希\ntransactions_root：有效载荷中交易的根哈希\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", [
                e("code", [this._v("execution_payload")]),
                this._v(
                  " 本身包含以下字段（这些与 header 字段相同，只是它包含的不是交易的根哈希，而是实际的交易列表）："
                ),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "language- extra-class" }, [
                e("pre", { pre: !0, attrs: { class: "language-text" } }, [
                  e("code", [
                    this._v(
                      "parent_hash：父块的哈希\nfee_recipient：接收交易费的帐户地址\nstate_root：应用此区块中的变化后全局状态的根哈希\nreceipts_root：交易收据树的哈希\nlogs_bloom：包含事件日志的数据结构\nprev_randao：随机选择验证者时使用的值\nblock_number：当前区块的编号\ngas_limit：此区块允许使用的最大燃料量\ngas_used：此区块实际使用的燃料量\ntimestamp：出块时间\nextra_data：作为原始字节的任意附加数据\nbase_fee_per_gas：基础费的值\nblock_hash：执行区块的哈希\ntransactions：要执行交易的列表\n"
                    ),
                  ]),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "出块时间" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#出块时间" },
                  },
                  [this._v("#")]
                ),
                this._v(" 出块时间"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "区块大小" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#区块大小" },
                  },
                  [this._v("#")]
                ),
                this._v(" 区块大小"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("h2", { attrs: { id: "相关主题" } }, [
                e(
                  "a",
                  {
                    staticClass: "header-anchor",
                    attrs: { href: "#相关主题" },
                  },
                  [this._v("#")]
                ),
                this._v(" 相关主题"),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", [
                e("a", { attrs: { href: "../pos" } }, [this._v("权益证明")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
  },
]);
