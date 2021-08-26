import React from "react"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Link } from "@material-ui/core"
import TypeMovie from "./TypeMovie"
import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
    borderTop: "2px solid yellow",
  },
  tabs: {
    background: "black",
    display: "fex",
    alignItems: "center",
    justifyItems: "center",
    padding: theme.spacing(0, 2),
  },
  genre: {
    color: "orange",
    flexGrow: 1,
    textTransform: "uppercase",
  },
  genreWrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },
  all: {
    color: "yellow",
    cursor: "pointer",
  },
  card: {
    margin: theme.spacing(1, 0),
  },
}))

export default function TypeMovies({ Genre, Data, icon }) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          type
          image {
            gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
            title
          }
          title
          engName
        }
      }
    }
  `)
  const allTypeMovies = data.allContentfulMovies.nodes

  console.log(Data[0].type)

  const handleClick = (e, allTypeMovies, Data) => {
    e.preventDefault()
    const findMoviesAll = allTypeMovies.filter(
      movie => movie.type === Data.type
    )
    console.log(findMoviesAll)
    navigate(`/danh-sach/${findMoviesAll[0].type}`, {
      state: { findMoviesAll },
    })
  }

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          indicatorColor="primary"
          className={classes.tabs}
          aria-label="disabled tabs example"
        >
          <Link className={classes.genre}>
            <div className={classes.genreWrapper}>
              <span>{icon}</span>
              <span>{Genre}</span>
            </div>
          </Link>
          <Link
            className={classes.all}
            onClick={e => handleClick(e, allTypeMovies, Data[0])}
          >
            Xem tất cả
          </Link>
        </Tabs>
      </Paper>
      <Grid container spacing="1">
        {Data.map((item, index) => (
          <>
            <TypeMovie item={item} index={index} />
          </>
        ))}
      </Grid>
    </div>
  )
}
