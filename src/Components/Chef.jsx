import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    _id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = chef;

  return (
    <div className="card bg-base-100 shadow-xl mx-5">
      <figure className="px-5 pt-10">
        <img src={chefPicture} alt="Chef" className="rounded-xl" />
      </figure>
      <div className="card-body items-start px-5">
        <h2 className="card-title text-2xl">{chefName}!</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
          <span>
            <p>
              <span>Experience : {yearsOfExperience} Years</span>
            </p>
            <p>
              <span>
                {chefName}'s Recipes : {numberOfRecipes}
              </span>
            </p>
          </span>
          <span className="flex items-center gap-1">
            <FcLike className="text-2xl"/> {likes}
          </span>
        </div>
        <div className="card-actions">
          <Link to={`/chef/${_id}`}>
            <button className="btn btn- bg-purple-500 border-0">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
