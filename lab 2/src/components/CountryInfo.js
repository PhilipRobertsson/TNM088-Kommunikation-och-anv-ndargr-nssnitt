import React from 'react'
import { Link } from 'react-router-dom'
const CountryInfo = ({ data, details, largeArea }) => {
  return (
    <div className='countryBox'>
      <Link className='CountryDetailsLink' to={'/Country/' + data.cca3}>
        <div className='top'>
          <h2 className='countryName'>{data.name.common}</h2>
          <p className='countryArea'>
            {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
          </p>

        </div>
        {details && (
          <div className='bottom'>
            <p className='capital'>Capital: {data.capital}</p>
            <p className='capital'>Region: {data.subregion}</p>
          </div>
        )}
        <div className='bar'>
          <div className='barInner' style={{ width: (data.area / largeArea * 100) + '%' }} />
        </div>
      </Link>
    </div>
  )
}
export default CountryInfo
