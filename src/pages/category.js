import React from "react"
import Layout from "../components/layout"
import CateMovie from "../components/CateMovie"
import { Grid, Typography } from "@material-ui/core"

export default function Category({ location }) {
  const cateMovies = location.state.findMovie
  const genre = location.state.i
  console.log(cateMovies)

  return (
    <Layout>
      <Typography variant="h5" align="center" style={{ marginTop: 10 }}>
        Phim thể loại {genre}
      </Typography>
      <Grid container spacing="1" style={{ marginTop: 10 }}>
        {cateMovies.map(movie => {
          return <CateMovie movie={movie} />
        })}
      </Grid>
    </Layout>
  )
}
