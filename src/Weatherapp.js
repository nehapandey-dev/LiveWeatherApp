import React, { useState, useEffect } from "react";

function Weatherapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bangalore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=882dcfafc93576da40e4dd57284d9b3e`;
      const response = await fetch(url);
      const resJson = await response.json();
    //   console.log(resJson)
      setCity(resJson.main);
    };
    
    fetchApi();
  }, [search]);

 function date (){
   const getDate = new Date()
 }

  return (
    <>
      <div className="Container">
     
        <div className="inputdata">
          
          <input
            type={"search"}
            className="inputfeild"
            placeholder="search..."
            onChange={(e) => {
                setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data found</p>
        ) : (
          <div className="weather-info">
          <img src="https://img.icons8.com/ultraviolet/512/rainy-weather.png" alt="img" width="200" className="umbrela"></img>
            <h2 className="city">{search} 🌸</h2>
            
            <h1 className="temperature">{city.temp}°C </h1>
            <p className="min-max">Min : {city.temp_min}°C | Max : {city.temp_max} °C </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Weatherapp;
