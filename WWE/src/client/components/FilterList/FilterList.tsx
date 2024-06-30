import React, { useState } from 'react';
import styles from './FilterList.module.scss';

const options = [
    { value: 'All', label: 'All Superstars' },
    { value: 'Current', label: 'Current Superstars' },
    { value: 'Raw', label: 'Raw' },
    { value: 'SmackDown', label: 'SmackDown' },
    { value: 'Hall of Fame', label: 'Hall of Fame' },
    { value: 'Alumni', label: 'Alumni' }
];

type FilterOption = 'all' | 'current' | 'raw' | 'smackdown' | 'hof' | 'alumni';

interface FilterListProps {
    onSelect: (value: FilterOption) => void;
    selectedFilter: FilterOption;
}

export default function FilterList({ onSelect, selectedFilter }: FilterListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Current'); // State to manage selected option

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (value: FilterOption) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        // <div className={`${styles.filterBox} ${isOpen ? styles.open : styles.closed}`}>
        //     <div className={styles.current} onClick={toggleOptions}>
        //         {options.find(option => option.value === selectedOption)?.label}
        //         <div className={styles.arrow}>{isOpen ? '▲' : '▼'}</div>
        //     </div>
        //     <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
        //         {options.map(option => (
        //             <li
        //                 key={option.value}
        //                 className={styles['superstar-search--option']}
        //                 onClick={() => handleOptionSelect(option.value, option.label)}
        //             >
        //                 {option.label}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className={`${styles.filterBox} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.current} onClick={toggleOptions}>
            {options.find(option => option.value === selectedFilter)?.label}
                <div className={styles.arrow}>{isOpen ? '▲' : '▼'}</div>
            </div>
            <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
                {options.map(option => (
                    <li
                        key={option.value}
                        className={styles['superstar-search--option']}
                        onClick={() => handleOptionSelect(option.value as FilterOption)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}