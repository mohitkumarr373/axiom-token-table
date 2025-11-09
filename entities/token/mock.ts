import { Token } from './types';
export const tokenSeed: Token[] = [
  {
    id: "1",
    symbol: "AXM",
    name: "Axiom",
    price: 1.055,
    priceChange: 0.012,
    volume: 2303400,
    liquidity: 450000,
    baseToken: "AXM",
    quoteToken: "USDT",
    isMigrated: false,
    isFinalStretch: false,
    pairUrl: "https://axiom.trade/pair/AXM-USDT"
  }
  // Add more tokens as needed
];
