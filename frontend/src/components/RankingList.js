import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RankingList = () => {
    const [users, setUsers] = useState([]);

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

    return (
       <>
            <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">Leaderboard</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3 border-b">Rank</th>
                            <th className="px-4 py-3 border-b">Name</th>
                            <th className="px-4 py-3 border-b">Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 border-b">{user.rank}</td>
                                <td className="px-4 py-3 border-b font-medium">{user.name}</td>
                                <td className="px-4 py-3 border-b">{user.totalPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RankingList;