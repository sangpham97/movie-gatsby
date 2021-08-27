import React from "react"
import {
  Button,
  Card,
  CardContent,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import GradeIcon from "@material-ui/icons/Grade"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    background: "#555",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  title: {
    color: "white",
    fontSize: "1rem",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detail: {
    color: "blue",
  },
  star: {
    color: "orange",
    marginLeft: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 6,
    right: 0,
  },
  button1: {
    flexFlow: 1,
    // marginRight: theme.spacing(3),
  },
  button2: {
    marginRight: theme.spacing(3),
  },
  media: {
    width: 310,
    height: 500,
    margin: theme.spacing(1, 1),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: 310,
    height: 500,
  },
}))

export default function SingleMovieLeft({
  actors,
  category,
  director,
  engName,
  episode,
  star,
  time,
  title,
  views,
  year,
  rating,
  image,
  Image,
  country,
}) {
  const classes = useStyles()

  const stars = []
  for (let i = 0; i < star; i++) {
    stars.push(i)
  }
  console.log(image)
  return (
    <Card className={classes.card}>
      <ImageListItem className={classes.wrapper}>
        <GatsbyImage image={Image} className={classes.media} />
        <ImageListItemBar
          className={classes.buttons}
          actionIcon={
            <>
              <IconButton>
                <Button
                  variant="contained"
                  color="success"
                  className={classes.button1}
                >
                  <a href="#trailer" style={{ textDecoration: "none" }}>
                    Trailer
                  </a>
                </Button>
              </IconButton>
              <IconButton>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button2}
                >
                  <Link
                    to={`/${image.title}/${episode}`}
                    style={{ textDecoration: "none" }}
                  >
                    Xem Phim
                  </Link>
                </Button>
              </IconButton>
            </>
          }
        />
      </ImageListItem>
      <CardContent>
        <Typography variant="h6" color="secondary" style={{}}>
          phim {title}
        </Typography>
        <Typography style={{ color: "white" }}>
          HD | {engName} / {title} ({year}) | Tập {episode} Vietsub
        </Typography>
        <Typography>
          <span className={classes.title}>đạo diễn:</span>
          <span className={classes.detail}>{director}</span>
        </Typography>
        <Typography>
          <span className={classes.title}>diễn viên</span>
          <span className={classes.detail}>{actors}</span>{" "}
        </Typography>
        <Typography>
          <span className={classes.title}>
            thời lượng: <span className={classes.detail}>{time} phút</span>{" "}
          </span>
        </Typography>
        <Typography>
          <span className={classes.title}>điểm IMDB:</span>
          <span className={classes.detail}>N/A</span>
        </Typography>
        <Typography>
          <span className={classes.title}>thể loại:</span>
          <span className={classes.detail}>{category}</span>{" "}
        </Typography>
        <Typography>
          <span className={classes.title}>
            quốc gia: <span className={classes.detail}>{country}</span>
          </span>
        </Typography>
        <Typography>
          <span className={classes.title}>
            năm sx : <span className={classes.detail}>{year}</span>
          </span>
        </Typography>
        <Typography>
          <span className={classes.title}>lượt xem:</span>
          <span className={classes.detail}>{views}</span>
        </Typography>
        <Typography className={classes.rating}>
          <span>
            <Button variant="contained" color="primary">
              {rating}
            </Button>
          </span>
          <span className={classes.star}>
            {stars.map((i, index) => (
              <GradeIcon />
            ))}
          </span>
        </Typography>
      </CardContent>
    </Card>
  )
}
