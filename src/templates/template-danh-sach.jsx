import { Grid, Paper } from "@material-ui/core"
import React from "react"
import CateMovie from "../components/CateMovie"
import Layout from "../components/layout"
import Menu from "../components/Menu"

export default function AllTypeMovie({ location }) {
  const AllMovie = location.state.findMoviesAll
  const type = AllMovie[0].type
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
          {AllMovie.map((movie, index) => {
            return <CateMovie movie={movie} key={index} />
          })}
        </Grid>
      </div>
    </Layout>
  )
}
