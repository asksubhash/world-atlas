import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/Loader";
import CountryCardCountryPage from "../components/CountryCardCountryPage";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);
  const searchCountry = (country) => {
    if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    }else{
        return country;
    }
  };


  const filterRegion = (country) => {
    if(filter==='All') return country;
    return country.region===filter
       
  };

  const filterCountries=countries.filter((country) => searchCountry(country) && filterRegion(country));

  if (isPending) return <Loader />;

  return (
    <section className="pt-10 max-w-7xl mx-auto px-3 sm:px-6">
      {/* search section  */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
        
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {filterCountries.map((country, index) => {
          return <CountryCardCountryPage country={country} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Country;
