import React from 'react';
import Article from './Article';


function ArticleList({posts}) {
  return (
    <div>
      <main>
        {posts.map((post)=>(
          <Article key={post.id} post={post} />
        ))}

      </main>
        
    </div>
  )
}

export default ArticleList;