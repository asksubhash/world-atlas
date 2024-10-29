import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

const About = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON file
    fetch("/src/api/CountryData.json") // Adjust the path according to your file structure
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section className="mt-5">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold text-gray-800 mb-4">
          Here are the interesting Facts <br /> we`re proud of you{" "}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </section>
  );
};

export default About;
