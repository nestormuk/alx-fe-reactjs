import React, { useState, useEffect, useCallback } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle search with debounce effect
  const handleSearch = useCallback(async () => {
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchAdvancedUserData(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("No users found. Try different criteria.");
    } finally {
      setLoading(false);
    }
  }, [username, location, minRepos]);

  // Auto-fetch results when input changes (Debounced)
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 500); // Wait 500ms after typing

    return () => clearTimeout(delaySearch);
  }, [username, location, minRepos, handleSearch]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">GitHub User Search</h2>

      {/* Search Form */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSearch(); }} 
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="mt-4 text-blue-600 text-center">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div 
              key={user.id} 
              className="p-4 border rounded shadow flex items-center space-x-4"
            >
              <img 
                src={user.avatar_url} 
                alt="Avatar" 
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.login}</h3>
                <p className="text-gray-600">📍 {user.location || "Not available"}</p>
                <p className="text-gray-600">📦 {user.public_repos} Repositories</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🔗 View Profile
                </a>
              </div>
            </div>
          ))
        ) : (
          !loading && !error && (
            <p className="mt-4 text-center text-gray-600">No users found. Try refining your search.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
