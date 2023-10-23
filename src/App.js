import { useState } from "react";
import "./App.css";
import Uzbekistan from "./images/depositphotos_237523940-stock-photo-uzbekistan-national-flag-waving-on.jpg"
import Afgonistan from "./images/Afgonistan.png"
import Hindistan from "./images/Hindiston.png"
import Xitay from "./images/Xitoy.png"
import Russia from "./images/Russia.png"

function App() {
  const [country, setCountry] = useState([
    {
      fullName: "Uzbekistan",
      img: Uzbekistan,
      area: "448-924 km²",
      population: "36-006-008",
      capital: "Tashkent",
    },
    {
      fullName: "Hindiston",
      img: Hindistan,
      area: "3,3 million km",
      population: "1-428-627-663",
      capital: "Nyu-Dehli",
    },
    {
      fullName: "Xitoy",
      img: Xitay,
      area: " 9,6 mln. km²",
      population: "1 mlrd. 394mln",
      capital: "Pekin",
    },
    {
      fullName: "Afg'oniston",
      img: Afgonistan,
      area: " 652,2 ming km2",
      population: "32 mln. 225 ming ",
      capital: "Kobul",
    },
    {
      fullName: "Russia",
      img: Russia,
      area: "17 098 246 km² ",
      population: "146-447-424",
      capital: "Moskva",
    },
  ]);
  return (
    <div className="App">
      {country.map((count) => {
        console.log(count)
        return (
          <div className="card" key={Math.random()}>
            <img src={count.img} alt="nimadir" width={150} height={150} />
            <h1>{count.fullName}</h1>
            <h3>Area: {count.area}</h3>
            <h3>Population: {count.population}</h3>
            <h3>Capital: {count.capital}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
