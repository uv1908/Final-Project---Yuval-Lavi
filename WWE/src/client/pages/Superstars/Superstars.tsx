import { useEffect, useState } from 'react';
import Superstar from '../../../server/database/superstar';
import SuperstarBlock from '../../components/SuperstarBlock/SuperstarBlock';

export default function Superstars() {
    const [superstars, setSuperstars] = useState<Superstar[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSuperstars() {
            try {
                const response = await fetch('/api/superstars');
                if (!response.ok) {
                    throw new Error('Failed to fetch superstars');
                }
                const data = await response.json();
                console.log(data);
                if (data && Array.isArray(data.superstars)) {
                    setSuperstars(data.superstars);
                } else {
                    throw new Error('Data is not an array');
                }
            } catch (err) {
                setError('Failed to fetch superstars');
            } finally {
                setLoading(false);
            }
        };

        fetchSuperstars();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Superstars</h1>
            <div style={{display: "flex"}}>
                {superstars.map(superstar => (
                    <SuperstarBlock superstar={superstar} />
                ))}
            </div>
        </div>
    );
}