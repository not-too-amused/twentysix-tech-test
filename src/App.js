import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme.ts";

import { Navbar } from "./components/organisms";
import { Router } from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
