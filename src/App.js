/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme.ts";

import { ContainerWithRule } from "./components/atoms";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerWithRule>
        <h1
          sx={{
            color: "primary",
            fontFamily: "heading",
          }}
        >
          Hello
        </h1>
      </ContainerWithRule>
    </ThemeProvider>
  );
}

export default App;
