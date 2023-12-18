import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {backendLink} from "../index"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${backendLink}/api/posts${cat}`
        );
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(`Home.jsx me error hai ${error}`);
        setLoading(false);
      }
    };
    fetchData();
  }, [cat]);
  return <>
    <Navbar />
    {loading ? (<Loader />) : (
      <>
        <div className="home">
          <div className="posts">
            {posts.map((post) => (
              <div className="post" key={post._id}>
                <div className="img">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="content">
                  <Link className="link" to={`/post/${post._id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>{post.descr}</p>
                  <Link className="link" to={`/post/${post._id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
    }
  </>
}
export default Home;
