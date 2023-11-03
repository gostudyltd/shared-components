export const roundItTo = (number: number, decimals: number) =>
  Math.round(number * Math.pow(10, decimals) + Number.EPSILON) / Math.pow(10, decimals)
