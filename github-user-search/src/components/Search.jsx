import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null); 

        try {
            const data = await fetchUserData(username); 
            setUserData(data);
        } catch (err) {
            setError('Looks like we cant find the user you are looking for!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>GitHub User Search</h2>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt="Avatar" />
                    <h3>{userData.name || "No Name Provided"}</h3>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        login
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
