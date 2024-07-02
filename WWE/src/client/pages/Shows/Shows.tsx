import { useEffect, useState } from 'react';
import showsHeader from '../../assets/shows_header.png';
import Brand from '../../types/brand';
import styles from './Shows.module.scss';
import ShowBlock from '../../components/ShowBlock/ShowBlock';

export default function Shows() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [brandsResponse] = await Promise.all([
                    fetch('/api/brands')
                ]);

                if (!brandsResponse.ok) {
                    throw new Error(`Failed to fetch data: ${brandsResponse.statusText}`);
                }

                const brandsData = await brandsResponse.json();
                console.log(brandsData);

                if (brandsData && Array.isArray(brandsData.brands)) {
                    setBrands(brandsData.brands);
                } else {
                    throw new Error('Brands data is not an array');
                }
            } catch (err: any) {
                setError(`Failed to fetch data: ${err.message}`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <img className={styles.headerImg} src={showsHeader} alt='Shows Header' />
            <div className={styles.showsDiv}>
                <h2>WWE: <span>Premier Shows</span></h2>
                <div className={styles.showsList}>
                    {brands.filter(brand => brand.id == 1 || brand.id == 2).map(brand => 
                        <ShowBlock key={brand.id} brand={brand} />
                    )}
                </div>
            </div>
        </div>
    )
}