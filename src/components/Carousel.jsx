import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "react-material-ui-carousel"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    position: "relative",
  },
  img: {
    height: 400,
    width: "100%",
    borderRadius: 3,
    position: "relative",
  },
  title: {
    position: "absolute",
    transform: "translateY(80%)",
    top: 0,
    right: 30,
    fontSize: "1rem",
    color: "red",
  },
}))

export default function CarouselImage() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies(
        sort: { order: DESC, fields: image___createdAt }
        limit: 6
      ) {
        nodes {
          image {
            gatsbyImageData(layout: CONSTRAINED)
            title
          }
          title
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
            <Link
              to={`/${item.image.title}`}
              style={{
                textDecoration: "none",
                fontSize: "1.6rem",
                textTransform: "uppercase",
              }}
            >
              <GatsbyImage
                className={classes.img}
                image={image}
                alt={item.engName}
              />
              <Typography className={classes.title}>{item.title}</Typography>
            </Link>
          )
        })}
      </Carousel>
    </div>
  )
}
