import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dishes.scss";

interface Dish {
  id: number;
  imgUrl: string;
  category: string;
  name: string;
  stars: number;
  price: number;
}

const DishesSection: React.FC = () => {
  const [dish, setDish] = useState<Dish[]>([]);

  const fetchDishes = async () => {
    try {
      let res = await axios.get<Dish[]>(
        "https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?page=1&limit=5"
      );
      let data = res.data;
      setDish(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <section className="dishes">
      <div className="container">
        <div className="par">
          <h1>Our Top Dishes</h1>
        </div>
        <div className="cards">
          {dish.length > 0 ? (
            dish.map((dishes) => (
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
            <p>Loading dishes...</p>
          )}
        </div>
        <button className="all buttoms">View All</button>
        <div className="liner"></div>
      </div>
    </section>
  );
};

export default DishesSection;
