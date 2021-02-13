import React from 'react'
import Layout from '../components/layout'
import Gallery from 'react-grid-gallery'

import Background from '../img/about-bg.jpg';
const mastheadStyles = {
    backgroundImage: `url(${Background})`
  }


const IMAGES =
[{
        src: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
        thumbnail: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "Caption goes here"
},
{
        src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        thumbnail: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Caption goes here"
},

{
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Caption goes here"
},

{
        src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80",
        thumbnail: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1911&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Caption goes here"
},

{
        src: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2044&q=80",
        thumbnail: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2044&q=80",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Caption goes here"
}]


export default () => (
    <Layout>
        <header class="masthead" style={mastheadStyles}>
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading">
                <h1>Image Gallery</h1>
                <span class="subheading"></span>
                </div>
            </div>
            </div>
        </div>
        </header>

        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <Gallery images={IMAGES}/>
            </div>
        </div>
        </div>

    
    </Layout>
)