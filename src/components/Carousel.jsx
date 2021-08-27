import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "react-material-ui-carousel"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    position: "relative",
  },

  img: {
    height: 400,
    width: "100%",
  },
  buttons: {
    position: "absolute",
  },
}))

export default function CarouselImage() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          engName
        }
      }
    }
  `)

  const Data = data.allContentfulMovies.nodes

  return (
    <div className={classes.root}>
      <Carousel animation="slide">
        {Data.map(item => {
          const image = getImage(item.image)
          return (
            <GatsbyImage
              className={classes.img}
              image={image}
              alt={item.engName}
            />
          )
        })}
      </Carousel>
    </div>
  )
}
