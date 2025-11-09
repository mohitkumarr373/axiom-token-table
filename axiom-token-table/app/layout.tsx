import React from 'react';
import '../globals.css';
import { Providers } from '../shared/store/store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg-light text-gray-900 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
