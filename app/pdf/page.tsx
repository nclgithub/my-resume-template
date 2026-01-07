"use client";

import { useEffect, useState } from "react";
import ResumeTemplate from "@/components/resume-template";

export default function PDF() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('data') || '{}';
    const parsedData = JSON.parse(decodeURIComponent(raw));
    setData(parsedData);
  }, []);  // Empty array ensures this runs only once when the component is mounted

  if (!data) {
    return <div>Loading...</div>;  // You can customize this loading state
  }

  return (
    <ResumeTemplate data={data} />
  );
}