import React from "react";
import { TextField } from "@mui/material";
import './styles/CategoryInfo.css';

const SearchBar = ({searchText, setSearchText}) => {
return (
    <div className="search-bar">
          <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className= "input"
                style={{ marginBottom: 16, display: 'flex', flex: 1, borderRadius: '10px',backgroundColor: "white" }}
            />
    </div>
)
}

export default SearchBar;