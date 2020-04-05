import React from 'react'
const Blog = ({ title,url,likes,author,user }) => (
  <li className='blog'>
    {/* {title}|| URL:{url}||LIKES:{likes}||AUTHOR:{author}||USER:{user} */}
    {title} - {author}
  </li>
)

export default Blog