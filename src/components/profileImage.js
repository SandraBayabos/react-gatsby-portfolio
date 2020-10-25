import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import {Image} from "react-bootstrap"

const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "face.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <Image src={data.placeholderImage.childImageSharp.fluid.src}
      roundedCircle={true}
    />
  )
}

export default ProfileImage
