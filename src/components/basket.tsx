import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../global";
import { remove } from "../redux/reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end",
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2,
    },
  })
);

const Basket = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const products = useSelector((state: ProductItem[]) => state);
  return (
    <div>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Shopping Basket
      </Typography>
      <Typography component="p" variant="body1">
        {products.filter((product) => product.added).length} items in your
        basket
      </Typography>
      <List className={classes.root}>
        {products
          .filter((product) => product.added)
          .map((product: ProductItem) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Product" src={product.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        &pound;{(product.price / 100).toFixed(2)}
                      </Typography>
                      {` — ${product.description}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(remove({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        <ListItem className={classes.listItem}>
          <Typography variant="subtitle1" className={classes.total}>
            &pound;
            {(
              products
                .filter((product) => product.added)
                .reduce((acc, current) => (acc += current.price), 0) / 100
            ).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Basket;
