import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Gallery = () => {

  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        nodes {
          id
          childImageSharp {
            fixed(width: 150, height: 360) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              originalName
            }
          }         
        }
      }
    }    
  `)

  return (    
    <section className="folio-page">
      <h2 className="heading--secondary center-text margin-bottom-big">Portfolio</h2>
      <div className="row">
        {data.images.nodes.map(image => (
          <div className="col-1-of-4">       
            <div className="center-text feature__box">
              <Img className="margin-bottom-meduim" key={image.id} fixed={image.childImageSharp.fixed} />
              <p className="feature__box--text">
                {image.childImageSharp.fluid.originalName}
              </p>
            </div>
          </div>                      
        ))}
      </div>            
    </section>
  )  
}

export default Gallery;






