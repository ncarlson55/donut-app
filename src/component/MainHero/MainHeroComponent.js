import React from 'react';
//Reactstrap
import { Jumbotron } from 'reactstrap';
//Material UI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//NavLink
import { Link } from 'react-router-dom';
//CSS
import './MainHeroComponent.css'

const MainHero = () => {
  return (
    <div className="background">
      <Jumbotron fluid>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
          >
            Welcome to Jiffy Donut!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Check out our donut and drink menus. Once you order, we'll be there
            in a jiffy!
          </Typography>
          <Container fluid>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Link to="/donuts" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    Donut Menu
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/drinks" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    Drink Menu
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainHero;
