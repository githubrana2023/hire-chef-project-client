import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeItem = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    toast.success("Recipe added to favorite");
    setIsFavorite(true);
  };

  const { recipeName, recipePhoto, ingredients, cookingMethod, rating } =
    recipe;
  return (
    <div className="card bg-base-100 shadow-xl mx-auto w-full h-full">
      <figure className="px-10 pt-10">
        <img src={recipePhoto} alt={recipeName} className="rounded-xl" />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title">{recipeName}</h2>
        <div className="w-full">
          <h2 className="font-bold text-lg text-purple-500">
            Recipe Ingredients
          </h2>
          {ingredients.map((ingredient, idx) => (
            <ul className="flex items-center justify-between w-full" key={idx}>
              <li className="flex-1 list-disc	list-inside	text-xs">{ingredient.name}</li>
              <li className="flex-1 list-disc	list-inside	text-xs">
                {ingredient.quantity}
              </li>
            </ul>
          ))}
        </div>
        <div>
          <span className="text-purple-500 font-semibold">
            Cooking Method :
          </span>{" "}
          {cookingMethod.length > 200
            ? cookingMethod.slice(0, 200)
            : cookingMethod}
        </div>
        <div className="card-actions justify-between w-full">
          <span className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </span>
          <button
            className="text-3xl cursor-pointer"
            onClick={handleFavorite}
            disabled={isFavorite}
          >
            {isFavorite ? <FcLikePlaceholder /> : <FcLike />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
