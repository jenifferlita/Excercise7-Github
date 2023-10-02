export default async function ambilDataUserAsync() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data.data);
}
