import React, { Suspense, lazy, useEffect, useState } from "react";
import HeaderBanner from "./HeaderBanner";
// import Recipe from "../../Components/Recipe";
// import Chefs from "../../Components/Chefs";
import Spinner from "../../Components/Spinner";
import WhyUs from "../../Components/WhyUs";
import TraditionalRecipe from "../../Components/TraditionalRecipe";
import { Swiper, SwiperSlide } from "swiper/react";
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

// Import Swiper styles
import "swiper/css";

const LazyRecipe = lazy(() => import("../../Components/Recipe"));
const LazyChefs = lazy(() => import("../../Components/Chefs"));

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadRecipes = async () => {
      const response = await fetch(
        "https://server-rtrana2023-gmailcom.vercel.app/recipes"
      );
      const responseData = await response.json();
      setRecipes(responseData);
      setIsLoading(false);
    };
    loadRecipes();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="items-center justify-center flex h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <HeaderBanner />

          {/* our recipes are here */}

          <>
            <div className="mt-16 text-center max-w-5xl mx-auto">
              <h1 className="font-bold text-4xl">Our Recipes</h1>
              <p className="mt-3">
                The recipes in the array are a diverse collection of dishes from
                various cuisines. They include dishes that are typically served
                as entrees, such as breaded chicken with tomato sauce and melted
                cheese, stir-fried noodles with shrimp and vegetables, and
                seasoned ground beef served in soft or crispy tortillas with
                toppings such as lettuce, tomato, and cheese. There are also
                lighter options, such as a classic salad made with romaine
                lettuce and Caesar dressing, and a simple sandwich made with
                bread and melted cheese. The recipes range in price from around
                $7 to $16, making them accessible to a range of budgets.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-9 py-8 bg-white shadow-xl px-4 rounded-lg">
              <BsArrowLeft className=" text-red-600 text-8xl font-bold"/>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
              >
                {recipes.map((recipe) => (
                  <SwiperSlide className="h-full " key={recipe._id}>
                    <Suspense fallback={<Spinner />} >
                      <LazyRecipe recipe={recipe} />
                    </Suspense>
                  </SwiperSlide>
                ))}
              </Swiper>
              <BsArrowRight className=" text-red-600 text-8xl font-bold"/>

            </div>

            <TraditionalRecipe />

            <Suspense fallback={<Spinner />}>
              <LazyChefs />
            </Suspense>

            <WhyUs />
          </>
        </>
      )}
    </>
  );
};

export default Home;
