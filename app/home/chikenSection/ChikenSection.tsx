import "./Chiken.scss";

const ChikenSection = () => {
  return (
    <section className="king">
      <div className="container">
        <div className="box">
          <img src="./chiken.png" alt="king" />
          <div className="box-bottom mt-7">
            <h2>The Chicken King</h2>
            <div className="bottom-center">
              <p>24min •</p>
              <img src="./Star.svg" alt="img  " />
              <p>4.8</p>
            </div>
            <img src="./Bookmark.svg" alt="icon" />
          </div>
        </div>
        <div className="liner"></div>
      </div>
    </section>
  );
};

export default ChikenSection;
