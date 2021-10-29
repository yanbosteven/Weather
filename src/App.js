import React, {useState}from 'react';
import Weather from './component/Weather'

/*
const api = {
  key:"95cb5367adec4fce0c50ae88f92f6d82",
  base:"https://api.openweathermap.org/data/2.5/"

}

const dateBuilder = (d) =>{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}



function App() {
  const [query, setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(result=>{
          setQuery('');
          setWeather(result);
          console.log(result);
        });
    }
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar"
          placeholder="Search..."
          onChange={e=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          >
          </input>
        </div>
        {(typeof weather.main !="undefined")?(
        <div>
          <div className="location-box">
            <div className="location">{weather.name},{weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ):('')}

      </main>
    </div>
  );
}
*/
function App() {
  return(
    <div className="App">
      <Weather />
    </div>

  );
  
}
export default App;
