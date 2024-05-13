"use client";

import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    console.log("Hello Wrld");
  }, []);
  return <h1>Hello, Dashboard Page</h1>;
}
