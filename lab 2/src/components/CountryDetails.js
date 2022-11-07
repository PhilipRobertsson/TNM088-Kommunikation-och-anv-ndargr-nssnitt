import { useParams } from 'react-router-dom'
import countries from 'world-countries'
import CountryInfo from './CountryInfo.js'

function getCountryByCca3 (arg) {
  return countries.find(({ cca3 }) => cca3 === arg)
}
function CountryDetails () {
  const params = useParams()
  const cca = params.id
  const c = getCountryByCca3(cca)
  const borders = c.borders.map((c) => getCountryByCca3(c))
  borders.sort((a, b) => b.area - a.area)

  const relevantCountries = [...borders, c]
  relevantCountries.sort((a, b) => b.area - a.area)

  return (
    <div className='detailDiv'>
      <CountryInfo data={c} details largeArea={relevantCountries[0].area} key={c.ccn3} />

      <h2 style={{ margin: '0.5em', color: 'aliceblue' }}>Bordering Countries: {borders.length}</h2>

      {borders.map((b) => (
        <CountryInfo data={b} details={false} largeArea={relevantCountries[0].area} key={b.ccn3} />
      ))}

    </div>
  )
}

export default CountryDetails
