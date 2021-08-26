import React from "react"
import Paper from "@material-ui/core/Paper"
import { Button, ButtonGroup, makeStyles } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import { Links } from "../utils/utils"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    color: "purple",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "1px solid #5555",
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

export default function Menu() {
  const classes = useStyles()

  return (
    <Paper square className={classes.root}>
      <HomeIcon />
      <ButtonGroup
        indicatorColor="primary"
        textColor="primary"
        className={classes.buttons}
      >
        {Links.map((link, index) => (
          <div key={index} className={classes.wrapper}>
            {link.icons}
            <Button className={classes.name}>{link.name}</Button>
          </div>
        ))}
      </ButtonGroup>
    </Paper>
  )
}
