import React from "react";
import "./Blog.scss";
import { IoIosArrowForward } from "react-icons/io";
function Blog() {
  return (
    <div className="blog-container" id="blog">
      <div className="section-header">
        <span>Blog Posts</span>
      </div>
      <div className="blog-content">
        {/* Blog Post #1 */}
        <div className="blog-post">
          <h3 className="title">
            <a
              className="title-link"
              href="https://foobarbananablog.com/create-and-deploy-blog/"
              alt="blog-link"
              target="_blank"
            >
              Coming Soon
            </a>
          </h3>
          <h5 className="post-date">TBD</h5>
        </div>
        {/* Blog Post #2 */}
        <div className="blog-post">
          <h3 className="title">
            <a
              className="title-link"
              href="https://foobarbananablog.com/create-and-deploy-blog/"
              alt="blog-link"
              target="_blank"
            >
              Coming Soon
            </a>
          </h3>
          <h5 className="post-date">TBD</h5>
        </div>
        {/* Blog Post #3 */}
        <div className="blog-post">
          <h3 className="title">
            <a
              className="title-link"
              href="https://foobarbananablog.com/create-and-deploy-blog/"
              alt="blog-link"
              target="_blank"
            >
              Coming Soon
            </a>
          </h3>
          <h5 className="post-date">TBD</h5>
        </div>

        {/* Blog Post #4 */}
        <div className="blog-post">
          <h3 className="title">
            <a
              className="title-link"
              href="https://foobarbananablog.com/create-and-deploy-blog/"
              alt="blog-link"
              target="_blank"
            >
              Create and Deploy a Blog Using Gatsby and Vercel
            </a>
          </h3>
          <h5 className="post-date">June 03, 2020</h5>
        </div>
      </div>
      <div className="btn-wrapper">
        <a
          className="button-link"
          href="https://foobarbananablog.com/"
          alt="button-link"
          target="_blank"
        >
          <span className="view-all-span"></span>View All
          <IoIosArrowForward size={12.5} />
        </a>{" "}
      </div>
    </div>
  );
}

export default Blog;
