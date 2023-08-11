export async function fetchCars() {
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "55b822d1c4msh4d27484b217cab7p1d5f7bjsn568c4a4a9462",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
