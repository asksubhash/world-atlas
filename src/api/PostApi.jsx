import axios from "axios";
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getCountryData = () => {
  return api.get("/all?files=name,population,region,capital,flags");
};
export const getCountryDetail = (name) => {
    // return api.get(`/name/${name}`);
    return api.get(`/alpha/${name}?fullText=true`);
  };
