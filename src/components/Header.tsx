import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Switch,
  Toolbar,
  Typography,
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

type Props = {
  darkMode: {
    checked: boolean;
    onChange: () => void;
  };
};

const Header: React.FC<Props> = ({ children, darkMode }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          cangoxina/@korosuke613
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={darkMode.checked} onChange={darkMode.onChange} />
            }
            label="DarkMode"
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
