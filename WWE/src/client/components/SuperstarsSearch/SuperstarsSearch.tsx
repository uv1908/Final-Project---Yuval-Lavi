import FilterList from '../FilterList/FilterList';
import SearchBar from '../SearchBar/SearchBar';
import styles from './SuperstarsSearch.module.scss';

const filterOptions = {
    all: 'All Superstars',
    current: 'Current Superstars',
    raw: 'Raw',
    smackdown: 'SmackDown',
    hof: 'Hall of Fame',
    alumni: 'Alumni',
} as const;

type FilterOption = keyof typeof filterOptions;

interface SuperstarsSearchProps {
    onSelect: (value: FilterOption) => void;
    selectedFilter: FilterOption;
}

export default function SuperstarsSearch({ onSelect, selectedFilter }: SuperstarsSearchProps) {
    const handleSelect = (value: FilterOption) => {
        onSelect(value);
    };

    return (
        <>
            <div className={styles.searchDiv}>
                <h3>WWE: <span>{filterOptions[selectedFilter]}</span></h3>
                <div className={styles.filters}>
                <FilterList onSelect={handleSelect} selectedFilter={selectedFilter} />
                    <SearchBar />
                </div>
            </div>
        </>
    )
}