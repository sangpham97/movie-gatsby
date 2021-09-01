import FlashOnIcon from "@material-ui/icons/FlashOn"
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import LanguageIcon from "@material-ui/icons/Language"
import LocalMoviesIcon from "@material-ui/icons/LocalMovies"
import VideocamIcon from "@material-ui/icons/Videocam"
import StayCurrentLandscapeIcon from "@material-ui/icons/StayCurrentLandscape"
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber"
import React from "react"

export const Links = [
  {
    name: "phim mới",
    icons: <FlashOnIcon />,
    link: "/danh-sach/new",
  },
  {
    name: "thể loại",
    icons: <InsertDriveFileIcon />,
    link: "",
  },
  {
    name: "quốc gia",
    icons: <LanguageIcon />,
    link: "",
  },
  {
    name: "phim lẻ",
    icons: <LocalMoviesIcon />,
    link: "",
  },
  {
    name: "phim bộ",
    icons: <VideocamIcon />,
    link: "/danh-sach/series",
  },
  {
    name: "hoạt hình-anime",
    icons: <StayCurrentLandscapeIcon />,
    link: "",
  },
  {
    name: "phim chiếu rạp",
    icons: <ConfirmationNumberIcon />,
    link: "/danh-sach/cinema",
  },
]
