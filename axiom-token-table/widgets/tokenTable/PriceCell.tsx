import React from 'react';
import { useSmoothChange } from '../../shared/hooks/useSmoothChange';

export function PriceCell({ price }: { price: number }) {
  const color = useSmoothChange(price);
  return (
    <td className={`px-3 py-2 transition-colors ${color}`}>
      {price.toFixed(3)}
    </td>
  );
}
