import React from "react";
import "./Blog.scss";
function Blog() {
  return (
    <div className="blog-container" id="blog">
      <div className="section-header">
        <span>Blog</span>
      </div>
      <h2>Featured posts</h2>
      <table className="blog-posts">
        <tr>
          <th>Title</th>
          <th>Date</th>
        </tr>
        <tr className="table-row">
          <td className="post-title">
            <a href="#" alt="blog-link">
              Coming Soon
            </a>
          </td>
          <td className="post-date">TBD</td>
        </tr>
        <tr className="table-row">
          <td className="post-title">
            {" "}
            <a href="#" alt="blog-link">
              Coming Soon
            </a>
          </td>
          <td className="post-date">TBD</td>
        </tr>
        <tr className="table-row">
          <td className="post-title">
            {" "}
            <a href="#" alt="blog-link">
              Coming Soon
            </a>
          </td>
          <td className="post-date">TBD</td>
        </tr>
        <tr className="table-row">
          <td className="post-title">
            {" "}
            <a href="#" alt="blog-link">
              Coming Soon
            </a>
          </td>
          <td className="post-date">TBD</td>
        </tr>
      </table>
    </div>
  );
}

export default Blog;
