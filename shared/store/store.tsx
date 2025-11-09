import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  // If you add Redux/other providers, wrap here; else just return children.
  return <>{children}</>;
}
