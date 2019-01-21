---
title: Setup MasterNodes
---

This guide will demonstrate how to set up a single masternode for the very first
time. You will need the following before starting:

1.  At least 10,000,000 XDC with masternode holder to perform proof-of-stake
consensus seamlessly.
1.  Wallet to store XDC tokens, preferably hardware.
1.  Dedicated and stable hardware environment.
1.  Dedicated Static Public IP address.
1.  100% network uptime by IDC network.
1.  Minimum tier 3+ IDC environment.
1.  (Optional, but highly recommended) Virtual Private Server (VPS).
1.  For cloud based services, Amazon EC2’s m3.large VM size would be appropriate.
Similar configuration is applicable for Microsoft Azure Cloud network.

This guide will cater to the following system configurations:

<img src = "https://github.com/punit-agarwal/XinFin-Dev-Portal/blob/master/Setup/raw/req1.png">

### **About XinFin Masternode**

XinFin’s token XDC supplants proof-of-work consensus algorithm (popularly linked
with mining) with proof-of-stake consensus algorithm, fundamentally using the
concept of “validators”.

Validators are special nodes used in the DPoS consensus algorithm which validate
each transaction occurring on the blockchain network. The result of this
validation is to finally append the transaction on the blockchain. A transaction
may be accepted by the validator or rejected. (**Important:** There can be
multiple validator nodes in each network.)

Decisions made by these validator nodes are broadcasted through the network as
messages which are signed (attested) using validated cryptographic public key.
Every validator node running XDC protocol in the RCL network is responsible for
deciding its Unique Node List (UNL). This list holds information about which
regular nodes does the validator care about.

**To set up a masternode, make sure your XDC protocol running node is publicly
identified and has gone through the compliance process. Every Node Holder need
to upload KYC document and this detail will be visible to the public network.**

### **Why set up a masternode at all?**

It is necessary to set up a masternode to operate on XDC protocol is because
masternodes make the decentralised blockchain network self-sustainable.
Deploying masternode is conducive to trusted, scalable decentralised network
infrastructure. Such an environment facilitates greater stability and
reliability on the network.

### **Functions of masternode**

In DPoS blockchain environment, masternode concept is cardinal to the
functioning. A masternode validates each (or segment of transaction depending
upon UNL) transaction and is also responsible for writing the transaction onto
the truth ledger: the blockchain. As a consequence, this makes decentralised
governance of the network possible.

### **Master node**

