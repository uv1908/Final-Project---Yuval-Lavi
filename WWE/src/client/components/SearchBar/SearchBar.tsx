import styles from './SearchBar.module.scss';

interface SearchBarProps {
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchQueryChange }: SearchBarProps) {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={searchQuery}
                className={styles.input}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                placeholder="SEARCH "
            />
            <div className={styles.search}></div>
        </div>
    );
}