import React from 'react';

export function ErrorBoundary() {
  return (
    <tr>
      <td colSpan={5} className="text-center text-red-700 py-4">
        Error loading data. <button onClick={() => location.reload()}>Retry</button>
      </td>
    </tr>
  );
}
