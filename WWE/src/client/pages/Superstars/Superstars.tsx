import { useEffect, useState } from 'react';
import superstarsHeader from '../../assets/superstars_header.png';
import Superstar from '../../../server/database/superstar';
import Brand from '../../../server/database/brand';
import SuperstarBlock from '../../components/SuperstarBlock/SuperstarBlock';
import ChampionBlock from '../../components/ChampionBlock/ChampionBlock';
import SuperstarsSearch from '../../components/SuperstarsSearch/SuperstarsSearch';
import styles from './Superstars.module.scss';
import SuperstarPage from '../../components/SuperstarPage/SuperstarPage';

const filterOptions = {
    all: 'All Superstars',
    current: 'Current Superstars',
    raw: 'Raw',
    smackdown: 'SmackDown',
    hof: 'Hall of Fame',
    alumni: 'Alumni',
} as const;

type FilterOption = keyof typeof filterOptions;

export default function Superstars() {
    const [brands, setBrands] = useState<Brand[]>([])
    const [superstars, setSuperstars] = useState<Superstar[]>([]);
    const [champs, setChamps] = useState<Superstar[]>([]);
    const [current, setCurrent] = useState<Superstar[]>([]);
    const [raw, setRaw] = useState<Superstar[]>([]);
    const [smackdown, setSmackdown] = useState<Superstar[]>([]);
    const [hallOfFame, setHallOfFame] = useState<Superstar[]>([]);
    const [alumni, setAlumni] = useState<Superstar[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>('current');
    const [selectedSuperstar, setSelectedSuperstar] = useState<Superstar | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const [superstarsResponse, championsResponse, currentResponse, rawResponse, smackdownResponse, hofResponse, alumniResponse, brandsResponse] = await Promise.all([
    //                 fetch('/api/superstars'),
    //                 fetch('/api/superstars/champions'),
    //                 fetch('/api/superstars/current'),
    //                 fetch('/api/superstars/raw'),
    //                 fetch('/api/superstars/smackdown'),
    //                 fetch('/api/superstars/hof'),
    //                 fetch('/api/superstars/alumni'),
    //                 fetch('/api/brands')
    //             ]);

    //             if (!superstarsResponse.ok || !championsResponse.ok || !currentResponse.ok || !rawResponse.ok || !smackdownResponse.ok || !hofResponse.ok || !alumniResponse.ok || brandsResponse.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }

    //             const superstarsData = await superstarsResponse.json();
    //             const championsData = await championsResponse.json();
    //             const currentData = await currentResponse.json();
    //             const rawData = await rawResponse.json();
    //             const smackdownData = await smackdownResponse.json();
    //             const hofData = await hofResponse.json();
    //             const alumniData = await alumniResponse.json();
    //             const brandsData = await brandsResponse.json();

    //             if (superstarsData && Array.isArray(superstarsData.superstars)) {
    //                 setSuperstars(superstarsData.superstars);
    //             } else {
    //                 throw new Error('Superstars data is not an array');
    //             }
    //             if (championsData && Array.isArray(championsData.superstars)) {
    //                 setChamps(championsData.superstars);
    //             } else {
    //                 throw new Error('Champions data is not an array');
    //             }
    //             if (currentData && Array.isArray(currentData.superstars)) {
    //                 setCurrent(currentData.superstars);
    //             } else {
    //                 throw new Error('Current data is not an array');
    //             }
    //             if (rawData && Array.isArray(rawData.superstars)) {
    //                 setRaw(rawData.superstars);
    //             } else {
    //                 throw new Error('Raw data is not an array');
    //             }
    //             if (smackdownData && Array.isArray(smackdownData.superstars)) {
    //                 setSmackdown(smackdownData.superstars);
    //             } else {
    //                 throw new Error('Smackdown data is not an array');
    //             }
    //             if (hofData && Array.isArray(hofData.superstars)) {
    //                 setHallOfFame(hofData.superstars);
    //             } else {
    //                 throw new Error('Hall of Fame data is not an array');
    //             }
    //             if (alumniData && Array.isArray(alumniData.superstars)) {
    //                 setAlumni(alumniData.superstars);
    //             } else {
    //                 throw new Error('Alumni data is not an array');
    //             }
    //             if (brandsData && Array.isArray(brandsData.brands)) {
    //                 setBrands(brandsData.brands);
    //             } else {
    //                 throw new Error('Brands data is not an array');
    //             }
    //         } catch (err) {
    //             setError('Failed to fetch data');
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    
    //     fetchData();
    // }, []);
    
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

    const getFilteredSuperstars = () => {
        switch (selectedFilter) {
            case 'all':
                return superstars;
            case 'current':
                return superstars.filter(superstar => superstar.brand_id === 1 || superstar.brand_id === 2);
            case 'raw':
                return superstars.filter(superstar => superstar.brand_id === 1);
            case 'smackdown':
                return superstars.filter(superstar => superstar.brand_id === 2);
            case 'hof':
                return superstars.filter(superstar => superstar.brand_id === 3);
            case 'alumni':
                return superstars.filter(superstar => superstar.brand_id === 3 || superstar.brand_id === 4);
            default:
                return [];
        }
    };

    function handleFilterChange(value: FilterOption) {
        setSelectedFilter(value);
    };

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

    const filteredSuperstars = getFilteredSuperstars();

    return (
        <div>
            <img className={styles.headerImg} src={superstarsHeader} alt='Superstars Header' />
            <div className={styles.superstarsDiv}>
                <h1 className={styles.header}>WWE: <span>Champions</span></h1>
                <div className={styles.champions}>
                    {champs.map(champ =>
                        <ChampionBlock key={champ.id} superstar={champ} onClick={() => handleSuperstarClick(champ)} />
                    )}
                </div>
                <br />
                <SuperstarsSearch onSelect={handleFilterChange} selectedFilter={selectedFilter} />
                <div className={styles.all}>
                    {/* {(() => {
                        switch (selectedFilter.toString()) {
                            case 'all':
                                return superstars.map(superstar => (
                                    <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                    ));
                                    case 'current':
                                        return current.map(superstar => (
                                            <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                            ));
                                            case 'raw':
                                                return raw.map(superstar => (
                                                    <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                                    ));
                                                    case 'smackdown':
                                                        return smackdown.map(superstar => (
                                                            <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                                            ));
                                                            case 'hof':
                                                                return hallOfFame.map(superstar => (
                                                                    <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                                                    ));
                                                                    case 'alumni':
                                                                        return alumni.map(superstar => (
                                                                            <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                                                                            ));
                                                                            default:
                                return null;
                                }
                                })()} */}
                    {filteredSuperstars.map(superstar =>
                        <SuperstarBlock key={superstar.id} superstar={superstar} onClick={() => handleSuperstarClick(superstar)} />
                    )}
                </div>
            </div>
            {selectedSuperstar && selectedBrand && (
                <SuperstarPage superstar={selectedSuperstar} brand={selectedBrand} onClose={handleCloseSuperstarPage} />
            )}
        </div>
    );
}