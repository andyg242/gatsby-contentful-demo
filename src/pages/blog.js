import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Background from '../img/home-bg.jpg';
const mastheadStyles = {
  backgroundImage: `url(${Background})`
}

const NewsBlog = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges;
  console.log(posts);
  posts.forEach(( post ) => { 
    console.log(post.node.title);
  })

  return (
    <Layout>
      <header class="masthead" style={ mastheadStyles }>
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Gatsby News Blog</h1>
                <span class="subheading">Some Blog Items</span>
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
                
                  <h2 class="post-title">
                    {post.node.title}
                  </h2>
                  <h3 class="post-subtitle">
                    {post.node.description.description}
                  </h3>
                
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
export default NewsBlog

export const pageQuery = graphql`
query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          publishDate
          tags
          description {
            description
          }
        }
      }
    }
  }
`

