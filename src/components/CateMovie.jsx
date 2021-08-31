import React from "react"
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GradeIcon from "@material-ui/icons/Grade"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
    height: "90%",
    position: "relative",
    textDecoration: "none",
  },
}))

export default function CateMovie({ movie }) {
  const classes = useStyles()
  const image = getImage(movie.image)
  const stars = []
  for (let i = 0; i < movie.star; i++) {
    stars.push(i)
  }
  return (
    <Grid item md={3} sm={6} xs={6}>
      <Card className={classes.card}>
        <Link
          to={`/${movie.image.title}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <GatsbyImage image={image} />
          <CardContent
            style={{ textTransform: "capitalize", fontSize: "0.5rem" }}
          >
            <Typography>{movie.title}</Typography>
            <Typography>{movie.engName}</Typography>
            <div>
              {stars.map(i => (
                <GradeIcon style={{ color: "orange" }} />
              ))}
            </div>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  )
}
