import { Grid, Paper } from "@material-ui/core"
import React from "react"
import CateMovie from "../components/CateMovie"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import { graphql } from "gatsby"

export default function AllTypeMovie({ location, data }) {
  const type = typeof window !== `undefined` ? location.state.type : null

  const movies = data.allContentfulMovies.nodes
  const TypeMovies = movies.filter(movie => movie.type === type)

  return (
    <Layout>
      <Menu />
      <div style={{ marginTop: "20px" }}>
        <Paper
          style={{
            padding: "5px 8px",
            backgroundColor: "gray",
            textTransform: "uppercase",
            color: "purple",
          }}
        >
          {type === "series"
            ? "Danh sách phim bộ"
            : type === "cinema"
            ? "Danh sách phim chiếu rạp"
            : "Danh sách phim Mới"}
        </Paper>
        <Grid container spacing="2">
          {TypeMovies.map((movie, index) => {
            return <CateMovie movie={movie} key={index} />
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulMovies {
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
