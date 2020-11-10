import Axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "../Component/CommentList";
function CommentPage(props) {
  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComments] = useState(true);
  // const
  const { post } = props.location.state;
  // parameter id
  const { id } = props.match.params;
  const getComments = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
        setLoadComments(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      {
        <div>
          <h2>{("title:", post.title)}</h2>
          <h3>{post.body}</h3>
          <CommentList comments={comments} loadComments={loadComments} />
        </div>
      }
    </div>
  );
}

export default CommentPage;
