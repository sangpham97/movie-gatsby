import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useStaticQuery, graphql } from "gatsby"
import MovieCard from "./MovieCard"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "orange",
    background: "black",
    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
    },
    width: "100%",
  },
}))

export default function RightList() {
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies(sort: { order: DESC, fields: views }, limit: 6) {
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
      <Typography variant="h5" className={classes.title}>
        phim xem nhiều
      </Typography>
      <span className={classes.rightList}>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} index={index} />
        ))}
      </span>
    </div>
  )
}
