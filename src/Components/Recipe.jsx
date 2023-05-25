import React from "react";

const Recipe = ({ recipe }) => {
  const { _id, recipeName, recipePhoto, recipeInfo, recipePrice } = recipe;
  return (
    <div className="card glass h-full max-w-[350px] mx-auto">
      <figure>
        <img
          src={recipePhoto}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeName}</h2>
        <p>{recipeInfo}</p>
        <h3 className="font-bold text-3xl"><span className="">$</span><span className="text-purple-500">{recipePrice}</span></h3>
      </div>
    </div>
  );
};

export default Recipe;
