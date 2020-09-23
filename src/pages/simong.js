import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from '../@gatsbystorefront/gatsby-theme-storefront-shopify/components/Layout'

export default ({ data }) => (
    <Layout>
  <div
    style={{
      padding: 32,
    }}
  >
    <h1>Simon G</h1>
    <section
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(300px, 1fr) )`,
        gridGap: 16,
        justifyContent: "space-between",
      }}
    >
      {data.allPost.nodes.map(post => (
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 15,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <h2>{post.name}</h2>
          <p>{post.description}</p>
          <Img
            fluid={post.remoteImage.childImageSharp.fluid}
            alt={post.name}
            style={{
              maxHeight: 600,
            }}
          />

          <br />
  {/* {post.variants.description} */}
        </div>
      ))}
    </section>
  </div>
  
  </Layout>
  
)

export const query = graphql`
  {
    allPost {
      nodes {
        id
        slug
        description
        name
        available_metal
        remoteImage {
          id
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        variants {
          id
          description
        }
      }
    }
  }
`
