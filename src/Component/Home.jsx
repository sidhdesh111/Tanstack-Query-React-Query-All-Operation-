import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "70%", margin: "auto", paddingBlock: "4rem" }}>
      <h2
        style={{
          paddingBlock: "40px",
          textAlign: "center",
          lineHeight: "3.2rem",
        }}
      >
        In This You Will Learn About How TanStack Is going to be GameChanger
        when we want to Implement Fetching data Request form Server
      </h2>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <li style={{fontSize:"2rem", fontWeight:"700", fontFamily:"sans-serif"}}>
            <Link to="/Infinite">Infinite Scroll</Link>
          </li>
          <li  style={{fontSize:"2rem", fontWeight:"700", fontFamily:"sans-serif"}}>
            <Link to="/pagination_2">Pagination</Link>
          </li>
          <li  style={{fontSize:"2rem", fontWeight:"700", fontFamily:"sans-serif"}}>
            <Link to="/fetchrq">Curd Operation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
