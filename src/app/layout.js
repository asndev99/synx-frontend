"use client";

// import { NextUIProvider } from '@nextui-org/react';
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Providers } from './Providers';
import { Suspense } from "react";
import SimpleFallback from "../../AppComponents/SimpleFallback";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
          <Provider store={store}>
          <Suspense fallback={<SimpleFallback />}>
          <Providers>
            {children}
            </Providers>
            </Suspense>
          </Provider>
          
      </body>
    </html>
  );
}
