import React from "react";
import { Spinner } from "react-bootstrap";
import Post from "./Post";
function PostList({ posts, loadPosts }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadPosts ? (
        <Spinner animation="border" variant="success" />
      ) : (
        posts.map((el) => <Post post={el} />)
      )}
    </div>
  );
}

export default PostList;
