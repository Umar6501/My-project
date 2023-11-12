import "./Customer.scss";

const CustomerSection = () => {
  return (
    <section className="customer">
      <div className="container">
        <div className="par">
          <h1>Customer Say</h1>
        </div>
        <div className="comments">
          <div className="comment1">
            <div className="par">
              <img src="./Pic.png" alt="img" />
              <div className="name flex flex-col items-start">
                <h3>Alexander R.</h3>
                <p>01 Year With Us </p>
              </div>
              <img src="./Path.svg" alt="" />
            </div>
            <div className="items">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
            </div>
            <img src="./Stars.svg" alt="stars" className="stars" />
          </div>
          <div className="comment2">
            <div className="card">
              <p>
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
              <img src="./Stars.svg" alt="stars" />
            </div>
            <img className="iimg" src="./line3.png" alt="" />
          </div>
          <div className="comment2 comment3">
            <div className="card">
              <p>
                “ Online invoice payment helps effort. Online invoice payment
                helps companies save time ”
              </p>
              <img src="./Stars.svg" alt="stars" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
