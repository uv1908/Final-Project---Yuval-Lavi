import { useEffect, useState } from 'react';
import User from '../../types/user';
import styles from './Users.module.scss';
import UserLine from '../../components/UserLine/UserLine';

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/users/all')

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const usersData = await response.json();

                if (usersData && Array.isArray(usersData.users)) {
                    setUsers(usersData.users);
                } else {
                    throw new Error('Users data is not an array');
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    async function handleDelete(id: number) {
        try {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete user');
            }

        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    async function handleUpdate(id: number, newMarketingStatus: boolean) {
        try {
            const response = await fetch(`/api/users/${id}/marketing`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ marketing: newMarketingStatus ? 'true' : 'false' }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update marketing status');
            }
    
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === id ? { ...user, marketing: newMarketingStatus } : user
                )
            );
        } catch (error) {
            console.error('Error updating marketing status:', error);
        }
    }

    return (
        <div className={styles.usersDiv}>
            {users.map(user => 
                <UserLine key={user.id} user={user} onDelete={handleDelete} onUpdateMarketing={handleUpdate} />
            )}
        </div>
    );
}
