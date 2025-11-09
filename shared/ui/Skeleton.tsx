import React from 'react';
export function Skeleton({ rows }: { rows: number }) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className="bg-gray-100 animate-pulse">
          <td colSpan={5} className="px-3 py-2 h-8 rounded"></td>
        </tr>
      ))}
    </tbody>
  );
}
