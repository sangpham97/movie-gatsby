import React from "react"
import LocalMoviesOutlinedIcon from "@material-ui/icons/LocalMoviesOutlined"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },

  video: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}))

export default function Trailer({ trailer, engName, title }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div style={{ background: "black", borderTop: "3px solid orange" }}>
        <Button
          startIcon={<LocalMoviesOutlinedIcon />}
          style={{
            color: "orange",
          }}
        >
          <span>Trailer phim</span>{" "}
          <span style={{ padding: "3px" }}>{engName}</span>
        </Button>
      </div>
      <iframe
        height="315"
        src={trailer}
        className={classes.video}
        id="trailer"
        title="trailer movie"
      ></iframe>
    </div>
  )
}
