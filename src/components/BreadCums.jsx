import React from "react"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core"
import { useStaticQuery, graphql, navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
    background: "gray",
    padding: "4px 3px",
    borderRadius: 3,
    color: "orange",
    cursor: "pointer",
  },
}))

export default function Breadcrumb({ category }) {
  const classes = useStyles()
  const arrays = category.split(",")
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          title
          engName
          star
          category
          image {
            gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
            title
          }
        }
      }
    }
  `)
  const movies = data.allContentfulMovies.nodes
  // const arr = movies.map(movie => movie.category.split(","))
  // console.log(arr)

  const handleClick = (i, movies, e) => {
    e.preventDefault()
    const findMovie = movies.filter(movie =>
      movie.category.split(",").includes(i)
    )

    console.log(findMovie)
    navigate("/category", { state: { findMovie, i } })
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="textPrimary">Xem phim</Link>
      {arrays.map((i, index) => (
        <Link color="textPrimary" onClick={e => handleClick(i, movies, e)}>
          {i}
        </Link>
      ))}
    </Breadcrumbs>
  )
}
