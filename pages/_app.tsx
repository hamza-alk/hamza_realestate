import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, {useState} from 'react';
import {SearchBar} from "@/components/SearchBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div className="app-container">
      <SearchBar/>
    <Component {...pageProps} />
  </div>
  );
}