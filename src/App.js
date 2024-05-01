import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import humidityImg from "../src/assets/humidity.png";
import windImg from "../src/assets/wind.png";
import ImgBox from "./components/Boxes/ImgBox";
import MeasurmentsBox from "./components/Boxes/MeasurmentsBox";
import PageMainBox from "./components/Boxes/PageMainBox";
import WeatherMianBox from "./components/Boxes/WeatherMianBox";
import SearchFieldComponent from "./components/TextFields/SearchField";
import Toaster from "./components/Toaster/Toaster";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({
    loading: false,
    icon: "",
    description: "",
    cityName: "",
    temp: "",
    humidity: "",
    windSpeed: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);

  // open toaster
  const handleOpen = () => {
    setOpen(true);
  };
  // close toaster
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // change searxh field
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  // get weather data
  const handleGetWeather = async () => {
    setWeatherData((prev) => ({ ...prev, loading: true }));
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((res) => {
        const response = res.data;
        setWeatherData((prev) => ({
          ...prev,
          icon: response.weather[0].icon,
          description: response.weather[0].description,
          temp: response.main?.temp,
          cityName: response.name,
          humidity: response.main?.humidity,
          windSpeed: response.wind?.speed,
        }));
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response ? err.response.data.message : err.message);
        handleOpen();
      })
      .finally(() => {
        setWeatherData((prev) => ({ ...prev, loading: false }));
      });
  };

  return (
    <>
      <PageMainBox>
        <WeatherMianBox>
          <SearchFieldComponent
            loading={weatherData.loading}
            value={cityName}
            onChange={handleChange}
            placeholder={"Enter City Name"}
            handleSearch={handleGetWeather}
          />
          <Box className={"flex_col flex_center"}>
            {weatherData.icon && (
              <ImgBox
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                sx={{ maxWidth: 250 }}
              />
            )}
            {/* city name and its temprature */}
            <Typography variant="h3" color={"#fff"}>
              {weatherData.description}
            </Typography>
            <Typography variant="h1">{weatherData.temp}&#176;C</Typography>
            <Typography variant="h2">{weatherData.cityName}</Typography>
          </Box>
          {/* wind speed & humidity */}
          <Box className={"flex_between"} sx={{ width: "100%" }}>
            <MeasurmentsBox
              img={humidityImg}
              title={"Humidty"}
              value={`${weatherData.humidity}%`}
            />
            <MeasurmentsBox
              img={windImg}
              title={"Wind Speed"}
              value={`${weatherData.windSpeed} m/s`}
            />
          </Box>
        </WeatherMianBox>
      </PageMainBox>
      <Toaster open={open} message={errorMsg} handleClose={handleClose} />
    </>
  );
}

export default App;
