import React, { useEffect, useState } from 'react';
import RankingList from '../components/RankingList';
import UserManager from '../components/UserManager';
import { fetchUsers } from '../utils/api';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        };
        getUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
             <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
                User Ranking System
            </h1>
             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-10">
                <UserManager setUsers={setUsers} />
            </div>

            {/* Ranking List outside the card */}
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <RankingList users={users} />
            </div>
        </div>
    );
};

export default Home;