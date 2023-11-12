import "./Control.scss";

const ControlSection = () => {
  return (
    <section className="Dashboard">
      <div className="container">
        <div className="big">
          <div className="left">
            <h1>Control Purchases?Via Dashboard</h1>
            <div className="products">
              <div className="product">
                <img src="./forDb/1.svg" alt="img" />
                <div className="right">
                  <h4>Chicken Hell</h4>
                  <p>On The Way</p>
                </div>
              </div>
              <div className="product">
                <img src="./forDb/2.svg" alt="img" />
                <div className="right">
                  <h4>Chicken Hell</h4>
                  <p>On The Way</p>
                </div>
              </div>
              <div className="product">
                <img src="./forDb/3.svg" alt="img" />
                <div className="right">
                  <h4>Chicken Hell</h4>
                  <p>On The Way</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="dashboard">
              <div className="par">
                <h2>Purchases</h2>
                <p>This month</p>
              </div>
              <div className="items">
                <div className="items1">
                  <div className="top">
                    <img src="./wallet.png" alt="" />
                    <div className="center">
                      <h3>Expense</h3>
                      <p>Increased By 10%</p>
                    </div>
                    <h5>$409.00</h5>
                  </div>
                  <img src="./line1.png" alt="imgg" />
                </div>
                <div className="items1">
                  <div className="top">
                    <img src="./money.png" alt="" />
                    <div className="center">
                      <h3>Vocher Usage</h3>
                      <p>Vocher Usage</p>
                    </div>
                    <h5>$45.78</h5>
                  </div>
                  <img src="./line2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="liner"></div>
      </div>
    </section>
  );
};

export default ControlSection;
