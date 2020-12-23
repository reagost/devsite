(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{256:function(e,t,a){e.exports=a.p+"assets/img/1.2b441f5e.png"},257:function(e,t,a){e.exports=a.p+"assets/img/2.b61923f7.png"},258:function(e,t,a){e.exports=a.p+"assets/img/3.c042bd5b.png"},259:function(e,t,a){e.exports=a.p+"assets/img/4.3c09aad2.png"},260:function(e,t,a){e.exports=a.p+"assets/img/5.38267aea.png"},261:function(e,t,a){e.exports=a.p+"assets/img/6.f46652fe.png"},262:function(e,t,a){e.exports=a.p+"assets/img/7.6fc827f4.png"},548:function(e,t,a){"use strict";a.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"chain-factory-tutorial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chain-factory-tutorial"}},[e._v("#")]),e._v(" Chain Factory Tutorial")]),e._v(" "),n("p",[e._v("Welcome to Chain Factory.  We are very proud of Chain Factory, the ability to create a blockchain designed for your application and business needs. The core of our blockchain is Nulstar. The Nulstar design enables us to provide to you a blockchain where only the modules you need are assembled to form your blockchain. Across time, as our modules/services grow,  the variety of blockchains and blockchain characteristics will expand, perhaps, beyond what we can imagine today.  As you use your blockchain, please consult the telegram channel NULS Support (https://t.me/NulsSupport)  for questions or feedback. We look forward to hearing from you.")]),e._v(" "),n("h2",{attrs:{id:"build-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-blockchain"}},[e._v("#")]),e._v(" Build blockchain")]),e._v(" "),n("h3",{attrs:{id:"select-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#select-module"}},[e._v("#")]),e._v(" Select module")]),e._v(" "),n("p",[e._v("In the chain factory, the modules are divided into the required modules and the optional modules. The system has already helped the user to select all the required modules. The user needs to select the optional modules according to the actual business scenarios. After the selection is completed, click [Submit Module Information]")]),e._v(" "),n("p",[n("img",{attrs:{src:a(256),alt:"image-20191107173132004"}})]),e._v(" "),n("h3",{attrs:{id:"fill-in-the-basic-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fill-in-the-basic-information"}},[e._v("#")]),e._v(" Fill in the basic information")]),e._v(" "),n("p",[e._v("Fill in the basic information of the chain, such as name, logo and inflation rules, etc.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(257),alt:"image-20191107173735275"}})]),e._v(" "),n("h3",{attrs:{id:"configuring-genesis-blocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-genesis-blocks"}},[e._v("#")]),e._v(" Configuring Genesis Blocks")]),e._v(" "),n("p",[e._v("The system automatically generates a series of Genesis block addresses, and the user needs to fill in the initial number assigned to each address. There are two points in the process of completing this step that require special attention from the user.")]),e._v(" "),n("ul",[n("li",[e._v("The sum of the number of passes assigned to each address must be equal to the total circulation filled in the basic information")]),e._v(" "),n("li",[e._v("After filling in, the user needs to click [Backup Address Private Key] to download all address private keys and save them. This part of the information will not be saved, so if the user loses the private key, the system will not be able to retrieve it.")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(258),alt:"image-20191107173925575"}})]),e._v(" "),n("h3",{attrs:{id:"configuring-the-seed-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-seed-node"}},[e._v("#")]),e._v(" Configuring the seed node")]),e._v(" "),n("p",[e._v("If the user has prepared the server of the seed node, fill in the seed node ip/domain name and save the private key of the packaged address. After starting the node program on the seed node, import the corresponding package address, and the seed node can start. Maintain the blockchain network. If the server is not ready, you can use the default ip first. After the server is ready, change the seed node ip value in the node program configuration file.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(259),alt:"image-20191107174708180"}})]),e._v(" "),n("h3",{attrs:{id:"confirm-order"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#confirm-order"}},[e._v("#")]),e._v(" Confirm Order")]),e._v(" "),n("p",[e._v("The user needs to confirm the correctness of the information in the previous steps. After the order is submitted and the transaction is issued, it cannot be modified. After confirming that the information is correct, click [Submit Order] and enter the password. The system will automatically deduct the corresponding quantity nuls from the account address. Chain fee")]),e._v(" "),n("p",[n("img",{attrs:{src:a(260),alt:"image-20191107182412228"}})]),e._v(" "),n("h3",{attrs:{id:"download-chain-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#download-chain-resources"}},[e._v("#")]),e._v(" Download Chain Resources")]),e._v(" "),n("p",[e._v("After submitting the order and paying for nuls, the system will start assembling the module and packing the resources. The process may take a few minutes. Please wait patiently. After waiting for a certain period of time, please refresh the page and you will see the packaged resources.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(261),alt:"image-20191107184356196"}})]),e._v(" "),n("h2",{attrs:{id:"the-steps-for-deploying-your-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-steps-for-deploying-your-blockchain"}},[e._v("#")]),e._v(" The Steps for Deploying your Blockchain")]),e._v(" "),n("h2",{attrs:{id:"step-1-setup-your-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-1-setup-your-environment"}},[e._v("#")]),e._v(" Step 1 -- Setup your environment")]),e._v(" "),n("ol",[n("li",[n("p",[e._v('If the user selected any  optional modules, the user will receive two downloadable compressed tar files. One file is prefixed with "normal" and the other is prefixed with "pro". The "normal" is the no-option  blockchain, and the "pro" is the blockchain containing the selected optional modules.')])]),e._v(" "),n("li",[n("p",[e._v("Store the blockchain tar file(s), the Genesis file and the Seed file(s) in a safe location. If the user selects the Public-service module, you need to follow the steps to start the data service node, wallet and browser.")])]),e._v(" "),n("li",[n("p",[e._v("The blockchain  runs on a linux server. The ports 8001-8006 must be open for:  communication with other nodes (8001), cross-chain (8002), public-service (8003), nuls-api(8004), NULS explorer (8005), and NULS web wallet (8006).")])]),e._v(" "),n("li",[n("p",[e._v('The blockchain will not work as expected until the tokens contained in the address affiliated with the genesis block are unlocked.  THe lock is enabled in the Chain Factory "Configure Genesis Block" section. The file "GenesisAddressList.txt" contains the lock information.')])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('kathy@ubuntu-8gb-nbg1-1:~/spacechain2$ cat GenesisAddressList.txt\n[{"address":"TTSETeCA3FciSwrkMVDqggPWv5p77iULuUdKgwS","coins":1000000,"lockTime":1575281386000,"pri":"24eee6db98419b31ac425ae9f4d4aeb1e2e76efc755e3ce8b49311c58602a8fd"}]\n\n')])])]),n("p",[e._v('If there is a value for "lockTime", then the Genesis address is/was locked. The blockchain Tokens are available after the lockTime.  To find out the date when the lock expires, enter the lockTime value in  https://currentmillis.com/.')]),e._v(" "),n("h3",{attrs:{id:"step-2-installing-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-2-installing-mongodb"}},[e._v("#")]),e._v(" Step 2 -- Installing MongoDB")]),e._v(" "),n("p",[e._v("Users who need to use the public-service service need to install MongoDB on the server.")]),e._v(" "),n("p",[e._v("Install MongoDB as a regular user.")]),e._v(" "),n("p",[e._v("Two MongoDB maintenance recommendations:")]),e._v(" "),n("ol",[n("li",[e._v("Run Mongod as a deamon.")]),e._v(" "),n("li",[e._v("To reset Mongo:")])]),e._v(" "),n("ul",[n("li",[e._v("kill mongod")]),e._v(" "),n("li",[e._v("delete the contents of the directory data")]),e._v(" "),n("li",[e._v("level the contents of the directory logs")]),e._v(" "),n("li",[e._v("restart mongod")])]),e._v(" "),n("p",[e._v("1.) If your L<inux server is running Centos:")]),e._v(" "),n("p",[e._v("Download the centos7 version:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.2.1.tgz\n")])])]),n("p",[e._v("After the download is successful, extract and enter the directory:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tar -xvf mongodb-linux-x86_64-rhel70-4.2.1.tgz\ncd mongodb-linux-x86_64-rhel70-4.2.1\n")])])]),n("p",[e._v("After entering the directory, create a new configuration file mongodb.conf")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vi mongodb.conf\nDbpath=/usr/local/mongodb/data #data file storage directory\nLogpath=/usr/local/mongodb/logs/mongodb.log #log storage directory\nPort=27017 #port\nFork=true #enabled as a daemon, ie running in the background\nlogappend=true\nmaxConns=5000\nstorageEngine = wiredTiger\nbind_ip = 127.0.0.1\n")])])]),n("p",[e._v("MongoDB sets the default name, does not set a password, starts by creating a new configuration file mongodb.conf")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./bin/mongod -f mongodb.conf\n")])])]),n("p",[e._v("2.) If you are using a different Linux OS:")]),e._v(" "),n("p",[e._v("Download and install mongo in its owns directory.")]),e._v(" "),n("p",[e._v("To bypass creating a mongod configuration file (which requires different syntax for different Linux OS), start mongod with all options recommended by NULS. For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kathy@ubuntu-8gb-nbg1-1:~$ cd mongodb\nkathy@ubuntu-8gb-nbg1-1:~/mongodb$ ./bin/mongod --fork --dbpath ./data --verbose --port 27017 --maxConns 5000 --logpath ./logs/mongo.log --bind_ip 127.0.0.1 --storageEngine wiredTiger\nabout to fork child process, waiting until server is ready for connections.\nforked process: 26812\nchild process started successfully, parent exiting\nkathy@ubuntu-8gb-nbg1-1:~/mongodb$\n")])])]),n("h3",{attrs:{id:"step-3-installing-your-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-3-installing-your-blockchain"}},[e._v("#")]),e._v(" Step 3 -- installing Your Blockchain")]),e._v(" "),n("p",[e._v("1.) Transfer the blockchain compresses tar file(s), the Seed file(s), and the Genesis file to your Linux Server.")]),e._v(" "),n("p",[e._v("2.) Here are the instructions regardless of whether you are installing the blockchain with additionally selected options (pro_linux.tar.gz), or the standard blockchain (normal_linux.tar.gz).")]),e._v(" "),n("p",[e._v("Uncompress and un-tar the compressed tar file, and cd to the blockchain directory NULS_Wallet.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tar -zxvf pro_linux.tar.gz \ncd NULS_Wallet/\n")])])]),n("p",[e._v("OR")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tar -zxvf normal_linux.tar.gz \ncd NULS_Wallet/\n")])])]),n("h3",{attrs:{id:"step-4-start-your-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-4-start-your-blockchain"}},[e._v("#")]),e._v(" Step 4 -- Start your Blockchain")]),e._v(" "),n("p",[e._v('Before starting your blockchain, make the following change to the nuls configuration file. The configurstion file is either "nuls.ncf" or ".default-config.ncf".  (Notice default-config.ncf is a hidden file.)')]),e._v(" "),n("p",[e._v('Change "minNodeAmount=2"  to "minNodeAmount=0".  "minNodeAmount" will occur twice in the configuration file.   Change the "minNodeAmount" under the "block" category.')]),e._v(" "),n("p",[e._v('Here is the "block" catagory, with the changed value "minNodeAmount=0":')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n[block]\n#区块最大字节数\nblockMaxSize=5242880\n#区块扩展字段最大字节数\nextendMaxSize=1024\n#引发分叉链切换的高度差阈值\nchainSwtichThreshold=3\n#最小链接节点数,当链接到的网络节点低于此参数时,会持续等待\nminNodeAmount=0\n#区块同步过程中,每次从网络上节点下载的区块数量\ndownloadNumber=10\n#从网络节点下载单个区块的超时时间\nsingleDownloadTimeout=15000\n#区块同步过程中缓存的区块字节数上限\ncachedBlockSizeLimit=20971520\ngenesisBlockPath=genesis-block.json\n\n\n")])])]),n("p",[e._v("After entering the wallet directory (NULS_Wallet), execute the "),n("code",[e._v("./start-dev")]),e._v(" command to start the wallet, and the "),n("code",[e._v("./check-status")]),e._v(" command to check the wallet startup status.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('kathy@ubuntu-8gb-nbg1-1:~/spacechain/NULS_Wallet$ ./start-dev\nLOG PATH    : /home/kathy/spacechain/NULS_Wallet/Logs\nDATA PATH   : /home/kathy/spacechain/NULS_Wallet/data\nCONFIG FILE : /home/kathy/spacechain/NULS_Wallet/nuls.ncf\nDEBUG       : 0\nJAVA_HOME   : /home/kathy/spacechain/NULS_Wallet/Libraries/JAVA/JRE/11.0.2\njava version "11.0.2" 2019-01-15 LTS\nJava(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)\n\n====================\nNULS-WALLET STARTING\n====================\nkathy@ubuntu-8gb-nbg1-1:~/spacechain/NULS_Wallet$\n\n')])])]),n("p",[e._v("Use the command ./check-status to confirm that the blockchain has started. Check-status will loop, checking the all the states of the modules that comprise your blockchain. It may take more than a minute for all modules to fully start. The final output should look like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./check-status\n....\n===================RUNNING MODULE===================\naccount STATE IS RUNNING\nnuls-api STATE IS RUNNING\nblock STATE IS RUNNING\nconsensus STATE IS RUNNING\ncross-chain STATE IS RUNNING\nledger STATE IS RUNNING\nnetwork STATE IS RUNNING\nprotocol-update STATE IS RUNNING\npublic-service STATE IS RUNNING\nsmart-contract STATE IS RUNNING\ntransaction STATE IS RUNNING\nnuls-module-explorer STATE IS RUNNING\nnuls-module-web-wallet STATE IS RUNNING\n==================NULS WALLET STATE=================\n==========================\nNULS WALLET IS RUNNING\n==========================\nkathy@ubuntu-8gb-nbg1-1:~/spacechain2/NULS_Wallet$\n\n")])])]),n("p",[e._v("At this point your blockchain is running.")]),e._v(" "),n("p",[e._v("If you have not successfully started MongoDB, your blockchain may be successfully running without the public-service module. Check-status will display this output:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("==================MODULE PROCESS====================\naccount PROCESS IS START\nnuls-api PROCESS IS START\nblock PROCESS IS START\nconsensus PROCESS IS START\ncross-chain PROCESS IS START\nledger PROCESS IS START\nnetwork PROCESS IS START\nprotocol-update PROCESS IS START\npublic-service PROCESS NOT FOUND\nsmart-contract PROCESS IS START\ntransaction PROCESS IS START\nnuls-module-explorer PROCESS IS START\nnuls-module-web-wallet PROCESS IS START\n==========================\nMODULE PROCESS NOT READY\n==========================\n\n")])])]),n("p",[e._v("Notice, all the modules have started except for public-service.")]),e._v(" "),n("p",[e._v("Start the command line CLI.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('kathy@ubuntu-8gb-nbg1-1:~/spacechain2/NULS_Wallet$ ./cmd\nJAVA_HOME:/home/kathy/spacechain2/NULS_Wallet/Libraries/JAVA/JRE/11.0.2\njava version "11.0.2" 2019-01-15 LTS\nJava(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)\n\n/home/kathy/spacechain2/NULS_Wallet/nuls.ncf\nService Manager URL: ws://127.0.0.1:7771\n\n __    __ __    __ __        ______          ______          ______  __       ______\n/  \\  /  /  |  /  /  |      /      \\        /      \\        /      \\/  |     /      |\n$$  \\ $$ $$ |  $$ $$ |     /$$$$$$  |      /$$$$$$  |      /$$$$$$  $$ |     $$$$$$/\n$$$  \\$$ $$ |  $$ $$ |     $$ \\__$$/       $$____$$ |      $$ |  $$/$$ |       $$ |\n$$$$  $$ $$ |  $$ $$ |     $$      \\        /    $$/       $$ |     $$ |       $$ |\n$$ $$ $$ $$ |  $$ $$ |      $$$$$$  |      /$$$$$$/        $$ |   __$$ |       $$ |\n$$ |$$$$ $$ \\__$$ $$ |_____/  \\__$$ |      $$ |_____       $$ \\__/  $$ |_____ _$$ |_\n$$ | $$$ $$    $$/$$       $$    $$/       $$       |      $$    $$/$$       / $$   |\n$$/   $$/ $$$$$$/ $$$$$$$$/ $$$$$$/        $$$$$$$$/        $$$$$$/ $$$$$$$$/$$$$$$/\n\nModule:cmd-client\n\nwaiting nuls-wallet base module ready\n 2 3nuls-wallet base module ready\nnuls>>>\n\n')])])]),n("h3",{attrs:{id:"step-5-import-the-private-key-of-the-seed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#step-5-import-the-private-key-of-the-seed"}},[e._v("#")]),e._v(" Step 5 -- Import the private key of the Seed")]),e._v(" "),n("p",[e._v("After the wallet is successfully started, there is one more step for your blockchain to be viable.")]),e._v(" "),n("p",[e._v('Copy the private key contained in your SeedAddressList.txt file. The private key is identified by "pri".')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('kathy@ubuntu-8gb-nbg1-1:~/spacechain2/NULS_Wallet$ cat SeedAddressList.txt\n[{"address":"TTSETeCA3FZJixem5LsfsBVD5TLmFz43zyB8MBw","pri":"2779fbbc237225a6f5bbaae542a474f7d862f392b5b157787ab8eda25b41006c","pub":"03475dfc8092e77be686c557b1700a26d28f0347bc48cc71639b82e5ac886a3349","ip":"78.47.206.255"}]\n\n')])])]),n("p",[e._v('Import the private key. You will be prompted for the password. The password is "nuls123456". Note, there is no quotes in the password.')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("nuls>>> import 2779fbbc237225a6f5bbaae542a474f7d862f392b5b157787ab8eda25b41006c5\nPlease enter the password (password is between 8 and 20 inclusive of numbers and letters), If you do not want to set a password, return directly.\nEnter your password:**********\nPlease confirm new password:**********\nTTSETeCA3FZJixem5LsfsBVD5TLmFz43zyB8MBw\n\n# The password for the imported address  must be nuls123456\n# You will be asked to enter the password twice\n\n")])])]),n("p",[e._v("The import is successful, if the account address listed is the address contained in the SeedAddressList.txt file.")]),e._v(" "),n("p",[e._v("Now your blockchain begins to build blocks:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('nuls>>> network info\n{\n  "localBestHeight" : 2,\n  "netBestHeight" : 2,\n  "timeOffset" : -1,\n  "inCount" : 0,\n  "outCount" : 0\n}\nnuls>>>\n\n')])])]),n("ul",[n("li",[n("p",[e._v("Access to the block's block browser via "),n("strong",[e._v("ip:18005")])])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("ip:18006")]),e._v("Access to the web wallet of the chain. In the web wallet, you can connect to the chain by adding a node service ("),n("strong",[e._v("http://{ip}:18006/")]),e._v("):")])])]),e._v(" "),n("p",[n("img",{attrs:{src:a(262),alt:"image-20191107185135316"}})]),e._v(" "),n("h3",{attrs:{id:"launching-a-normal-node-wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launching-a-normal-node-wallet"}},[e._v("#")]),e._v(" Launching a normal node wallet")]),e._v(" "),n("p",[e._v("Download the normal wallet from the chain factory and upload it to the server and unzip it (same as above). After entering the directory, start the wallet. After the wallet is successfully launched, enter the command line by pressing the command "),n("code",[e._v("./cmd")]),e._v(" to import the block address downloaded during the chain creation (password setting). Consistent with the configuration file)")]),e._v(" "),n("p",[e._v("Precautions:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Multiple outbound addresses need to be imported into the launched wallet (cannot be the same wallet)")])]),e._v(" "),n("li",[n("p",[e._v("The server must be enabled on the server configured as the ip of the seed node. The newly added wallet will first connect to this ip.")])])]),e._v(" "),n("h3",{attrs:{id:"cross-chain-network-waiting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cross-chain-network-waiting"}},[e._v("#")]),e._v(" Cross-chain network waiting")]),e._v(" "),n("p",[e._v("Set up a cross-chain chain, you need to wait for the cross-chain networking, networking takes a period of time, when the cross-chain network of the main network and the new chain is successfully initialized, you can initiate cross-chain transactions, otherwise it will cause asset loss.")])])}],s=a(0),o=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,null,null);t.default=o.exports}}]);