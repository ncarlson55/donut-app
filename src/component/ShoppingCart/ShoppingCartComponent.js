//Material UI Imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from 'reactstrap';
//Router
import { Link } from 'react-router-dom';

//Icon Imports
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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

function ShoppingCart(props) {
  const classes = useStyles();

  const { cartItems, onAdd, onRemove, tax, itemsPrice, deliveryPrice, totalPrice } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem className={classes.listItem} key={item.id} gutterBottom>
            <ListItemText primary={item.name} />
            <AddCircleIcon
              onClick={() => onAdd(item)}
              variant="contained"
              color="primary"
            />
            <Typography
              variant="subtitle1"
              className={classes.numberFontWeight}
            >
              {item.qty}
            </Typography>
            <RemoveCircleIcon
              onClick={() => onRemove(item)}
              variant="contained"
              color="secondary"
            />
            <Typography
              variant="subtitle1"
              className={classes.numberFontWeight}
            >
              ${(item.qty * item.price).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <div>
          {cartItems.length !== 0 && (
            <List gutterTop>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Total Items Cost" />
                <Typography
                  variant="subtitle1"
                  className={classes.numberFontWeight}
                >
                  ${itemsPrice.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Tax" />
                <Typography
                  variant="subtitle1"
                  className={classes.numberFontWeight}
                >
                  ${tax.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Delivery (Free on orders over $50)" />
                <Typography
                  variant="subtitle1"
                  className={classes.numberFontWeight}
                >
                  ${deliveryPrice.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText primary="Total Price" />
                <Typography
                  variant="subtitle1"
                  className={classes.numberFontWeight}
                >
                  ${totalPrice.toFixed(2)}
                </Typography>
              </ListItem>
              <Link to="/addressForm">
                <Button>Click to Checkout!</Button>
              </Link>
            </List>
          )}
        </div>
      </List>
    </React.Fragment>
  );
}

export default ShoppingCart;
