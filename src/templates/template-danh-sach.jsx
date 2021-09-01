import { Grid, Paper } from "@material-ui/core"
import React from "react"
import CateMovie from "../components/CateMovie"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MenuMovie from "../components/Menu"

export default function AllTypeMovie({ data }) {
  const movies = data.allContentfulMovies.nodes
  const type = movies[0].type

  return (
    <Layout>
      <MenuMovie />
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
          {movies.map((movie, index) => {
            return <CateMovie movie={movie} key={index} />
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetType($type: String) {
    allContentfulMovies(filter: { type: { eq: $type } }) {
      nodes {
        engName
        title
        year
        image {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 0.9)
          title
        }
        type
      }
    }
  }
`
