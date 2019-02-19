---
description: 'inFactor : How to conduct POC'
---

# Conduct a POC



**1. Setup a MasterNode
\* Prerequisite**

1. Operating System : Ubuntu 16.04 64-bit or higher Should be facing internet directly with public IP & without NAT
2. Tools: Git, Docker, Docker Compose
3. Network Ports

Following network ports need to be open for the nodes to communicate.

|    **Port** | **Type** | **Definition** |
| :--- | :--- | :--- |
| 8545 | TCP | RPC |
| 30303 | TCP/UDP | XDC |

**How to Setup Masternode ?**

**0. Install Git**

- Check whether git is preinstalled.

      git --version

If present, output will be something like `git version 2.17.1`. in this case, go to step a. 

- Otherwise follow the below steps.

      sudo apt update
      sudo apt install git
      git --version

- Configure Git.

      git config --global user.name "Your Name"
      git config --global user.email "youremail@domain.com"

**a. Clone repository**
    Run the following commands on your terminal.

    git clone [https://github.com/XinFinOrg/XinFin-Node.git](https://github.com/XinFinOrg/XinFin-Node.git)

    cd XinFin-Node
The git clone command will create a new folder XinFin-Node.  Cd XinFin-Node command changes the current directory to XinFin-Node


**b. Install docker & docker-compose**

    sudo ./install\_docker.sh
The above command will install docker and docker-compose for you.

**c. Update .env file with details**

Copy a env.example file from XinFin-Node directory and name it as a .env

Open .env file and edit values for following

    INSTANCE_NAME : A Display name of your masternode
    CONTACT_DETAILS : Your Email ID

**d. Start your Node**

    sudo docker-compose -f docker-services.yml up -d

This will start a Masternode and connect to a XinFin Testnet.

You should be able to see your node listed on this page: [http://Xinfin.Network](http://xinfin.network) \(Make sure, you are connected to XinFin Testnet. If not, switch to Tesnet on top right corner\)

Your coinbase address can be found in xdcchain/coinbase.txt file.


**2. Stake XDC**  


**1. Create XDC Wallet**

_a. Visit_ [_http://xinfin.network/\#webWallet_](http://xinfin.network/#webWallet) _or download eWallet app from Google Play Store._

_b. Create an account_

_c. Store your private key at a safe place \(Hardware wallet is recommended\)_

**2. Buy XDC**

_a. get your free XDC to use on XinFin Testnet_

_b. Visit XinFin TestNet Faucet_  [_http://xinfin.network/\#getTestXDC_](http://xinfin.network/#getTestXDC)_._

_c. Add your wallet address created in step 2.b and request XDC._  

**3. Upload Kyc**

_a. Visit_ [_http://xinfin.network/\#masternode_](http://xinfin.network/masternode)\_\_

_b. Upload a notarized kyc_

**4. Become a Candidate**

_Add your account address and click on ‘Become a Candidate’ to become a masternode. You must have minimum 10 Million XDC in your account. Once your candidature is accepted your stake of 10 Million XDC is locked._  
****

**3. Factoring Process**

In a typical factoring on infactor.io, there are 3 parties involved. Supplier, Buyer and Financier. Supplier is a starting point. Supplier uploads Invoice, Buyer validates invoice and Financier factors on invoice.

1. Register on [http://infactor.io](http://infactor.io).

_Choose your role\(Supplier, Buyer, Financier\)_

_On successful registration, A wallet account is automatically created for you._

_Note : To register, you must have uploaded KYC, staked XDC and you are a part of XDC Network by running a masternode. In case of any malicious activity the staked XDC will be frozen._

2. Supplier upload invoice details and related documents.

3. Buyer verfies invoice authenticity and approve/reject invoice.

4. Supplier select an approved invoice for factoring, All financiers on the platform receives new factoring notification.

5. Financer sends a factoring proposal along with related documents to supplier. The proposal includes interest rate/month and the upfront payment percent of total invoice amount

6. Supplier approves the factoring proposal and the notification is sent to selected financier

7. Financier pays first payment to supplier as per factoring criteria

_Note : To transfer amount, A User has to load the amount into a wallet. A deposit functionality is present in user profile section._

8. Buyer pays invoice amount to financier.

9. A financier pays final payment\(by deducting fees\) to supplier

_Fee calculation is done on the basis of Interest Rate \(As per factoring criteria\) and payout date. If Buyer pays invoice amount earlier to financier, fees will be less and vice versa. The fees calculation is done on the smart contract._

10. Financier and Supplier can Rate each others.

