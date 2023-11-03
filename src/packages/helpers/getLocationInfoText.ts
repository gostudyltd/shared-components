import type { ProgramDetail } from '../types/api'
import { getUniqueCityNameFromTariffs } from './getUniqueCityNameFromTariffs'

export const getLocationInfoText = (program: ProgramDetail) => {
  const uniqueCities = getUniqueCityNameFromTariffs(program.tariffs)
  const citiesInfo = uniqueCities.join(', ')
  const countryInfo = program.country ? program.country.name : ''
  const delimiter = citiesInfo && countryInfo ? '; ' : ''
  return `${citiesInfo}${delimiter}${countryInfo}`
}
