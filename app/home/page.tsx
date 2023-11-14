"use client";

import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import HeroSection from "./heroSection/HeroSection";
import HealthSection from "./healthSection/HealthSection";
import ChikenSection from "./chikenSection/ChikenSection";
import DishesSection from "./dishesSection/DishesSection";
import ControlSection from "./controlSection/ControlSection";
import CustomerSection from "./customerSection/CustomerSection";
import EmailSection from "./emailSection/EmailSection";
import Footer from "../components/footer/Footer";
const Homepage = () => {
  const [dish, setDish] = useState([]);

  const fetchDishes = async () => {
    try {
      let res = await axios.get(
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
    <main className="Home">
      <HeroSection />
      <HealthSection />
      <ChikenSection />
      <DishesSection />
      <ControlSection />
      <CustomerSection />
      <EmailSection />
    </main>
  );
};

export default Homepage;
