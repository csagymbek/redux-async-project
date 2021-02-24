import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./posts";

export const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return posts.map(({ title, id }) => <h3 key={id}>{title}</h3>);
  };

  return <div>{renderPosts()}</div>;
};
