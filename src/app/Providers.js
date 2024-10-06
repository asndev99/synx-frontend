// app/Providers.js
"use client"; // Ensure this is at the top of the file

 // Import NextUI styles
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
