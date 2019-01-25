---
title: Setup DApp Environment
---

# Create DAPP Environment

## Prerequisites

**1. The Network for Running the Contract** Deploying and using contract will need to consume a certain amount of resource \(memory, CPU, and storage etc.\). Therefore, it is recommended that the developers tune and test their smart contracts on their private networks and confirm that the contract is available before deploying them on the TestNet or MainNet.

**2. Wallet Client**

`Wallet-cli` is XDC Network’s command-line wallet. Developers can use `wallet-cli` to post and deploy contracts on the MainNet as well as execute other operations.

## Smart Contract Development

At this point, we recommend [Remix](http://remix.ethereum.org/) as the coding environment for compiling and testing during the early stages. We present a simple example of contract code of data access to illustrate the process of compiling, deployment, and debugging.

**1. Initiate the Private Chain**  
 Make sure that the private chain in the prerequisite has been successfully deployed by checking if log message “Produce block successfully” of persistent block generation appears.

**2. Develop Smart Contracts**  
 Copy the code mentioned above to Remix to compile and debug. Make sure that logic of the code is correct, and the code itself is bug-free.

**3. Compile in SimpleWebCompiler**   
 The compiler of XDC is slightly different from that of Ethereum and is still integrating with Remix. Therefore, we are providing a temporary way of acquiring ABI and ByteCode instead of acquiring them directly from Remix. Copy the code above to SImpleWebCompiler and click the Compile button to attain ABI and ByteCode.

**4. Deploy Smart Contract via Wallet-cli**   


Download Wallet-Cli and compile on it.

`Note: Developers can make the change in config.conf if they need to connect to a different node or interface.`

**Initiate Wallet-Cli**

```text
#Command to initiate the wallet-CLI
```

After initiation, input the command interactively to the portal. Import the private key and inquire if the remaining balance is correct.

**Contract Deployment**  
 A message of “Deploy the contract successfully” will be displayed upon the success of contract deployment.

**Acquiring addresses of the contracts**  


**Call the contracts to store and query data**  
 If the called function is constant or VIEW, wallet-cli will return the results directly.

