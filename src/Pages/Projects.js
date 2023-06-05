import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../styles/Project.css";
import project5 from "../images/react-redux.jpg";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "white",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));
const projects = [
  {
    name: "Casino Times",
    description: `Casino games are gambling games that are typically played in casinos or online gambling platforms. These games offer the opportunity to win money or prizes based on chance, luck, or skill.
     Casino betting involves placing wagers on the outcome of various sporting events.\
     Participants can bet on the winners of games, point spreads, or even specific player performances.
     `,
    image: project5,
    
  },
  {
    name: "Boxing Game",
    description: `The online boxing game offers different gameplay modes to suit your preferences. Engage\
     in quick matches for a fast-paced, action-packed experience,\
     or participate in tournaments and climb up the ranks to become\
     the ultimate champion. Challenge your friends to friendly matches\
     or test your skills in ranked matches to earn recognition and rise through the global leaderboards.`,
    image: project5,
    
  },
  {
    name: "E-commerce Website",
    description: `Finding the right medication is easy with our intuitive search and navigation features.\
    You can browse by category, search by brand or generic name, or explore specific health conditions to find the most suitable\
    options for your needs. We also provide detailed product descriptions, dosage instructions, and precautions\
    to help you make informed decisions about your healthcare.`,
    image: project5,
    
  },
  
];

function Projects() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects