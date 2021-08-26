import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
// import { movieRight } from "../utils/utils"
import { useStaticQuery, graphql } from "gatsby"
import MovieCard from "./MovieCard"

const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
})

export default function RightList() {
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          image {
            gatsbyImageData(layout: FIXED, height: 150, width: 120)
            title
          }
          star
          views
          title
        }
      }
    }
  `)

  const movies = data.allContentfulMovies.nodes
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        style={{
          textTransform: "capitalize",
          textAlign: "center",
          color: "orange",
          background: "black",
        }}
      >
        phim xem nhiều
      </Typography>
      {movies.map((movie, index) => (
        <MovieCard movie={movie} index={index} />
      ))}
    </div>
  )
}
