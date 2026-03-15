import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/variables/variables.scss";
import "./styles/reset.scss";
import "./styles/global.scss";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    
      <App />
  </BrowserRouter>
);

reportWebVitals();
