import React from 'react';
import Article from './Article';
import articles from '../../articleData';

const articleComponents = articles.map((articleObj) => {
  return <Article 
    key={Date.now()} 
    src={articleObj.src} 
    alt={articleObj.alt} 
    title={articleObj.title} 
    />
})

const Archive = (props) => {
  return (
    <div>
      <h2>From the Archive</h2>
      <div class="grid-wrapper articles">
        {articleComponents}
      </div>
    </div>
  )
}

export default Archive;