'use client';
import React from 'react';
import { useTokens } from '../../shared/hooks/useTokens';
import { TokenRow } from './TokenRow';
import { Skeleton } from '../../shared/ui/Skeleton';
import { ErrorBoundary } from '../../shared/ui/ErrorBoundary';

export function TokenTable() {
  const { data: tokens, isLoading, error } = useTokens();

  if (isLoading) return <Skeleton rows={12} />;
  if (error) return <ErrorBoundary />;

  return (
    <table className="w-full table-fixed bg-white rounded-lg shadow-sm">
      <thead>
        <tr>
          <th className="px-3 py-2">Token</th>
          <th className="px-3 py-2">Price</th>
          <th className="px-3 py-2">24h Change</th>
          <th className="px-3 py-2">Volume</th>
          <th className="px-3 py-2">Liquidity</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <TokenRow key={token.id} token={token} />
        ))}
      </tbody>
    </table>
  );
}
