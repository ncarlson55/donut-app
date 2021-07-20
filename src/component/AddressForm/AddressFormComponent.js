import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 2),
  },
  numberFontWeight: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function AddressForm(props) {
  const classes = useStyles();

  const { totalPrice, sumCartQty } = props;

  const numInCart = `In Cart: ${sumCartQty}`;

  const onSubmit = () => {
    alert(
      'Your order is confirmed! We emailed you a copy of your receipt. We will text you when your order is out for delivery! '
    );
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Details
      </Typography>
      <List gutterTop>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total Price:" secondary={numInCart} />
          <Typography variant="subtitle1" className={classes.numberFontWeight}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3} gutterBottom>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12} sm={6} gutterBottom>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
      </Grid>
      <Link to="/shoppingCart">
        <Button>Back</Button>
      </Link>
      <Button onClick={() => onSubmit()}>Submit Order</Button>
    </React.Fragment>
  );
}

export default AddressForm;
