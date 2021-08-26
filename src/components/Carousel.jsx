import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
// import { CarouselLinks } from "../utils/utils"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    position: "relative",
  },

  img: {
    height: 400,
    width: "100%",
  },
  buttons: {
    position: "absolute",
  },
}))

export default function Carousel() {
  const data = useStaticQuery(graphql`
    {
      allContentfulMovies {
        nodes {
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          engName
        }
      }
    }
  `)

  const Data = data.allContentfulMovies.nodes
  const Images = Data.map(image => getImage(image.image))
  console.log(Images)
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = Images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div className={classes.root}>
      <GatsbyImage
        className={classes.img}
        image={Images[activeStep]}
        alt={Images[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        variant="text"
        activeStep={activeStep}
        className={classes.buttons}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  )
}
