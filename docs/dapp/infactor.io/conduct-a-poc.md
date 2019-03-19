---
description: 'inFactor : How to conduct POC'
---

# Conduct a POC

**1. Setup a MasterNode  
\* Prerequisite**

1. Operating System : Ubuntu 16.04 64-bit or higher. Should be facing internet directly with public IP & without NAT
2. Tools: Git, Docker, Docker Compose
3. Network Ports

Following network ports need to be open for the nodes to communicate.

| **Port** | **Type** | **Definition** |
| :--- | :--- | :--- |
| 8545 | TCP | RPC |
| 30303 | TCP/UDP | XDC |

**How to Setup Masternode ?**

**0. Install Git**

* Check whether git is preinstalled.

  ```text
  git --version
  ```

If present, output will be something like `git version 2.17.1`. in this case, go to step a.

* Otherwise follow the below steps.

  ```text
  sudo apt update
  sudo apt install git
  git --version
  ```

* Configure Git.

  ```text
  git config --global user.name "Your Name"
  git config --global user.email "youremail@domain.com"
  ```

**a. Clone repository**

Run the following commands on your terminal.

```text
git clone [https://github.com/XinFinOrg/XinFin-Node.git](https://github.com/XinFinOrg/XinFin-Node.git)

cd XinFin-Node
```

The git clone command will create a new folder XinFin-Node. cd XinFin-Node command changes the current directory to XinFin-Node

**b. Install docker & docker-compose**

```text
sudo ./install\_docker.sh
```

The above command will install docker and docker-compose for you.

**c. Update .env file with details**

* Copy a env.example file from XinFin-Node directory and name it as a .env
* Open .env file and edit values for following

  ```text
  INSTANCE_NAME : A Display name of your masternode
  CONTACT_DETAILS : Your Email ID
  ```

![](../../../.gitbook/assets/xinfin-node.png)

![](../../../.gitbook/assets/masternode-.env.png)

**d. Start your Node**

```text
sudo docker-compose -f docker-services.yml up -d
```

This will start a Masternode and connect to a XinFin Testnet.

You should be able to see your node listed on this page: [http://Xinfin.Network](http://xinfin.network) \(Make sure, you are connected to XinFin Testnet. If not, switch to Tesnet on top right corner.\)

Your coinbase address can be found in xdcchain/coinbase.txt file.

![](../../../.gitbook/assets/masternode-listing.png)

**2. Stake XDC**

**1. Create XDC Wallet**

_a. Visit_ [_http://xinfin.network/\#webWallet_](http://xinfin.network/#webWallet) _and Click on create a new wallet._

_b. You can create use a web wallet or download eWallet app from Google Play Store._

_c. Create an account_

_d. Store your private key at a safe place \(Hardware wallet is recommended\)_

![](../../../.gitbook/assets/xinfin_wallet.png)

**2. Buy XDC**

_a. Get your free XDC to use on XinFin Testnet_

_b. Visit XinFin TestNet Faucet_ [_http://xinfin.network/\#getTestXDC_](http://xinfin.network/#getTestXDC)_._

_c. Add your wallet address created in step 2.b and request XDC._

![](../../../.gitbook/assets/masternode-faucet.png)

**3. Upload Kyc**

_a. Visit_ [_http://xinfin.network/\#masternode_](http://xinfin.network/#masternode)

_b. Upload a notarized kyc_

**4. Become a Candidate**

_Add your account address and click on ‘Become a Candidate’ to become a masternode. You must have minimum 10 Million XDC in your account. Once your candidature is accepted your stake of 10 Million XDC is locked._

![](../../../.gitbook/assets/masternode-node.png)

**3. Factoring Process**

In a typical factoring on infactor.io, there are 3 parties involved. Supplier, Buyer, and Financier. Supplier is a starting point. Supplier uploads Invoice, Buyer validates invoice, and Financier factors on invoice.

1. Register on [http://infactor.io](http://infactor.io).

_Choose your role\(Supplier, Buyer, Financier\)_

_On successful registration, a wallet account is automatically created for you._

_Note : To register, you must have uploaded KYC, staked XDC and you are a part of XDC Network by running a masternode. In case of any malicious activity, the staked XDC will be frozen._

![](../../../.gitbook/assets/infactor_login.png)

1. Supplier uploads invoice details and related documents.

![](../../../.gitbook/assets/infactor_createinvoice.png)

1. Buyer verifies invoice authenticity and approves/rejects invoice.

![](../../../.gitbook/assets/infactor_buyer-approval.png)

1. Supplier selects an approved invoice for factoring. All financiers on the platform receive new factoring notification.
2. Financer sends a factoring proposal along with related documents to supplier. The proposal includes interest rate/month and the upfront payment percent of total invoice amount.

![](../../../.gitbook/assets/infactor_factorproposal.png)

1. Supplier approves the factoring proposal and the notification is sent to selected financier.
2. Financier pays first payment to supplier as per factoring criteria.

_Note : To transfer amount, a user has to load the amount into a wallet. A deposit functionality is present in user profile section._

![](../../../.gitbook/assets/infactor_paysupplier.png)

1. Buyer pays invoice amount to financier.
2. A financier pays final payment\(by deducting fees\) to supplier.

_Fee calculation is done on the basis of Interest Rate \(As per factoring criteria\) and payout date. If Buyer pays invoice amount earlier to financier, fees will be less and vice versa. The fees calculation is done on the smart contract._

1. Financier and Supplier can rate each other.

![](../../../.gitbook/assets/ratings.png)

