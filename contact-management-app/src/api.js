export async function fetchData() {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  const data = await response.json();
  return data;
}
// export async function fetchData1() {
//   const response = await fetch("https://disease.sh/v3/covid-19/countries");
//   const data = await response.json();
//   return data;
// }
