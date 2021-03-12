import React from 'react'
import addComma from '../js/comma'
import formatTime from '../js/time'
import { FaProcedures, FaSkullCrossbones, FaSyringe, FaHeartbeat, FaClock, FaAmbulance} from 'react-icons/fa'

const CountryGrid = ({item}) => {

  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={item.countryInfo.flag} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1 className="countryName">{item.country.toUpperCase()}</h1> 
      <hr/>
      <p className="info"><FaClock/> Last Updated : {formatTime(item.updated)}</p>
      <p className="info"><FaHeartbeat/> Total Cases : {addComma(item.cases)}</p> 
      <p className="info"><FaSkullCrossbones/> Total Deaths : {addComma(item.deaths)}</p>
      <p className="info"><FaSyringe/> Total Recovered : {addComma(item.recovered)}</p>
      <p className="info"><FaProcedures/> New Cases : {addComma(item.todayCases)}</p>
      <p className="info"><FaSkullCrossbones/> New Deaths : {addComma(item.todayDeaths)}</p>
      <p className="info"><FaAmbulance/> New Recovered : {addComma(item.todayRecovered)}</p>
    </div>
  </div>
</div>
  )
}

export default CountryGrid
