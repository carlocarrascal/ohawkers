import React from "react";
import Grid from "@material-ui/core/Grid";

function GridContainer(props) {
  const { children, className, ...rest } = props;
  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </div>
  );
}

export default GridContainer;
