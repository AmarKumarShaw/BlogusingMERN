import { Box, Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Posts from "./Posts";
import Categories from "./Categories";
import Post from "./Post";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={12}>
          <Categories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={12}>
          {/* <Posts /> */}
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
