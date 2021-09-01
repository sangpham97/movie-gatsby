import React from "react"
import Paper from "@material-ui/core/Paper"
import { Button, ButtonGroup, makeStyles } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import { Links } from "../utils/utils"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    color: "purple",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "1px solid #5555",
    textDecoration: "none",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: "0.8rem",
    color: "purple",
  },
}))

export default function MenuMovie() {
  const classes = useStyles()

  return (
    <Paper square className={classes.root}>
      <Link to="/">
        <HomeIcon />
      </Link>
      <ButtonGroup
        indicatorColor="primary"
        textColor="primary"
        className={classes.buttons}
      >
        {Links.map((link, index) => (
          <div>
            <Link key={index} className={classes.wrapper} to={link.link}>
              {link.icons}
              <Button className={classes.name}>{link.name}</Button>
            </Link>
          </div>
        ))}
      </ButtonGroup>
    </Paper>
  )
}
