// import { Currency } from '../types/api'

export const stringToColor = (string: string) => {
  let hash = 0;
  let i = 0;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

// export const currencyFormatter = (lang: string | string[] | undefined, currency: Currency) =>
//   new Intl.NumberFormat(lang, {
//     style: 'currency',
//     currency: currency,
//     minimumFractionDigits: 2,
//   })

export const dateFormatter = (lang: string | string[] | undefined) =>
  new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
