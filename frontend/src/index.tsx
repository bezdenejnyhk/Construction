import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./styles/variables/variables.scss";
import "./styles/reset.scss";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
