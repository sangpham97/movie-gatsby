import React from "react"
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1, 0),
    height: "90%",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      margin: "3px 0",
    },
  },
}))

export default function TypeMovie({ item, index }) {
  const classes = useStyles()
  const Image = getImage(item.image)

  return (
    <Grid item md={4} sm={4} xs={6} key={index}>
      <Link to={item.image.title} style={{ textDecoration: "none" }}>
        <Card className={classes.card}>
          <GatsbyImage image={Image} />
          <CardContent>
            <Typography
              style={{
                textTransform: "capitalize",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              style={{
                textTransform: "capitalize",
                fontSize: "0.9rem",
                height: "100%",
              }}
              variant="p"
            >
              {item.engName} ({item.year})
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
