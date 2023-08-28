import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FavouriteCities from "./components/FavouriteCities";
import SearchCity from "./components/SearchCity";
import WeatherInfo from "./components/WeatherInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarWeather from "./components/NavBarWeather";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarWeather />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />

              <SearchCity />

              <WeatherInfo />
            </>
          }
        />

        <Route path="/favourites" element={<FavouriteCities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
