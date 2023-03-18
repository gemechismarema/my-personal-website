import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home =()=>{
  return (
    <div>
      
      <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contacts
        </Button>
        <Button component={Link} to="/experience" color="inherit">
          Experience
        </Button>
        <Button component={Link} to = "/hobbies" color = "inherit">
            Hobbies
        </Button>
      </Toolbar>
    </AppBar>


      <div style={{ padding: "1rem" }}>
        <Typography variant="h3" sx={{ mb: "1rem" }}>
          Welcome to My Personal Website
        </Typography>
        <Typography variant="body1">
        Welcome to my personal website! Here you can find out more about me, my interests, and Hobies.


Thank you for visiting my website!
        </Typography>
      </div>
      <footer style={{ backgroundColor: "#f5f5f5", padding: "1rem" }}>
        <Typography variant="body2" align="center">
          © 2023 My Personal Website
        </Typography>
      </footer>
    </div>
   
  )
}

export default Home;