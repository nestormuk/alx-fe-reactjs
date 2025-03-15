import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react'

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};



export default function PostsComponent() {
  
    const { data, isLoading, isError, refetch } = useQuery ({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 5000,
        cacheTime: 300000,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>error fetching posts: {isError.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} style={{ marginBottom: '10px'}}>
                Refresh Posts
            </button>

            <ul>
                {data.slice(0,10).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

