export const checkParamsEquality = (firstParams: URLSearchParams, secondParams: URLSearchParams) => {
  const arrayFromFirstParams = Array.from(firstParams)
  const arrayFromSecondParams = Array.from(secondParams)
  arrayFromFirstParams.sort()
  arrayFromSecondParams.sort()
  return JSON.stringify(arrayFromFirstParams) === JSON.stringify(arrayFromSecondParams)
}

export const formatQuery = (query: { [key: string]: string }) => {
  const formatedQuery: { [key: string]: string | string[] } = {}
  for (const [key, value] of Object.entries(query)) {
    if (value.includes(', ')) {
      formatedQuery[key] = value.split(', ')
      continue
    }
    formatedQuery[key] = value
  }
  return formatedQuery
}

export const getData = async (route: string, language: string, important = false) => {
  const response = await fetch(`${process.env.GATSBY_API_URL}${route}`, {
    method: 'GET',
    mode: 'no-cors', // prevent sending 'OPTIONS' request first
    headers: new Headers({
      'Accept-Language': language,
    }),
  })
  if (important) {
    if (!response.ok) {
      throw new Error('Request failed')
    }
  }

  return await response.json()
}

export const formatParamsForDashboard = (
  product:
    | { program: { tariffId: string; periodId: string; paymentTypeId: string } }
    | { residence: { accommodationId: string; bookingPeriodId: string } }
    | { service: { id: string } }
) => {
  const base64String = window.btoa(JSON.stringify(product))
  const sp = new URLSearchParams({
    addtocart: base64String,
  })
  const utms = sessionStorage.getItem('utmObject')
  if (utms) {
    for (const [key, value] of Object.entries(JSON.parse(utms))) {
      sp.set(key, value as string)
    }
  }

  return sp.toString()
}
