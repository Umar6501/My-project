"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dishes.scss";
import useStore from "../../store/useStore";
import Load from "@/app/components/loading/Load";

interface Dish {
  id: number;
  imgUrl: string;
  category: string;
  name: string;
  stars: number;
  price: number;
}

const DishesSection: React.FC = () => {
  const { loading, error, todos, fetchTodos } = useStore();

  useEffect(() => {
    if (error) {
      error(error);
    }

    fetchTodos();
  }, []);
  return (
    <section className="dishes">
      <div className="container">
        <div className="par">
          <h1>Our Top Dishes</h1>
        </div>
        <div className="cards">
          {todos.length > 0 ? (
            todos.map((dishes: any) => (
              <div className="card" key={dishes.id}>
                <div className="img">
                  <img src={dishes.imgUrl} alt="Error" className="image" />
                  <img src="./Heart.svg" alt="" className="like" />
                </div>
                <div className="items">
                  <h4 className="p1">{dishes.category}</h4>
                  <h3>{dishes.name}</h3>
                  <div className="line">
                    <p>24min •</p>
                    <img src="./Star.svg" alt="img" />
                    <p>{dishes.stars}</p>
                  </div>
                  <div className="last">
                    <h4>{dishes.price}</h4>
                    <p>.99</p>
                    <button>+</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Load />
          )}
        </div>
        <button className="all buttoms">View All</button>
        <div className="liner"></div>
      </div>
    </section>
  );
};

export default DishesSection;
