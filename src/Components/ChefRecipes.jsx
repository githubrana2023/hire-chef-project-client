import React from "react";
import { useLoaderData} from "react-router-dom";
import { FcLike } from "react-icons/fc";
import RecipeItem from "./RecipeItem";

const ChefRecipes = () => {
  const chef = useLoaderData()

  const {
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio,
    recipes,
  } = chef;

  return (
    <div className="card card-side bg-base-100 flex-col shadow-xl p-5">
      <div className="card card-side bg-base-100 flex-col md:flex-row shadow-xl p-5">
        <figure className="md:w-[500px]">
          <img src={chefPicture} alt={chefName} className="rounded-lg w-full" />
        </figure>
        <div>
          <div className="card-body px-0 md:px-8">
            <h2 className="card-title">{chefName}</h2>
            <p>
              <span className="text-purple-500 font-semibold">Bio : </span>
              {chefBio}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
              <span>
                <p>
                  <span>
                    <span className="text-purple-500 font-semibold">
                      Experience :{" "}
                    </span>
                    {yearsOfExperience} Years
                  </span>
                </p>
                <p>
                  <span>
                    <span className="text-purple-500 font-semibold">
                      {chefName}'s Recipes :{" "}
                    </span>
                    {numberOfRecipes}
                  </span>
                </p>
              </span>
              <span className="flex items-center gap-1 ">
                <FcLike className="text-3xl" /> {likes}
              </span>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="mt-10 flex flex-col items-center">
          <h1 className="font-bold text-3xl">{chefName}'s Recipes</h1>
        </div>
        <div className="grid md:grid-cols-2  gap-6 items-center justify-between mt-3">
          {recipes.map((recipe, idx) => (
            <RecipeItem key={idx} recipe={recipe} />
          ))}
        </div>
      </>
    </div>
  );
};

export default ChefRecipes;
