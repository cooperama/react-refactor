import React from "react";
import Header from "../components/blog/Header";
import Article from "../components/blog/Article";
import Sidebar from "../components/blog/Sidebar";
import Comment from "../components/blog/Comment";

import "./Blog.css";

function Blog() {
  console.log("in blog.js");
  return (
    <div>
      <Header />
      <div className="wrap grid-wrapper">
        <Article />
        <Sidebar />
      </div>
      <Comment />
    </div>
  );
}

export default Blog;
