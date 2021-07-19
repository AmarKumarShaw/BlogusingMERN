import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";


const useStyle = makeStyles((theme)=> ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]:{
        padding:0
    }
  },
  image: {
    height: "50vh",
    width: "100%",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px  0 10px 0",
  },
  subheading:{
      color:"#878787",
      display:"flex",
      margin:"20px 0",
      [theme.breakpoints.down("md")]:{
            display:"block"
      }
  }
}));

const DetailView = () => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <>
      <Box className={classes.container}>
        <img src={url} alt="banner" className={classes.image} />

        <Box className={classes.icons}>
          <Link to="/update"><Edit className={classes.icon} color="primary" /></Link>
          <Delete className={classes.icon} color="error" />
        </Box>
        <Typography className={classes.heading}>Title of the Blog</Typography>

        <Box className={classes.subheading}>
          <Typography>Author:<span style={{fontWeight:600}}>codeforinterview</span></Typography>
          <Typography style={{marginLeft:"auto"}}>19 June 2021</Typography>
        </Box>
        <Typography>This is a lorem text which i am jsut writting for the purpose of  dummy text and it should be fine and better . Again I Have to write it again and again so i have to make it a bit one long</Typography>
      </Box>
    </>
  );
};

export default DetailView;
