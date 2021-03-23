// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Data, Option, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { AssetInfo, AssetRestrictions, AssetType, BtcDepositCache, BtcHeader, BtcHeaderIndex, BtcNetwork, BtcTxState, BtcTxVerifier, BtcWithdrawalProposal, Chain, ChainAddress, GenericTrusteeIntentionProps, GenericTrusteeSessionInfo, HandicapInfo, NetworkType, NominatorLedger, OrderId, OrderInfo, Price, PriceFluctuation, ReferralId, TradingHistoryIndex, TradingPairId, TradingPairProfile, TrusteeInfoConfig, WithdrawalRecordId, WithdrawalRecordOf, WithdrawalState } from '@chainx/xbridge-types/chainx';
import type { BlockNumberFor, BtcAddress, IssueRequest, RedeemRequest, RequestId, Status, TradingPrice, Vault } from '@chainx/xbridge-types/xGatewayBitcoinV2';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { ProxyAnnouncement, ProxyDefinition } from '@polkadot/types/interfaces/proxy';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, H256, Hash, KeyTypeId, Moment, OpaqueCall, Perbill, Percent, Releases, Slot, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ActiveEraInfo, EraIndex, Forcing, SeatHolder, Voter } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Bounty, BountyIndex, OpenTip, TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    authorship: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    babe: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Temporary value (cleared at block finalization) that includes the VRF output generated
       * at this block. This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<MaybeRandomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeRandomness>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch configuration, if changed.
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<NextConfigDescriptor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Randomness under construction.
       * 
       * We make a tradeoff between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Randomness>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
    };
    balances: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
    };
    bounties: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bounty>>, [BountyIndex]> & QueryableStorageEntry<ApiType, [BountyIndex]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<BountyIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<BountyIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: BountyIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [BountyIndex]> & QueryableStorageEntry<ApiType, [BountyIndex]>;
    };
    council: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
    };
    democracy: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]> & QueryableStorageEntry<ApiType, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]> & QueryableStorageEntry<ApiType, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
    };
    elections: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The present candidate list. A current member or runner-up can never enter this vector
       * and is always implicitly assumed to be a candidate.
       * 
       * Second element is the deposit.
       * 
       * Invariant: Always sorted based on account id.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current elected members.
       * 
       * Invariant: Always sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current reserved runners-up.
       * 
       * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
       * last (i.e. _best_) runner-up will be replaced.
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes and locked stake of a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
       **/
      voting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voter>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
    };
    grandpa: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]> & QueryableStorageEntry<ApiType, [SetId]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>, []> & QueryableStorageEntry<ApiType, []>;
    };
    identity: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Registration>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Data]>>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
    };
    imOnline: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<u32>, [SessionIndex, ValidatorId]> & QueryableStorageEntry<ApiType, [SessionIndex, ValidatorId]>;
      /**
       * The block number after which it's ok to send heartbeats in current session.
       * 
       * At the beginning of each session we set this to a value that should
       * fall roughly in the middle of the session duration.
       * The idea is to first wait for the validators to produce a block
       * in the current session, so that the heartbeat later on will not be necessary.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * For each session index, we keep a mapping of `AuthIndex` to
       * `offchain::OpaqueNetworkState`.
       **/
      receivedHeartbeats: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [SessionIndex, AuthIndex]> & QueryableStorageEntry<ApiType, [SessionIndex, AuthIndex]>;
    };
    indices: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]> & QueryableStorageEntry<ApiType, [AccountIndex]>;
    };
    multisig: {
      [key: string]: QueryableStorageEntry<ApiType>;
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId, U8aFixed]>;
    };
    offences: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQueryDoubleMap<ApiType, (key1: Kind | string | Uint8Array, key2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, [Kind, OpaqueTimeSlot]> & QueryableStorageEntry<ApiType, [Kind, OpaqueTimeSlot]>;
      /**
       * Deferred reports that have been rejected by the offence handler and need to be submitted
       * at a later time.
       **/
      deferredOffences: AugmentedQuery<ApiType, () => Observable<Vec<DeferredOffenceOf>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>, [ReportIdOf]> & QueryableStorageEntry<ApiType, [ReportIdOf]>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * 
       * All reports are sorted by the time of offence.
       * 
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>, [Kind]> & QueryableStorageEntry<ApiType, [Kind]>;
    };
    proxy: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyAnnouncement>, BalanceOf]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ProxyDefinition>, BalanceOf]>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
    };
    randomnessCollectiveFlip: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    scheduler: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
    };
    session: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]> & QueryableStorageEntry<ApiType, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    sudo: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []> & QueryableStorageEntry<ApiType, []>;
    };
    system: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
    };
    technicalCommittee: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
    };
    technicalMembership: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    timestamp: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []> & QueryableStorageEntry<ApiType, []>;
    };
    tips: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Bytes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
       * This has the insecure enumerable hash function since the key itself is already
       * guaranteed to be a secure hash.
       **/
      tips: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<OpenTip>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
    };
    transactionPayment: {
      [key: string]: QueryableStorageEntry<ApiType>;
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
    };
    treasury: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>, [ProposalIndex]> & QueryableStorageEntry<ApiType, [ProposalIndex]>;
    };
    xAssets: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * asset balance for user&asset_id, use btree_map to accept different asset type
       **/
      assetBalance: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<BTreeMap<AssetType, BalanceOf>>, [AccountId, AssetId]> & QueryableStorageEntry<ApiType, [AccountId, AssetId]>;
      /**
       * asset extend limit properties, set asset "can do", example, `CanTransfer`, `CanDestroyWithdrawal`
       * notice if not set AssetRestriction, default is true for this limit
       * if want let limit make sense, must set false for the limit
       **/
      assetRestrictionsOf: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<AssetRestrictions>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, AssetId]> & QueryableStorageEntry<ApiType, [AccountId, AssetId]>;
      /**
       * asset balance for an asset_id, use btree_map to accept different asset type
       **/
      totalAssetBalance: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<BTreeMap<AssetType, BalanceOf>>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
    };
    xAssetsRegistrar: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Asset id list for each Chain.
       **/
      assetIdsOf: AugmentedQuery<ApiType, (arg: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<Vec<AssetId>>, [Chain]> & QueryableStorageEntry<ApiType, [Chain]>;
      /**
       * Asset info of each asset.
       **/
      assetInfoOf: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Option<AssetInfo>>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * The map of asset to the online state.
       **/
      assetOnline: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<bool>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * The map of asset to the block number at which the asset was registered.
       **/
      registeredAt: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<BlockNumber>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
    };
    xGatewayBitcoin: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * best header info
       **/
      bestIndex: AugmentedQuery<ApiType, () => Observable<BtcHeaderIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * block hash list for a height, include forked header hash
       **/
      blockHashFor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<H256>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * min deposit value limit, default is 10w sotashi(0.001 BTC)
       **/
      btcMinDeposit: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * get BtcWithdrawalFee from genesis_config
       **/
      btcWithdrawalFee: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * get ConfirmationNumber from genesis_config
       **/
      confirmationNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * confirmed header info
       **/
      confirmedIndex: AugmentedQuery<ApiType, () => Observable<Option<BtcHeaderIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * get GenesisInfo (header, height)
       **/
      genesisInfo: AugmentedQuery<ApiType, () => Observable<ITuple<[BtcHeader, u32]>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * all valid blockheader (include forked blockheader)
       **/
      headers: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<BtcHeaderInfo>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * mark this blockhash is in mainchain
       **/
      mainChain: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * max withdraw account count in bitcoin withdrawal transaction
       **/
      maxWithdrawalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * NetworkId for testnet or mainnet
       **/
      networkId: AugmentedQuery<ApiType, () => Observable<BtcNetwork>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * get ParamsInfo from genesis_config
       **/
      paramsInfo: AugmentedQuery<ApiType, () => Observable<BtcParams>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * unclaimed deposit info, addr => tx_hash, btc value,
       **/
      pendingDeposits: AugmentedQuery<ApiType, (arg: BtcAddress | string) => Observable<Vec<BtcDepositCache>>, [BtcAddress]> & QueryableStorageEntry<ApiType, [BtcAddress]>;
      /**
       * mark tx has been handled, in case re-handle this tx, and log handle result
       **/
      txState: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<BtcTxState>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      verifier: AugmentedQuery<ApiType, () => Observable<BtcTxVerifier>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * withdrawal tx outs for account, tx_hash => outs ( out index => withdrawal account )
       **/
      withdrawalProposal: AugmentedQuery<ApiType, () => Observable<Option<BtcWithdrawalProposal>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    xGatewayBitcoinV2: {
      [key: string]: QueryableStorageEntry<ApiType>;
      bridgeStatus: AugmentedQuery<ApiType, () => Observable<Status>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping btc address to vault id.
       **/
      btcAddresses: AugmentedQuery<ApiType, (arg: BtcAddress | string) => Observable<Option<AccountId>>, [BtcAddress]> & QueryableStorageEntry<ApiType, [BtcAddress]>;
      /**
       * Exchange rate from pcx to btc.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<TradingPrice>, []> & QueryableStorageEntry<ApiType, []>;
      exchangeRateUpdateTime: AugmentedQuery<ApiType, () => Observable<BlockNumberFor>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Percentage to lock, when user requests issue
       **/
      issueGriefingFee: AugmentedQuery<ApiType, () => Observable<Percent>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Auto-increament id to identify each issue request.
       * Also presents total amount of created requests.
       **/
      issueRequestCount: AugmentedQuery<ApiType, () => Observable<RequestId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from issue id to `IssueRequest`
       **/
      issueRequests: AugmentedQuery<ApiType, (arg: RequestId | AnyNumber | Uint8Array) => Observable<Option<IssueRequest>>, [RequestId]> & QueryableStorageEntry<ApiType, [RequestId]>;
      /**
       * Specicial `SystemVault`
       **/
      liquidator: AugmentedQuery<ApiType, () => Observable<SystemVault>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Liquidator account id
       **/
      liquidatorId: AugmentedQuery<ApiType, () => Observable<AccountId>, []> & QueryableStorageEntry<ApiType, []>;
      oracleAccounts: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Slashed when excuting redeem if vault's collateral is below than `PremiumThreshold`
       **/
      premiumFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Redeem fee when use request redeem
       **/
      redeemFee: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Auto-increament id to identify each redeem request.
       * Also presents total amount of created requests.
       **/
      redeemRequestCount: AugmentedQuery<ApiType, () => Observable<RequestId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping from redeem id to `RedeemRequest`
       **/
      redeemRequests: AugmentedQuery<ApiType, (arg: RequestId | AnyNumber | Uint8Array) => Observable<Option<RedeemRequest>>, [RequestId]> & QueryableStorageEntry<ApiType, [RequestId]>;
      /**
       * Total collateral locked by xbridge.
       **/
      totalCollateral: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping account to vault struct.
       **/
      vaults: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Vault>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
    };
    xGatewayCommon: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The account of the corresponding chain and chain address.
       **/
      addressBindingOf: AugmentedQueryDoubleMap<ApiType, (key1: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array, key2: ChainAddress | string | Uint8Array) => Observable<Option<AccountId>>, [Chain, ChainAddress]> & QueryableStorageEntry<ApiType, [Chain, ChainAddress]>;
      /**
       * The bound address of the corresponding account and chain.
       **/
      boundAddressOf: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<Vec<ChainAddress>>, [AccountId, Chain]> & QueryableStorageEntry<ApiType, [AccountId, Chain]>;
      /**
       * The referral account of the corresponding account and chain.
       **/
      referralBindingOf: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<Option<AccountId>>, [AccountId, Chain]> & QueryableStorageEntry<ApiType, [AccountId, Chain]>;
      /**
       * Trustee info config of the corresponding chain.
       **/
      trusteeInfoConfigOf: AugmentedQuery<ApiType, (arg: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<TrusteeInfoConfig>, [Chain]> & QueryableStorageEntry<ApiType, [Chain]>;
      /**
       * Trustee intention properties of the corresponding account and chain.
       **/
      trusteeIntentionPropertiesOf: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<Option<GenericTrusteeIntentionProps>>, [AccountId, Chain]> & QueryableStorageEntry<ApiType, [AccountId, Chain]>;
      trusteeMultiSigAddr: AugmentedQuery<ApiType, (arg: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<AccountId>, [Chain]> & QueryableStorageEntry<ApiType, [Chain]>;
      /**
       * Next Trustee session info number of the chain.
       * 
       * Auto generate a new session number (0) when generate new trustee of a chain.
       * If the trustee of a chain is changed, the corresponding number will increase by 1.
       * 
       * NOTE: The number can't be modified by users.
       **/
      trusteeSessionInfoLen: AugmentedQuery<ApiType, (arg: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array) => Observable<u32>, [Chain]> & QueryableStorageEntry<ApiType, [Chain]>;
      /**
       * Trustee session info of the corresponding chain and number.
       **/
      trusteeSessionInfoOf: AugmentedQueryDoubleMap<ApiType, (key1: Chain | 'ChainX' | 'Bitcoin' | 'Ethereum' | 'Polkadot' | number | Uint8Array, key2: u32 | AnyNumber | Uint8Array) => Observable<Option<GenericTrusteeSessionInfo>>, [Chain, u32]> & QueryableStorageEntry<ApiType, [Chain, u32]>;
    };
    xGatewayRecords: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The id of next withdrawal record.
       **/
      nextWithdrawalRecordId: AugmentedQuery<ApiType, () => Observable<WithdrawalRecordId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Withdraw applications collection, use serial numbers to mark them.
       **/
      pendingWithdrawals: AugmentedQuery<ApiType, (arg: WithdrawalRecordId | AnyNumber | Uint8Array) => Observable<Option<WithdrawalRecordOf>>, [WithdrawalRecordId]> & QueryableStorageEntry<ApiType, [WithdrawalRecordId]>;
      /**
       * The state of withdraw record corresponding to an id.
       **/
      withdrawalStateOf: AugmentedQuery<ApiType, (arg: WithdrawalRecordId | AnyNumber | Uint8Array) => Observable<Option<WithdrawalState>>, [WithdrawalRecordId]> & QueryableStorageEntry<ApiType, [WithdrawalRecordId]>;
    };
    xMiningAsset: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Mining weight information of the mining assets.
       **/
      assetLedgers: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<AssetLedger>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * Can not claim if the claimer violates the restriction.
       **/
      claimRestrictionOf: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<ClaimRestriction>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * Possible reward for the new asset owners that does not have native coins yet.
       **/
      depositReward: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mining power map of X-type assets.
       **/
      fixedAssetPowerOf: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<FixedAssetPower>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
      /**
       * The map from nominator to the vote weight ledger of all mining assets.
       **/
      minerLedgers: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<MinerLedger>, [AccountId, AssetId]> & QueryableStorageEntry<ApiType, [AccountId, AssetId]>;
      /**
       * External Assets that have the mining rights.
       **/
      miningPrevilegedAssets: AugmentedQuery<ApiType, () => Observable<Vec<AssetId>>, []> & QueryableStorageEntry<ApiType, []>;
    };
    xSpot: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * TradingPairId => (highest_bid, lowest_ask)
       **/
      handicapOf: AugmentedQuery<ApiType, (arg: TradingPairId | AnyNumber | Uint8Array) => Observable<HandicapInfo>, [TradingPairId]> & QueryableStorageEntry<ApiType, [TradingPairId]>;
      /**
       * Record the exact balance of reserved native coins in Spot.
       **/
      nativeReserves: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Total orders made by an account.
       **/
      orderCountOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<OrderId>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Details of an user order given the account ID and order ID.
       **/
      orderInfoOf: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: OrderId | AnyNumber | Uint8Array) => Observable<Option<OrderInfo>>, [AccountId, OrderId]> & QueryableStorageEntry<ApiType, [AccountId, OrderId]>;
      /**
       * The map of trading pair ID to the price fluctuation. Use with caution!
       **/
      priceFluctuationOf: AugmentedQuery<ApiType, (arg: TradingPairId | AnyNumber | Uint8Array) => Observable<PriceFluctuation>, [TradingPairId]> & QueryableStorageEntry<ApiType, [TradingPairId]>;
      /**
       * All the accounts and the order number given the trading pair ID and price.
       **/
      quotationsOf: AugmentedQueryDoubleMap<ApiType, (key1: TradingPairId | AnyNumber | Uint8Array, key2: Price | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[AccountId, OrderId]>>>, [TradingPairId, Price]> & QueryableStorageEntry<ApiType, [TradingPairId, Price]>;
      /**
       * Total transactions has been made for a trading pair.
       **/
      tradingHistoryIndexOf: AugmentedQuery<ApiType, (arg: TradingPairId | AnyNumber | Uint8Array) => Observable<TradingHistoryIndex>, [TradingPairId]> & QueryableStorageEntry<ApiType, [TradingPairId]>;
      /**
       * How many trading pairs so far.
       **/
      tradingPairCount: AugmentedQuery<ApiType, () => Observable<TradingPairId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * (latest price, last update height) of trading pair
       **/
      tradingPairInfoOf: AugmentedQuery<ApiType, (arg: TradingPairId | AnyNumber | Uint8Array) => Observable<Option<TradingPairInfo>>, [TradingPairId]> & QueryableStorageEntry<ApiType, [TradingPairId]>;
      /**
       * The map from trading pair id to its static profile.
       **/
      tradingPairOf: AugmentedQuery<ApiType, (arg: TradingPairId | AnyNumber | Uint8Array) => Observable<Option<TradingPairProfile>>, [TradingPairId]> & QueryableStorageEntry<ApiType, [TradingPairId]>;
    };
    xStaking: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era currently rewarded.
       * Validator set of this era must be equal to `SessionInterface::validators`.
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<ActiveEraInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The length of the bonding duration in blocks.
       **/
      bondingDuration: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [EraIndex]> & QueryableStorageEntry<ApiType, [EraIndex]>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * (Treasury, Staking)
       **/
      globalDistributionRatio: AugmentedQuery<ApiType, () => Observable<GlobalDistribution>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Immortal validators will always be elected if any.
       * 
       * Immortals will be intialized from the genesis validators.
       **/
      immortals: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if the current **planned** session is final. Note that this does not take era
       * forcing into account.
       **/
      isCurrentSessionFinal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from nominator to the block number of last `rebond` operation.
       **/
      lastRebondOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * All kinds of locked balances of an account in Staking.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BTreeMap<LockedType, BalanceOf>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Maximum number of on-going unbonded chunk.
       **/
      maximumUnbondedChunkSize: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maximum number of staking participants before emergency conditions are imposed.
       **/
      maximumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Minimum penalty for each slash.
       **/
      minimumPenalty: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * (Staker, Asset Miners)
       **/
      miningDistributionRatio: AugmentedQuery<ApiType, () => Observable<MiningDistribution>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from nominator to the vote weight ledger of all nominees.
       **/
      nominations: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<NominatorLedger>, [AccountId, AccountId]> & QueryableStorageEntry<ApiType, [AccountId, AccountId]>;
      /**
       * Offenders reported in last session.
       **/
      sessionOffenders: AugmentedQuery<ApiType, () => Observable<Option<BTreeMap<AccountId, Perbill>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The length of a staking era in sessions.
       **/
      sessionsPerEra: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maximum value of total_bonded/self_bonded.
       **/
      upperBoundFactorOfAcceptableVotes: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The length of the bonding duration in blocks for validator.
       **/
      validatorBondingDuration: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Minimum value (self_bonded, total_bonded) to be a candidate of validator election.
       **/
      validatorCandidateRequirement: AugmentedQuery<ApiType, () => Observable<BondRequirement>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The validator account behind the referral id.
       **/
      validatorFor: AugmentedQuery<ApiType, (arg: ReferralId | string) => Observable<Option<AccountId>>, [ReferralId]> & QueryableStorageEntry<ApiType, [ReferralId]>;
      /**
       * The map from validator key to the vote weight ledger of that validator.
       **/
      validatorLedgers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorLedger>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The map from (wannabe) validator key to the profile of that validator.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorProfile>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The beneficiary account of vesting schedule.
       **/
      vestingAccount: AugmentedQuery<ApiType, () => Observable<AccountId>, []> & QueryableStorageEntry<ApiType, []>;
    };
    xSystem: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The accounts that are blocked.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Network property (Mainnet / Testnet).
       **/
      networkProps: AugmentedQuery<ApiType, () => Observable<NetworkType>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Paused pallet call.
       **/
      paused: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<BTreeMap<Bytes, ITuple<[]>>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
