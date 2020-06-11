import React from "react";
import "./Blog.scss";
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

      {/* <table className="blog-posts">
        <div className="post">
          <tr className="table-row">
            <td className="post-title">
              <div className="title-wrapper">
                <a
                  className="title"
                  href="https://foobarbananablog.com/create-and-deploy-blog/"
                  alt="blog-link"
                  target="_blank"
                >
                  Create and Deploy a Blog Using Gatsby and Vercel
                </a>
              </div>
            </td>
            <div className="date-wrapper">
              <td className="post-date">June 03, 2020</td>
            </div>
          </tr>
        </div>
        <div className="post">
          <tr className="table-row">
            <td className="post-title">
              <a
                className="title"
                href="https://foobarbananablog.com/create-and-deploy-blog/"
                alt="blog-link"
                target="_blank"
              >
                Coming Soon
              </a>
            </td>
            <div className="date-wrapper">
              <td className="post-date">TBD</td>
            </div>
          </tr>
        </div>
        <div className="post">
          <tr className="table-row">
            <td className="post-title">
              <a
                className="title"
                href="https://foobarbananablog.com/create-and-deploy-blog/"
                alt="blog-link"
                target="_blank"
              >
                Coming Soon
              </a>
            </td>
            <div className="date-wrapper">
              <td className="post-date">TBD</td>
            </div>
          </tr>
        </div>
      </table> */}
    </div>
  );
}

export default Blog;
