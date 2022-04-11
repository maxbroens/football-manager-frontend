import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import MainCenter from "../pages/MainCenter";

export default function App() {

  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    }
  });

  return (
      <ThemeProvider theme={theme}>
        <div>
          <SideMenu/>
          {/*<Header/>*/}
          <MainCenter/>

        </div>
        {/*<CssBaseline/>*/}
      </ThemeProvider>
  );

}
