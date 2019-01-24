---
title: Smart Contracts
---

# SmartContract

## **Introduction**

A blockchain is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data.

One of the best things about the blockchain is since it is a decentralized system that exists between all permitted parties, there is no need to pay intermediaries \(Middlemen\) and it saves you time and conflicts. Blockchains have their problems, but they are rated, undeniably, faster, cheaper, and more secure than traditional systems, which is why banks and governments are turning to them.

Imagine if there were some self-executing contracts, in which contracts would be converted to computer code, stored and replicated on the system and supervised by the network of computers that run the blockchain. All of this is what makes up smart contracts.

## **WHAT ARE SMART CONTRACTS?**

A smart contract is a computer code running on top of a blockchain containing a set of rules under which the parties to that smart contract agree to interact with each other. If and when the predefined rules are met, the agreement is automatically enforced. The smart contract code facilitates, verifies, and enforces the negotiation or performance of an agreement or transaction. It is the simplest form of decentralized automation.

In simpler words, it is rather a form of exchange of any type like money, property etc in a **conflict-free way** without the services of a middleman so it is **trustless execution** which is an important feature that smart contracts promises.

Bitcoin was the first to support basic smart contracts in the sense that the network can transfer value from one person to another. The network of nodes will only validate transactions if certain conditions are met.

Here is an example of a simple smart contract where we use simple set and get function then we increment and decrement some data.

![](https://cdn-images-1.medium.com/max/800/0*t3R3g_wwyDF5YjO8)

## **Features Of Smart Contracts**

Various features provided by smart contracts are:

1. Trust — Your documents are encrypted on a shared ledger. There’s no way that someone can say they lost it. Smart contracts allow parties to commit and bind by the conditions and rules written inside it.
2. Transparency: Everything is written inside a smart contract with intricate details so anyone can read the details before agreeing and thus eliminates the chance of future disputes. There is no miscommunication as all the information is open with everybody.
3. Autonomous: You’re the one making the agreement; there’s no need to rely on a broker, lawyer or other intermediaries to confirm. This also knocks out the danger of manipulation by a third party, since execution is managed automatically by the network.

4.Accuracy: Automated contracts are not only faster and cheaper but also avoid the errors that come from a person making the contract who can miss some conditions but in smart contracts, it will result in an error, therefore, all the conditions are put in a detailed form.

5.Speed: If anyone would read documents or contracts manually it would take a chunk of time, whereas smart contracts are a bunch of code used to automate task and hence save hours of time.

6.Savings: Smart contracts can help to save a lot of money as it removes the presence of an intermediary. For instance, you would pay a lawyer for your case but in smart contracts, it’s all in your hand as the code is the law.

7.Safety: Cryptographically encryption keeps your data safe. Since they match the highest safety standards, the level of protection involved in them allows them to be secure to use for critical processes.

## **PROBLEMS**

**1.No Business Ready Solution**  
 The major problem with smart contracts is that you simply cannot replace it with an upgraded one otherwise you will lose all of your smart contract bound information from the blockchain.

There was also a vulnerability in smart contracts, the infamous DAO hack that caused a breach of about $150 million.

**2.Legal Issues**  
The biggest limitation is based on their current inability to account for implied expectations or deal with unforeseen circumstances.

There is also a problem of forgery which can be seen after receiving the product but that transaction can’t be replaced. What to do now?

Eg: Someone was selling a baseball with a sign of someone famous but after receiving the ball you see that the signature was forged a long time ago, under contract law you should be able to return the product but as of now it is not possible.

As of now, it is very difficult to account for all the problems beforehand in a self-executing contract.

**3.Writing Contracts**  
Writing smart contracts is extremely difficult as it assumes Turing-complete context which is extremely tough to execute and analyze. It is like proving that a computer program doesn’t have bugs which is extremely tough as every program in existence does have some bugs.

**4.Oracles**  
An oracle is just a provider of data. An oracle gives smart contracts _answers_ to questions about the world.

The problem with Oracle is like it’s a third party and completely centralizes the smart contract which loses its main property of **trustless execution.**

## **PROBLEM SOLUTION**

1. We can solve some of the problems with smart contracts like upgrade problems by using modular smart contracts. So, we can have modular.sol files while building on Ethereum that can be easily upgraded without losing information.
2. Using **Delegatecall-based proxies** for contract upgrading. In delegatecall logic data are kept in separate contracts, but the data contract \(the proxy\) calls the logic contract through delegatecall. It is difficult to apply the delegatecall-based proxy pattern correctly. The proxy pattern requires that memory layouts stay consistent between contract and compiler upgrades. A developer unfamiliar with EVM internals can easily introduce critical bugs during an upgrade.
3. The legal issues of smart contracts can only be solved over time as they are in their initial development stage; it will require time.
4. The major problem of writing smart contracts can be solved by not implementing Turing-complete smart contracts.
5. And, the oracle problem can be solved maybe by a consensus protocol in the community itself which will help to see how things are in the physical world.

## **APPLICATION OF SMART CONTRACTS**

1.**Digital Identity:** Smart contracts allow users to own and control their digital identity i.ie data, reputation and assets. It provides enterprises with the opportunity to seamlessly know their customers while individuals may not disclose sensitive data which reduces the frictionless know-your-customer requirements.

2.**Financial Data Recording:** Financial organizations can utilize smart contracts for accurate, transparent financial data recording. Smart contracts allow for uniform financial data across organizations, improving financial reporting and reducing auditing costs.

By improving data integrity, smart contracts support increased market stability. They also reduce accounting costs by allowing cost sharing among organizations.

3.**Healthcare:** Personal health records could be encoded and stored on the blockchain with a private key which would grant access only to specific individuals. The same strategy could be used to ensure that research is conducted via HIPAA laws \(in a secure and confidential way\). Receipts of surgeries could be stored on a blockchain and automatically sent to insurance providers as proof-of-delivery. The ledger, too, could be used for general healthcare management, such as supervising drugs, regulation compliance, testing results, and managing healthcare supplies.

4.**Real Estate:** You can get more money through smart contracts. Ordinarily, if you wanted to rent your apartment to someone, you’d need to pay a middleman such as Craigslist or a newspaper to advertise and then again you’d need to pay someone to confirm that the person paid rent and followed through. The ledger cuts your costs. All you do is pay via bitcoin and encode your contract on the ledger.

## **CONCLUSION**

Smart contracts do offer a lot and have shown signs of how promising they can be, but they are still in their initial stages so with time maybe we will see their actual potential which could provide for all sorts of social changes which is really exciting.

A big problem lies with the organizations as well, as they are adopting blockchains due to the buzzword but not considering how to use it to its fullest. If organizations manage that beforehand then maybe writing smart contracts can get easier.

But the actual problem still lies in writing smart contracts and gaining the trust of people again after the DAO hack.

In the coming future, we may witness a hybrid of paper and digital content where contracts are verified via blockchain and substantiated by physical copy.

