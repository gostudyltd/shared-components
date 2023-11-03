import { Tariff } from '../types/api'

export const getUniqueCityNameFromTariffs = (tariffs: Tariff[]) => {
  return [...new Set(tariffs.map((el) => el.city?.name).filter(Boolean))]
}
