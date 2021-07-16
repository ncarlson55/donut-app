import React from 'react';
//Reactstrap
import { Jumbotron } from 'reactstrap';
//Material UI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//NavLink
import { NavLink } from 'react-router-dom';

const MainHero = () => {
  return (
    <div>
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
                <NavLink to="/donuts">
                  <Button variant="contained" color="primary">
                    Donut Menu
                  </Button>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/drinks">
                  <Button variant="contained" color="primary">
                    Drink Menu
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainHero;
