import countries from 'world-countries'
import CountryInfo from './CountryInfo.js'
import { useState } from 'react'

function CountryList () {
  const n = 5
  const m = 15
  const bigBoi = countries[0].area
  const [searchString, setSearchString] = useState('')

  countries.sort((a, b) => {
    return b.area - a.area
  })

  const matchSearch = cName => {
    const lowerCaseName = cName.name.common.toLowerCase()
    const lowerCaseSearch = searchString.toLowerCase()
    if (lowerCaseName !== 'antarctica') {
      return lowerCaseName.indexOf(lowerCaseSearch) >= 0
    }
  }
  const filteredCountries = countries.filter(matchSearch)
  const inputSearchString = (e) => {
    setSearchString(e.target.value)
  }
  return (
    <div className='container'>
      <div className='search'>
        <input
          type='text'
          label='Country search: '
          placeholder='type something...'
          onInput={inputSearchString}
        />
      </div>
      <div className='col1'>
        {filteredCountries.slice(0, n).map((c) => (
          <CountryInfo data={c} details largeArea={bigBoi} key={c.key} />
        ))}
      </div>

      <div className='col2'>
        {filteredCountries.slice(n, m).map((c) => (
          <CountryInfo data={c} details={false} largeArea={bigBoi} key={c.key} />
        ))}
      </div>
    </div>
  )
}

export default CountryList
