import React, { useState } from 'react';
import { claimPointsAPI } from '../utils/api';

const ClaimPoints = ({ users, onPointsClaimed }) => {
    const [selectedUser, setSelectedUser] = useState('');

    const handleClaimPoints = async () => {
        if (selectedUser) {
            const response = await claimPointsAPI(selectedUser);
            if (response.success) {
                onPointsClaimed(response.updatedUser);
            } else {
                alert('Error claiming points. Please try again.');
            }
        } else {
            alert('Please select a user to claim points.');
        }
    };

    return (
        <div>
            <h2>Claim Points</h2>
            <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                <option value="">Select a user</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>
            <button onClick={handleClaimPoints}>Claim Points</button>
        </div>
    );
};

export default ClaimPoints;