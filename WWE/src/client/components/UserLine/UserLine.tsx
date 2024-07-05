import { useState } from "react";
import User from "../../types/user";
import styles from './UserLine.module.scss';

interface UserLineProps {
    user: User;
    onDelete: (id: number) => void;
    onUpdateMarketing: (id: number, newMarketingStatus: boolean) => void;
}

export default function UserLine({ user, onDelete, onUpdateMarketing }: UserLineProps) {
    const [isChecked, setIsChecked] = useState(user.marketing);

    const handleCheckboxChange = () => {
        const newMarketingStatus = !isChecked;
        onUpdateMarketing(user.id, newMarketingStatus);
        setIsChecked(newMarketingStatus);
    };

    function handleDelete() {
        if (window.confirm(`Are you sure you want to delete user ${user.first_name} ${user.last_name}?`)) {
            onDelete(user.id);
        }
    };

    return (
        <>
            <div key={user.id} className={styles.userLine}>
                <div className={styles.info}>
                    <div>
                        <strong>Name:</strong> {user.first_name} {user.last_name}
                    </div>
                    <div>
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div>
                        <strong>Marketing:</strong> {isChecked ? 'Subscribed' : 'Not subscribed'}
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </div>
                {user.id !== 1 ? (
                    <button className={styles.delete} onClick={handleDelete}>Delete</button>
                ) : (
                    <button className={styles.delete}>Admin</button>
                )}
            </div>
            <hr />
        </>
    );
}