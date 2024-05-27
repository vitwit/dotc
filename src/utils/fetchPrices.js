const symbolToId = {
    BTC: 'bitcoin',
    ETH: 'ethereum',
    USDT: 'tether',
    BNB: 'binancecoin',
    ADA: 'cardano',
    SOL: 'solana',
    XRP: 'ripple',
    DOT: 'polkadot',
    DOGE: 'dogecoin',
    SHIB: 'shiba-inu',
    MATIC: 'matic-network',
    AVAX: 'avalanche-2',
    LUNA: 'terra-luna',
    ATOM: 'cosmos',
    LINK: 'chainlink',
    LTC: 'litecoin',
    TRX: 'tron',
    BCH: 'bitcoin-cash',
    XLM: 'stellar',
    FTT: 'ftx-token',
    FIL: 'filecoin',
    VET: 'vechain',
    THETA: 'theta-token',
    XMR: 'monero',
    EGLD: 'elrond-erd-2',
    HBAR: 'hedera-hashgraph',
    SAND: 'the-sandbox',
    MANA: 'decentraland',
    AXS: 'axie-infinity',
    ALGO: 'algorand',
    ICP: 'internet-computer',
    OSMO: 'osmosis',
    NEAR: 'near',
    GRT: 'the-graph',
    CHZ: 'chiliz',
    ENJ: 'enjincoin',
    RUNE: 'thorchain',
    MKR: 'maker',
    AAVE: 'aave',
    KSM: 'kusama',
    CRV: 'curve-dao-token',
    COMP: 'compound-governance-token',
    YFI: 'yearn-finance',
    CAKE: 'pancakeswap-token',
    STX: 'blockstack',
    HNT: 'helium',
    ONE: 'harmony',
    ZIL: 'zilliqa',
    BAT: 'basic-attention-token',
    CELO: 'celo',
    ZRX: '0x',
    QTUM: 'qtum',
    OMG: 'omisego',
    LRC: 'loopring',
    KAVA: 'kava',
    BAL: 'balancer',
    REN: 'republic-protocol',
    LPT: 'livepeer',
    GNO: 'gnosis',
    SUSHI: 'sushi',
    SRM: 'serum',
    OCEAN: 'ocean-protocol',
    FET: 'fetch-ai',
    DGB: 'digibyte',
    NANO: 'nano',
    IOTA: 'iota',
    DASH: 'dash',
    ZEC: 'zcash',
    XEM: 'nem',
    ICX: 'icon',
    WAVES: 'waves',
    KNC: 'kyber-network',
    SNX: 'synthetix-network-token',
    BNT: 'bancor',
    REN: 'ren',
    QNT: 'quant-network',
    RSR: 'reserve-rights-token',
    UMA: 'uma',
    WBTC: 'wrapped-bitcoin',
    USDC: 'usd-coin',
    PAXG: 'pax-gold',
    CEL: 'celsius-degree-token',
    REV: 'revain',
    DAI: 'dai',
    TUSD: 'true-usd',
    HUSD: 'husd',
    NEXO: 'nexo',
    GUSD: 'gemini-dollar',
    UST: 'terrausd',
    FTM: 'fantom',
    KCS: 'kucoin-shares',
    HT: 'huobi-token',
    OKB: 'okb',
    CSPR: 'casper-network',
    VGX: 'ethos',
    RPL: 'rocket-pool',
    MIM: 'magic-internet-money',
    CVX: 'convex-finance',
    KP3R: 'keep3rv1',
    WOO: 'woo-network',
    INJ: 'injective-protocol',
    RARI: 'rarible',
    NMR: 'numeraire',
    BOND: 'barnbridge',
    KP3R: 'keep3rv1',
    MLN: 'melon',
    COTI: 'coti',
    TRB: 'tellor',
    CVC: 'civic',
    CTSI: 'cartesi',
    KLAY: 'klay-token',
    VTHO: 'vethor-token',
    STORJ: 'storj',
    ARDR: 'ardor',
    STRAX: 'stratis',
    BZRX: 'bzx-protocol',
    TWT: 'trust-wallet-token',
    WAN: 'wanchain',
    HAKKA: 'hakka-finance',
    XDC: 'xdce-crowd-sale',
    C20: 'crypterium',
    SLP: 'smooth-love-potion',
    EWT: 'energy-web-token',
    OGN: 'origin-protocol',
    DGB: 'digibyte',
    KEEP: 'keep-network',
    MTL: 'metal',
    ANT: 'aragon',
    FORTH: 'ampleforth-governance-token',
    VRA: 'verasity',
    POND: 'marlin',
    OXT: 'orchid-protocol',
    MDX: 'mdex',
    RAY: 'raydium',
    ROSE: 'oasis-network',
    NKN: 'nkn',
    ELF: 'aelf',
    AST: 'airswap',
    GNT: 'gnosis',
    AION: 'aion',
    UBT: 'unibright',
    XHV: 'haven',
    MITH: 'mithril',
    LOOM: 'loom-network',
    LINA: 'linear',
    TOMO: 'tomochain',
    BUSD: 'binance-usd',
    LOKI: 'oxen',
    EPS: 'ellipsis',
    BEL: 'bella-protocol',
    DEGO: 'dego-finance',
    PERP: 'perpetual-protocol',
    KP3R: 'keep3rv1',
    ERN: 'ethernity-chain',
    VSP: 'vesper',
    GHST: 'aavegotchi',
    LIT: 'litentry',
    AIOZ: 'aioz-network',
    ALCX: 'alchemix',
    WILD: 'wilder-world',
    SUPER: 'superfarm',
    MVI: 'metaverse-index',
    BOND: 'barnbridge',
    RGT: 'rari-governance-token',
    PICKLE: 'pickle-finance',
    BHC: 'billionhappiness',
    POWR: 'power-ledger',
    PHA: 'pha',
    AURA: 'aurora',
    VSP: 'vesper',
    FOX: 'shapeshift-fox-token',
    POLS: 'polkastarter',
    SWAP: 'trustswap',
    DUSK: 'dusk-network',
    CKB: 'nervos-network',
    LRC: 'loopring',
    AERGO: 'aergo',
    DERO: 'dero',
    REEF: 'reef-finance',
    PRQ: 'parsiq',
    MET: 'metronome',
    WOZX: 'efforce',
    KAI: 'kardiachain',
    NULS: 'nuls',
    STPT: 'stp-network',
    EFI: 'efinity',
    OM: 'mantra-dao',
    UDO: 'unido',
    KDA: 'kadena',
    LOCG: 'locgame',
    GVT: 'genesis-vision',
    PRQ: 'parsiq',
    COTI: 'coti',
    UTK: 'utrust',
    CTK: 'certik',
    AKRO: 'akropolis',
    FET: 'fetch-ai',
    KLP: 'kula',
    LSS: 'lossless',
    MDT: 'measurable-data-token',
    HXRO: 'hxro',
    JULD: 'julswap',
    PEAK: 'peakdefi',
    XRT: 'robonomics-network',
    BMI: 'bridge-mutual',
    COVER: 'cover-protocol',
    MFI: 'marginfi',
    LTX: 'lattice-token',
    TIX: 'blocktix',
    WXT: 'wirex-token',
    BDP: 'big-data-protocol',
    CREAM: 'cream-finance',
    WING: 'wing-finance',
    BMI: 'bridge-mutual',
    MASK: 'mask-network',
    BLZ: 'bluzelle',
    REEF: 'reef-finance',
    FRONT: 'frontier-token',
    API3: 'api3',
    POLS: 'polkastarter',
    LQTY: 'liquity',
    TORN: 'tornado-cash',
    EPS: 'ellipsis',
    DEGO: 'dego-finance',
    KMD: 'komodo',
    ORN: 'orion-protocol',
    CHR: 'chromia',
    AUTO: 'auto',
    BZRX: 'bzx-protocol',
    TKO: 'tokocrypto',
    AVA: 'travala',
    QKC: 'quarkchain',
    BOR: 'boringdao',
}  
export const fetchMarketPrices = async (dealToken, bidToken) => {
    const dealTokenId = symbolToId[dealToken];
    const bidTokenId = symbolToId[bidToken];
    if (!dealTokenId || !bidTokenId) {
      throw new Error('Invalid token symbol');
    }
  
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${dealTokenId},${bidTokenId}&vs_currencies=usd`);
    const data = await response.json();
    return {
      dealTokenPrice: data[dealTokenId].usd,
      bidTokenPrice: data[bidTokenId].usd,
    };
  };