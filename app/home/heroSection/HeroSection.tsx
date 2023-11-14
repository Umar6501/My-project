import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="big mb-32">
          <div className="left">
            <p>OVER 1000 USERS</p>
            <h1>Enjoy Foods All Over The World</h1>
            <p className="p2">
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus.
            </p>
            <button className="buttoms">Get Started</button>
          </div>
          <div className="right">
            <img src="./hero2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="text">
            <div className="p1 flex flex-col items-center">
              <h2>10K+</h2>
              <p>Satisfied Costumers All Great Over The World </p>
            </div>
            <div className="p1 flex flex-col items-center">
              <h2>4M</h2>
              <p>Healthy Dishes Sold?Including Milk Shakes Smooth</p>
            </div>
            <div className="p1 flex flex-col items-center">
              <h2>99.99%</h2>
              <p>Reliable Customer Support?We Provide Great Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
