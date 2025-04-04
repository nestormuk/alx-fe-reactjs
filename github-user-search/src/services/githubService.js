import axios from "axios";

const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com/search/users?q";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = [];
    if (username) query.push(`${username} in:login`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    if (query.length === 0) {
      throw new Error("Please enter at least one search criteria.");
    }

    const response = await axios.get(`${GITHUB_API_URL}?q=${query.join("+")}`);

    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch user data");
  }
};
