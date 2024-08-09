import "../styles/globals.css";
import { useState } from "react";
import SearchBar from "@/components/SearchBar.jsx";

export default function MyApp({ Component, pageProps }) {
  const [results, setResults] = useState([]);

  return (
    <div className="app-container">
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
}
