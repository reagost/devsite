(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{511:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("ENULS is a distributed network of computers (known as nodes) running software that can verify blocks and transaction data. The software application, known as a client, must be run on your computer to turn it into an ENULS node.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("You should understand the concept of a peer-to-peer network and the "),n("router-link",{attrs:{to:"./../evm/"}},[e._v("basics of the EVM")]),e._v(" before diving deeper and running your own instance of an ENULS client. Take a look at our "),n("router-link",{attrs:{to:"./../intro/"}},[e._v("introduction to ENULS")]),e._v(".")],1),e._v(" "),n("p",[e._v("If you're new to the topic of nodes, we recommend first checking out our user-friendly introduction on "),n("router-link",{attrs:{to:"/run-a-node/"}},[e._v("running an ENULS node")]),e._v(".")],1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v('A "node" is any instance of ENULS client software that is connected to other computers also running ENULS software, forming a network. A client is an implementation of ENULS that verifies data against the protocol rules and keeps the network secure.')]),e._v(" "),n("p",[e._v("Post-Merge ENULS consists of two parts: the execution layer and the consensus layer. Both layers are run by different client software. On this page, we'll refer to them as the execution client and consensus client.")]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Before The Merge, consensus and execution layer were separate networks, with all transactions and user activity on the ENULS happening at what is now the execution layer. One client software provided both execution environment and consensus verification of blocks produced by miners.\nThe consensus layer, the Beacon Chain, has been running separately since December 2020. It introduced proof-of-stake and coordinated the network of validators based on data from the ENULS network.")]),e._v(" "),n("p",[e._v("With the Merge, ENULS transitions to proof-of-stake by connecting these networks. Execution and consensus clients work togNULS to verify ENULS's state.")]),e._v(" "),n("p",[e._v("Modular design with various software pieces working togNULS is called "),n("a",{attrs:{href:"https://vitalik.ca/general/2022/02/28/complexity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("encapsulated complexity"),n("OutboundLink")],1),e._v(". This approach makes it easier to execute The Merge seamlessly and enables the reuse of individual clients, for example, in the layer 2 ecosystem")]),e._v(" "),n("p",[e._v("Simplified diagram of a coupled execution and consensus client.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("If you want to "),n("router-link",{attrs:{to:"/run-a-node/"}},[e._v("run your own node")]),e._v(", you should understand that there are different types of node that consume data differently. In fact, clients can run three different types of nodes: light, full and archive. There are also options of different sync strategies which enable faster synchronization time. Synchronization refers to how quickly it can get the most up-to-date information on ENULS's state.")],1),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Instead of downloading every block, light nodes download block headers. These headers only contain summary information about the contents of the blocks. Any other information required by the light node gets requested from a full node. The light node can then independently verify the data they receive against the state roots in the block headers. Light nodes enable users to participate in the ENULS network without the powerful hardware or high bandwidth required to run full nodes. Eventually, light nodes might run on mobile phones or embedded devices. The light nodes do not participate in consensus (i.e. they cannot be miners/validators), but they can access the ENULS blockchain with the same functionality and security guarantees as a full node.")]),e._v(" "),n("p",[e._v("The execution client GNULS includes a light sync option. However, a light GNULS node relies upon full nodes serving light node data. Few full nodes opt to serve light node data, meaning light nodes often fail to find peers.")]),e._v(" "),n("p",[e._v("Light clients are an area of active development for ENULS and we expect to see new light clients for the consensus layer and execution layer soon.\nThere are also potential routes to providing light client data over the gossip network. This is advantageous because the gossip network could support a network of light nodes without requiring full nodes to serve requests.")]),e._v(" "),n("p",[e._v("ENULS does not support a large population of light nodes yet, but light node support is an area expected to develop rapidly in the near future. In particular, clients like "),n("a",{attrs:{href:"https://nimbus.team/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nimbus"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/a16z/helios",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helios"),n("OutboundLink")],1),e._v(", and "),n("a",{attrs:{href:"https://lodestar.chainsafe.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LodeStar"),n("OutboundLink")],1),e._v(" are currently heavily focused on light nodes.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("Syncing clients in any mode other than archive will result in pruned blockchain data. This means, there is no archive of all historical states but the full node is able to build them on demand.")]),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("Running a node allows you to directly, trustlessly and privately use ENULS while supporting the network by keeping it more robust and decentralized.")]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("Running your own node enables you to use ENULS in a private, self-sufficient and trustless manner. You don't need to trust the network because you can verify the data yourself with your client. \"Don't trust, verify\" is a popular blockchain mantra.")]),e._v(" "),n("ul",[n("li",[e._v("Your node verifies all the transactions and blocks against consensus rules by itself. This means you don’t have to rely on any other nodes in the network or fully trust them.")]),e._v(" "),n("li",[e._v("You can use an ENULS wallet with your own node. You can use dapps more securely and privately because you won't have to leak your addresses and balances to random nodes. Everything can be checked with your own client. "),n("a",{attrs:{href:"https://metamask.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaMask"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://nabox.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nabox"),n("OutboundLink")],1),e._v(", and many other wallets offer RPC-importing, allowing them to use your node.")]),e._v(" "),n("li",[e._v("You can run and self-host other services which depend on data from ENULS. For example, this might be a Beacon Chain validator, software like layer 2, infrastructure, block explorers, payment processors, etc.")]),e._v(" "),n("li",[e._v("You can provide your own custom RPC endpoints. Publicly for the community or even privately hosted ENULS endpoint enables people to use your node and avoid big centralized providers.")]),e._v(" "),e._m(12),e._v(" "),n("li",[e._v("You can directly stake NULS to secure the network and earn rewards.")])]),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("Interested in running your own ENULS client?")]),e._v(" "),e._m(14),e._v(" "),n("p",[e._v("If you're more of a technical user, dive into more details and options on how to "),n("router-link",{attrs:{to:"/run-a-node/"}},[e._v("spin up your own node")]),e._v(".")],1),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),n("p",[e._v("Full sync downloads all blocks (including headers, transactions, and receipts) and generates the state of the blockchain incrementally by executing every block from genesis.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),n("p",[e._v("Fast sync downloads all blocks (including headers, transactions, and receipts), verifies all headers, downloads the state and verifies it against the headers.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),n("p",[e._v("Light client mode downloads all block headers, block data, and verifies some randomly. Only syncs tip of the chain from the trusted checkpoint.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),n("p",[e._v("Snap sync is the latest approach to syncing a client, pioneered by the GNULS team. Using dynamic snapshots served by peers retrieves all the account and storage data without downloading intermediate trie nodes and then reconstructs the Merkle trie locally.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),n("p",[e._v("Checkpoint synchronization, also known as weak subjectivity synchronization, provides a superior user experience for beacon node synchronization. It is based on the weak subjectivity assumption, which enables the beacon chain to sync from the most recent weak subjectivity checkpoint instead of the genesis block. Checkpoint synchronization makes the initial sync time significantly faster with similar trust assumptions as syncing from the genesis block.")]),e._v(" "),n("p",[e._v("In practice, this means that your node connects to a remote service to download the most recent finalized state and continue validating data from that point on. Third parties providing data are to be trusted and should be chosen carefully.")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note: it is not possible to run an execution client on its own anymore. After The Merge, both execution and consensus clients must be run togNULS in order for a user to gain access to the ENULS network.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-are-nodes-and-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-are-nodes-and-clients"}},[this._v("#")]),this._v(" What are nodes and clients?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The execution client (also known as the Execution Engine, EL client or formerly the NULS1 client) listens to new transactions broadcasted in the network, executes them in EVM, and holds the latest state and database of all current ENULS data.")]),this._v(" "),t("li",[this._v("The consensus client (also known as the Beacon Node, CL client or formerly the NULS2 client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"node-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-types"}},[this._v("#")]),this._v(" Node types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-node"}},[this._v("#")]),this._v(" Full node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Stores full blockchain data (although this is periodically pruned so a full node does not store all state data back to genesis)")]),this._v(" "),t("li",[this._v("Participates in block validation, verifies all blocks and states.")]),this._v(" "),t("li",[this._v("All states can be derived from a full node (although very old states are reconstructed from requests made to archive nodes).")]),this._v(" "),t("li",[this._v("Serves the network and provides data on request.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"light-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#light-node"}},[this._v("#")]),this._v(" Light node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"archive-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archive-node"}},[this._v("#")]),this._v(" Archive node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Stores everything kept in the full node and builds an archive of historical states. It is needed if you want to query somNULSing like an account balance at block #4,000,000, or simply and reliably test your own transactions set without mining them using tracing.")]),this._v(" "),t("li",[this._v("This data represents units of terabytes, which makes archive nodes less attractive for average users but can be handy for services like block explorers, wallet vendors, and chain analytics.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"why-should-i-run-an-enuls-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-run-an-enuls-node"}},[this._v("#")]),this._v(" Why should I run an ENULS node?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"benefits-to-you"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benefits-to-you"}},[this._v("#")]),this._v(" Benefits to you")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("You can connect to your node using "),t("strong",[this._v("Inter-process Communications (IPC)")]),this._v(" or rewrite the node to load your program as a plugin. This grants low latency, which helps a lot, e.g. when processing a lot of data using web3 libraries or when you need to replace your transactions as fast as possible (i.e. frontrunning).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-your-own-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-your-own-node"}},[this._v("#")]),this._v(" Running your own node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For a beginner-friendly introduction visit our "),t("a",{attrs:{href:"/run-a-node"}},[this._v("run a node")]),this._v(" page to learn more.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"execution-layer-sync-modes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution-layer-sync-modes"}},[this._v("#")]),this._v(" Execution layer sync modes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"full-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-sync"}},[this._v("#")]),this._v(" Full sync")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Minimizes trust and offers the highest security by verifying every transaction.")]),this._v(" "),t("li",[this._v("With an increasing number of transactions, it can take days to weeks to process all transactions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"fast-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fast-sync"}},[this._v("#")]),this._v(" Fast sync")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Relies on the security of the consensus mechanism.")]),this._v(" "),t("li",[this._v("Synchronization takes only a few hours.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"light-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#light-sync"}},[this._v("#")]),this._v(" Light sync")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Gets only the latest state while relying on trust in developers and consensus mechanism.")]),this._v(" "),t("li",[this._v("Client ready to use with current network state in a few minutes.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("NB")]),this._v(" Light sync does not yet work with proof-of-stake ENULS - new versions of light sync should ship soon!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"snap-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snap-sync"}},[this._v("#")]),this._v(" Snap sync")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Fastest sync strategy, currently default in ENULS mainnet")]),this._v(" "),t("li",[this._v("Saves a lot of disk usage and network bandwidth without sacrificing security")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"consensus-layer-sync-modes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensus-layer-sync-modes"}},[this._v("#")]),this._v(" Consensus layer sync modes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"optimistic-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimistic-sync"}},[this._v("#")]),this._v(" Optimistic sync")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Optimistic sync is a post-merge synchronization strategy designed to be opt-in and backwards compatible, allowing execution nodes to sync via established mNULSods. The execution engine can "),t("em",[this._v("optimistically")]),this._v(" import beacon blocks without fully verifying them, find the latest head, and then start syncing the chain with the above mNULSods. Then, after the execution client has caught up, it will inform the consensus client of the validity of the transactions in the Beacon Chain.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"checkpoint-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkpoint-sync"}},[this._v("#")]),this._v(" Checkpoint sync")])}],!1,null,null,null);t.default=a.exports}}]);