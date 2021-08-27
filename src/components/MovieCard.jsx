import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import VisibilityIcon from "@material-ui/icons/Visibility"
import CardContent from "@material-ui/core/CardContent"
import GradeIcon from "@material-ui/icons/Grade"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    borderBottom: "1px solid #555",
    background: "#5555",
  },
  media: {
    padding: "0 4px",
  },
  top: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: "0.7rem",
    fontWeight: 600,
  },
  star: {
    color: "orange",
    margin: "3px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}))

export default function MovieCard({ movie, index }) {
  const classes = useStyles()
  const Image = getImage(movie.image)
  const stars = []
  for (let i = 0; i < movie.star; i++) {
    stars.push(i)
  }

  return (
    <Card className={classes.card} key={index}>
      <CardActionArea className={classes.top}>
        <Link to={`/${movie.image.title}`}>
          <GatsbyImage image={Image} className={classes.media} />
        </Link>
        <CardContent>
          <Link to={`/${movie.image.title}`} style={{ textDecoration: "none" }}>
            <Typography gutterBottom className={classes.title}>
              {movie.title}
            </Typography>
          </Link>
          <Typography gutterBottom variant="p" className={classes.view}>
            <VisibilityIcon style={{ fontSize: "0.9rem", margin: "0 3px" }} />
            <span>{movie.views} lượt xem</span>
          </Typography>
          <div>
            {stars.map((star, index) => (
              <GradeIcon className={classes.star} />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
