import React from "react";
import "./SearchBar.css";

const SearchBar = () => {

    return (
        <>
            <form className = "SearchBar">
                <input className = "SearchInput" type = "text" placeholder = "Enter A Song Title"/>
                <button>
                    Search
                </button>
            </form>
        </>
    )
}

export default SearchBar;
