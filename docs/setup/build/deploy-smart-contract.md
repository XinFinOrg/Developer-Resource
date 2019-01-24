---
Title: Deploying smart contracts on XDC01-docker-Nnodes
---

# Deploy Smart Contracts

## Prerequisites

**XDC01-docker-nodes already setup** - if not refer to [Setting up XDC Docker Nodes](https://github.com/DAZLabs/XDC-Docker-Nodes/blob/master/ReadMe.md).

**Tools**: Docker, Docker Compose.

**Wallet**: Metamask \(extension can be installed from the [Metamask](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/Build/metamask.io) website\).

**Editor**: Remix online IDE.

## Unlocking the coinbase account

To deploy any contract on the private blockchain we need Ether. There is a pre-funded Coinbase account provided by XinFin for deploying smart contracts at a zero gas price.We can unlock the account by accessing the Geth JavaScript console provided for each node using the command

```text
sudo docker exec -it PROJECT_NAME_STATIC_NODES_node_1_1 geth attach /qdata/dd/geth.ipc
```

This launches the console in the terminal were we can find the public key of the pre-funded account by using the command

```text
personal.listAccounts
```

Then, we can unlock the account using the command

```text
personal.unlockAccount(web3.eth.coinbase,””,15000)
```

## Linking the chain with Metamask

Before importing our account, we should connect to our private network via Metamask. This can be done by networks drop down list box on the top and selecting the option “Custom RPC network”. Here we enter the IP address which was used while setting up the docker nodes and the RPC port number of the elected/leader node \(can be obtained through the geth logs\). The entered URL should be of the format

```text
http://<IP_ADDRESS>:<RPC_PORT_NUMBER_OF_ELECTED_NODE>/
```

We have the private key encrypted in a keystore file for each node, we need a decrypting client. For decryption, we can follow the below procedure.

1. Visit [myetherwallet](https://www.myetherwallet.com/#view-wallet-info).
2. Select **the Keystore/JSON File** option on the left side panel.
3. Click **SELECT WALLET FILE** option and then select the keystore file in the following path inside the docker.

   XDC01-Docker-Nodes/static-nodes/qdata\_/dd/keystore

4. Once the file is uploaded, there will be a response - _Your wallet is encrypted. Good! Please enter the password_. Use an **empty password** in here and then click the unlock button.
5. Wait for the redirected page, where we finally obtain the private key of the account.

Once we obtain the private key we can import the account using Import account option in Metamask and then entering the private key.

## Deploying smart contracts

Open the [Remix IDE](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/Build/remix.ethereum.org) in the same browser where Metamask plugin is installed.

Here, a new solidity contract can be created by clicking on the New contract icon on the top left corner of the IDE. Then we should enter the name of the contract followed by the extension .sol \(for example HelloWorld.sol\). This will create a new contract stored in the IDE cloud with the name you have specified. Then write the contract code in the main window.

![Remix editor window](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/image4.png)

The contract code can be compiled by selecting the **Compile tab** on the right side panel and then clicking on the Start to compile option. This compiles and displays the errors in the code under the Compile tab in the right side panel.

![Compile tab](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/image5.png)

To deploy the contract, move to the Run tab in the right side panel. Here, select the environment \(the network where the contract is to be deployed\) as **Injected Web3 \(Custom 2018\)**. Once the environment is successfully connected, the single account imported in Metamask is auto-selected in the Account list, if it isn’t selected, select the account from the dropdown list. Set the **Gas limit to any standard value** and **the Value to 0**. Then select the smart contract that we had created from the empty dropdown list box and click Deploy.

![Compile tab](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/image2.png)

Immediately, sends a prompt from Metamask to confirm the transaction for deploying the smart contract on the network. Here, change the **Gas price to 0** \(since the private network is designed to have contracts with 0 gas price\) by selecting the Edit option and setting the gas price to 0.

![Metamask confirmation tab](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/image1.png)

Then select confirm to confirm the gas payment for deploying the contract.

## Executing the contract

The contract execution can be tested using remix. The functions of the deployed contract can be invoked using the specific buttons allocated for each function in the contract, where the outputs will be displayed below the buttons. Also, the logs can be accessed inside the command window inside the Remix IDE.

![Compile tab](https://github.com/XinFinOrg/Developer-Resource/tree/292cf026ee8057660f28bf3756370e83f1e5280b/Docs/image3.png)

## Account balances after deployment

The account balances can be checked using Metamask. Each transaction done after importing the account will be registered in the node's log.

## References

### Quorum network:

1. [https://github.com/jpmorganchase/quorum/wiki/Quorum-Overview](https://github.com/jpmorganchase/quorum/wiki/Quorum-Overview)
2. [https://github.com/jpmorganchase/quorum/blob/master/README.md](https://github.com/jpmorganchase/quorum/blob/master/README.md)
3. [https://github.com/synechron-finlabs/quorum-maker](https://github.com/synechron-finlabs/quorum-maker)
4. [https://ethereum.stackexchange.com/questions/55374/securing-quorum-geth-node](https://ethereum.stackexchange.com/questions/55374/securing-quorum-geth-node)
5. [https://github.com/jpmorganchase/quorum/tree/master/rpc](https://github.com/jpmorganchase/quorum/tree/master/rpc)

### Raft consensus algorithm:

1. [https://raft.github.io/](https://raft.github.io/)
2. [https://github.com/jpmorganchase/quorum/blob/master/docs/raft.md](https://github.com/jpmorganchase/quorum/blob/master/docs/raft.md)

### Constellation:

1. [https://github.com/jpmorganchase/constellation/blob/master/README.md](https://github.com/jpmorganchase/constellation/blob/master/README.md)

### Smart contracts in Quorum:

1. [https://github.com/jpmorganchase/quorum/wiki/Using-Quorum](https://github.com/jpmorganchase/quorum/wiki/Using-Quorum)

