import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); // Sample API
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setLoading(false);
    }
  };

  return (
    <div className="blog-container">
      <h2>Latest Blog Posts</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
