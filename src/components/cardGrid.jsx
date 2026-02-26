"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Card from "../components/Cards/Card";

const CardGrid = () => {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const res = await fetch("https://ghibliapi.vercel.app/films");
                const data = await res.json();
                setMovieData(data);
            }

            catch (error) {
                console.error("Error fetching movies:", error);
            };
        }

        fetchMovies();
    }, []);

    ;
  return (
    
      <>
      <section id="movies" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore the all time populars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movieData.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
      </div>
    </section>
      
      </>
  )
}

export default CardGrid;