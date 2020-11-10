import React from "react";
import { Spinner } from "react-bootstrap";
import Comment from "./Comment";
function CommentList({ comments, loadComments }) {
  return (
    <div>
      {loadComments ? (
        <Spinner />
      ) : (
        comments.map((el) => <Comment comment={el} />)
      )}
    </div>
  );
}

export default CommentList;
