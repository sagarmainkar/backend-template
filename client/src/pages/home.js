import React from "react";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={8} xs={12}>
        WElcome to quiz
      </Grid>
      <Grid item sm={4} xs={12}>
        Score
      </Grid>
    </Grid>
  );
};

export default Home;
