import { Grid, makeStyles } from "@material-ui/core"
import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import BreadCum from "../components/BreadCums"
import SingleMovieLeft from "../components/SingleMovieLeft"
import MovieDesc from "../components/MovieDesc"
import Trailer from "../components/Trailer"
import RightList from "../components/RightList"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "capitalize",
    background: "#5555",
  },
}))

const SinglePage = ({ data }) => {
  const classes = useStyles()
  const movie = data.contentfulMovies
  const image = getImage(movie.image)
  return (
    <Layout>
      <div className={classes.root}>
        <Menu />
        <Grid container spacing="1">
          <Grid item md={8}>
            <BreadCum category={movie.category} />
            <SingleMovieLeft {...movie} image={image} />
            <MovieDesc desc={movie.desc.desc} image={image} />
            <Trailer
              trailer={movie.trailer}
              engName={movie.engName}
              title={movie.title}
            />
          </Grid>
          <Grid item md={4}>
            <RightList />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleMovie($title: String) {
    contentfulMovies(image: { title: { eq: $title } }) {
      actors
      category
      director
      engName
      episode
      image {
        gatsbyImageData(layout: CONSTRAINED)
        title
      }
      star
      time
      title
      trailer
      views
      year
      rating
      desc {
        desc
      }
      country
    }
  }
`

export default SinglePage
