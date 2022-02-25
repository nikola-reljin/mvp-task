import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { NotFoundPage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/" element={<Navigate to="/reports" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
