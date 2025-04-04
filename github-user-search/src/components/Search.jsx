import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">GitHub User Search</h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
            <h3 className="font-semibold">{user.login}</h3>
            <p className="text-gray-600">Location: {user.location || "N/A"}</p>
            <p className="text-gray-600">Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
