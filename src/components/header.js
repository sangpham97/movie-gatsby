import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import InputBase from "@material-ui/core/InputBase"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"
import SearchCard from "./SearchCard"

const useStyles = makeStyles(theme => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(3, 0),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  logo: {
    flexGrow: 1,
  },
  search: {
    background: "white",
    borderRadius: 3,
    position: "relative",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  searchList: {
    zIndex: 1,
    position: "absolute",
    top: 45,
    right: 25,
  },
}))

export default function Header() {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          title
          engName
          image {
            gatsbyImageData(layout: CONSTRAINED)
            title
          }
        }
      }
    }
  `)
  const movies = data.allContentfulMovies.nodes

  const searchItems = searchValue => {
    setSearchInput(searchValue)
    if (searchInput !== "") {
      const filteredData = movies.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(movies)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ padding: "6px 0" }}>
        <Toolbar variant="dense">
          <Link to="/" className={classes.logo}>
            <StaticImage
              src="../images/logomoizzz.png"
              layout="fixed"
              height={50}
            />
          </Link>
          <InputBase
            className={classes.search}
            placeholder="Tìm kiếm..."
            onChange={e => searchItems(e.target.value)}
          />
          <div
            className={classes.searchList}
            style={searchInput ? { display: "block" } : { display: "none" }}
          >
            <SearchCard
              filteredResults={filteredResults}
              searchInput={searchInput}
              movies={movies}
              setSearchInput={setSearchInput}
            />
          </div>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
