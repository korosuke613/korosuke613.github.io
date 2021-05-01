import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  BottomNavigation,
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Container,
  Paper,
  CardContent,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Footer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography>©2017 Futa HIRAKOBA inc.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Footer;
