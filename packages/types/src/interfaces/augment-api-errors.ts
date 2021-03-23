// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    authorship: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
    };
    balances: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    bounties: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
    };
    council: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    currencies: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
    };
    democracy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Unknown index
       **/
      BadIndex: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      InvalidWitness: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * Not delegated
       **/
      NotDelegated: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      NotLocked: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * An unexpected integer overflow occurred.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * An unexpected integer underflow occurred.
       **/
      Underflow: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
    };
    elections: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
    };
    grandpa: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    identity: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
    };
    imOnline: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
    };
    multisig: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      WeightTooLow: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
    };
    proxy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
    };
    scheduler: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
    };
    session: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
    };
    sudo: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    tips: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The tip was already found/started.
       **/
      AlreadyKnown: AugmentedError<ApiType>;
      /**
       * The account attempting to retract the tip is not the finder of the tip.
       **/
      NotFinder: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * The tip cannot be claimed/closed because there are not enough tippers yet.
       **/
      StillOpen: AugmentedError<ApiType>;
      /**
       * The tip hash is unknown.
       **/
      UnknownTip: AugmentedError<ApiType>;
    };
    treasury: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
    };
    xAssets: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Action is not allowed.
       **/
      ActionNotAllowed: AugmentedError<ApiType>;
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Not Allow native asset,
       **/
      DenyNativeAsset: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * 
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Account still has active reserved
       **/
      StillHasActiveReserved: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      TotalAssetInsufficientBalance: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      TotalAssetOverflow: AugmentedError<ApiType>;
    };
    xAssetsRegistrar: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The asset already exists.
       **/
      AssetAlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is already valid (online), no need to recover.
       **/
      AssetAlreadyValid: AugmentedError<ApiType>;
      /**
       * The asset does not exist.
       **/
      AssetDoesNotExist: AugmentedError<ApiType>;
      /**
       * The asset is invalid (not online).
       **/
      AssetIsInvalid: AugmentedError<ApiType>;
      /**
       * Text is invalid ASCII, only allow ASCII visible character [0x20, 0x7E]
       **/
      InvalidAscii: AugmentedError<ApiType>;
      /**
       * Desc length is zero or too long
       **/
      InvalidAssetDescLength: AugmentedError<ApiType>;
      /**
       * Token name length is zero or too long
       **/
      InvalidAssetTokenNameLength: AugmentedError<ApiType>;
      /**
       * Token symbol char is invalid, only allow ASCII alphanumeric character or '-', '.', '|', '~'
       **/
      InvalidAssetTokenSymbolChar: AugmentedError<ApiType>;
      /**
       * Token symbol length is zero or too long
       **/
      InvalidAssetTokenSymbolLength: AugmentedError<ApiType>;
    };
    xGatewayBitcoin: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Fork is too long to proceed
       **/
      AncientFork: AugmentedError<ApiType>;
      /**
       * 
       **/
      BadMerkleProof: AugmentedError<ApiType>;
      /**
       * Parse redeem script failed
       **/
      BadRedeemScript: AugmentedError<ApiType>;
      /**
       * Invalid signature
       **/
      BadSignature: AugmentedError<ApiType>;
      /**
       * construct bad signature
       **/
      ConstructBadSign: AugmentedError<ApiType>;
      /**
       * Cannot deserialize the header or tx vec
       **/
      DeserializeErr: AugmentedError<ApiType>;
      /**
       * duplicated pubkey for trustees
       **/
      DuplicatedKeys: AugmentedError<ApiType>;
      /**
       * already vote for this withdrawal proposal
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Header already exists
       **/
      ExistingHeader: AugmentedError<ApiType>;
      /**
       * can't generate multisig address
       **/
      GenerateMultisigFailed: AugmentedError<ApiType>;
      /**
       * Ancient fork
       **/
      HeaderAncientFork: AugmentedError<ApiType>;
      /**
       * Futuristic timestamp
       **/
      HeaderFuturisticTimestamp: AugmentedError<ApiType>;
      /**
       * nBits do not match difficulty rules
       **/
      HeaderNBitsNotMatch: AugmentedError<ApiType>;
      /**
       * Not Found
       **/
      HeaderNotFound: AugmentedError<ApiType>;
      /**
       * Unknown parent
       **/
      HeaderUnknownParent: AugmentedError<ApiType>;
      /**
       * load addr from bytes error
       **/
      InvalidAddr: AugmentedError<ApiType>;
      /**
       * invalid bitcoin address
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * parse base58 addr error
       **/
      InvalidBase58: AugmentedError<ApiType>;
      /**
       * can't find the best header in chain or it's invalid
       **/
      InvalidBestIndex: AugmentedError<ApiType>;
      /**
       * Invalid proof-of-work (Block hash does not satisfy nBits)
       **/
      InvalidPoW: AugmentedError<ApiType>;
      /**
       * Previous tx id not equal input point hash
       **/
      InvalidPrevTx: AugmentedError<ApiType>;
      /**
       * invalid proposal
       **/
      InvalidProposal: AugmentedError<ApiType>;
      /**
       * invalid bitcoin public key
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      /**
       * invalid sign count in trustee withdrawal tx proposal
       **/
      InvalidSignCount: AugmentedError<ApiType>;
      /**
       * invalid trustee count
       **/
      InvalidTrusteeCount: AugmentedError<ApiType>;
      /**
       * withdraw tx not match expected tx
       **/
      MismatchedTx: AugmentedError<ApiType>;
      /**
       * no proposal for current withdrawal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * last proposal not finished yet
       **/
      NotFinishProposal: AugmentedError<ApiType>;
      /**
       * not set trustee yet
       **/
      NotTrustee: AugmentedError<ApiType>;
      /**
       * no withdrawal record for this id
       **/
      NoWithdrawalRecord: AugmentedError<ApiType>;
      /**
       * Can't find previous header
       **/
      PrevHeaderNotExisted: AugmentedError<ApiType>;
      /**
       * process tx failed
       **/
      ProcessTxFailed: AugmentedError<ApiType>;
      /**
       * reject sig for current proposal
       **/
      RejectSig: AugmentedError<ApiType>;
      /**
       * reject replay proccessed tx
       **/
      ReplayedTx: AugmentedError<ApiType>;
      /**
       * The tx is not yet confirmed, i.e, the block of which is not confirmed.
       **/
      UnconfirmedTx: AugmentedError<ApiType>;
      /**
       * verify tx signature failed
       **/
      VerifySignFailed: AugmentedError<ApiType>;
      /**
       * unexpected withdraw records count
       **/
      WroungWithdrawalCount: AugmentedError<ApiType>;
    };
    xGatewayBitcoinV2: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Redeem amount is to low
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Arithmetic underflow/overflow.
       **/
      ArithmeticError: AugmentedError<ApiType>;
      /**
       * Error propagated from xpallet_assets.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Bridge was shutdown or in error.
       **/
      BridgeNotRunning: AugmentedError<ApiType>;
      /**
       * Bridge status is not correct
       **/
      BridgeStatusError: AugmentedError<ApiType>;
      /**
       * Btc address in request was occupied by another vault.
       **/
      BtcAddressOccupied: AugmentedError<ApiType>;
      /**
       * The amount in request is less than lower bound.
       **/
      CollateralAmountTooSmall: AugmentedError<ApiType>;
      /**
       * Vault colateral ratio was below than `SecureThreshold`
       **/
      InsecureVault: AugmentedError<ApiType>;
      /**
       * Redeem amount is not correct
       **/
      InsufficiantAssetsFunds: AugmentedError<ApiType>;
      /**
       * Account doesn't have enough collateral to be slashed.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Requester doesn't have enough pcx for collateral.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Collateral in request is less than griefing collateral
       **/
      InsufficientGriefingCollateral: AugmentedError<ApiType>;
      /**
       * Collateral is less than lower bound after extrinsic.
       **/
      InsufficientVaultCollateral: AugmentedError<ApiType>;
      /**
       * BtcAddress invalid
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Invalid btc address
       **/
      InvalidBtcAddress: AugmentedError<ApiType>;
      /**
       * Value to be set is invalid
       **/
      InvalidConfigValue: AugmentedError<ApiType>;
      /**
       * Actioner is not the request's owner
       **/
      InvalidRequester: AugmentedError<ApiType>;
      /**
       * Tried to execute `IssueRequest` while  it's expired
       **/
      IssueRequestExpired: AugmentedError<ApiType>;
      /**
       * `IssueRequest` cancelled when it's not expired
       **/
      IssueRequestNotExpired: AugmentedError<ApiType>;
      /**
       * No such `IssueRequest`
       **/
      IssueRequestNotFound: AugmentedError<ApiType>;
      /**
       * Try to calculate collateral ratio while has no issued_tokens
       **/
      NoIssuedTokens: AugmentedError<ApiType>;
      /**
       * Permission denied.
       **/
      NotOracle: AugmentedError<ApiType>;
      /**
       * Vault issue token insufficient
       **/
      RedeemAmountTooLarge: AugmentedError<ApiType>;
      /**
       * Redeem is cancled
       **/
      RedeemRequestAlreadyCancled: AugmentedError<ApiType>;
      /**
       * Redeem is completed
       **/
      RedeemRequestAlreadyCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request is expierd
       **/
      RedeemRequestExpired: AugmentedError<ApiType>;
      /**
       * Redeem request cancelled for forced redeem when it's not expired.
       **/
      RedeemRequestNotExpired: AugmentedError<ApiType>;
      /**
       * Redeem request id is not exsit
       **/
      RedeemRequestNotFound: AugmentedError<ApiType>;
      /**
       * Redeem in Processing
       **/
      RedeemRequestProcessing: AugmentedError<ApiType>;
      /**
       * `IssueRequest` or `RedeemRequest` has been executed or cancelled
       **/
      RequestDealt: AugmentedError<ApiType>;
      /**
       * Requester has been vault.
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Vault was inactive
       **/
      VaultInactive: AugmentedError<ApiType>;
      /**
       * Vault is under Liquidation
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
    };
    xGatewayCommon: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * existing duplicate account
       **/
      DuplicatedAccountId: AugmentedError<ApiType>;
      /**
       * exceed the maximum length of the about field of trustess session info
       **/
      InvalidAboutLen: AugmentedError<ApiType>;
      /**
       * convert generic data into trustee session info error
       **/
      InvalidGenericData: AugmentedError<ApiType>;
      /**
       * invalid multisig
       **/
      InvalidMultisig: AugmentedError<ApiType>;
      /**
       * trustee session info not found
       **/
      InvalidTrusteeSession: AugmentedError<ApiType>;
      /**
       * the value of withdrawal less than than the minimum value
       **/
      InvalidWithdrawal: AugmentedError<ApiType>;
      /**
       * not registered as trustee
       **/
      NotRegistered: AugmentedError<ApiType>;
      /**
       * Unsupported chain
       **/
      NotSupportedChain: AugmentedError<ApiType>;
      /**
       * just allow validator to register trustee
       **/
      NotValidator: AugmentedError<ApiType>;
    };
    xGatewayRecords: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The applicant is not this account
       **/
      InvalidAccount: AugmentedError<ApiType>;
      /**
       * State only allow `RootFinish` and `RootCancel`
       **/
      InvalidState: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Applying`
       **/
      NotApplyingState: AugmentedError<ApiType>;
      /**
       * Id not in withdrawal records
       **/
      NotExisted: AugmentedError<ApiType>;
      /**
       * WithdrawalRecord state not `Processing`
       **/
      NotProcessingState: AugmentedError<ApiType>;
      /**
       * Meet unexpected chain
       **/
      UnexpectedChain: AugmentedError<ApiType>;
    };
    xMiningAsset: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Balances error.
       **/
      DispatchError: AugmentedError<ApiType>;
      /**
       * Claimer does not have enough Staking locked balance.
       **/
      InsufficientStaking: AugmentedError<ApiType>;
      /**
       * The asset does not have the mining rights.
       **/
      NotPrevilegedAsset: AugmentedError<ApiType>;
      /**
       * Claimer just did a claim recently, the next frequency limit is not expired.
       **/
      UnexpiredFrequencyLimit: AugmentedError<ApiType>;
      /**
       * Zero mining weight.
       **/
      ZeroMiningWeight: AugmentedError<ApiType>;
    };
    xSpot: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Error from assets module.
       **/
      AssetError: AugmentedError<ApiType>;
      /**
       * Only the orders with ZeroFill or PartialFill can be canceled.
       **/
      CancelOrderNotAllowed: AugmentedError<ApiType>;
      /**
       * Can not put order if transactor's free token too low.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Can not find the order given the order index.
       **/
      InvalidOrderId: AugmentedError<ApiType>;
      /**
       * Invalid validator target.
       **/
      InvalidOrderType: AugmentedError<ApiType>;
      /**
       * Price can not be zero, and must be an integer multiple of the tick decimals.
       **/
      InvalidPrice: AugmentedError<ApiType>;
      /**
       * Price volatility must be less 100.
       **/
      InvalidPriceVolatility: AugmentedError<ApiType>;
      /**
       * tick_decimals can not less than the one of pair.
       **/
      InvalidTickdecimals: AugmentedError<ApiType>;
      /**
       * The trading pair doesn't exist.
       **/
      InvalidTradingPair: AugmentedError<ApiType>;
      /**
       * Can not retrieve the asset info given the trading pair.
       **/
      InvalidTradingPairAsset: AugmentedError<ApiType>;
      /**
       * The trading pair does not exist.
       **/
      NonexistentTradingPair: AugmentedError<ApiType>;
      /**
       * The bid price can not higher than the PriceVolatility of current lowest ask.
       **/
      TooHighBidPrice: AugmentedError<ApiType>;
      /**
       * The ask price can not lower than the PriceVolatility of current highest bid.
       **/
      TooLowAskPrice: AugmentedError<ApiType>;
      /**
       * Too many orders for the same price.
       **/
      TooManyBacklogOrders: AugmentedError<ApiType>;
      /**
       * The trading pair already exists.
       **/
      TradingPairAlreadyExists: AugmentedError<ApiType>;
      /**
       * The trading pair is untradable.
       **/
      TradingPairUntradable: AugmentedError<ApiType>;
      /**
       * Failed to convert_base_to_quote since amount*price too small.
       **/
      VolumeTooSmall: AugmentedError<ApiType>;
      /**
       * Amount can not be zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
    };
    xStaking: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to allocate the dividend.
       **/
      AllocateDividendFailed: AugmentedError<ApiType>;
      /**
       * The account is already registered as a validator.
       **/
      AlreadyValidator: AugmentedError<ApiType>;
      /**
       * The account has no unbonded entries.
       **/
      EmptyUnbondedChunks: AugmentedError<ApiType>;
      /**
       * Free balance can not cover this bond operation.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * An account can only rebond the balance that is no more than what it has bonded to the validator.
       **/
      InvalidRebondBalance: AugmentedError<ApiType>;
      /**
       * The length of referral identity is either too long or too short.
       **/
      InvalidReferralIdentityLength: AugmentedError<ApiType>;
      /**
       * An account can only unbond the balance that is no more than what it has bonded to the validator.
       **/
      InvalidUnbondBalance: AugmentedError<ApiType>;
      /**
       * Can not find the unbonded entry given the index.
       **/
      InvalidUnbondedIndex: AugmentedError<ApiType>;
      /**
       * The validator can accept no more votes from other voters.
       **/
      NoMoreAcceptableVotes: AugmentedError<ApiType>;
      /**
       * Can not rebond due to the restriction of rebond frequency limit.
       **/
      NoMoreRebond: AugmentedError<ApiType>;
      /**
       * An account can have only `MaximumUnbondedChunkSize` unbonded entries in parallel.
       **/
      NoMoreUnbondChunks: AugmentedError<ApiType>;
      /**
       * Invalid validator target.
       **/
      NotValidator: AugmentedError<ApiType>;
      /**
       * The referral identity has been claimed by someone else.
       **/
      OccupiedReferralIdentity: AugmentedError<ApiType>;
      /**
       * Can not rebond the validator self-bonded votes as it has a much longer bonding duration.
       **/
      RebondSelfBondedNotAllowed: AugmentedError<ApiType>;
      /**
       * The validator can not (forcedly) be chilled due to the limit of minimal validators count.
       **/
      TooFewActiveValidators: AugmentedError<ApiType>;
      /**
       * The validators count already reaches `MaximumValidatorCount`.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * The unbonded balances are still in the locked state.
       **/
      UnbondedWithdrawalNotYetDue: AugmentedError<ApiType>;
      /**
       * Failed to pass the xss check.
       **/
      XssCheckFailed: AugmentedError<ApiType>;
      /**
       * The operation of zero balance in Staking makes no sense.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * No rewards when the vote weight is zero.
       **/
      ZeroVoteWeight: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
