import React, { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    async function foo(){
      const url = import.meta.env.VITE_BASE_URL;
      const d = await fetch(`${url}`, {
        headers: {"Content-Type" : "application/json"},
        method: "GET"
      });

      console.log("DATA:", await d.json());
    }
    foo();
  }, []);

  return (
    <div>
        <div className="">HOME PAGE</div>
        <div className="">HOME PAGE</div>
        <div className="">HOME PAGE</div>
        <div className="">HOME PAGE</div>
        <div className="">HOME PAGE</div>
    </div>
    
  )
}
