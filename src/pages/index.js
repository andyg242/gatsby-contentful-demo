import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Background from '../img/home-bg.jpg';
const mastheadStyles = {
  backgroundImage: `url(${Background})`
}

const NewsIndex = ({ data }) => {
  const posts = data.allContentfulNewsItem.nodes;
  console.log(posts);
  posts.forEach(( post ) => { 
    console.log(post.headline);
  })

  return (
    <Layout>
      <header class="masthead" style={ mastheadStyles }>
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Gatsby News</h1>
                <span class="subheading">A simple example of Gatsby using Contentful</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">

            {posts.map(post => (
              <div class="post-preview">
                  <img className  ="hpblogimg" src={post.unsplashImageUrl} alt="{post.title}"/>
                  <h2 class="post-title">
                    {post.title}
                  </h2>
                  <h3 class="post-subtitle">
                    {post.headline}
                  </h3>
                  <p>
                    {post.summary.summary}
                  </p>
                
                <p class="post-meta">Posted by &nbsp;
                  <a href="/about">Me</a><br />
                  on September 24, 2019</p>
              </div>      
            ))}
            
          </div>
        </div>
      </div>

      <hr></hr>
    </Layout>             
  )
	
}
export default NewsIndex

export const pageQuery = graphql`
  query NewsQuery {
      allContentfulNewsItem {
      nodes {
        headline
        title
        unsplashImageUrl
        summary {
          summary
        }
      }
    }
  }
`

