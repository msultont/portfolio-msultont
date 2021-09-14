/* eslint-disable no-nested-ternary */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProjectImg = ({ filename, alt, type }) => (
  <StaticQuery
    query={graphql`
      query {
        imagesBig: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        imagesSmall50: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 50, quality: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        imagesSmall20: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 25) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image =
        type === 'big'
          ? data.imagesBig.edges.find((n) => n.node.relativePath.includes(filename))
          : type === 'small50'
          ? data.imagesSmall50.edges.find((n) => n.node.relativePath.includes(filename))
          : data.imagesSmall20.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageInput =
        type === 'big' ? image.node.childImageSharp.fluid : image.node.childImageSharp.fixed;
      return type === 'big' ? (
        <Img alt={alt} fluid={imageInput} />
      ) : (
        <Img alt={alt} fixed={imageInput} />
      );
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
};

export default ProjectImg;
