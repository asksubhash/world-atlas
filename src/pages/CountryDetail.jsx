import { Link, NavLink, useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useEffect, useState, useTransition } from "react";
import { getCountryDetail } from "../api/PostApi";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetail = () => {
  const param = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDetail(param.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [param.id]);

  if (isPending || !country) return <Loader />;

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  // Helper functions to display nested or complex data fields
  const displayCapital = Array.isArray(capital) ? capital[0] : capital || "N/A";
  const displayCurrencies = currencies
    ? Object.values(currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";
  const displayLanguages = languages
    ? Object.values(languages).join(", ")
    : "N/A";

  // const displayBorders = borders ? borders.join(", ") : "None";

  return (
    <div className="mt-6 max-w-5xl mx-auto px-4 lg:px-8 mb-6">
      <div className="flex flex-col md:flex-row items-start border rounded-lg p-6 bg-white shadow-lg space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center">
          {flags && flags.svg && (
            <img
              src={flags.svg}
              alt={`${name?.common} flag`}
              className="object-contain max-h-60 rounded-md shadow-lg"
            />
          )}
        </div>

        <div className="text-left space-y-3 md:w-2/3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            {name?.common || "Unknown"}
          </h2>
          <p className="text-gray-700">
            <strong>Native Names:</strong>{" "}
            {Object.keys(name.nativeName)
              .map((key) => name.nativeName[key].common)
              .join(", ")}
          </p>
          <p className="text-gray-700">
            <strong>Population:</strong> {population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Region:</strong> {region || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Subregion:</strong> {subregion || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Capital:</strong> {displayCapital}
          </p>
          <p className="text-gray-700">
            <strong>Top-Level Domain:</strong> {tld ? tld.join(", ") : "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Currencies:</strong> {displayCurrencies}
          </p>
          <p className="text-gray-700">
            <strong>Languages:</strong> {displayLanguages}
          </p>
          <p className="text-gray-700">
            <strong>Borders:</strong>
            {borders && borders.map((value) => (
              <Link key={value} to={`/country/${value}`} className="text-white p-1 rounded-md font-medium bg-main mr-2 ml-1 hover:text-main hover:bg-white border-main border transition-all duration-200 ease-in-out">{value}  </Link>
            ))}
          </p>

          {/* Wrapper to push the button to the right */}
          <div className="flex justify-end">
            <NavLink
              to={"/country"}
              className="inline-flex items-center text-main border border-main p-3 px-6 rounded-lg shadow-md hover:bg-main hover:text-white transition-all duration-200 ease-in-out"
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
