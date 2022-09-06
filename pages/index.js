import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3"
        )
        .then((response) => {
          setdata(response.data.articles);
        
        });
    }, []);

  return (
    <>
      {data.map((da) => (
        <div key={da.title}>
          <div className="flex w-4/6 border-b-[1px] border-b-[#00000050] mb-5 justify-between P-5">
            <div className="flex h-full flex-col">
              <p className="text-10 mb-3 text-[#000]">{da.author}</p>
              <h2 className="text-[#000000] text-[22px] font-bold">
                {da.title}
              </h2>
              <p className="text-[#000] mt-8">{da.description}</p>
              <p className="text-[#000] font-bold ml-80 mt-8">
                {da.publishedAt}
              </p>
            </div>
            <img className="w-[300px] h-[300px] object-contain" src={da.urlToImage}/>
          </div>
        </div>
      ))}
    </>
  );
}
