import "./Email.scss";

const EmailSection = () => {
  return (
    <section className="email">
      <div className="container">
        <div className="box">
          <div className="left">
            <h1>GET 50%</h1>
            <form>
              <input
                type="search"
                name="search"
                placeholder=" Enter Your Email Address"
              />
              <button className="buttoms">subscribe</button>
            </form>
          </div>
          <img src="./forDb/1.svg" alt="img " />
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
