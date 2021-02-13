import React from 'react'
//import { Link } from 'gatsby'
//import Header from '../components/header'
import NavBar from '../components/navbar'
import GatsbyLogo from '../img/logos/Gatsby_Monogram.png';
import GraphQlLogo from '../img/logos/GraphQL_Logo.png';
import ContentfulLogo from '../img/logos/Contentful_Logo.png';


export default props =>   (
  <>
  <NavBar></NavBar>


  {props.children}

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center footerlogos">
            <li class="list-inline-item">
              <a href="http://gatsbyjs.com">
                <img src={GatsbyLogo} alt="Gatsby Logo" />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://graphql.org/">
                <img src={GraphQlLogo} alt="GraphQL Logo" />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.contentful.com/">
                <img src={ContentfulLogo} alt="Contentful Logo" />
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Gatsby News 2020</p>
        </div>
      </div>
    </div>
  </footer>
  </>
)