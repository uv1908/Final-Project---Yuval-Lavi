import { useState } from 'react';
import styles from './FilterList.module.scss';

interface FilterListProps {
    selectedFilter: string;
    onFilterChange: (filter: string) => void;
}

export interface FilterOption {
    value: string;
    label: string;
}

export default function FilterList({ selectedFilter, onFilterChange }: FilterListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        { value: 'all', label: 'ALL SUPERSTARS' },
        { value: 'current', label: 'CURRENT SUPERSTARS' },
        { value: 'raw', label: 'RAW' },
        { value: 'smackdown', label: 'SMACKDOWN' },
        { value: 'hof', label: 'HALL OF FAME' },
        { value: 'alumni', label: 'ALUMNI' },
    ];

    function toggleOptions() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`${styles.filterBox} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.current} onClick={toggleOptions}>
            {options.find(option => option.value === selectedFilter)?.label}
                <div className={styles.arrow}>{isOpen ? '˅' : '˄'}</div>
            </div>
            <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
                {options.map(option => (
                    <li
                        key={option.value}
                        className={styles.superstarSearchOption}
                        onClick={() => {
                            onFilterChange(option.value);
                            setIsOpen(false);
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}