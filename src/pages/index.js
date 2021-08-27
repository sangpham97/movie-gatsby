import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import { Grid } from "@material-ui/core"
import RightList from "../components/RightList"
import TypeMovies from "../components/TypeMovies"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber"
import LocalMoviesIcon from "@material-ui/icons/LocalMovies"
import { makeStyles } from "@material-ui/core"
import { graphql } from "gatsby"
import CarouselImage from "../components/Carousel"

const useStyles = makeStyles(theme => ({
  root: {
    background: "gray",
    padding: "0 4px",
  },
}))

const IndexPage = ({ data }) => {
  const newMovies = data.NewMovies.nodes
  const seriesMovies = data.SeriesMovies.nodes
  const cinemaMovies = data.CinemaMovies.nodes
  console.log(data)
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <Menu />
        <Grid container spacing="1">
          <Grid item md={8} sm={12}>
            <CarouselImage />
            <TypeMovies
              Genre="phim mới đề cử"
              icon={<WhatshotIcon />}
              Data={newMovies}
            />
            <TypeMovies
              Genre="phim bộ mới cập nhật"
              icon={<ConfirmationNumberIcon />}
              Data={seriesMovies}
            />
            <TypeMovies
              Genre="phim chiếu rạp"
              icon={<LocalMoviesIcon />}
              Data={cinemaMovies}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <RightList />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    NewMovies: allContentfulMovies(filter: { type: { eq: "new" } }, limit: 3) {
      nodes {
        engName
        image {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
          title
        }
        title
        year
        type
      }
    }
    SeriesMovies: allContentfulMovies(
      filter: { type: { eq: "series" } }
      limit: 3
    ) {
      nodes {
        engName
        image {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
          title
        }
        title
        year
        type
      }
    }
    CinemaMovies: allContentfulMovies(
      filter: { type: { eq: "cinema" } }
      limit: 3
    ) {
      nodes {
        engName
        image {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
          title
        }
        title
        year
        type
      }
    }
  }
`

export default IndexPage
