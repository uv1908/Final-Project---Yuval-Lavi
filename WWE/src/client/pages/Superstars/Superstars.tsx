import { useEffect, useState } from 'react';
import superstarsHeader from '../../assets/superstars_header.png';
import Superstar from '../../types/superstar';
import Brand from '../../types/brand';
import SuperstarBlock from '../../components/SuperstarBlock/SuperstarBlock';
import ChampionBlock from '../../components/ChampionBlock/ChampionBlock';
import SuperstarsSearch from '../../components/SuperstarsSearch/SuperstarsSearch';
import styles from './Superstars.module.scss';
import SuperstarPage from '../SuperstarPage/SuperstarPage';
import { Link } from 'react-router-dom';

export default function Superstars() {
    const [brands, setBrands] = useState<Brand[]>([])
    const [superstars, setSuperstars] = useState<Superstar[]>([]);
    const [champs, setChamps] = useState<Superstar[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string>('current');
    const [selectedSuperstar, setSelectedSuperstar] = useState<Superstar | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    useEffect(() => {
        async function fetchData() {
            try {
                const [superstarsResponse, championsResponse] = await Promise.all([
                    fetch('/api/superstars'),
                    fetch('/api/superstars/champions')
                ]);

                if (!superstarsResponse.ok || !championsResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const superstarsData = await superstarsResponse.json();
                const championsData = await championsResponse.json();

                if (superstarsData && Array.isArray(superstarsData.superstars)) {
                    setSuperstars(superstarsData.superstars);
                } else {
                    throw new Error('Superstars data is not an array');
                }
                if (championsData && Array.isArray(championsData.superstars)) {
                    setChamps(championsData.superstars);
                } else {
                    throw new Error('Champions data is not an array');
                }
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    function getFilteredSuperstars() {
        return superstars.filter(superstar => {
            const matchesFilter = selectedFilter === 'all' || 
                (selectedFilter === 'current' && (superstar.brand_id === 1 || superstar.brand_id === 2)) ||
                (selectedFilter === 'raw' && superstar.brand_id === 1) ||
                (selectedFilter === 'smackdown' && superstar.brand_id === 2) ||
                (selectedFilter === 'hof' && superstar.brand_id === 3) ||
                (selectedFilter === 'alumni' && (superstar.brand_id === 3 || superstar.brand_id === 4));
            const matchesSearch = superstar.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }

    function getBrandById(id: number): Brand | null {
        return brands.find(brand => brand.id === id) || null;
    };

    function handleSuperstarClick(superstar: Superstar) {
        setSelectedSuperstar(superstar);
        const brand = getBrandById(superstar.brand_id);
        setSelectedBrand(brand);

        console.log(`superstar: ${superstar}`);
        console.log(`brand: ${brand}`);
        console.log(`selectedSuperstar: ${selectedSuperstar}`);
        console.log(`selectedBrand: ${selectedBrand}`);
    };

    function handleCloseSuperstarPage() {
        setSelectedSuperstar(null);
        setSelectedBrand(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;


    return (
        <div>
            <img className={styles.headerImg} src={superstarsHeader} alt='Superstars Header' />
            <div className={styles.superstarsDiv}>
                <h1 className={styles.header}>WWE: <span>Champions</span></h1>
                <div className={styles.champions}>
                    {champs.map(champ =>
                        <Link key={champ.id} to={`/superstars/${champ.id}`}>
                            <ChampionBlock
                                superstar={champ} 
                            />
                        </Link>
                    )}
                </div>
                <br />
                <SuperstarsSearch 
                    selectedFilter={selectedFilter} 
                    onFilterChange={setSelectedFilter}
                    searchQuery={searchQuery}
                    onSearchQueryChange={setSearchQuery} 
                />
                <div className={styles.all}>
                    {getFilteredSuperstars().map(superstar =>
                        <Link key={superstar.id} to={`/superstars/${superstar.id}`}>
                            <SuperstarBlock
                                superstar={superstar} 
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}