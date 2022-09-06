
import react from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export default function About() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
      )
      .then((response) => {
        setdata(response.data.data);
      });
  }, []);
  return (
    <>
      {data.map((da) => (
        <div key={da.count}>
          <div className="flex w-1/2 border-b-[1px] border-b-[#00000050] mb-5 justify-between P-5">
            <h2 className="text-[#000000] text-[15px] font-bold">{da.title}</h2>
            <p className="text-10 mb-3 text-[#000]">{da.count}</p>
          </div>
        </div>
      ))}
    </>
  );
};

