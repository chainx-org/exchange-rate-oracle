// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Vec, bool, u16, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AmountOf, AssetType, BtcTxState, Chain, GenericTrusteeIntentionProps, GenericTrusteeSessionInfo, OrderExecutedInfo, PriceFluctuation, TradingPairId, TradingPairProfile, WithdrawalRecord, WithdrawalRecordId, WithdrawalState } from '@chainx/xbridge-types/chainx';
import type { BlockNumberFor, BtcAddress, CurrencyIdOf, RequestId, TradingPrice } from '@chainx/xbridge-types/xGatewayBitcoinV2';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarIndex } from '@polkadot/types/interfaces/identity';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { Order } from '@polkadot/types/interfaces/parachains';
import type { ProxyType } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, CallHash, H256, Hash, Percent, PhantomData } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    bounties: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A bounty is awarded to a beneficiary. \[index, beneficiary\]
       **/
      BountyAwarded: AugmentedEvent<ApiType, [BountyIndex, AccountId]>;
      /**
       * A bounty proposal is funded and became active. \[index\]
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is cancelled. \[index\]
       **/
      BountyCanceled: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
       **/
      BountyClaimed: AugmentedEvent<ApiType, [BountyIndex, Balance, AccountId]>;
      /**
       * A bounty expiry is extended. \[index\]
       **/
      BountyExtended: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * New bounty proposal. \[index\]
       **/
      BountyProposed: AugmentedEvent<ApiType, [BountyIndex]>;
      /**
       * A bounty proposal was rejected; funds were slashed. \[index, bond\]
       **/
      BountyRejected: AugmentedEvent<ApiType, [BountyIndex, Balance]>;
    };
    council: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    currencies: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Update balance success. [currency_id, who, amount]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AmountOf]>;
      /**
       * Deposit success. [currency_id, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Currency transfer success. [currency_id, from, to, amount]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AccountId, BalanceOf]>;
      /**
       * Withdraw success. [currency_id, who, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
    };
    democracy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      Cancelled: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      Executed: AugmentedEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      NotPassed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      Passed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      PreimageMissing: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      PreimageNoted: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      PreimageReaped: AugmentedEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      PreimageUsed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      Proposed: AugmentedEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      Started: AugmentedEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      Tabled: AugmentedEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      Vetoed: AugmentedEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    elections: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    grandpa: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    identity: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      IdentityCleared: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      IdentityKilled: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      IdentitySet: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      JudgementGiven: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      JudgementRequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [RegistrarIndex]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
    };
    imOnline: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    indices: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A account index was assigned. \[index, who\]
       **/
      IndexAssigned: AugmentedEvent<ApiType, [AccountId, AccountIndex]>;
      /**
       * A account index has been freed up (unassigned). \[index\]
       **/
      IndexFreed: AugmentedEvent<ApiType, [AccountIndex]>;
      /**
       * A account index has been frozen to its current account ID. \[index, who\]
       **/
      IndexFrozen: AugmentedEvent<ApiType, [AccountIndex, AccountId]>;
    };
    multisig: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    offences: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    proxy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
       **/
      Announced: AugmentedEvent<ApiType, [AccountId, AccountId, Hash]>;
      /**
       * Anonymous account has been created by new proxy with given
       * disambiguation index and proxy type. \[anonymous, who, proxy_type, disambiguation_index\]
       **/
      AnonymousCreated: AugmentedEvent<ApiType, [AccountId, AccountId, ProxyType, u16]>;
      /**
       * A proxy was executed correctly, with the given \[result\].
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    scheduler: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    sudo: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    tips: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A new tip suggestion has been opened. \[tip_hash\]
       **/
      NewTip: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been closed. \[tip_hash, who, payout\]
       **/
      TipClosed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A tip suggestion has reached threshold and is closing. \[tip_hash\]
       **/
      TipClosing: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been retracted. \[tip_hash\]
       **/
      TipRetracted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
       **/
      TipSlashed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
    };
    treasury: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Some funds have been allocated. \[proposal_index, award, beneficiary\]
       **/
      Awarded: AugmentedEvent<ApiType, [ProposalIndex, Balance, AccountId]>;
      /**
       * Some of our funds have been burnt. \[burn\]
       **/
      Burnt: AugmentedEvent<ApiType, [Balance]>;
      /**
       * Some funds have been deposited. \[deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [Balance]>;
      /**
       * New proposal. \[proposal_index\]
       **/
      Proposed: AugmentedEvent<ApiType, [ProposalIndex]>;
      /**
       * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
       **/
      Rejected: AugmentedEvent<ApiType, [ProposalIndex, Balance]>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       * \[budget_remaining\]
       **/
      Rollover: AugmentedEvent<ApiType, [Balance]>;
      /**
       * We have ended a spend period and will now allocate funds. \[budget_remaining\]
       **/
      Spending: AugmentedEvent<ApiType, [Balance]>;
    };
    utility: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
    xAssets: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Set asset balance of an account by root. [asset_id, who, asset_type, amount]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AssetId, AccountId, AssetType, Balance]>;
      /**
       * Some balances of an asset were destoryed. [asset_id, who, amount]
       **/
      Destroyed: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * New balances of an asset were issued. [asset_id, receiver, amount]
       **/
      Issued: AugmentedEvent<ApiType, [AssetId, AccountId, Balance]>;
      /**
       * Some balances of an asset was moved from one to another. [asset_id, from, from_type, to, to_type, amount]
       **/
      Moved: AugmentedEvent<ApiType, [AssetId, AccountId, AssetType, AccountId, AssetType, Balance]>;
    };
    xAssetsRegistrar: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An asset was deregistered. [asset_id]
       **/
      Deregistered: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * A deregistered asset was recovered. [asset_id, has_mining_rights]
       **/
      Recovered: AugmentedEvent<ApiType, [AssetId, bool]>;
      /**
       * A new asset was registered. [asset_id, has_mining_rights]
       **/
      Registered: AugmentedEvent<ApiType, [AssetId, bool]>;
    };
    xGatewayBitcoin: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account deposited some token. [tx_hash, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [H256, AccountId, Balance]>;
      /**
       * A Bitcoin header was validated and inserted. [btc_header_hash]
       **/
      HeaderInserted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A unclaimed deposit record was removed. [depositor, deposit_amount, tx_hash, btc_address]
       **/
      PendingDepositRemoved: AugmentedEvent<ApiType, [AccountId, Balance, H256, BtcAddress]>;
      /**
       * A Bitcoin transaction was processed. [tx_hash, block_hash, tx_state]
       **/
      TxProcessed: AugmentedEvent<ApiType, [H256, H256, BtcTxState]>;
      /**
       * A new record of unclaimed deposit. [tx_hash, btc_address]
       **/
      UnclaimedDeposit: AugmentedEvent<ApiType, [H256, BtcAddress]>;
      /**
       * A fatal error happened during the withdrwal process. [tx_hash, proposal_hash]
       **/
      WithdrawalFatalErr: AugmentedEvent<ApiType, [H256, H256]>;
      /**
       * The proposal has been processed successfully and is waiting for broadcasting. [tx_hash]
       **/
      WithdrawalProposalCompleted: AugmentedEvent<ApiType, [H256]>;
      /**
       * A new withdrawal proposal was created. [proposer, withdrawal_ids]
       **/
      WithdrawalProposalCreated: AugmentedEvent<ApiType, [AccountId, Vec<u32>]>;
      /**
       * A withdrawal proposal was dropped. [reject_count, total_count, withdrawal_ids]
       **/
      WithdrawalProposalDropped: AugmentedEvent<ApiType, [u32, u32, Vec<u32>]>;
      /**
       * A trustee voted/vetoed a withdrawal proposal. [trustee, vote_status]
       **/
      WithdrawalProposalVoted: AugmentedEvent<ApiType, [AccountId, bool]>;
      /**
       * A list of withdrawal applications were processed successfully. [tx_hash, withdrawal_ids, total_withdrawn]
       **/
      Withdrawn: AugmentedEvent<ApiType, [H256, Vec<u32>, Balance]>;
    };
    xGatewayBitcoinV2: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The collateral was released to the user successfully. [who, amount]
       **/
      BridgeCollateralReleased: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Vault released collateral.
       **/
      CollateralReleased: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Collateral was slashed. [from, to, amount]
       **/
      CollateralSlashed: AugmentedEvent<ApiType, [AccountId, AccountId, BalanceOf]>;
      /**
       * Update `ExchangeRateExpiredPeriod`
       **/
      ExchangeRateExpiredPeriodForceUpdated: AugmentedEvent<ApiType, [BlockNumberFor]>;
      /**
       * Update exchange rate by root
       **/
      ExchangeRateForceUpdated: AugmentedEvent<ApiType, [TradingPrice]>;
      /**
       * Update exchange rate by oracle
       **/
      ExchangeRateUpdated: AugmentedEvent<ApiType, [AccountId, TradingPrice]>;
      /**
       * Extra collateral was added to a vault.
       **/
      ExtraCollateralAdded: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
      /**
       * Root updated `IssueGriefingFee`.
       **/
      GriefingFeeUpdated: AugmentedEvent<ApiType, [Percent]>;
      /**
       * `IssueRequest` cancelled.`
       **/
      IssueRequestCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * `IssueRequest` excuted.
       **/
      IssueRequestExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * An issue request was submitted and waiting user to excute.
       **/
      NewIssueRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Redeem request is accepted
       **/
      NewRedeemRequest: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Update oracles by root
       **/
      OracleForceUpdated: AugmentedEvent<ApiType, [Vec<AccountId>]>;
      /**
       * Cancel redeem is accepted
       **/
      RedeemCancelled: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * Execute redeem is accepted
       **/
      RedeemExecuted: AugmentedEvent<ApiType, [RequestId]>;
      /**
       * New vault has been registered.
       **/
      VaultRegistered: AugmentedEvent<ApiType, [AccountId, BalanceOf]>;
    };
    xGatewayCommon: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account set its referral_account of some chain. [who, chain, referral_account]
       **/
      ReferralBinded: AugmentedEvent<ApiType, [AccountId, Chain, AccountId]>;
      /**
       * A (potential) trustee set the required properties. [who, chain, trustee_props]
       **/
      SetTrusteeProps: AugmentedEvent<ApiType, [AccountId, Chain, GenericTrusteeIntentionProps]>;
      /**
       * The trustee set of a chain was changed. [chain, session_number, session_info]
       **/
      TrusteeSetChanged: AugmentedEvent<ApiType, [Chain, u32, GenericTrusteeSessionInfo]>;
    };
    xGatewayRecords: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account deposited some asset. [who, asset_id, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [AccountId, AssetId, Balance]>;
      /**
       * A withdrawal proposal was canceled. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalCanceled: AugmentedEvent<ApiType, [WithdrawalRecordId, WithdrawalState]>;
      /**
       * A withdrawal application was created. [withdrawal_id, record_info]
       **/
      WithdrawalCreated: AugmentedEvent<ApiType, [WithdrawalRecordId, WithdrawalRecord]>;
      /**
       * A withdrawal proposal was finished successfully. [withdrawal_id, withdrawal_state]
       **/
      WithdrawalFinished: AugmentedEvent<ApiType, [WithdrawalRecordId, WithdrawalState]>;
      /**
       * A withdrawal proposal was processed. [withdrawal_id]
       **/
      WithdrawalProcessed: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
      /**
       * A withdrawal proposal was recovered. [withdrawal_id]
       **/
      WithdrawalRecovered: AugmentedEvent<ApiType, [WithdrawalRecordId]>;
    };
    xMiningAsset: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An asset miner claimed the mining reward. [claimer, asset_id, amount]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, AssetId, Balance]>;
      /**
       * Issue new balance to the reward pot. [reward_pot_account, amount]
       **/
      Minted: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xSpot: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an update to the order due to it gets canceled. [order_info]
       **/
      CanceledOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * There was an update to the order due to it gets executed. [maker_order_info]
       **/
      MakerOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * A new order was created. [order_info]
       **/
      NewOrder: AugmentedEvent<ApiType, [Order]>;
      /**
       * Overall information about the maker and taker orders when there was an order execution. [order_executed_info]
       **/
      OrderExecuted: AugmentedEvent<ApiType, [OrderExecutedInfo]>;
      /**
       * Price fluctuation of trading pair has been updated. [pair_id, price_fluctuation]
       **/
      PriceFluctuationUpdated: AugmentedEvent<ApiType, [TradingPairId, PriceFluctuation]>;
      /**
       * There was an update to the order due to it gets executed. [taker_order_info]
       **/
      TakerOrderUpdated: AugmentedEvent<ApiType, [Order]>;
      /**
       * A new trading pair is added. [pair_profile]
       **/
      TradingPairAdded: AugmentedEvent<ApiType, [TradingPairProfile]>;
      /**
       * Trading pair profile has been updated. [pair_profile]
       **/
      TradingPairUpdated: AugmentedEvent<ApiType, [TradingPairProfile]>;
    };
    xStaking: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A nominator bonded to the validator this amount. [nominator, validator, amount]
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A nominator claimed the staking dividend. [nominator, validator, dividend]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Unlock the unbonded withdrawal by force. [account]
       **/
      ForceAllWithdrawn: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Offenders were forcibly to be chilled due to insufficient reward pot balance. [session_index, chilled_validators]
       **/
      ForceChilled: AugmentedEvent<ApiType, [SessionIndex, Vec<AccountId>]>;
      /**
       * Issue new balance to this account. [account, reward_amount]
       **/
      Minted: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A nominator switched the vote from one validator to another. [nominator, from, to, amount]
       **/
      Rebonded: AugmentedEvent<ApiType, [AccountId, AccountId, AccountId, Balance]>;
      /**
       * A validator (and its reward pot) was slashed. [validator, slashed_amount]
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A nominator unbonded this amount. [nominator, validator, amount]
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * The nominator withdrew the locked balance from the unlocking queue. [nominator, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xSystem: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account was added to the blacklist. [who]
       **/
      Blacklisted: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An account was removed from the blacklist. [who]
       **/
      Unblacklisted: AugmentedEvent<ApiType, [AccountId]>;
    };
    xTransactionFee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Transaction fee was paid to the block author and its reward pot in 1:9.
       * [author, author_fee, reward_pot, reward_pot_fee]
       **/
      FeePaid: AugmentedEvent<ApiType, [AccountId, Balance, AccountId, Balance]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
