import React from "react";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";
import Aside_part from "../Category/Aside_part";
import Comming_soon from "../Common/Comming_soon/Comming_soon";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Randompostcomponents from "../Common/Postcomponents/Randompost/Randompostcomponents";

const All_blogs = () => {
  const { blogs } = useBlogs();
  const { categories } = useCategories();
  return (
    <>
      <Header />
      {/* <Category_hero /> */}
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              {blogs.slice(0, 3)?.map((item) => {
                return <Randompostcomponents blog={item} />;
              })}
            </div>
            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
      <Footer categories={categories} />
    </>
  );
};

export default All_blogs;
