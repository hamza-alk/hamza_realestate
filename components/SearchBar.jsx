import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedAddress = encodeURIComponent(address);
    router.push(`/property/${encodedAddress}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
