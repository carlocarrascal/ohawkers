import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
//Sections
import SectionHawkers from "../HomePage/Sections/SectionHawkers.js";
import { Grid } from "@material-ui/core";
function HomePage(props) {
  return (
    <div>
      <CssBaseline />
      <Header />
      <GridContainer>
        <Grid item md={3}>
          <SectionHawkers />
        </Grid>
        <Grid item md={3}>
          <SectionHawkers />
        </Grid>
        <Grid item md={3}>
          <SectionHawkers />
        </Grid>
        <Grid item md={3}>
          <SectionHawkers />
        </Grid>
      </GridContainer>
      <Footer />
    </div>
  );
}

export default HomePage;
