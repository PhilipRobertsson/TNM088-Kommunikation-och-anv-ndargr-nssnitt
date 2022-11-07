import './App.css'
import countries from 'world-countries'
import CountryInfo from './components/CountryInfo.js'

function App () {
  const n = 5
  const m = 15
  const bigBoi = countries[0].area

  countries.sort((a, b) => {
    return b.area - a.area
  })
  const filteredCountries = countries.filter((country) => {
    return country.name.common !== 'Antarctica'
  })

  return (
    <div className='container'>
      <div className='col1'>
        {filteredCountries.slice(0, n).map((c) => (
          <CountryInfo data={c} details largeArea={bigBoi} key={c.key} />
        ))};
      </div>

      <div className='col2'>
        {filteredCountries.slice(n, m).map((c) => (
          <CountryInfo data={c} details={false} largeArea={bigBoi} key={c.key} />
        ))};
      </div>
    </div>
  )
}

export default App
