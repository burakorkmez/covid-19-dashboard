import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CountryItems from './components/countries/CountryItems';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import Footer from './components/ui/Footer';
function App() {

  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await axios(`https://corona.lmao.ninja/v2/countries/${query}?sort=cases`)

      //I used ternary because when we search for a country, api gives us object and in that way we can't
      //map through it in CountryItems.js
      setItems(query ==='' ?  (response.data) : Array(response.data)) 
      setIsLoading(false)
      console.log(response.data)
    }

    fetchData()

  },[query])
  return (
    <div className="container">

    <Header />
    <Search getQuery={(query)=>(setQuery(query))} />
    <CountryItems items={items} isLoading={isLoading} />
    <Footer/>
    </div>
  );
}

export default App;
