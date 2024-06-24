import React from 'react';
import FilterList from '../FilterList/FilterList';
import SearchBar from '../SearchBar/SearchBar';

export default function SuperstarsSearch() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "row"}}>
                <h3>WWE: Current Superstars</h3>
                <FilterList />
                <SearchBar />
            </div>
        </>
    )
}