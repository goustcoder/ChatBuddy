import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-dcmv0zppvfsfhgpb.us.auth0.com"
    clientId="afniQ5ySx5wsRuUV9lBo0a25ucL56Uem"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://api.chatbuddy.com',
    }}
  >
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Auth0Provider>
);
