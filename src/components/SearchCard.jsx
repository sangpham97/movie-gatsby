import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "capitalize",
    border: "1px solid #5555",
  },
  image: {
    width: 70,
    height: 70,
    margin: theme.spacing(0, 1),
  },
}))

export default function SearchCard({
  filteredResults,
  searchInput,
  movies,
  setSearchInput,
}) {
  const classes = useStyles()

  const handleClick = (e, url) => {
    e.preventDefault()
    setSearchInput("")
    navigate(`/${url}`)
  }
  return (
    <div>
      {searchInput.length > 1
        ? filteredResults.map(item => {
            const image = getImage(item.image)
            return (
              <Card
                className={classes.card}
                onClick={e => handleClick(e, item.image.title)}
              >
                <GatsbyImage image={image} className={classes.image} />
                <CardContent>
                  <Typography>{item.title}</Typography>
                  <Typography>{item.engName}</Typography>
                </CardContent>
              </Card>
            )
          })
        : movies.map(item => {
            const image = getImage(item.image)
            return (
              <Card
                className={classes.card}
                onClick={e => handleClick(e, item.image.title)}
              >
                <GatsbyImage image={image} className={classes.image} />
                <CardContent>
                  <Typography>{item.title}</Typography>
                  <Typography>{item.engName}</Typography>
                </CardContent>
              </Card>
            )
          })}
    </div>
  )
}
