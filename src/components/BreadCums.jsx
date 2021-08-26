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

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="textPrimary">Xem phim</Link>
      {arrays.map((i, index) => (
        <Link color="textPrimary">{i}</Link>
      ))}
    </Breadcrumbs>
  )
}
