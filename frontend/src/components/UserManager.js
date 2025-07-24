import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserManager = () => {
    const [users, setUsers] = useState([]);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');
    const [awardedPoints, setAwardedPoints] = useState(null);

    const fetchLeaderboard = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/leaderboard`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    };

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const handleAddUser = async () => {
        if (newUserName.trim()) {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, { name: newUserName });
                setNewUserName('');
                toast.success("User created successfully!");
                fetchLeaderboard();
            } catch (error) {
                console.error('Error adding user:', error);
            }
        }
    };

    const handleClaimPoints = async () => {
        if (!selectedUserId) return;
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/claim`, { userId: selectedUserId });
            setAwardedPoints(response.data.pointsClaimed);
            fetchLeaderboard();
        } catch (error) {
            setAwardedPoints(null);
            alert('Error claiming points');
        }
    };

    return (
       <>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">User Manager</h2>

            {/* Add New User */}
            <div className="flex mb-6">
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter new user name"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none"
                />
                <button
                    onClick={handleAddUser}
                    className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
                >
                    Add User
                </button>
            </div>

            {/* User Selection & Claim Points */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Claim Points</h3>
                <div className="flex items-center">
                    <select
                        value={selectedUserId}
                        onChange={e => setSelectedUserId(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none"
                    >
                        <option value="">-- Select User --</option>
                        {users.map(user => (
                            <option key={user._id} value={user._id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleClaimPoints}
                        disabled={!selectedUserId}
                        className={`px-4 py-2 rounded ${
                            selectedUserId
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        Claim Points
                    </button>
                </div>
                {awardedPoints !== null && (
                    <div className="mt-2 text-green-700 font-semibold">
                        Points Awarded: {awardedPoints}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserManager;