"use client";

// https://jsonplaceholder.typicode.com/todos/1
async function getData() {
  "use client";
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Fetching() {
  const data = await getData();
  console.log("\nData From Server");
  console.log(data);

  return (
    <main>
      <h1>Fetching Data from JSON placeholder</h1>
      <p>Data is logged in console</p>
    </main>
  );
}
