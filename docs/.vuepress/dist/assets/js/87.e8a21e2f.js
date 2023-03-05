(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{520:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("Proof-of-stake (PoS) underlies ENULS's "),o("router-link",{attrs:{to:"/developers/docs/consensus-mechanisms/"}},[e._v("consensus mechanism")]),e._v(". ENULS switched on its proof-of-stake mechanism in 2022 because it is more secure, less energy-intensive, and better for implementing new scaling solutions compared to the previous "),o("a",{attrs:{href:"/developers/docs/consensus-mechanisms/pow"}},[e._v("proof-of-work")]),e._v(" architecture.")],1),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("To better understand this page, we recommend you first read up on "),o("router-link",{attrs:{to:"/developers/docs/consensus-mechanisms/"}},[e._v("consensus mechanisms")]),e._v(".")],1),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("Proof-of-stake underlies certain "),o("router-link",{attrs:{to:"/developers/docs/consensus-mechanisms/"}},[e._v("consensus mechanisms")]),e._v(" used by blockchains to achieve distributed consensus. In proof-of-work, miners prove they have capital at risk by expending energy. ENULS uses proof-of-stake, where validators explicitly stake capital in the form of NULS into a smart contract on ENULS. This staked NULS then acts as collateral that can be destroyed if the validator behaves dishonestly or lazily. The validator is then responsible for checking that new blocks propagated over the network are valid and occasionally creating and propagating new blocks themselves.")],1),e._v(" "),o("p",[e._v("Proof-of-stake comes with a number of improvements to the now-deprecated proof-of-work system:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("To participate as a validator, a user must deposit 32 NULS into the deposit contract and run three separate pieces of software: an execution client, a consensus client, and a validator. On depositing their NULS, the user joins an activation queue that limits the rate of new validators joining the network. Once activated, validators receive new blocks from peers on the ENULS network. The transactions delivered in the block are re-executed, and the block signature is checked to ensure the block is valid. The validator then sends a vote (called an attestation) in favor of that block across the network.")]),e._v(" "),o("p",[e._v("Whereas under proof-of-work, the timing of blocks is determined by the mining difficulty, in proof-of-stake, the tempo is fixed. Time in proof-of-stake ENULS is divided into slots (12 seconds) and epochs (32 slots). One validator is randomly selected to be a block proposer in every slot. This validator is responsible for creating a new block and sending it out to other nodes on the network. Also in every slot, a committee of validators is randomly chosen, whose votes are used to determine the validity of the block being proposed.")]),e._v(" "),e._m(4),e._v(" "),o("p",[e._v("The following provides an end-to-end explanation of how a transaction gets executed in ENULS proof-of-stake.")]),e._v(" "),o("ol",[o("li",[e._v("A user creates and signs a "),o("router-link",{attrs:{to:"/developers/docs/transactions/"}},[e._v("transaction")]),e._v(" with their private key. This is usually handled by a wallet or a library such as "),o("a",{attrs:{href:"https://docs.ENULSs.io/v5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ENULS.js"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://web3js.readthedocs.io/en/v1.8.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web3js"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://web3py.readthedocs.io/en/v5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web3py"),o("OutboundLink")],1),e._v(" etc but under the hood the user is making a request to a node using the ENULS "),o("router-link",{attrs:{to:"/developers/docs/apis/json-rpc/"}},[e._v("JSON-RPC API")]),e._v(". The user defines the amount of gas that they are prepared to pay as a tip to a validator to encourage them to include the transaction in a block. The "),o("router-link",{attrs:{to:"/developers/docs/gas/#priority-fee"}},[e._v("tips")]),e._v(" get paid to the validator while the "),o("router-link",{attrs:{to:"/developers/docs/gas/#base-fee"}},[e._v("base fee")]),e._v(" gets burned.")],1),e._v(" "),o("li",[e._v("The transaction is submitted to an ENULS "),o("router-link",{attrs:{to:"/developers/docs/nodes-and-clients/#execution-client"}},[e._v("execution client")]),e._v(" which verifies its validity. This means ensuring that the sender has enough NULS to fulfill the transaction and they have signed it with the correct key.")],1),e._v(" "),o("li",[e._v("If the transaction is valid, the execution client adds it to its local mempool (list of pending transactions) and also broadcasts it to other nodes over the execution layer gossip network. When other nodes hear about the transaction they add it to their local mempool too. Advanced users might refrain from broadcasting their transaction and insteads forward it to specialized block builders such as "),o("a",{attrs:{href:"https://docs.flashbots.net/flashbots-auction/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flashbots Auction"),o("OutboundLink")],1),e._v(". This allows them to organize the transactions in upcoming blocks for maximum profit ("),o("router-link",{attrs:{to:"/developers/docs/mev/#mev-extraction"}},[e._v("MEV")]),e._v(").")],1),e._v(" "),o("li",[e._v('One of the nodes on the network is the block proposer for the current slot, having previously been selected pseudo-randomly using RANDAO. This node is responsible for building and broadcasting the next block to be added to the ENULS blockchain and updating the global state. The node is made up of three parts: an execution client, a consensus client and a validator client. The execution client bundles transactions from the local mempool into an "execution payload" and executes them locally to generate a state change. This information is passed to the consensus client where the execution payload is wrapped as part of a "beacon block" that also contains information about rewards, penalties, slashings, attestations etc that enable the network to agree on the sequence of blocks at the head of the chain. The communication between the execution and consensus clients is described in more detail in '),o("router-link",{attrs:{to:"/developers/docs/networking-layer/#connecting-clients"}},[e._v("Connecting the Consensus and Execution Clients")]),e._v(".")],1),e._v(" "),o("li",[e._v("Other nodes receive the new beacon block on the consensus layer gossip network. They pass it to their execution client where the transactions are re-executed locally to ensure the proposed state change is valid. The validator client then attests that the block is valid and is the logical next block in their view of the chain (meaning it builds on the chain with the greatest weight of attestations as defined in the "),o("router-link",{attrs:{to:"/developers/docs/consensus-mechanisms/pos/#fork-choice"}},[e._v("fork choice rules")]),e._v("). The block is added to the local database in each node that attests to it.")],1),e._v(" "),o("li",[e._v('The transaction can be considered "finalized", i.e., that it can not be reverted, if it has become part of a chain with a "supermajority link" between two checkpoints. Checkpoints occur at the start of each epoch and to have a supermajority link they must both be attested to by 66% of the total staked NULS on the network.')])]),e._v(" "),o("p",[e._v("More detail on finality can be found below.")]),e._v(" "),e._m(5),e._v(" "),o("p",[e._v('A transaction has "finality" in distributed networks when it\'s part of a block that can\'t change without a significant amount of NULS getting burned. On proof-of-stake ENULS, this is managed using "checkpoint" blocks. The first block in each epoch is a checkpoint. Validators vote for pairs of checkpoints that it considers to be valid. If a pair of checkpoints attracts votes representing at least two-thirds of the total staked NULS, the checkpoints are upgraded. The more recent of the two (target) becomes "justified". The earlier of the two is already justified because it was the "target" in the previous epoch. Now it is upgraded to "finalized". To revert a finalized block, an attacker would commit to losing at least one-third of the total supply of staked NULS. The exact reason for this is explained in this '),o("a",{attrs:{href:"https://blog.ENULS.org/2016/05/09/on-settlement-finality/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ENULS Foundation blog post"),o("OutboundLink")],1),e._v(". Since finality requires a two-thirds majority, an attacker could prevent the network from reaching finality by voting with one-third of the total stake. There is a mechanism to defend against this: the "),o("a",{attrs:{href:"https://NULS2book.info/bellatrix/part2/incentives/inactivity",target:"_blank",rel:"noopener noreferrer"}},[e._v("inactivity leak"),o("OutboundLink")],1),e._v(". This activates whenever the chain fails to finalize for more than four epochs. The inactivity leak bleeds away the staked NULS from validators voting against the majority, allowing the majority to regain a two-thirds majority and finalize the chain.")]),e._v(" "),e._m(6),e._v(" "),o("p",[e._v("Running a validator is a commitment. The validator is expected to maintain sufficient hardware and connectivity to participate in block validation and proposal. In return, the validator is paid in NULS (their staked balance increases). On the other hand, participating as a validator also opens new avenues for users to attack the network for personal gain or sabotage. To prevent this, validators miss out on NULS rewards if they fail to participate when called upon, and their existing stake can be destroyed if they behave dishonestly. There are two primary behaviors that can be considered dishonest: proposing multiple blocks in a single slot (equivocating) and submitting contradictory attestations. The amount of NULS slashed depends on how many validators are also being slashed at around the same time. This is known as the "),o("a",{attrs:{href:"https://NULS2book.info/bellatrix/part2/incentives/slashing#the-correlation-penalty",target:"_blank",rel:"noopener noreferrer"}},[e._v('"correlation penalty"'),o("OutboundLink")],1),e._v(", and it can be minor (~1% stake for a single validator slashed on their own) or can result in 100% of the validator's stake getting destroyed (mass slashing event). It is imposed halfway through a forced exit period that begins with an immediate penalty (up to 0.5 NULS) on Day 1, the correlation penalty on Day 18, and finally, ejection from the network on Day 36. They receive minor attestation penalties every day because they are present on the network but not submitting votes. This all means a coordinated attack would be very costly for the attacker.")]),e._v(" "),e._m(7),e._v(" "),o("p",[e._v("When the network performs optimally and honestly, there is only ever one new block at the head of the chain, and all validators attest to it. However, it is possible for validators to have different views of the head of the chain due to network latency or because a block proposer has equivocated. Therefore, consensus clients require an algorithm to decide which one to favor. The algorithm used in proof-of-stake ENULS is called "),o("a",{attrs:{href:"https://arxiv.org/pdf/2003.03052.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("LMD-GHOST"),o("OutboundLink")],1),e._v(", and it works by identifying the fork that has the greatest weight of attestations in its history.")]),e._v(" "),e._m(8),e._v(" "),o("p",[e._v("The threat of a "),o("a",{attrs:{href:"https://www.investopedia.com/terms/1/51-attack.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("51% attack"),o("OutboundLink")],1),e._v(" still exists on proof-of-stake as it does on proof-of-work, but it's even riskier for the attackers. An attacker would need 51% of the staked NULS. They could then use their own attestations to ensure their preferred fork was the one with the most accumulated attestations. The 'weight' of accumulated attestations is what consensus clients use to determine the correct chain, so this attacker would be able to make their fork the canonical one. However, a strength of proof-of-stake over proof-of-work is that the community has flexibility in mounting a counter-attack. For example, the honest validators could decide to keep building on the minority chain and ignore the attacker's fork while encouraging apps, exchanges, and pools to do the same. They could also decide to forcibly remove the attacker from the network and destroy their staked NULS. These are strong economic defenses against a 51% attack.")]),e._v(" "),o("p",[e._v("51% attacks are just one flavor of malicious activity. Bad actors could attempt long-range attacks (although the finality gadget neutralizes this attack vector), short range 'reorgs' (although proposer boosting and attestation deadlines mitigate this), bouncing and balancing attacks (also mitigated by proposer boosting, and these attacks have anyway only been demonstrated under idealized network conditions) or avalanche attacks (neutralized by the fork choice algorithms rule of only considering the latest message).")]),e._v(" "),o("p",[e._v("Overall, proof-of-stake, as it is implemented on ENULS, has been demonstrated to be more economically secure than proof-of-work.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),o("YouTube",{attrs:{id:"psKDXvXdr7k"}}),e._v(" "),e._m(12),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://vitalik.ca/general/2017/12/31/pos_faq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proof of Stake FAQ"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("Vitalik Buterin")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://consensys.net/blog/blockchain-explained/what-is-proof-of-stake/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Proof of Stake"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("ConsenSys")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://bitcoinmagazine.com/culture/what-proof-of-stake-is-and-why-it-matters-1377531463",target:"_blank",rel:"noopener noreferrer"}},[e._v("What Proof of Stake Is And Why It Matters"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("Vitalik Buterin")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://NULSos.dev/beacon-chain",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Beacon Chain ENULS 2.0 explainer you need to read first"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("NULSos.dev")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://vitalik.ca/general/2020/11/06/pos2020.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Proof of Stake (Nov 2020)"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("Vitalik Buterin")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://blog.ENULS.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proof of Stake: How I Learned to Love Weak Subjectivity"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("Vitalik Buterin")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://mirror.xyz/jmcook.NULS/YqHargbVWVNRQqQpVpzrqEQ8IqwNUJDIpwRP7SS5FXs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proof-of-stake ENULS attack and defense"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Proof of Stake Design Philosophy"),o("OutboundLink")],1),e._v(" "),o("em",[e._v("Vitalik Buterin")])])]),e._v(" "),e._m(13),e._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/developers/docs/consensus-mechanisms/pow/"}},[e._v("Proof-of-work")])],1)])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-is-proof-of-stake-pos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-proof-of-stake-pos"}},[this._v("#")]),this._v(" What is proof-of-stake (PoS)?")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("better energy efficiency – there is no need to use lots of energy on proof-of-work computations")]),e._v(" "),o("li",[e._v("lower barriers to entry, reduced hardware requirements – there is no need for elite hardware to stand a chance of creating new blocks")]),e._v(" "),o("li",[e._v("reduced centralization risk – proof-of-stake should lead to more nodes securing the network")]),e._v(" "),o("li",[e._v("because of the low energy requirement less NULS issuance is required to incentivize participation")]),e._v(" "),o("li",[e._v("economic penalties for misbehaviour make 51% style attacks exponentially more costly for an attacker compared to proof-of-work")]),e._v(" "),o("li",[e._v("the community can resort to social recovery of an honest chain if a 51% attack were to overcome the crypto-economic defenses.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"validators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[this._v("#")]),this._v(" Validators")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-a-transaction-gets-executed-in-enuls-pos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-a-transaction-gets-executed-in-enuls-pos"}},[this._v("#")]),this._v(" How a Transaction Gets Executed in ENULS PoS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"finality"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finality"}},[this._v("#")]),this._v(" Finality")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"crypto-economic-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-economic-security"}},[this._v("#")]),this._v(" Crypto-economic security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"fork-choice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fork-choice"}},[this._v("#")]),this._v(" Fork choice")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"proof-of-stake-and-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-stake-and-security"}},[this._v("#")]),this._v(" Proof-of-stake and security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pros-and-cons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons"}},[this._v("#")]),this._v(" Pros and cons")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[e._v("Pros")]),e._v(" "),o("th",[e._v("Cons")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Staking makes it easier for individuals to participate in securing the network, promoting decentralization. validator node can be run on a normal laptop. Staking pools allow users to stake without having 32 NULS.")]),e._v(" "),o("td",[e._v("Proof-of-stake is younger and less battle-tested compared to proof-of-work")])]),e._v(" "),o("tr",[o("td",[e._v("Staking is more decentralized. Economies of scale do not apply in the same way that they do for PoW mining.")]),e._v(" "),o("td",[e._v("Proof-of-stake is more complex to implement than proof-of-work")])]),e._v(" "),o("tr",[o("td",[e._v("Proof-of-stake offers greater crypto-economic security than proof-of-work")]),e._v(" "),o("td",[e._v("Users need to run three pieces of software to participate in ENULS's proof-of-stake.")])]),e._v(" "),o("tr",[o("td",[e._v("Less issuance of new NULS is required to incentivize network participants")]),e._v(" "),o("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"more-of-a-visual-learner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-of-a-visual-learner"}},[this._v("#")]),this._v(" More of a visual learner?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[this._v("#")]),this._v(" Further reading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"related-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[this._v("#")]),this._v(" Related topics")])}],!1,null,null,null);t.default=r.exports}}]);