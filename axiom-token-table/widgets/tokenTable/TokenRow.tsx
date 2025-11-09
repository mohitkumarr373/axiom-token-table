import React from 'react';
import { Token } from '../../entities/token/types';
import { PriceCell } from './PriceCell';

export function TokenRow({ token }: { token: Token }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-3 py-2">{token.symbol}</td>
      <PriceCell price={token.price} />
      <td className="px-3 py-2">{token.priceChange}</td>
      <td className="px-3 py-2">{token.volume}</td>
      <td className="px-3 py-2">{token.liquidity}</td>
    </tr>
  );
}
