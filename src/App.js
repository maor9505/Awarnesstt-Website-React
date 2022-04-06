import React, { Suspense,lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from "./App.module.css";
import Footer from './Common/Footer';
import Loading from './Common/Loading/Loading';
import NavBar from './Common/navBar';
import ScrollToTop from "./Common/ScrolltoTop";
import TipolPage from './Components/TipolPage';

// const NavBar = lazy(() => import('./Common/navBar.js'));
// const HomePage = lazy( () => import("./Components/HomePage"));
const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/HomePage")), 3000);
  });
});
const App = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <ScrollToTop/>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>{" "}
              <Route path="/tipol/:id" element={<TipolPage />}></Route>
            </Routes>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
