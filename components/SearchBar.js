import React, {useState} from "react";
import {FaSearch} from "react-icons/fa"
import "./SearchBar.module.css";
import {baseUrl, fetchData} from "@/utils/fetchApi";
import Link from "next/link";


export const SearchBar = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState(null);
    const handleFetchData = async (value) => {
        try {
            const data = await fetchData(value);
            setResults(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
};

const handleChange = (value) => {
    setInput(value);
}

return (
    <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
        <Link href="/propertypage">
            <button onClick={() => handleFetchData(input)}>Search</button> 
        </Link>
    </div>
    );
};   

export default SearchBar;