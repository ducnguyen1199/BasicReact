import React from "react";
import { Button } from "@material-ui/core";
import useStyle from "./../../style";

export default function Material() {
  const classes = useStyle();

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Button demo</h1>
      <span>Dinh Phuc Nguyen</span>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}
