import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  article: {
    background: "black",
  },
  button: {
    color: "gray",
    fontSize: "1rem",
    textTransform: "uppercase",
  },
  card: {
    padding: theme.spacing(1, 1),
    background: "#5555",
  },
  poster: {
    width: "100%",
  },
}))

export default function MovieDesc({ desc, image }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.article}>
        <Button startIcon={<BookmarkOutlinedIcon />} className={classes.button}>
          Nội dung phim
        </Button>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography>{desc}</Typography>
        </CardContent>
        <GatsbyImage image={image} className={classes.poster} />
      </Card>
    </div>
  )
}
