import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import {
  RecoilRoot,
  // atom
} from "recoil";
// import { IPage } from "./interfaces";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";

// News
import CreateArticle from "./pages/articles/CreateArticle"; 

// export const activePageState = atom({
//   key: "user", // unique ID (with respect to other atoms/selectors)
//   default: { title: "Friends", params: {} } as IPage, // default value (aka initial value)
//   effects: [
//     localStorageEffect('user'),
//   ]
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/News" element={<News />} />
            <Route path="/News/CreateArticle" element={<CreateArticle />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
