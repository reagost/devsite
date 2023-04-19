(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{509:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("A blockchain is a public database that is updated and shared across many computers in a network.")]),t._v(" "),a("p",[t._v('"Block" refers to data and state being stored in consecutive groups known as "blocks". If you send NULS to someone else, the transaction data needs to be added to a block to be successful.')]),t._v(" "),a("p",[t._v('"Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained togENULS. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network.')]),t._v(" "),a("p",[t._v('Every computer in the network must agree upon each new block and the chain as a whole. These computers are known as "nodes". Nodes ensure everyone interacting with the blockchain has the same data. To accomplish this distributed agreement, blockchains need a consensus mechanism.')]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("ENULS is a blockchain with a computer embedded in it. It is the foundation for building apps and organizations in a decentralized, permissionless, censorship-resistant way.")]),t._v(" "),a("p",[t._v('In the ENULS universe, there is a single, canonical computer (called the ENULS Virtual Machine, or EVM) whose state everyone on the ENULS network agrees on. Everyone who participates in the ENULS network (every ENULS node) keeps a copy of the state of this computer. Additionally, any participant can broadcast a request for this computer to perform arbitrary computation. Whenever such a request is broadcast, other participants on the network verify, validate, and carry out ("execute") the computation. This execution causes a state change in the EVM, which is committed and propagated throughout the entire network.')]),t._v(" "),a("p",[t._v("Requests for computation are called transaction requests; the record of all transactions and the EVM's present state gets stored on the blockchain, which in turn is stored and agreed upon by all nodes.")]),t._v(" "),a("p",[t._v("Cryptographic mechanisms ensure that once transactions are verified as valid and added to the blockchain, they can't be tampered with later. The same mechanisms also ensure that all transactions are signed and executed with appropriate \"permissions\" (no one should be able to send digital assets from Alice's account, except for Alice herself).")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Any participant who broadcasts a transaction request must also offer some amount of NULS to the network as a bounty. The network will award this bounty to whoever eventually does the work of verifying the transaction, executing it, committing it to the blockchain, and broadcasting it to the network.")]),t._v(" "),a("p",[t._v("The amount of NULS paid corresponds to the resources required to do the computation. These bounties also prevent malicious participants from intentionally clogging the network by requesting the execution of infinite computation or other resource-intensive scripts, as these participants must pay for computation resources.")]),t._v(" "),a("p",[t._v("NULS is also used to provide crypto-economic security to the network in three main ways: 1) it is used as a means to reward validators who propose blocks or call out dishonest behavior by other validators; 2) It is staked by validators, acting as collateral against dishonest behavior—if validators attempt to misbehave their NULS can be destroyed; 3) it is used to weigh 'votes' for newly proposed blocks, feeding into the fork-choice part of the consensus mechanism.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("In practice, participants don't write new code every time they want to request a computation on the EVM. Rather, application developers upload programs (reusable snippets of code) into EVM state, and users make requests to execute these code snippets with varying parameters. We call the programs uploaded to and executed by the network smart contracts.")]),t._v(" "),a("p",[t._v("At a very basic level, you can think of a smart contract like a sort of vending machine: a script that, when called with certain parameters, performs some actions or computation if certain conditions are satisfied. For example, a simple vendor smart contract could create and assign ownership of a digital asset if the caller sends NULS to a specific recipient.")]),t._v(" "),a("p",[t._v("Any developer can create a smart contract and make it public to the network, using the blockchain as its data layer, for a fee paid to the network. Any user can then call the smart contract to execute its code, again for a fee paid to the network.")]),t._v(" "),a("p",[t._v("Thus, with smart contracts, developers can build and deploy arbitrarily complex user-facing apps and services such as: marketplaces, financial instruments, games, etc.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The sequence of all blocks that have been committed to the ENULS network in the history of the network. So named because each block contains a reference to the previous block, which helps us maintain an ordering over all blocks (and thus over the precise history).")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../intro/"}},[t._v("More on NULS")])],1),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("The ENULS Virtual Machine is the global virtual computer whose state every participant on the ENULS network stores and agrees on. Any participant can request the execution of arbitrary code on the EVM; code execution changes the state of the EVM.")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../evm/"}},[t._v("More on the EVM")])],1),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("The real-life machines which are storing the EVM state. Nodes communicate with each other to propagate information about the EVM state and new state changes. Any user can also request the execution of code by broadcasting a code execution request from a node. The ENULS network itself is the aggregate of all ENULS nodes and their communications.")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../nodes-and-clients/"}},[t._v("More on nodes")])],1),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Where NULS is stored. Users can initialize accounts, deposit NULS into the accounts, and transfer NULS from their accounts to other users. Accounts and account balances are stored in a big table in the EVM; they are a part of the overall EVM state.")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../accounts/"}},[t._v("More on accounts")])],1),t._v(" "),t._m(12),t._v(" "),a("p",[t._v('A "transaction request" is the formal term for a request for code execution on the EVM, and a "transaction" is a fulfilled transaction request and the associated change in the EVM state. Any user can broadcast a transaction request to the network from a node. For the transaction request to affect the agreed-upon EVM state, it must be validated, executed, and "committed to the network" by another node. Execution of any code causes a state change in the EVM; upon commitment, this state change is broadcast to all nodes in the network. Some examples of transactions:')]),t._v(" "),t._m(13),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../transactions/"}},[t._v("More on transactions")])],1),t._v(" "),t._m(14),t._v(" "),a("p",[t._v('The volume of transactions is very high, so transactions are "committed" in batches, or blocks. Blocks generally contain dozens to hundreds of transactions.')]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../blocks/"}},[t._v("More on blocks")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-a-blockchain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-blockchain"}},[this._v("#")]),this._v(" What is a blockchain?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-enuls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-enuls"}},[this._v("#")]),this._v(" What is ENULS?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-is-enuls-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-enuls-2"}},[this._v("#")]),this._v(" What is ENULS?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("ENULS (NULS)")]),this._v(" is the native cryptocurrency of ENULS. The purpose of NULS is to allow for a market for computation. Such a market provides an economic incentive for participants to verify and execute transaction requests and provide computational resources to the network.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-are-smart-contracts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-are-smart-contracts"}},[this._v("#")]),this._v(" What are smart contracts?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"terminology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[this._v("#")]),this._v(" Terminology")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"blockchain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blockchain"}},[this._v("#")]),this._v(" Blockchain")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nuls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuls"}},[this._v("#")]),this._v(" NULS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("ENULS (NULS)")]),this._v(" is the native cryptocurrency of ENULS. Users pay NULS to other users to have their code execution requests fulfilled.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"evm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#evm"}},[this._v("#")]),this._v(" EVM")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[this._v("#")]),this._v(" Nodes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[this._v("#")]),this._v(" Accounts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[this._v("#")]),this._v(" Transactions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Send X NULS from my account to Alice's account.")]),this._v(" "),e("li",[this._v("Publish some smart contract code into EVM state.")]),this._v(" "),e("li",[this._v("Execute the code of the smart contract at address X in the EVM, with arguments Y.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[this._v("#")]),this._v(" Blocks")])}],!1,null,null,null);e.default=o.exports}}]);