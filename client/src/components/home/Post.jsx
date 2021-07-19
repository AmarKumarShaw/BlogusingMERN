import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    border: "1px solid #d3cede",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& >*": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fonstSize: 14,
    wordBreak: "break-work",
  },
});

const Post = () => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <>
      <Box className={classes.container}>
        <img src={url} alt="wrapper" className={classes.image} />
        <Typography className={classes.text}>Music</Typography>
        <Typography className={classes.heading}>Code for Interview</Typography>
        <Typography className={classes.text}>
          Author:codeforinterview
        </Typography>
        <Typography className={classes.detail}>
          Hi from Code for Interview This is the code i want to write ikn this
          segment so that it can get fulfilled{" "}
        </Typography>
      </Box>
    </>
  );
};

export default Post;
