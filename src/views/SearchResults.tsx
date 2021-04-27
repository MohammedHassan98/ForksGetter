import React from 'react'
import Datatable from "../components/DataTable";
import { Link } from "react-router-dom";

const SearchResults: React.FC = () => {
    return (
        <div className="MainDiv">
            <div className="WelcomeSection">
                <h2>Search Results </h2>
            </div>
            <Datatable />
            <Link to="/" >
                <button className="SearchButton" style={{marginTop: "2rem", width:"15rem"}}>
                    Back To Home
                </button>
            </Link>

        </div>
    )
}

export default SearchResults