* **Masternodes** are full-nodes that create, verify and validate new blocks in
XinFin’s platform.
* **mXDC**:- Let’s assume mXDC **{mainNet-XDC}** will be native crypto on XinFin
dPOS network. mXDC will rewarded to MN Owners.
* **Epoch**:- We can use epoch instead of hard date to distribute
incentive/rewards to masternode owners (1 epoch could be number of block, for
example **{1 Epoch = 888 Blocks}**
* **Masternode Candidate:** Any account can deposit X mXDC using the official
on-chain governance d-app to complete KYC complaint to become a Masternode
Candidate. **X’nos** mXDC deposit can earn staking rewards. A Candidate can
resign, but the mXDC tokens will be locked for the next 30 days ( Let’s assume
we have new block in each 2 sec 1,296,000 blocks) after the resignation.
* **Becoming a Masternode:** A Candidate becomes a Masternode when he/she belongs
to top 50 most voted Candidates in each epoch. A Masternode can resign, but the
tokens will be locked for the next 30 days after the resignation.
* **Reward:** The reward a Masternode receives in each epoch is proportional to
the number of signatures he/she signs.

### **Restrictions on nodes which aspire to become masternodes**

Nodes which possess any of the below mentioned characteristics may not qualify
to become masternodes:

* Anonymous entity on the network.
* Intentions to fork XDC Software.
* Entity or Individual with Criminal record in past.
* Entity or Individual which does not comply with local law of land.

### **Incentives to set up your own masternode**

#### Several reasons why setting up a masternode is useful are:

* Reputation building within the network community.
* Trust Factor enhances for your node particularly since network relies on your
node.
* More Incentive gain with as your node pushes more transactions on network.
* Private blockchain is capable of running its own use case.

**Important:** Max number of Master node allowed in the network is 5000.

**Special incentives for 21st validator node:** information required Depends on
Nos of Block created by validator node (incentive In terms of XDC)

**Reward Cycle:** Every 15 days.

### **FAQ**

**1. What is Masternode Node?**
Masternode is simply a cryptocurrency full node or computer wallet that keeps
the full copy of the blockchain record in real-time.

**2. What is Validator node?**<br>
In XinFin, ‘Validator Node’’ are full nodes that incentivize node operators to
perform the core consensus functions of running a DPoS based blockchain. Only
Validator Node gets incentive to validate the transaction.

**3. How to become a Validator Node?**<br>
Under Xinfin DPoS, Highest XDC Stakeholder 21 Node Act as Validator node rest
node act as Backup node and Private node.

**4. If no transaction fees on network then how validator gets incentive?**<br>
Network generate additional coin to provide incentive to validator node. Nos
depends on network load and numbers of transaction process within the network.

**5. How to get XDC ?**<br>
XDC listed with more then 20 Liquidity Exchanges, full list of exchange
available at xinfin.io to Purchase XDC from open market to stake under
masternode.

### **Hands on guide: How to Setup Masternode**

There are two methods to choose from to set up the masternode:

1.  DIY masternode environment set up
1.  Delegate masternode se up to third party service provider

#### **METHOD 1: DIY masternode environment set up**

* Create a working folder/directory for this exercise. It will be used to hold
binaries and configuration files.<br>

* Clone Repository from Github link:<br>

    `$ git clone [https://github.com/XinFinorg/](https://github.com/XinFinorg/)`

*  Install Docker & Docker Compose<br>

    `$ sudo ./install_docker.sh`

*  Pull Image from Docker Hub<br>

    `$ sudo docker pull xinfinorg`

*  Setup<br>

    `$ cd static-nodes`<br>
    `$ sudo ./setup.sh`

*  Enter the initial number of nodes & public IP address of host machine & then
start the nodes using.<br>

    `$ sudo docker-compose -p <PROJECT_NAME_STATIC_NODE> up -d`

*  To Stop<br>

    `$ sudo docker-compose -p <PROJECT_NAME_STATIC_NODE> down`

*  Accessing the console<br> 

    `$ sudo docker exec -it PROJECT_NAME_STATIC_NODES_node_1_1 geth attach /`
    
*  Upgrade<br> 

    `$ sudo docker pull xinfinorg/`
    
*  Stop containers running old version<br>

    `$ sudo docker-compose -p <PROJECT_NAME_STATIC/DYNAMIC_NODE> down`
    
*  Run new version<br> 

    `sudo docker-compose -p <PROJECT_NAME_STATIC/DYNAMIC_NODE> up -d`

#### **Troubleshooting**

If you are having problems with Setup, the first step is to collect more
information to accurately characterize the problem. From there, it can be easier
to figure out a root cause and a fix.

Please drop message with all possible detail and screen shot at Community
Support forum: [http://Xinfin.Net](http://xinfin.net/)

Telegram Community:
[http://bit.do/Telegram-XinFinDev](http://bit.do/Telegram-XinFinDev)

Slack Community:
[https://xinfin-public.slack.com/messages/CELR2M831/](https://xinfin-public.slack.com/messages/CELR2M831/)

#### **METHOD 2: Delegate masternode se up to third party service provider**

Set up your Masternode using one of these 3rd party Masternode service
providers.

**DISCLAIMER:** This list is provided for informational purposes only. Services
listed here have not been evaluated or endorsed by Xinfin and no guarantees are
made as to the accuracy of this information. Please exercise discretion when
using third-party services.

List of service provider to Setup masternode

#### 1. IndSoft.net

* IPv6 and tor Supported
* Global geographical locations
* Fully Managed Network
* Network attack prevention (DDoS)
* One time Setup Cost: Free
* Monthly: 250 USD (pay in XDC, Paypal, debit, or credit card)

Are you a Provider?

If yes, then [Contact us](https://www.xinfin.org/test-web/contactus.php) to List
your service.

#### Masternode Tools

Community Forum update link: [http://xinfin.net](http://xinfin.net/)

#### Where to operate? Mainnet vs Testnet:

In Xinfin, there are two networks where you can run XDC protocol: the mainnet
and the testnet.

The mainnet is used to transact real XDC. The XDC’s value is tied to real fiat
currency via cryptocurrency exchanges.

As developers, you do not want to run application tests with real money. That is
what the testnet is for. We call the testnet
[XinfinTestNet](http://testnet.xinfin.org/).

<br> 
