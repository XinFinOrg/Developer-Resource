---
title: Understanding XinFin DPoS
---

# XinFin DPoS Consensus

### Technicalities and Specifications of XinFin Delegated Proof of Stake

Delegated Proof of Stake \(DPOS\) is the fastest, most efficient, decentralized, and flexible consensus model available. DPOS leverages the power of stakeholder approval voting to resolve consensus issues in a fair and democratic way. The **Self KYC** feature added in XinFin DPoS is more enterprise and regulator friendly.

### Definitions

> **DPoS:** Delegated Proof of Stake: a mechanism for the selection of network Validators by coin holders _delegating_ their votes  
>  **Validator:** \(usually denoted L\) a node on the network responsible for producing and validating blocks.  
>  **Nominator:** a coin holder who stakes and delegates their coins to one or more Validators.  
>  **Epoch:** \(usually denoted _𝑁_\) corresponds to _𝐿_∈ℕ blocks: it is a cycle of a few blocks in which Validators create blocks in turn.

## Voting

Any network participant will be able to vote for eligible Validators.

### 1. Staking

Users can stake their coins by sending them to the `deposit` function on the staking contract.

* The staked amount must be larger than an amount `MIN_STAKE`
* The user will have to wait for 2 epochs \(epoch N+2\) before being able to vote

  for a delegate.

### 2. Delegating

* After 2 epochs, a Nominator can vote for a Validator with the staked coins.
* The vote will be effective in the epoch N+2, N being the current epoch.
* A new vote can be cast every 2 epochs.
* In this version, the entire stake must be voted to a single Validator. If a user

  wants to delegate to multiple Validators they can split their stake amongst

  several accounts which can then individually register as Nominators.

### 3. Withdrawal

Nominators should be able to withdraw their stake.

* First, they must call `delegate` to remove their vote.
* After a specified number of epochs `WITHDRAWAL_PERIOD` the funds are unlocked

  and `withdraw` function on the smart contract can be called with a withdrawal

  address.

## Validators Registration

Any network participant will be able to register as a Validator.

* A specified value `REGISTRATION_VALUE` \(in the native token\) will be sent to a

  `register`function on the contract. It will be burnt in order to limit the

  number of participants.

* The validator is required to add KYC document at the time of staking XDC token.
* A hard limit to the total number of registered Validators

  `MAX_REGISTERED_VALIDATORS`should be specified.

* Any Validator registering will have to wait for the beginning of epoch

  N+2\(current epoch being N\) to be eligible.

* A Validator’s total stake must be greater than the `MIN_TOTAL_STAKE` in order

  for it to be eligible.

* The top validators\(by a total stake\) in a given epoch are chosen as the Active

  Validator Set: those Validators that produce blocks in the next epoch.

### KYC Compliance:

We would like to add Know your customer \(KYC\) identification as it falls under the responsibility of financial institution and/or regulated company. Validator needs to upload self KYC document and this document will be visible on the open public network.

## Choosing Validators

The problem is: How to choose L Validators for a certain epoch N?

### Balanced staked

This version of the DPoS contract should balance all the stakes by finding the minimum staked for all eligible Validators \(eg. take the top 1000 Validators\) and balance all the Validators stakes by refunding the users the contributions that overflowed the stake.

For example, if the minimum stake is S, we want to balance all stakes to S. If a Validator has S+100 stakes because of 3 contributions: _𝑆_−10, 5 and 100, then the last nominator will be refunded 95.

> In this model, an epoch would be of the maximum number of Validators allowed, eg. 1,001 \(+/- an hour on a 4-seconds block time chain\).

## Rewards

Rewards are assigned via the Rewards Contract

* Rewards for active Validators are calculated as a percentage of total stake,

  `VALIDATOR_REWARD`.

* Nominators would also need to be rewarded to incentivize them to stake. There

  are a couple of options here:  
    \* The reward contract pays directly out to

  nominators, minus a fee payed the Validator, which could be specified when

  registering.  
    \* The Validator is responsible for calculating/paying out the

  rewards. This could be done by allowing the Validators to register their own

  Reward Contract when registering.

## Fork Perversion, Malicious or Double Spends:

To prevent fork, we add a feature to revalidate transaction. Every transaction will have 2 signatures. One signature will be by block creator and the other signature will be by block verifier \(both separate validator\). So the block verifier will check for malicious or double spends etc.

## Slashing

In order for the network to be secure, misbehaviours must be detected and punished.

### 1. Off-chain

Off-chain detection of misbehaviour is easier to implement and can be used for tricky misbehaviour detections.

In the contract, there will be a `reportBenign` method \(part of the Validator Set Contract\) that only Validators can call, passing a message and a block-number, and a slashing will execute if more than 2/3 of the Validators agree on the misbehaviour.

These might include but are not limited to:  
  _Validators consistently propagating blocks late_  
 __ Validators being offline for more than 24 hours.

It could slash a portion of the stakes, eg. only 4%

### 2. On-chain

A slashing condition that can be verified on-chain is that a Validator signed-off 2 blocks with the same step \(_equivocation_\). Anyone could call this `reportMalicious` method with the right data, being the two signatures of the Validator, and the message signed, which would contain the step of the blocks. This method would thus include an RLP decoder.

We could also detect if a Validator hasn’t signed any block for the past 256 blocks on-chain, by challenging the Validator to submit the block he signed along with the signature. However, only the last 256 block hashes are available in the EVM, so it might be limited in this context of around 1,000-blocks epochs.

There may be other on-chain slashable conditions.

### 3. Wrong KYC Detail Enter by Validator Node

In the contract, there will be a `reportMalicious` method that only Validators can call, passing a message and a block-number, and a slashing will execute if more than 2/3 of the Validators agree on the `reportMalicious`. It could slash a portion of the entire 100% stakes of Validator Node.

## Parameters

Suggested parameter values from requirements:  
 `MIN_STAKE`: 1,000,000 XDC  
 `VALIDATOR_REWARD`: 0.01370%  
 `VALIDATOR_SET_SIZE`: 18-21   
 `REWARDS_TRANSFER`: Every next block of an epoch  
 `WITHDRAWAL_PERIOD`: Set of Epoch \( 1 Epoch = 500 blocks\)  
 `MAX_REGISTERED_VALIDATORS`: 5000

## Upgradability:

Contracts should be upgradeable, could be implemented with Proxy contracts. Would need to figure out a governance mechanism to determine how upgrades are authorised and enacted.

Contract state would need to be transferred to the new version of the contract, either through a migration process or a persistent storage pattern.

