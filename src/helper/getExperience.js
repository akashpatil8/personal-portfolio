export function getExperince() {
  const startDate = new Date("2022-12-01");
  const currentDate = new Date();

  const differenceInMilliSeconds = currentDate - startDate;

  const years = differenceInMilliSeconds / (1000 * 60 * 60 * 24 * 365);
  const fullYears = Math.floor(years);

  const remainingMonths = Math.floor((years - fullYears) * 12);

  return `${fullYears}.${remainingMonths}`;
}
