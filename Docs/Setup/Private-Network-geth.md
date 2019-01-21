# How To: Create Your Own Private Ethereum Blockchain

![image-courtsey-mercuryprotocol](https://cdn-images-1.medium.com/max/1000/1*tBaiZrAVBW6XyXcM5nHIkg.png)

### “Hello, Testnet”

This is a guide for starting your own custom Ethereum blockchain on Mac, not to be confused with starting a node on the main
Ethereum blockchain. Here we are starting an entirely new and separate blockchain that cannot interact with Ethereum mainnet.

Starting your own Ethereum blockchain is useful, educational, and safer than the public testnet. Learning to set up a private testnet provides tangibility to
otherwise abstract concepts such as mining, network peers, and even the geth datadir.

### **Prerequisites**

You need to have Geth installed. The easiest way to do this is through homebrew.

1.  Open Terminal and [install homebrew](https://brew.sh/)

    ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Now [install geth](https://www.ethereum.org/cli)

    brew tap ethereum/ethereum
    brew install ethereum

### **Create Genesis File**

The Genesis **block** is the first block in the chain, the Genesis **file** is a JSON file that defines the characteristics
of that initial block and subsequently the rest of the blockchain.

1.  Create a directory to hold your network files

    mkdir my-eth-chain
    cd my-eth-chain

2. Create your genesis file

    touch myGenesis.json

3. Open your genesis file and paste the following

    {
       "config": {
          "chainId": 1994,
          "homesteadBlock": 0,
          "eip155Block": 0,
          "eip158Block": 0,
          "byzantiumBlock": 0
       },
       "difficulty": "400",
       "gasLimit": "2000000",
       "alloc": {
          "7b684d27167d208c66584ece7f09d8bc8f86ffff": { 
              "balance": "100000000000000000000000" 
          },
          "ae13d41d66af28380c7af6d825ab557eb271ffff": { 
              "balance": "120000000000000000000000" 
          }
       }
    }

#### config

* chainId — this is your chain’s identifier, and is used in replay protection.
* homesteadBlock, eip155Block, eip158Block, byzantiumBlock — these relate to chain forking and versioning, so in our case
lets leave them 0 since we’re starting a new blockchain.

#### difficulty

This dictates how difficult it is to mine a block. Setting this value low (~10–10000) is helpful in a private blockchain as
it lets you mine blocks quickly, which equals fast transactions, and plenty of ETH to test with. For comparison, the Ethereum mainnet Genesis file defines a difficulty of
17179869184.

#### gasLimit

This is the the total amount of gas that can be used in each block. With such a low mining difficulty, blocks will be moving
pretty quick, but you should still set this value pretty high to avoid hitting the limit and slowing down your network.

#### alloc

Here you can allocate ETH to specific addresses. This won’t create the account for you, so make sure its an account you
already have control of. You will need to add the account to your private chain in order to use it, and to do that you
need access to the keystore/utc file. For example, Geth and [MyEtherWallet](https://www.myetherwallet.com/)give you access to this file when you create an
account, but [Metamask](https://metamask.io/) and [Coinbase](https://www.coinbase.com/) do not. The addresses provided are
not real addresses, they are just examples. Here we allocate 100,000 and 120,000 ETH respectively.

### Start your Node!

Now the real fun begins, we’re all set to fire up our new Ethereum blockchain.

#### 1. Instantiate your data directory

    geth --datadir ./myDataDir init ./myGenesis.json

#### 2. Start your Ethereum peer node.

Networkid helps ensure the privacy of your network. You can use any number here (where we used “1114”), but other peers
joining your network must use the same one.

    geth --datadir ./myDataDir --networkid 1114 console 2>> myEth.log

Output should look like this:

    Welcome to the Geth JavaScript console!

    instance: Geth/v1.7.3-stable-4bb3c89d/darwin-amd64/go1.8.3
    coinbase: 0xae13d41d66af28380c7af6d825ab557eb271ffff
    at block: 5 (Thu, 07 Dec 2017 17:08:48 PST)
    datadir: /Users/test/my-eth-chain/myDataDir
    modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

    >

This is the geth JavaScript console. Any command with the symbol `>` should be typed here.

#### 3. Display your Ethereum logs

* Open another terminal window
* cd to `my-eth-chain`
* Type `tail -f myEth.log`

#### 4. Import/Create an Account

* If you allocated ETH in the Genesis file, import the corresponding account by dragging the [UTC file](https://myetherwallet.github.io/knowledge-base/getting-started/backing-up-your-new-wallet.html)
into the `myDataDir/keystore`directory and skip to step 5.
* In the geth JavaScript console, create an account:<br> `>
personal.newAccount("<YOUR_PASSPHRASE>")`
* Do not forget this passphrase! You will be typing this a lot, so for this test
network you can keep it simple.

#### 5. Set Default Account

* Check your default account, type<br> `> eth.coinbase`
* If this address is the same as the one from step 4, skip the rest of step 5.
* To set your default account, type <br> `>
miner.setEtherbase(web3.eth.accounts[0])`

#### 6. Start mining

* Check your balance with <br> `> eth.getBalance(eth.coinbase)`
* Run <br> `> miner.start()`
* Look at your other terminal window, you should see some mining action in the logs. Check your balance again and it should
 be higher.
* To end mining, type <br> `> miner.stop()`

### **Optional: Add Other Peers**

Add more nodes to your private Ethereum network.

#### 1. Start another peer

* On your same machine instantiate a new datadir:

    geth --datadir ./peer2DataDir init ./myGenesis.json

* Launch the 2nd peer on a different port:

    geth --datadir ./peer2DataDir --networkid 1114 --port 30304 console 2>> myEth2.log

#### 2. Display your Ethereum logs

* Open another terminal window
* cd to `my-eth-chain`
* Type `tail -f myEth2.log`

#### 3. Join the 1st peer

* In the geth JavaScript console of your 1st peer, type:

    > admin.nodeInfo.enode

* Output will look like this:
`“enode://dcff6d9dcb14eeb1d1b7575b0653fa1025ad1b7722c6d652d0449f0966e97931bdf037e5542086e7b9e0bec056566522c6c0cc4d73d8e4186a35da8aa5988e15@[::]:30303”`
* In the geth JavaScript console of your new 2nd peer, type:

    > admin.addPeer( “enode://
    ” )

* Make sure you replace `“enode://…@”` above with the output from `admin.nodeInfo.enode` which is specific to you. As shown 
above, the “`[::]`” is replaced with “`127.0.0.1:30303`” which is the IP:Port of the 1st peer.

#### 4. Verify your nodes are now communicating

* In the geth JavaScript console of your new 2nd peer, type:

    > admin.peers

* Output should show that peer 2 is connected to`127.0.0.1:30303`

### **Helpful: geth console commands**

admin.nodeInfo.enode<br> net.listening<br> net.peerCount<br> admin.peers<br>
eth.coinbase<br> eth.getBalance(eth.coinbase)<br> personal<br> eth.accounts<br>
miner.setEtherbase(web3.eth.accounts[0])<br>
miner.setEtherbase(“0xae13d41d66af28380c7af6d825ab557eb271ffff”)<br>
miner.start()<br> miner.stop()<br> miner.hashrate<br> eth.getBlock(0)<br>
eth.getBlock(“latest”)<br> eth.blockNumber <br>
web3.eth.getBlock(BLOCK_NUMBER).hash<br> eth.syncing<br> debug.verbosity(6) //highest logging level, 3 is default

**Share your thoughts with us in any of the community channels linked below!**

### Connect

[Slack](https://www.mercuryprotocol.com/slack)**[Telegram](https://t.me/joinchat/G47gcA8f5EYFfEsILw7H2w)**[Twitter](https://twitter.com/MercuryProtocol)**[Reddit](https://www.reddit.com/r/MercuryProtocol/)**[Facebook](https://www.facebook.com/Mercury-Protocol-279018119268964/)**[LinkedIn](https://www.linkedin.com/company/18270256/)

[Learn more about the Mercury Protocol](http://www.mercuryprotocol.com/)<br>
[Read the Mercury Protocol whitepaper](http://www.mercuryprotocol.com/files/Mercury_Protocol_whitepaper.pdf)

* [Ethereum](https://medium.com/tag/ethereum?source=post)

### [Mercury Protocol](https://medium.com/@MercuryProtocol)

### [mercuryprotocol](https://medium.com/mercuryprotocol?source=footer_card)

Mercury Protocol is the future of communications, powered by blockchain.
