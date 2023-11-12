import Link from "next/link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center h-20">
      <div className="container">
        <div className="header-wrap flex items-center gap-20 w-100">
          <div className="logo flex items-center gap-3    ">
            <img src="./logo.svg" alt="" />
            <h1>eatly</h1>
          </div>
          <nav className="flex items-center justify-between w-11/12">
            <div className="nav-links flex items-center gap-12">
              <Link href="/home">
                <p>Home</p>
              </Link>
              <Link href="/dishes">
                <p>Dishes</p>
              </Link>
            </div>
            <div className="actions flex flex-row items-center gap-6">
              <Link href="/cart">
                <button>
                  <img src="./cart.svg" alt="" className="" />
                </button>
              </Link>
              <Link href="/">
                <h1 className="">Login</h1>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
