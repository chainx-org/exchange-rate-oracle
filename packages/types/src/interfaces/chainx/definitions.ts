export default {
  types: {
    Chain: {
      _enum: ["ChainX", "Bitcoin", "Ethereum", "Polkadot"],
    },
    AssetType: {
      _enum: [
        "Usable",
        "Locked",
        "Reserved",
        "ReservedWithdrawal",
        "ReservedDexSpot",
      ],
    },
    OrderType: {
      _enum: ["Limit", "Market"],
    },
    Side: {
      _enum: ["Buy", "Sell"],
    },
    WithdrawalState: {
      _enum: [
        "Applying",
        "Processing",
        "NormalFinish",
        "RootFinish",
        "NormalCancel",
        "RootCancel",
      ],
    },
    Memo: "Text",
    AssetInfo: {
      token: "String",
      tokenName: "String",
      chain: "Chain",
      decimals: "Decimals",
      desc: "String",
    },
    Handicap: {
      highestBid: "Price",
      lowestAsk: "Price",
    },
    CurrencyPair: {
      base: "AssetId",
      quote: "AssetId",
    },
    TradingPairProfile: {
      id: "TradingPairId",
      currencyPair: "CurrencyPair",
      pipDecimals: "u32",
      tickDecimals: "u32",
      tradable: "bool",
    },
    OrderExecutedInfo: {
      tradingHistoryIdx: "TradingHistoryIndex",
      pairId: "TradingPairId",
      price: "Price",
      maker: "AccountId",
      taker: "AccountId",
      makerOrderId: "OrderId",
      takerOrderId: "OrderId",
      turnover: "Balance",
      executedAt: "BlockNumber",
    },
    BtcRelayedTxInfo: {
      blockHash: "H256",
      merkleProof: "BtcPartialMerkleTree",
    },
    BtcHeaderIndex: {
      hash: "H256",
      height: "u32",
    },
    BtcTxState: {
      txType: "BtcTxType",
      result: "BtcTxResult",
    },
    TrusteeInfoConfig: {
      minTrusteeCount: "u32",
      maxTrusteeCount: "u32",
    },
    GenericTrusteeSessionInfo: {
      trusteeList: "Vec<AccountId>",
      threshold: "u16",
      hotAddress: "Vec<u8>",
      coldAddress: "Vec<u8>",
    },
    GenericTrusteeIntentionProps: {
      about: "Text",
      hotEntity: "Vec<u8>",
      coldEntity: "Vec<u8>",
    },
    WithdrawalRecord: {
      assetId: "AssetId",
      applicant: "AccountId",
      balance: "Balance",
      addr: "AddrStr",
      ext: "Memo",
      height: "BlockNumber",
    },
    ReferralId: "Text",
    AddrStr: "Text",
    ChainAddress: "Vec<u8>",
    Price: "u128",
    OrderId: "u64",
    TradingPairId: "u32",
    PriceFluctuation: "u32",
    WithdrawalRecordId: "u32",
    Token: "Text",
    Decimals: "u8",
    Desc: "Text",
    TradingHistoryIndex: "u64",
    BtcTxType: {
      _enum: [
        "Withdrawal",
        "Deposit",
        "HotAndCold",
        "TrusteeTransition",
        "Irrelevance",
      ],
    },
    BtcTxResult: {
      _enum: ["Success", "Failure"],
    },
    AmountOf: "Amount",
    AssetRestrictions: {
      bits: "u32",
    },
    Amount: "i128",
    CurrencyId: "AssetId",
    AssetRestriction: {
      _enum: [
        "Move",
        "Transfer",
        "Deposit",
        "Withdraw",
        "DestroyWithdrawal",
        "DestroyFree",
      ],
    },
    NetworkType: {
      _enum: ["Mainnet", "Testnet"],
    },
    OrderProperty: {
      id: "OrderId",
      side: "Side",
      price: "Price",
      amount: "Amount",
      pairId: "TradingPairId",
      submitter: "AccountId",
      orderType: "OrderType",
      createdAt: "BlockNumber",
    },
    TotalAssetInfo: {
      info: "AssetInfo",
      balance: "BTreeMap<AssetType, Balance>",
      isOnline: "bool",
      restrictions: "AssetRestrictions",
    },
    NominatorLedger: {
      nomination: "Balance",
      lastVoteWeight: "VoteWeight",
      lastVoteWeightUpdate: "BlockNumber",
      unbondedChunks: "Vec<Unbonded>",
    },
    Unbonded: {
      value: "Balance",
      lockedUntil: "BlockNumber",
    },
    WithdrawalLimit: {
      minimalWithdrawal: "Balance",
      fee: "Balance",
    },
    BtcTrusteeType: "Vec<u8>",
    BtcTrusteeAddrInfo: {
      addr: "BtcAddress",
      redeemScript: "Vec<u8>",
    },
    BtcTrusteeIntentionProps: {
      about: "Text",
      hotEntity: "BtcTrusteeType",
      coldEntity: "BtcTrusteeType",
    },
    BtcTrusteeSessionInfo: {
      trusteeList: "Vec<AccountId>",
      threshold: "u16",
      hotAddress: "BtcTrusteeAddrInfo",
      coldAddress: "BtcTrusteeAddrInfo",
    },
    BtcNetwork: {
      _enum: ["Mainnet", "Testnet"],
    },
    BtcHeader: "Vec<u8>",
    BtcTransaction: "Vec<u8>",
    BtcPartialMerkleTree: "Vec<u8>",
    BtcDepositCache: {
      txid: "H256",
      balance: "u64",
    },
    BtcVoteResult: {
      _enum: ["Unfinish", "Finish"],
    },
    BtcWithdrawalProposal: {
      sigState: "BtcVoteResult",
      withdrawalIdList: "Vec<u32>",
      tx: "BtcTransaction",
      trusteeList: "Vec<(AccountId, bool)>",
    },
    BtcTxVerifier: {
      _enum: ["Recover", "RuntimeInterface"],
    },
    RpcTotalAssetInfo: {
      info: "AssetInfo",
      balance: "BTreeMap<AssetType, RpcBalance>",
      isOnline: "bool",
      restrictions: "AssetRestrictions",
    },
    RpcOrder: {
      id: "OrderId",
      side: "Side",
      price: "RpcPrice",
      amount: "RpcBalance",
      pairId: "TradingPairId",
      submitter: "AccountId",
      orderType: "OrderType",
      createdAt: "BlockNumber",
      status: "OrderStatus",
      remaining: "RpcBalance",
      executedIndices: "Vec<TradingHistoryIndex>",
      alreadyFilled: "RpcBalance",
      reservedBalance: "RpcBalance",
      lastUpdateAt: "BlockNumber",
    },
    RpcWithdrawalRecord: {
      assetId: "AssetId",
      applicant: "AccountId",
      balance: "RpcBalance",
      addr: "String",
      ext: "String",
      height: "BlockNumber",
      state: "WithdrawalState",
    },
    RpcMiningDividendInfo: {
      own: "RpcBalance",
      other: "RpcBalance",
      insufficientStake: "RpcBalance",
    },
    RpcInclusionFee: {
      baseFee: "RpcBalance",
      lenFee: "RpcBalance",
      adjustedWeightFee: "RpcBalance",
    },
    RpcFeeDetails: {
      inclusionFee: "Option<RpcInclusionFee>",
      tip: "RpcBalance",
      extraFee: "RpcBalance",
      finalFee: "RpcBalance",
    },
    ValidatorInfo: {
      account: "AccountId",
      registeredAt: "BlockNumber",
      isChilled: "bool",
      lastChilled: "Option<BlockNumber>",
      totalNomination: "RpcBalance",
      lastTotalVoteWeight: "RpcVoteWeight",
      lastTotalVoteWeightUpdate: "BlockNumber",
      isValidating: "bool",
      selfBonded: "RpcBalance",
      referralId: "String",
      rewardPotAccount: "AccountId",
      rewardPotBalance: "RpcBalance",
    },
    FullPairInfo: {
      baseCurrency: "AssetId",
      highestBid: "RpcPrice",
      id: "TradingPairId",
      latestPrice: "RpcPrice",
      latestPriceUpdatedAt: "BlockNumber",
      lowestAsk: "RpcPrice",
      maxValidBid: "RpcPrice",
      minValidAsk: "RpcPrice",
      pipDecimals: "u32",
      quoteCurrency: "AssetId",
      tickDecimals: "u32",
      tradable: "bool",
    },
    MiningAssetInfo: {
      assetId: "AssetId",
      miningPower: "FixedAssetPower",
      rewardPot: "AccountId",
      rewardPotBalance: "RpcBalance",
      lastTotalMiningWeight: "RpcMiningWeight",
      lastTotalMiningWeightUpdate: "BlockNumber",
    },
    Depth: {
      asks: "Vec<(RpcPrice, RpcBalance)>",
      bids: "Vec<(RpcPrice, RpcBalance)>",
    },
    Page: {
      pageIndex: "u32",
      pageSize: "u32",
      data: "Vec<RpcOrder>",
    },
    String: "Text",
    MiningWeight: "u128",
    RpcPrice: "String",
    RpcBalance: "String",
    RpcMiningWeight: "String",
    RpcVoteWeight: "String",
    OrderInfo: "Order",
    HandicapInfo: "Handicap",
    WithdrawalRecordOf: "WithdrawalRecord",
  },
};
