import React from "react";
import { useNavigate } from "react-router";

import "./About.css"

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <a
        className="back"
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Back
      </a>

      <section>
        <h1 className="title">About</h1>
      </section>
      <section>
        <p className="page">
          A cocktail really is any type of alcoholic mixed drink, and they’re
          most often made of a mix of spirits of any kind, water or fruit juice,
          sugar, and bitters. They’re often served at the beginning of the meal,
          generally with appetizers or a first course. From this word have
          arisen multiple other usages—for example, cocktail attire and cocktail
          dresses are a designed level of formality, while shrimp cocktail is
          served as a first course, often alongside (you guessed it), a cocktail
        </p>
      </section>
    </div>
  );
}
