import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FavouriteCities from "./components/FavouriteCities";
import SearchCity from "./components/SearchCity";
import WeatherInfo from "./components/WeatherInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import background from "./assets/empty-grass-field.jpeg";
import NavbarWeather from "./components/NavBarWeather";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <NavbarWeather />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Meteo 4b</h1>
                  <SearchCity />

                  <WeatherInfo />
                </>
              }
            />

            <Route path="/favourites" element={<FavouriteCities />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
