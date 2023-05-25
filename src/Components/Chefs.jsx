import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const loadChefs = async () => {
      const response = await fetch("https://server-rtrana2023-gmailcom.vercel.app/chefs");
      const responseData = await response.json();
      setChefs(responseData);
    };
    loadChefs();
  }, []);
  return (
    <>
      <div className="mt-16 text-center max-w-5xl mx-auto">
        <h3 className="font-bold text-3xl">Meet Our Chefs</h3>
        <p className="mt-3">
          Our chefs are skilled in a diverse range of cuisines and cooking
          techniques. They are passionate about using high-quality, fresh
          ingredients to create dishes that are both flavorful and visually
          appealing. Each chef brings their own unique culinary perspective to
          their recipes, whether that means using traditional techniques passed
          down through generations, incorporating modern twists on classic
          dishes, or experimenting with new flavor combinations. Their goal is
          to create dishes that satisfy both the palate and the eye, and to
          share their love of food with others.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-y-4">
        {chefs.map((chef) => (
          <Chef key={chef._id} chef={chef} />
        ))}
      </div>
    </>
  );
};

export default Chefs;
