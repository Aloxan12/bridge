import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./store/store";
import App from "./pages/Main/App";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { Header } from "./components/Header/Header";

const routesIsNotAuth = [
  {
    id: "Login",
    path: "/login",
    component: <Login />,
  },
  {
    id: "NotFound",
    path: "*",
    component: <NotFound />,
  },
];

const routes = [
  {
    id: "Main",
    path: "/",
    component: <App />,
  },
  {
    id: "NotFound",
    path: "*",
    component: <NotFound />,
  },
];

export const AppRoute = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(
    (state) => state.main.isAuth
  );
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {isAuth
          ? routes.map((route) => {
              const { id, component, path } = route;
              return <Route key={id} path={path} element={component} />;
            })
          : routesIsNotAuth.map((route) => {
              const { id, component, path } = route;
              return <Route key={id} path={path} element={component} />;
            })}
      </Routes>
    </BrowserRouter>
  );
};
