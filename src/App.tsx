import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loadable from "react-loadable";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

const Cart = Loadable({
  loader: () => import("./pages/Cart"),
  loading: () => <div>Идё загрузка корзины...</div>,
});

const PageDetail = lazy(() => import("./pages/PageDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />

          <Route path="cart" element={<Cart />} />

          <Route
            path="cart/:id"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <PageDetail />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
