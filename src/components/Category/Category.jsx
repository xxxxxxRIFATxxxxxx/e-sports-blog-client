import React from "react";
import useCategories from "../../hooks/useCategories";
import Category_box from "../Common/Category_box_mid_size/Category_box";
import Comming_soon from "../Common/Comming_soon/Comming_soon";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Aside_part from "./Aside_part";
import "./Category.css";

const Category = () => {
  const { categories } = useCategories();
  console.log(categories);
  return (
    <>
      <Header />
      {/* <Category_hero /> */}
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              {categories?.map((item) => {
                return <Category_box category={item} />;
              })}
            </div>
            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
      <Footer categories={categories} />
      {/* <Comming_soon /> */}
    </>
  );
};

export default Category;
