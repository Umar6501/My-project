"use client";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import "./Dishes.scss";
import Load2 from "../components/loader2/Load2";
import axios from "axios";
import Link from "next/link";

const shopPage = (): JSX.Element => {
  // const { loading, error, todos, getTodos } = useStore();

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }

  //   getTodos();
  // }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchSearchPosts();
  };

  const fetchSearchPosts = async () => {
    try {
      let res = await axios.get(
        `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?search=${searchQuery}`
      );
      let data = await res.data;
      setPosts(data);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
  }, []);

  const handleClear = () => {
    setSearchQuery("");
    setPosts([]);
  };
  return (
    <section>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="pt-[100px] fixed top-[-84px] right-[340px] z-[101]"
        >
          <input
            className="w-[400px] p-3 outline-none border-2 rounded-full"
            type="text"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="border-[#6C5FBC] absolute top-[105px] right-[52px] h-[40px] z-[101] w-[40px] flex justify-center items-center bg-[#6C5FBC] text-white rounded-full   hover:text-[#4a4949]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </button>
            <button
              onClick={handleClear}
              className="absolute top-[105px] right-[5px] z-[101] w-[40px] flex justify-center items-center h-[40px] text-800 bg-[#6C5FBC] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="allcards">
          {posts.length > 0 ? (
            posts.map((dishes: any) => (
              <Link href={`/dishes/${dishes.id}`}>
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
              </Link>
            ))
          ) : (
            <Load2 />
          )}
        </div>
      </div>
    </section>
  );
};

export default shopPage;
