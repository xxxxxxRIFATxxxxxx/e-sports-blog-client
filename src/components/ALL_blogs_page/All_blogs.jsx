import React, { useEffect, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";
import Aside_part from "../Category/Aside_part";
import Comming_soon from "../Common/Comming_soon/Comming_soon";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Randompostcomponents from "../Common/Postcomponents/Randompost/Randompostcomponents";
import { useSearchParams } from "react-router-dom";

const All_blogs = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Initial state for blogs
  const [blogs, setBlogs] = useState([]);

  // Get fetch function define
  const { getLimitedBlogs, getBlogsByCategory } = useBlogs();

  // Call fetch function
  useEffect(() => {
    if (category) {
      getBlogsByCategory(category).then((result) => {
        setBlogs(result);
      });
    } else {
      getLimitedBlogs(3).then((result) => {
        setBlogs(result);
      });
    }
  }, []);

  return (
    <>
      <Header />
      {/* <Category_hero /> */}
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              {blogs?.map((item) => {
                return <Randompostcomponents blog={item} />;
              })}
            </div>
            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default All_blogs;
