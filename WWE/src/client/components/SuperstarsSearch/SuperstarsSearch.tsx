import FilterList from '../FilterList/FilterList';
import SearchBar from '../SearchBar/SearchBar';
import styles from './SuperstarsSearch.module.scss';

interface SuperstarsSearchProps {
    selectedFilter: string;
    onFilterChange: (filter: string) => void;
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
}

export default function SuperstarsSearch({ selectedFilter, onFilterChange, searchQuery, onSearchQueryChange }: SuperstarsSearchProps) {
    let filteredBrand = "";
    switch(selectedFilter) {
        case 'all':
            filteredBrand = "All Superstars";
            break;
        case 'current':
            filteredBrand = "Current Superstars";
            break;
        case 'raw':
            filteredBrand = "Raw";
            break;
        case 'smackdown':
            filteredBrand = "Smackdown";
            break;
        case 'hof':
            filteredBrand = "Hall of Fame";
            break;
        case 'alumni':
            filteredBrand = "Alumni";
            break;
        default:
            filteredBrand = "";
    }

    return (
        <>
            <div className={styles.searchDiv}>
                <h3>WWE: <span>{filteredBrand}</span></h3>
                <div className={styles.filters}>
                    <FilterList selectedFilter={selectedFilter} onFilterChange={onFilterChange} />
                    <SearchBar searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />
                </div>
            </div>
        </>
    )
}