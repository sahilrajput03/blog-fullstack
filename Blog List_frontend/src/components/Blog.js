import React, { useState } from "react";

const Blog = (props) => {
  // { title, url, likes, author, user }
  const [visible, setVisible] = useState(false);

  // const hideWhenVisibleistrue = { display: visible ? "none" : "" };
  const showWhenVisibleisfalse = { display: visible ? "" : "none" };
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <li className="blog">
      <div
        style={{
          backgroundColor: "lightblue",
          border: "1px solid blue",
          borderRadius: "20px",
          padding: "5px",
          margin: "5px",
          width: "fit-content",
        }}
      >
        <div onClick={toggleVisibility}>
          {props.title} - {props.author} <br></br>
        </div>
        {/* <div style={hideWhenVisibleistrue}>
        </div> */}
        <div style={showWhenVisibleisfalse}>
          URL: {props.url} LIKES:{props.likes}
          <button
            style={{
              backgroundColor: "lightblue",
              border: "1px solid blue",
              borderRadius: "20px",
              padding: "5px",
              margin: "5px",
              width: "fit-content",
              outline: "0",
            }}
            onClick={props.likePost}
          >
            Click to like
          </button>
        </div>
      </div>
    </li>
  );
};
// onClick={()=>alert(author)}
export default Blog;
