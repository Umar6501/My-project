import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="h-44 bg-[#eaeaea] flex flex-col items-center justify-center z-40">
      <div className="container">
        <div className="footer-content flex flex-col items-start">
          <div className="logo flex items-center gap-3 px-4">
            <img src="../logo.svg" alt="intgs" />
            <p>eatly</p>
          </div>
          <div className="liner"></div>
          <div className="flex justify-between items-center w-full px-4 mt-6">
            <p className="text-[#999]">© 2023 EATLY All Rights Reserved.</p>
            <img src="./icons1234.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
