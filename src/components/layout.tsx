import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { purple, teal } from "@material-ui/core/colors";

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const MainLayout: React.FC = ({ children }) => {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: purple,
      secondary: teal,
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={{ checked: darkState, onChange: handleThemeChange }} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
