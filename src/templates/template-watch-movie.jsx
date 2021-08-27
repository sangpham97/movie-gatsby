import { Grid, makeStyles } from "@material-ui/core"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Menu from "../components/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  video: {
    width: "100%",
  },
}))

export default function WatchMovie({ data }) {
  const Data = data.contentfulMovies
  const classes = useStyles()
  return (
    <Layout>
      <Menu />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item md={10} sm={12} xs={12}>
          <iframe
            src={Data.movie}
            alt={Data.image.title}
            title={Data.image.title}
            height="400"
            className={classes.video}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetMovie($title: String) {
    contentfulMovies(image: { title: { eq: $title } }) {
      movie
      image {
        title
      }
    }
  }
`
