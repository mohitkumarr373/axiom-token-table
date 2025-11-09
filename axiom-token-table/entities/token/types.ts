export type Token = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  priceChange: number;
  volume: number;
  liquidity: number;
  baseToken: string;
  quoteToken: string;
  isMigrated: boolean;
  isFinalStretch: boolean;
  pairUrl: string;
};
