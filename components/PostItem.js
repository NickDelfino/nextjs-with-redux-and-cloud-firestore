import React from 'react';

const postItem = ({ post }) => (
    <div className='post-item'>
      <p className='post-text'>
        {post.post}
      </p>
      <style jsx>
        {`
          .post-text{
            margin: 0;
            text-align: left;
            word-wrap: break-word;
          }

           .post-item{
              width: 92%;
              max-width: 600px;
              padding: 10px;
              margin-left: 10px;
              margin-right: 10px;
              margin-top: 10px;
              background: white;
              box-shadow: 1px 1px 1px black;
           }
        `}
      </style>
    </div>
);

export default postItem;