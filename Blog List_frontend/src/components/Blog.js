import React, { useState, useImperativeHandle } from "react";

const Blog = React.forwardRef((props, ref) => {
  // { title, url, likes, author, user }
  const [visible, setVisible] = useState(false);

  const hideWhenVisibleistrue = { display: visible ? "none" : "" };
  const showWhenVisibleisfalse = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  console.log("visible:", visible);
  return (
    <li className="blog" onClick={toggleVisibility}>
      <div style={{ backgroundColor: "lightblue", border: "1px solid blue",borderRadius:'20px',padding:'5px',margin:'5px',width:'fit-content' }}>
        <div style={hideWhenVisibleistrue}>
          {props.title} - {props.author} <br></br>
        </div>
        <div style={showWhenVisibleisfalse}>
          {props.title} - {props.author} <br></br>
          URL: {props.url} LIKES:{props.likes}
          {props.children}
        </div>
      </div>
    </li>
  );
});
// onClick={()=>alert(author)}
export default Blog;
