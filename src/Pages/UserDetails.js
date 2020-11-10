import Axios from "axios";
import React, { useEffect, useState } from "react";
import PostList from "../Component/PostList";
import SingleUser from "../Component/SingleUser";
function UserDetails(props) {
  const [user, setUser] = useState({});
  const [loadUser, setLoadUser] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loadPosts, setLoadPosts] = useState(true);
  const { id } = props.match.params;

  const getUser = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoadUser(false);
      })
      .catch((err) => console.log(err));
  };

  const getPosts = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => {
        setPosts(res.data);
        setLoadPosts(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
    getPosts();
  }, []);
  return (
    <div>
      <SingleUser user={user} loadUser={loadUser} />
      <PostList posts={posts} loadPosts={loadPosts} />
    </div>
  );
}

export default UserDetails;
