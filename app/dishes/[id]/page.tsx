"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detail.scss";
import Load2 from "@/app/components/loader2/Load2";

const Details = ({ params: { id } }: any) => {
  const [dishes, setDetailsDish] = useState<any>(null);

  useEffect(() => {
    const fetchDetailsDish = async () => {
      try {
        const response = await axios.get(
          `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes/${id}`
        );
        setDetailsDish(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsDish();
  }, [id]);

  return (
    <div className="div pt-24 h-[500px] flex justify-center items-center">
      <div className="container">
        {dishes ? (
          <div className="card" key={dishes.id}>
            <div className="img">
              <img src={dishes.imgUrl} alt="Error" className="image" />
            </div>
            <div className="items">
              <h4 className="p1">{dishes.category}</h4>
              <h3>{dishes.name}</h3>
              <div className="line">
                <p>24min •</p>
                <img src="../Star.svg" alt="img" />
                <p>{dishes.stars}</p>
              </div>
              <div className="last">
                <h4>{dishes.price}</h4>
                <p>.99</p>
                <button>+</button>
              </div>
            </div>
          </div>
        ) : (
          <Load2 />
        )}
      </div>
    </div>
  );
};

export default Details;
