import React, { useEffect, useState } from "react";
import CloudIcon from "./CloudIcon";
import Humidity from "./Humidity";
import Wind from "./Wind";
import axios from "axios";
import Search from "./Search";

const Weather = () => {
  const [data, setData] = useState({
    celcuis: 10,
    name: "London",
    humidity: 10,
    speed: 2,
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const HandleClick = () => {
    if (name !== "") {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7f76241e977568818086287314afab4a&units=metric`;
      axios
        .get(api)
        .then((res) => {
          setData({
            ...data,
            celcuis: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          });
          setError("");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid Name Error");
          } else {
            setError("");
          }
        });
    }
  };

  return (
    <div className=" flex flex-col gap-16 justify-between h-full">
      <div>
        <div className="flex gap-3">
          <div className="border rounded-lg py-1 px-2 bg-slate-50">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setName(e.target.value)}
              className="text-black outline-none"
            />
          </div>
          <div
            className=" bg-slate-50 rounded-3xl p-1 cursor-pointer"
            onClick={HandleClick}
          >
            <Search />
          </div>
        </div>
        <div>
          <p className=" text-red-500">{error}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <CloudIcon />
      </div>
      <div>
        <div className="flex text-center flex-col">
          <p className="text-4xl">{Math.round(data.celcuis)}</p>
          <p className="text-3xl">{data.name}</p>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="flex gap-3">
          <div className="mt-2">
            <Humidity />
          </div>
          <div>
            <p>{Math.round(data.humidity)}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="mt-2">
            <Wind />
          </div>
          <div>
            <p>{Math.round(data.speed)}</p>
            <p>speed wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
