import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.tmdbSlice);

  return <div>Home</div>;
};

export default Home;
